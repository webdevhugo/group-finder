import { NextRequest, NextResponse } from "next/server";
import { createI18nMiddleware } from 'next-international/middleware'

const I18nMiddleware = createI18nMiddleware({
  locales: ['en', 'zh'],
  defaultLocale: 'en',
  urlMappingStrategy: 'rewrite'
})

export const config = { matcher: ["/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)"] };

export async function middleware(request: NextRequest) {

  return I18nMiddleware(request)
}
