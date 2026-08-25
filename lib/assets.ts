/**
 * Asset path helper. The GitHub Pages build of the /embermoose/ path
 * needs the base prepended (next/image skips it for unoptimized images);
 * root deployments (bogdanjanjic04.github.io, embermoose.github.io) use "".
 */
export const ASSET_BASE = process.env.PAGES_BUILD === "1" ? "/embermoose" : "";

export function asset(path: string): string {
  return `${ASSET_BASE}${path}`;
}
