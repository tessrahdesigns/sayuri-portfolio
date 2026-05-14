/**
 * Prefix paths to files in `public/` for subdirectory hosting (e.g. GitHub Pages project sites).
 * Leaves http(s) URLs unchanged.
 */
export function publicUrl(path) {
  if (/^https?:\/\//i.test(path)) return path
  const base = import.meta.env.BASE_URL
  const p = path.startsWith('/') ? path.slice(1) : path
  return `${base}${p}`
}
