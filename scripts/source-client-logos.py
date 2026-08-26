#!/usr/bin/env python3
"""Download first-party brand logos from official organisation websites only.

Does not query Google Images, social CDNs, Wikipedia, or logo directories.
"""

from __future__ import annotations

import json
import re
import ssl
import sys
import time
from concurrent.futures import ThreadPoolExecutor, as_completed
from html import unescape
from io import BytesIO
from pathlib import Path
from typing import Any
from urllib.error import HTTPError, URLError
from urllib.parse import urljoin, urlparse
from urllib.request import Request, urlopen

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
OUT_DIR = ROOT / "public" / "clients"
MANIFEST_PATH = ROOT / "src" / "data" / "client-logo-sources.json"
USER_AGENT = (
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
    "AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36"
)
TIMEOUT = 22
MAX_HEIGHT = 256

BLOCKED_HOST_FRAGMENTS = (
    "google.",
    "gstatic.",
    "googleusercontent.",
    "ggpht.",
    "wikipedia.",
    "wikimedia.",
    "wikidata.",
    "facebook.",
    "fbcdn.",
    "instagram.",
    "cdninstagram.",
    "twitter.",
    "twimg.",
    "linkedin.",
    "licdn.",
    "pinterest.",
    "pinimg.",
    "yelp.",
    "tripadvisor.",
    "logo.dev",
    "brandfetch.",
    "clearbit.",
    "logo.clearbit",
    "bing.",
    "yahoo.",
    "duckduckgo.",
    "clubsandpubsnearme.",
    "yellowpages.",
    "truelocal.",
    "hotels.com",
    "booking.com",
    "youtube.",
    "ytimg.",
    "tiktok.",
    "snapchat.",
)

