import type { MetadataRoute } from "next";
import { manifestData, images } from "@/data";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: manifestData.name,
    short_name: manifestData.shortName,
    description: manifestData.description,
    start_url: "/",
    display: "standalone",
    background_color: manifestData.backgroundColor,
    theme_color: manifestData.themeColor,
    icons: [
      {
        src: images.profile,
        sizes: "192x192",
        type: "image/svg+xml",
      },
      {
        src: images.profile,
        sizes: "512x512",
        type: "image/svg+xml",
      },
    ],
  };
}
