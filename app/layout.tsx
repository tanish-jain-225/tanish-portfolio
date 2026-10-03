import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./utilities.css";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { siteConfig, socialMedia, techStack, uiText, personalInfo } from "@/data";

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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" style={{ colorScheme: "dark" }} suppressHydrationWarning>
      <head>
        <meta name="color-scheme" content="dark" />
        <meta name="theme-color" content="#000319" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: siteConfig.creator,
              url: siteConfig.url,
              jobTitle: siteConfig.jobTitle,
              alumniOf: {
                "@type": "EducationalOrganization",
                name: personalInfo.university,
              },
              knowsAbout: techStack.slice(0, 10),
              sameAs: socialMedia.map((s) => s.url),
            }),
          }}
        />
      </head>
      <body className={`${inter.className} bg-[#000319] text-white antialiased`}>
        <a href="#main-content" className="skip-to-content">
          {uiText.accessibility.skipToContent}
        </a>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}