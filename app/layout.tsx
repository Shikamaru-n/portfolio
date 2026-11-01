import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ThemeProvider } from "@/components/theme-provider";
import { profile } from "@/content/profile";
import { seo, siteUrl, ui } from "@/content/site";
import { socialMetadata } from "@/lib/metadata";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Site-wide defaults. Inner pages override title, description and canonical URL
// (see lib/metadata.ts). The preview image comes from app/og-image.png/route.tsx.
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: seo.title,
    template: `%s | ${profile.name}`,
  },
  description: seo.description,
  applicationName: profile.name,
  authors: [{ name: profile.name, url: siteUrl }],
  creator: profile.name,
  ...socialMetadata({ title: seo.title, description: seo.description, path: "/" }),
};

// Browser UI colour (mobile address bar), matched to each theme's background
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fbfcfd" },
    { media: "(prefers-color-scheme: dark)", color: "#141a23" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      // next-themes sets the theme class before React loads, so this stops a false warning
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <a
            href="#main-content"
            className="sr-only z-50 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:outline-none focus:ring-3 focus:ring-ring/50"
          >
            {ui.skipLink}
          </a>
          <SiteHeader />
          <main id="main-content" tabIndex={-1} className="flex-1 outline-none">
            {children}
          </main>
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
