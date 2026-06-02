/** Build-time base path (e.g. "/sidestream" when mounted under a subpath, ""
 *  at root). next/link and next/router prefix this automatically, but plain
 *  <img src> and other raw asset URLs do not — use `asset()` for those. */
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const asset = (path: string): string => `${BASE_PATH}${path}`;