CLIENTS: list[dict[str, Any]] = [
    {
        "id": "lions-afl",
        "name": "The Lions (AFL)",
        "urls": ["https://www.lions.com.au/"],
    },
    {
        "id": "cabra-club-resort",
        "name": "Cabra Club Resort",
        "urls": ["https://cabravale.com.au/", "https://www.cabravale.com.au/"],
        "notes_seed": "Official trading name is Cabravale Club Resort.",
    },
    {
        "id": "bankstown-sports",
        "name": "Bankstown Sports",
        "urls": ["https://www.bankstownsports.com/"],
    },
    {
        "id": "gosford-rsl",
        "name": "Gosford RSL",
        "urls": ["https://www.gosfordrsl.com.au/"],
    },
    {
        "id": "chatswood-rsl",
        "name": "Chatswood RSL",
        "urls": ["https://www.chatswoodrsl.com.au/"],
    },
    {
        "id": "oaks-taffeys",
        "name": "Taffey's / The Oaks Hotel Neutral Bay",
        "urls": ["https://www.oakshotel.com.au/", "https://oakshotel.com.au/"],
        "notes_seed": "Taffey's is a venue inside The Oaks Hotel; prefer a Taffey's mark if the official site publishes one.",
    },
    {
        "id": "mulwala-water-ski-club",
        "name": "Mulwala Water Ski Club",
        "urls": ["https://mulwalawaterski.com.au/", "https://www.mulwalawaterski.com.au/"],
    },
    {
        "id": "dubbo-golf-club",
        "name": "Dubbo Golf Club",
        "urls": ["https://www.dubbogolfclub.com.au/", "https://dubbogolfclub.com.au/"],
    },
    {
        "id": "corrimal-rsl",
        "name": "Corrimal RSL",
        "urls": ["https://www.corrimalrsl.com.au/", "https://corrimalrsl.com.au/"],
    },
    {
        "id": "ettalong-diggers",
        "name": "Ettalong Diggers",
        "urls": ["https://www.ettalongdiggers.com/", "https://ettalongdiggers.com/"],
    },
    {
        "id": "doylo-lifestyle-group",
        "name": "Doylo Lifestyle Group",
        "urls": ["https://doylo.com.au/", "https://www.doylo.com.au/"],
    },
    {
        "id": "coast-golf-club",
        "name": "Coast Golf Club",
        "urls": [
            "https://www.coastgolf.com.au/",
            "https://coastgolf.com.au/",
            "https://www.thecoastgolfclub.com.au/",
        ],
    },
    {
        "id": "ballina-rsl",
        "name": "Ballina RSL",
        "urls": ["https://www.ballinarsl.com.au/", "https://ballinarsl.com.au/"],
    },
    {
        "id": "broken-hill-musicians-club",
        "name": "Broken Hill Musicians Club",
        "urls": ["https://www.musiciansclub.com.au/", "https://musiciansclub.com.au/"],
    },
    {
        "id": "south-tweed-sports",
        "name": "South Tweed Sports",
        "urls": ["https://www.southtweedsports.com.au/", "https://southtweedsports.com.au/"],
    },
    {
        "id": "toukley-rsl",
        "name": "Toukley RSL",
        "urls": [
            "https://www.toukleyrsl.com.au/",
            "https://toukleyrsl.com.au/",
            "https://thearytoukley.com.au/",
            "https://www.thearytoukley.com.au/",
        ],
        "notes_seed": "Venue may trade as The ARY Toukley.",
    },
    {
        "id": "club-sapphire",
        "name": "Club Sapphire",
        "urls": ["https://www.clubsapphire.com.au/", "https://clubsapphire.com.au/"],
    },
    {
        "id": "east-maitland-bowling-club",
        "name": "East Maitland Bowling Club",
        "urls": [
            "https://www.embc.com.au/",
            "https://embc.com.au/",
            "https://www.eastmaitlandbowlingclub.com.au/",
        ],
    },
    {
        "id": "st-georges-basin-country-club",
        "name": "St Georges Basin Country Club",
        "urls": ["https://www.sgbcc.com.au/", "https://sgbcc.com.au/"],
    },
    {
        "id": "corowa-rsl",
        "name": "Corowa RSL",
        "urls": ["https://www.corowarsl.com.au/", "https://corowarsl.com.au/"],
    },
    {
        "id": "kiama-golf-club",
        "name": "Kiama Golf Club",
        "urls": ["https://www.kiamagolfclub.com.au/", "https://kiamagolfclub.com.au/"],
    },
    {
        "id": "twin-towns",
        "name": "Twin Towns",
        "urls": ["https://www.twintowns.com.au/", "https://twintowns.com.au/"],
    },
    {
        "id": "wests-ashfield",
        "name": "Wests Ashfield",
        "urls": ["https://www.westsashfield.com.au/", "https://westsashfield.com.au/"],
    },
    {
        "id": "long-reef-golf-club",
        "name": "Long Reef Golf Club",
        "urls": ["https://www.longreefgolfclub.com.au/", "https://longreefgolfclub.com.au/"],
    },
    {
        "id": "narromine-usmc",
        "name": "Narromine USMC",
        "urls": ["https://www.narromineusmc.com.au/", "https://narromineusmc.com.au/"],
    },
    {
        "id": "souths-juniors",
        "name": "Souths Juniors",
        "urls": ["https://www.southsjuniors.com.au/", "https://southsjuniors.com.au/"],
    },
    {
        "id": "strathfield-sports",
        "name": "Strathfield Sports",
        "urls": [
            "https://www.strathfieldsportsclub.com.au/",
            "https://strathfieldsportsclub.com.au/",
            "https://www.strathfieldsports.com.au/",
        ],
    },
    {
        "id": "karuah-ex-services",
        "name": "Karuah Ex-Services",
        "urls": ["https://karuahrsl.com.au/", "https://www.karuahrsl.com.au/"],
        "notes_seed": "Official site brands as Karuah RSL / Karuah & District RSL Club.",
    },
    {
        "id": "club-mosman",
        "name": "Club Mosman",
        "urls": [
            "https://www.clubmosman.com.au/",
            "https://clubmosman.com.au/",
            "https://www.mosmanclub.com.au/",
        ],
    },
    {
        "id": "pottsville-sports",
        "name": "Pottsville Sports",
        "urls": ["https://www.pottsvillesports.com.au/", "https://pottsvillesports.com.au/"],
    },
    {
        "id": "pittwater-rsl",
        "name": "Pittwater RSL",
        "urls": ["https://www.pittwaterrsl.com.au/", "https://pittwaterrsl.com.au/"],
    },
    {
        "id": "manly-leagues-club",
        "name": "Manly Leagues Club",
        "urls": ["https://www.manlyleagues.com.au/", "https://manlyleagues.com.au/"],
    },
    {
        "id": "greta-workers",
        "name": "Greta Workers",
        "urls": ["https://gretaworkers.com/", "https://www.gretaworkers.com/"],
    },
    {
        "id": "west-wyalong-ex-services",
        "name": "West Wyalong Ex-Services",
        "urls": [
            "https://www.westwyalongexservices.com.au/",
            "https://westwyalongexservices.com.au/",
            "https://www.wwesc.com.au/",
        ],
    },
    {
        "id": "easts-leagues",
        "name": "Easts Leagues",
        "urls": ["https://eastsbondijunction.com.au/", "https://www.eastsbondijunction.com.au/"],
        "notes_seed": "NSW Eastern Suburbs Leagues Club (Bondi Junction), not the Queensland Easts Leagues Club.",
    },
    {
        "id": "mollymook-golf-club",
        "name": "Mollymook Golf Club",
        "urls": ["https://www.mollymookgolf.com.au/", "https://mollymookgolf.com.au/"],
    },
    {
        "id": "briars-sports",
        "name": "Briars Sports",
        "urls": ["https://www.briars.com.au/", "https://briars.com.au/"],
    },
    {
        "id": "milton-ulladulla-ex-servos",
        "name": "Milton Ulladulla Ex Servos",
        "urls": ["https://www.ulladullaexservos.com.au/", "https://ulladullaexservos.com.au/"],
    },
    {
        "id": "lightning-ridge-bowling-club",
        "name": "Lightning Ridge Bowling Club",
        "urls": [
            "https://www.lrbc.com.au/",
            "https://lrbc.com.au/",
            "https://www.lightningridgebowlingclub.com.au/",
            "https://lightningridgebowlingclub.com.au/",
        ],
    },
    {
        "id": "norths-leagues",
        "name": "Norths Leagues",
        "urls": [
            "https://www.norths.com.au/",
            "https://norths.com.au/",
            "https://www.northsydneyleagues.com.au/",
        ],
    },
    {
        "id": "bondi-icebergs-club",
        "name": "Bondi Icebergs Club",
        "urls": ["https://icebergs.com.au/", "https://www.icebergs.com.au/"],
    },
    {
        "id": "southern-cross-club-canberra",
        "name": "Southern Cross Club Canberra",
        "urls": ["https://www.cscc.com.au/", "https://cscc.com.au/"],
    },
    {
        "id": "fraternity-club",
        "name": "Fraternity Club",
        "urls": [
            "https://www.fraternityclub.com.au/",
            "https://fraternityclub.com.au/",
            "https://www.frat.com.au/",
        ],
    },
    {
        "id": "vikings-group-canberra",
        "name": "Vikings Group Canberra",
        "urls": [
            "https://www.vikings.com.au/",
            "https://vikings.com.au/",
            "https://www.canberravikings.com.au/",
        ],
    },
    {
        "id": "moorebank-sports",
        "name": "Moorebank Sports",
        "urls": [
            "https://www.moorebanksports.com.au/",
            "https://moorebanksports.com.au/",
            "https://www.sportiesgroup.com.au/",
        ],
    },
    {
        "id": "belmont-16s",
        "name": "Belmont 16s",
        "urls": ["https://www.16s.com.au/", "https://16s.com.au/"],
    },
    {
        "id": "parramatta-leagues-club",
        "name": "Parramatta Leagues Club",
        "urls": ["https://www.parraleagues.com.au/", "https://parraleagues.com.au/"],
    },
    {
        "id": "burwood-rsl",
        "name": "Burwood RSL",
        "urls": ["https://www.burwoodrsl.com.au/", "https://burwoodrsl.com.au/"],
    },
    {
        "id": "club-mudgee",
        "name": "Club Mudgee",
        "urls": ["https://www.clubmudgee.com.au/", "https://clubmudgee.com.au/"],
    },
    {
        "id": "brothers-cairns",
        "name": "Brothers Cairns",
        "urls": [
            "https://www.brothersleagues.com.au/",
            "https://brothersleagues.com.au/",
            "https://www.brotherscairns.com.au/",
        ],
    },
    {
        "id": "clubsnsw",
        "name": "ClubsNSW",
        "urls": ["https://www.clubsnsw.com.au/", "https://clubsnsw.com.au/"],
    },
    {
        "id": "cmaa",
        "name": "CMAA",
        "urls": ["https://www.cmaa.asn.au/", "https://cmaa.asn.au/"],
    },
]


