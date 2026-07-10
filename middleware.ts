import { NextRequest, NextResponse } from "next/server";
import { locales, defaultLocale } from "@/lib/i18n/config";

function getLocaleFromPath(pathname: string) {
  return locales.find(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip API routes, static files, and Next internals
  if (
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next") ||
    pathname.includes(".") // files like icon.svg, sitemap.xml, robots.txt
  ) {
    return NextResponse.next();
  }

  const hasLocale = getLocaleFromPath(pathname);
  if (hasLocale) return NextResponse.next();

  // No locale in URL — default to English regardless of browser language,
  // per explicit product decision (English is the primary customer-facing
  // language for this market; PT/ES are supplementary, not auto-detected).
  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
