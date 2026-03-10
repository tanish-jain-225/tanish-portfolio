import type { MetadataRoute } from "next";
import { siteConfig, navItems } from "@/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: siteConfig.url,
      lastModified,
      changeFrequency: "monthly",
      priority: 1.0,
    },
    ...navItems
      .filter((item) => item.link.startsWith("#") && item.link !== "#home")
      .map((item) => ({
        url: `${siteConfig.url}/${item.link}`,
        lastModified,
        changeFrequency: "monthly" as const,
        priority: item.link === "#projects" ? 0.9 : 0.8,
      })),
  ];
}