def blocked_host(url: str) -> bool:
    host = urlparse(url).hostname or ""
    host = host.lower()
    return any(frag in host for frag in BLOCKED_HOST_FRAGMENTS)


def fetch(url: str, *, binary: bool = False, verify: bool = True) -> tuple[bytes, str, str]:
    ctx = ssl.create_default_context() if verify else ssl._create_unverified_context()
    req = Request(
        url,
        headers={
            "User-Agent": USER_AGENT,
            "Accept": "text/html,application/xhtml+xml,image/avif,image/webp,image/apng,image/*,*/*;q=0.8",
            "Accept-Language": "en-AU,en;q=0.9",
        },
    )
    with urlopen(req, timeout=TIMEOUT, context=ctx) as resp:
        data = resp.read()
        final = resp.geturl()
        ctype = resp.headers.get("Content-Type", "")
        return data, final, ctype


def fetch_resilient(url: str, *, binary: bool = False) -> tuple[bytes, str, str]:
    try:
        return fetch(url, binary=binary, verify=True)
    except Exception as first:
        if "CERTIFICATE" in str(first).upper() or "SSL" in str(first).upper():
            return fetch(url, binary=binary, verify=False)
        raise


ATTR_RE = re.compile(r'([^\s=]+)(?:\s*=\s*(?:"([^"]*)"|\'([^\']*)\'|([^\s>]+)))?', re.I)


