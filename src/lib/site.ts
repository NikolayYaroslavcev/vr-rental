export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://vrental.example.com";

export function withBase(path: string): string {
  return `${BASE_PATH}${path}`;
}

export function isHomePath(pathname: string): boolean {
  const path = pathname.slice(BASE_PATH.length) || "/";
  return path === "/";
}
