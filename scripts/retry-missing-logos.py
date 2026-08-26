#!/usr/bin/env python3
"""Retry missing/wrong logos via curl from confirmed official pages only."""

from __future__ import annotations

import json
import re
import subprocess
import sys
from html import unescape
from io import BytesIO
from pathlib import Path
from urllib.parse import urljoin, urlparse

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
OUT_DIR = ROOT / "public" / "clients"
MANIFEST_PATH = ROOT / "src" / "data" / "client-logo-sources.json"
UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36"
MAX_HEIGHT = 256

# Confirmed official logo URLs discovered on the organisation's own website HTML/media.
DIRECT = [
    {
        "id": "dubbo-golf-club",
        "name": "Dubbo Golf Club",
        "page": "https://www.dubbogolfclub.com.au/cms/",
        "asset": "https://www.dubbogolfclub.com.au/cms/wp-content/themes/contemporary/assets/images/logo.png",
    },
    {
        "id": "coast-golf-club",
        "name": "Coast Golf Club",
        "page": "https://www.coastgolf.com.au/cms/",
        "asset": "https://www.coastgolf.com.au/cms/wp-content/themes/contemporary/assets/images/logo.png",
    },
    {
        "id": "pottsville-sports",
        "name": "Pottsville Sports",
        "page": "https://pottsvillesports.com/",
        "asset": "https://pottsvillesports.com/wp-content/uploads/2022/11/PottsvilleSports_Logo-1030x1027.png",
    },
]

HTML_TARGETS = [
    {
        "id": "lions-afl",
        "name": "The Lions (AFL)",
        "urls": ["https://www.lions.com.au/"],
        "prefer": r"lions.*(logo|badge|club)|club-badge|header-logo|logo-lions",
        "reject": r"afl-logo|google-play|app-store|hyundai|xxxx|sponsor|footer-logo",
    },
    {
        "id": "gosford-rsl",
        "name": "Gosford RSL",
        "urls": ["https://grsl.com.au/", "https://www.grsl.com.au/"],
        "prefer": r"logo",
        "reject": r"gambleaware|instagram|facebook",
    },
    {
        "id": "st-georges-basin-country-club",
        "name": "St Georges Basin Country Club",
        "urls": ["https://thecountryclub.com.au/", "https://basincountryclub.com.au/"],
        "prefer": r"logo",
        "reject": r"facebook|instagram",
    },
    {
        "id": "twin-towns",
        "name": "Twin Towns",
        "urls": ["https://twintowns.com.au/", "https://www.twintowns.com.au/"],
        "prefer": r"logo",
        "reject": r"facebook|instagram|sebel",
    },
    {
        "id": "club-mudgee",
        "name": "Club Mudgee",
        "urls": ["https://clubmudgee.com.au/", "https://www.clubmudgee.com.au/"],
        "prefer": r"logo",
        "reject": r"facebook|instagram",
    },
    {
        "id": "south-tweed-sports",
        "name": "South Tweed Sports",
        "urls": ["https://www.southtweedsports.com.au/", "https://southtweedsports.com.au/"],
        "prefer": r"logo",
        "reject": r"facebook|instagram",
    },
    {
        "id": "ballina-rsl",
        "name": "Ballina RSL",
        "urls": ["https://www.ballinarsl.com.au/", "https://ballinarsl.com.au/"],
        "prefer": r"logo",
        "reject": r"facebook|instagram",
    },
    {
        "id": "west-wyalong-ex-services",
        "name": "West Wyalong Ex-Services",
        "urls": ["https://www.clubwestwyalong.com/"],
        "prefer": r"logo",
        "reject": r"facebook|instagram",
    },
    {
        "id": "clubsnsw",
        "name": "ClubsNSW",
        "urls": ["https://www.clubsnsw.com.au/", "https://clubsnsw.com.au/"],
        "prefer": r"logo",
        "reject": r"facebook|instagram",
    },
    {
        "id": "southern-cross-club-canberra",
        "name": "Southern Cross Club Canberra",
        "urls": ["https://www.cscc.com.au/", "https://cscc.com.au/"],
        "prefer": r"logo|cscc|southern.?cross",
        "reject": r"raffle|meat|facebook|instagram|banner",
    },
    {
        "id": "oaks-taffeys",
        "name": "Taffey's / The Oaks Hotel Neutral Bay",
        "urls": ["https://www.oakshotel.com.au/"],
        "prefer": r"logo|taffey|oaks",
        "reject": r"facebook|instagram|menu",
    },
]


