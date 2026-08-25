import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

// Required for `output: export` — sitemap must be generated at build time.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