def parse_attrs(tag: str) -> dict[str, str]:
    attrs: dict[str, str] = {}
    for match in ATTR_RE.finditer(tag):
        key = match.group(1).lower()
        val = match.group(2) or match.group(3) or match.group(4) or ""
        attrs[key] = unescape(val)
    return attrs


def abs_url(src: str, base: str) -> str | None:
    src = unescape(src.strip())
    if not src or src.startswith("data:") or src.startswith("javascript:"):
        return None
    if src.startswith("//"):
        src = "https:" + src
    return urljoin(base, src)


def split_srcset(srcset: str, base: str) -> list[str]:
    urls: list[str] = []
    for part in srcset.split(","):
        token = part.strip().split(" ")[0].strip()
        resolved = abs_url(token, base)
        if resolved:
            urls.append(resolved)
    return urls


def json_urls(obj: Any) -> list[str]:
    found: list[str] = []
    if isinstance(obj, str) and obj.startswith("http"):
        found.append(obj)
    elif isinstance(obj, dict):
        for key, val in obj.items():
            if str(key).lower() in {"logo", "image", "url", "contenturl", "thumbnailurl"}:
                found.extend(json_urls(val))
            else:
                found.extend(json_urls(val))
    elif isinstance(obj, list):
        for item in obj:
            found.extend(json_urls(item))
    return found