def curl(url: str, binary: bool = False) -> tuple[int, bytes, str]:
    cmd = [
        "curl",
        "-sS",
        "-L",
        "--max-time",
        "25",
        "-A",
        UA,
        "-H",
        "Accept: text/html,application/xhtml+xml,image/avif,image/webp,image/apng,*/*;q=0.8",
        "-w",
        "\n__HTTPSTATUS__:%{http_code}\n__FINALURL__:%{url_effective}",
        url,
    ]
    proc = subprocess.run(cmd, capture_output=True)
    raw = proc.stdout
    err = proc.stderr.decode("utf-8", errors="ignore")
    if proc.returncode != 0 and not raw:
        raise RuntimeError(err or f"curl failed {url}")
    text = raw.decode("utf-8", errors="replace")
    status = 0
    final = url
    m = re.search(r"__HTTPSTATUS__:(\d+)", text)
    if m:
        status = int(m.group(1))
    m = re.search(r"__FINALURL__:(.+)", text)
    if m:
        final = m.group(1).strip()
    body = re.sub(r"\n__HTTPSTATUS__:.*", "", text, flags=re.S)
    # For binary, re-fetch without status trailer using -o
    if binary:
        dest = Path("/tmp/logo-bin")
        proc2 = subprocess.run(
            ["curl", "-sS", "-L", "--max-time", "25", "-A", UA, "-o", str(dest), "-w", "%{http_code} %{content_type}", url],
            capture_output=True,
            text=True,
        )
        meta = proc2.stdout.strip()
        parts = meta.split(" ", 1)
        status = int(parts[0] or 0)
        ctype = parts[1] if len(parts) > 1 else ""
        return status, dest.read_bytes(), ctype
    return status, body.encode("utf-8"), final


def save_image(data: bytes, dest_stem: Path, url: str, ctype: str) -> str:
    path = urlparse(url).path.lower()
    if path.endswith(".svg") or "svg" in (ctype or "") or data[:200].lstrip().startswith(b"<svg") or b"<svg" in data[:500]:
        out = dest_stem.with_suffix(".svg")
        out.write_bytes(data)
        return out.name
    im = Image.open(BytesIO(data))
    im.load()
    if im.mode == "P":
        im = im.convert("RGBA")
    elif im.mode not in {"RGBA", "RGB"}:
        im = im.convert("RGBA")
    w, h = im.size
    if h > MAX_HEIGHT:
        im = im.resize((max(1, int(w * MAX_HEIGHT / h)), MAX_HEIGHT), Image.Resampling.LANCZOS)
    out = dest_stem.with_suffix(".webp")
    im.save(out, "WEBP", quality=82, method=6)
    return out.name


def extract_urls(html: str, page: str) -> list[str]:
    urls = []
    for m in re.finditer(r'(?:src|href|content)=["\']([^"\']+)["\']', html, re.I):
        src = unescape(m.group(1))
        if src.startswith("//"):
            src = "https:" + src
        absu = urljoin(page, src)
        if any(ext in absu.lower() for ext in (".svg", ".png", ".webp", ".jpg", ".jpeg", ".gif")):
            urls.append(absu)
        elif "logo" in absu.lower() and not absu.lower().endswith((".css", ".js")):
            urls.append(absu)
    # srcset
    for m in re.finditer(r'srcset=["\']([^"\']+)["\']', html, re.I):
        for part in m.group(1).split(","):
            token = part.strip().split(" ")[0]
            absu = urljoin(page, unescape(token))
            urls.append(absu)
    seen = []
    for u in urls:
        if u not in seen:
            seen.append(u)
    return seen


