import "@/app/globals.css";
import type { Metadata } from "next";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";
import { ReactNode, Suspense } from "react";
import { Providers } from "@/providers/providers";
import { applicationName, appConfig } from "@/app-config";
import PostHogPageView from "@/components/posthog-page-view";
import { I18nProviderClient } from "@/locales/client";
import { Archivo } from "next/font/google";
import { Libre_Franklin } from "next/font/google";
import { BreakpointOverlay } from "@/components/breakpoint-overlay";

const archivo = Archivo({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-archivo",
});
const libre_franklin = Libre_Franklin({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-libre_franklin",
});

const { mode } = appConfig;

export const metadata: Metadata = {
  title: applicationName,
  icons: [
    { rel: "icon", type: "image/png", sizes: "48x48", url: "/favicon.ico" },
  ],
  keywords:
    "group finder, group, community, social, interest group, event, meetup, hobby, join group, manage group, online community, social platform, group management, group search, 社群, 群组, 兴趣小组, 组织, 活动, 结伴, 交友, 社区平台",
  description:
    "Group Finder helps you quickly discover, join, and manage various interest groups and communities. Easily connect with like-minded people, participate in events, and build your own social circles.",
  openGraph:
    mode === "comingSoon"
      ? {
        title: "The Group Finder",
        description:
          "The Group Finder helps you quickly discover, join, and manage various interest groups and communities. Easily connect with like-minded people, participate in events, and build your own social circles.",
        url: "https://thegroupfinder.com",
        siteName: "The Group Finder",
        type: "website",
        images: [
          {
            url: "https://thegroupfinder.com/starterkitcard.png",
            secureUrl: "https://thegroupfinder.com/starterkitcard.png",
            width: 800,
            height: 418,
            alt: "The Group Finder social media card image",
          },
        ],
      }
      : undefined,
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background antialiased",
          archivo.variable + " " + libre_franklin.variable
        )}
      >
        <I18nProviderClient locale={locale}>
          <Providers>
            <Suspense>
              <PostHogPageView />
            </Suspense>
            <NextTopLoader />
            <div>{children}</div>
          </Providers>
          <Toaster />
        </I18nProviderClient>
        <BreakpointOverlay />
      </body>
    </html>
  );
}
