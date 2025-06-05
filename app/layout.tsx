import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./utilities.css";
import siteConfig from "@/lib/siteConfig";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.creator }],
  creator: siteConfig.creator,
  metadataBase: new URL(siteConfig.url),

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
        type: "image/png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        alt: siteConfig.name,
        width: 1200,
        height: 630,
        type: "image/png",
      },
    ],
  },

  icons: {
    icon: siteConfig.favicon,
    shortcut: siteConfig.favicon,
    apple: siteConfig.favicon,
  },

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: siteConfig.url,
  },

  other: {
    "application-name": siteConfig.name,
    "theme-color": "#8b5cf6",
    manifest: "/manifest.json",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* SEO: Canonical and manifest for PWA */}
        <link rel="manifest" href="/manifest.json" />
        <link rel="canonical" href={siteConfig.url} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/profile.svg" />
        <meta name="theme-color" content="#8b5cf6" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        
        {children}
      </body>
    </html>
  );
}