def update_manifest(record: dict) -> None:
    payload = json.loads(MANIFEST_PATH.read_text())
    clients = payload["clients"]
    for i, row in enumerate(clients):
        if row["id"] == record["id"]:
            clients[i] = {**row, **record}
            break
    else:
        clients.append(record)
    MANIFEST_PATH.write_text(json.dumps(payload, indent=2) + "\n")


def source_direct(item: dict) -> None:
    status, data, ctype = curl(item["asset"], binary=True)
    if status >= 400 or not data:
        print(f"FAIL direct {item['id']} HTTP {status}")
        return
    filename = save_image(data, OUT_DIR / item["id"], item["asset"], ctype)
    update_manifest(
        {
            "id": item["id"],
            "name": item["name"],
            "status": "sourced",
            "official_site": item["page"],
            "source_page": item["page"],
            "source_asset_url": item["asset"],
            "local_file": f"/clients/{filename}",
            "notes": "Sourced from official website logo asset.",
            "candidates_considered": [{"url": item["asset"], "score": 100, "why": "official-homepage-logo"}],
        }
    )
    print(f"sourced    {item['name']} -> /clients/{filename}")


def source_html(item: dict) -> None:
    html = None
    page = None
    last = None
    for url in item["urls"]:
        try:
            status, body, final = curl(url, binary=False)
            if status and status >= 400:
                last = f"{url} HTTP {status}"
                continue
            html = body.decode("utf-8", errors="ignore")
            page = final
            break
        except Exception as exc:
            last = f"{url}: {exc}"
    if not html:
        print(f"missing    {item['name']} -> {last}")
        update_manifest(
            {
                "id": item["id"],
                "name": item["name"],
                "status": "missing",
                "official_site": None,
                "source_page": None,
                "source_asset_url": None,
                "local_file": None,
                "notes": f"Official site unavailable on retry. {last}",
                "candidates_considered": [],
            }
        )
        return
    prefer = re.compile(item["prefer"], re.I)
    reject = re.compile(item["reject"], re.I)
    urls = extract_urls(html, page)
    ranked = []
    for u in urls:
        if reject.search(u):
            continue
        score = 0
        if prefer.search(u):
            score += 80
        if "logo" in u.lower():
            score += 40
        if u.lower().endswith(".svg"):
            score += 15
        if score:
            ranked.append((score, u))
    ranked.sort(reverse=True)
    for score, asset in ranked[:8]:
        try:
            status, data, ctype = curl(asset, binary=True)
        except Exception:
            continue
        if status >= 400 or not data or len(data) < 200:
            continue
        try:
            filename = save_image(data, OUT_DIR / item["id"], asset, ctype)
        except Exception:
            continue
        update_manifest(
            {
                "id": item["id"],
                "name": item["name"],
                "status": "sourced",
                "official_site": page,
                "source_page": page,
                "source_asset_url": asset,
                "local_file": f"/clients/{filename}",
                "notes": "Sourced on retry from official website.",
                "candidates_considered": [{"url": u, "score": s, "why": "retry"} for s, u in ranked[:8]],
            }
        )
        print(f"sourced    {item['name']} -> /clients/{filename} ({asset})")
        return
    print(f"missing    {item['name']} -> no usable logo on {page}")
    update_manifest(
        {
            "id": item["id"],
            "name": item["name"],
            "status": "missing",
            "official_site": page,
            "source_page": page,
            "source_asset_url": None,
            "local_file": None,
            "notes": "Official site reachable; no usable first-party logo asset accepted on retry.",
            "candidates_considered": [{"url": u, "score": s, "why": "retry"} for s, u in ranked[:8]],
        }
    )


def main() -> int:
    for item in DIRECT:
        try:
            source_direct(item)
        except Exception as exc:
            print(f"FAIL {item['id']}: {exc}")
    for item in HTML_TARGETS:
        try:
            source_html(item)
        except Exception as exc:
            print(f"FAIL {item['id']}: {exc}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