def extract_candidates(html: str, page_url: str) -> list[dict[str, Any]]:
    candidates: list[dict[str, Any]] = []
    lower = html.lower()
    header_end = lower.find("</header>")
    if header_end < 0:
        header_end = min(len(html), 40000)
    header_html = html[: header_end + 10]

    def add(url: str | None, score: int, why: str) -> None:
        if not url or blocked_host(url):
            return
        path = urlparse(url).path.lower()
        if any(ext in path for ext in (".woff", ".ttf", ".eot", ".mp4", ".webm", ".pdf")):
            return
        candidates.append({"url": url.split("#")[0], "score": score, "why": why})

    for script in re.finditer(
        r'<script[^>]*type=["\']application/ld\+json["\'][^>]*>(.*?)</script>',
        html,
        re.I | re.S,
    ):
        raw = script.group(1).strip()
        try:
            data = json.loads(raw)
        except json.JSONDecodeError:
            continue
        for url in json_urls(data):
            blob = url.lower()
            score = 40
            if "logo" in blob:
                score = 90
            add(url, score, "json-ld")

    for tag in re.finditer(r"<img\b[^>]*>", html, re.I):
        attrs = parse_attrs(tag.group(0))
        in_header = tag.start() < header_end
        urls = []
        for key in ("src", "data-src", "data-lazy-src", "data-original"):
            if attrs.get(key):
                resolved = abs_url(attrs[key], page_url)
                if resolved:
                    urls.append(resolved)
        if attrs.get("srcset"):
            urls.extend(split_srcset(attrs["srcset"], page_url))
        blob = " ".join(
            [
                attrs.get("class", ""),
                attrs.get("id", ""),
                attrs.get("alt", ""),
                attrs.get("src", ""),
                attrs.get("data-src", ""),
            ]
        ).lower()
        for url in urls:
            score = 8
            path = url.lower()
            if "logo" in blob or "logo" in path or "brand" in blob:
                score += 70
            if in_header:
                score += 35
            if "custom-logo" in blob or "site-logo" in blob or "navbar-brand" in blob:
                score += 25
            if any(x in blob for x in ("icon", "sprite", "placeholder", "spinner")):
                score -= 20
            if any(x in path for x in ("hero", "banner", "slider", "gallery", "team", "bg-")):
                score -= 25
            if path.endswith(".svg"):
                score += 15
            add(url, score, "img" + ("-header" if in_header else ""))

    for tag in re.finditer(r"<link\b[^>]*>", html, re.I):
        attrs = parse_attrs(tag.group(0))
        rel = attrs.get("rel", "").lower()
        href = abs_url(attrs.get("href", ""), page_url)
        if not href:
            continue
        if "icon" in rel or "apple-touch" in rel:
            score = 12
            if href.lower().endswith(".svg") or "svg" in attrs.get("type", ""):
                score = 45
            if "logo" in href.lower():
                score += 20
            add(href, score, f"link:{rel}")

    for match in re.finditer(
        r"""(?:--|:)logo[^;{}]*url\(\s*['"]?([^'")\s]+)""",
        html,
        re.I,
    ):
        add(abs_url(match.group(1), page_url), 55, "css-logo")

    # Deduplicate, keep highest score
    best: dict[str, dict[str, Any]] = {}
    for cand in candidates:
        key = cand["url"]
        if key not in best or cand["score"] > best[key]["score"]:
            best[key] = cand
    return sorted(best.values(), key=lambda c: c["score"], reverse=True)


def looks_like_logo_bytes(data: bytes, ctype: str, url: str) -> tuple[bool, str]:
    path = urlparse(url).path.lower()
    if path.endswith(".svg") or "svg" in ctype:
        text = data.decode("utf-8", errors="ignore").lower()
        if "<svg" not in text:
            return False, "not-svg"
        if len(data) > 400_000:
            return False, "svg-too-large"
        return True, "svg"
    try:
        im = Image.open(BytesIO(data))
        im.load()
    except Exception:
        return False, "unreadable-image"
    w, h = im.size
    if w < 40 or h < 40:
        return False, f"too-small-{w}x{h}"
    if w * h > 12_000_000:
        return False, "too-large"
    # Photos tend to be wide landscape JPEGs without transparency
    if im.mode in {"RGB", "L"} and w > 900 and h > 500 and w / max(h, 1) > 1.6 and "logo" not in path:
        return False, "likely-photo"
    return True, f"{im.format}:{w}x{h}"


def optimize_and_save(data: bytes, dest_stem: Path, ctype: str, url: str) -> str:
    path = urlparse(url).path.lower()
    if path.endswith(".svg") or "svg" in ctype:
        out = dest_stem.with_suffix(".svg")
        out.write_bytes(data)
        return out.name
    im = Image.open(BytesIO(data))
    im.load()
    if im.mode not in {"RGBA", "RGB"}:
        im = im.convert("RGBA" if "A" in im.getbands() else "RGB")
    elif im.mode == "P":
        im = im.convert("RGBA")
    w, h = im.size
    if h > MAX_HEIGHT:
        ratio = MAX_HEIGHT / h
        im = im.resize((max(1, int(w * ratio)), MAX_HEIGHT), Image.Resampling.LANCZOS)
    out = dest_stem.with_suffix(".webp")
    im.save(out, "WEBP", quality=82, method=6)
    return out.name


