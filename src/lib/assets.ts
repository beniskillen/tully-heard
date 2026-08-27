/** Prefix a `public/` path with Vite's base URL so assets resolve on GitHub Pages. */
export function assetUrl(path: string): string {
  const base = import.meta.env.BASE_URL || '/';
  return `${base}${path.replace(/^\//, '')}`;
}
