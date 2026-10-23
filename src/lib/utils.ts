// ✏️ Helper path aset agar aman dipakai dengan basePath GitHub Pages.
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export function asset(path: string): string {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('mailto:')) {
    return path;
  }
  const p = path.startsWith('/') ? path : `/${path}`;
  return `${basePath}${p}`;
}