def source_client(client: dict[str, Any]) -> dict[str, Any]:
    record: dict[str, Any] = {
        "id": client["id"],
        "name": client["name"],
        "status": "missing",
        "official_site": None,
        "source_page": None,
        "source_asset_url": None,
        "local_file": None,
        "notes": client.get("notes_seed", ""),
        "candidates_considered": [],
    }
    page_html = None
    page_url = None
    last_error = None
    for url in client["urls"]:
        try:
            data, final, ctype = fetch_resilient(url)
            if "text/html" not in ctype.lower() and not data[:200].lower().lstrip().startswith(b"<!doctype"):
                last_error = f"non-html from {url} ({ctype})"
                continue
            page_html = data.decode("utf-8", errors="ignore")
            page_url = final
            record["official_site"] = final
            record["source_page"] = final
            break
        except Exception as exc:
            last_error = f"{url}: {exc}"
            continue
    if not page_html or not page_url:
        record["notes"] = (record["notes"] + " " if record["notes"] else "") + f"Official site unavailable. {last_error}"
        return record

    candidates = extract_candidates(page_html, page_url)[:12]
    record["candidates_considered"] = [
        {"url": c["url"], "score": c["score"], "why": c["why"]} for c in candidates
    ]
    if not candidates:
        record["status"] = "missing"
        record["notes"] = (record["notes"] + " " if record["notes"] else "") + "No first-party logo candidate on homepage."
        return record

    dest_stem = OUT_DIR / client["id"]
    for cand in candidates:
        try:
            data, final, ctype = fetch_resilient(cand["url"], binary=True)
        except Exception:
            continue
        ok, reason = looks_like_logo_bytes(data, ctype, final)
        if not ok:
            cand["reject"] = reason
            continue
        if cand["score"] < 30 and reason.startswith("likely"):
            continue
        try:
            filename = optimize_and_save(data, dest_stem, ctype, final)
        except Exception as exc:
            cand["reject"] = f"optimize-failed:{exc}"
            continue
        record["source_asset_url"] = final
        record["local_file"] = f"/clients/{filename}"
        if cand["score"] >= 45 or "logo" in final.lower() or reason == "svg":
            record["status"] = "sourced"
        else:
            record["status"] = "ambiguous"
            extra = "Best first-party asset was low-confidence (icon/unlabelled image), pending visual confirmation."
            record["notes"] = (record["notes"] + " " if record["notes"] else "") + extra
        if reason.startswith("svg") is False and cand["score"] < 45:
            record["status"] = "ambiguous"
        return record

    record["status"] = "missing"
    record["notes"] = (record["notes"] + " " if record["notes"] else "") + (
        "Homepage reachable, but no usable first-party logo asset was accepted."
    )
    return record


def main() -> int:
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    MANIFEST_PATH.parent.mkdir(parents=True, exist_ok=True)
    results: list[dict[str, Any]] = []
    with ThreadPoolExecutor(max_workers=6) as pool:
        futures = {pool.submit(source_client, client): client for client in CLIENTS}
        for fut in as_completed(futures):
            result = fut.result()
            results.append(result)
            print(f"{result['status']:10} {result['name']} -> {result.get('local_file') or result.get('notes')}")
    results.sort(key=lambda r: [c["id"] for c in CLIENTS].index(r["id"]))
    payload = {
        "generated_at": time.strftime("%Y-%m-%dT%H:%M:%SZ", time.gmtime()),
        "policy": "Official organisation websites and media kits only. No Google Images, social media, or third-party logo directories.",
        "clients": results,
    }
    MANIFEST_PATH.write_text(json.dumps(payload, indent=2) + "\n")
    counts = {k: 0 for k in ("sourced", "ambiguous", "missing")}
    for row in results:
        counts[row["status"]] = counts.get(row["status"], 0) + 1
    print("\nSummary:", counts)
    print("Manifest:", MANIFEST_PATH)
    return 0


if __name__ == "__main__":
    sys.exit(main())
