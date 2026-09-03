import type { MetadataRoute } from "next";
import { getSite } from "@/lib/site";

// Static export requires an explicit dynamic marker for metadata routes.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const site = getSite();

  if (site.isDraft) {
    return {
      rules: { userAgent: "*", disallow: "/" },
    };
  }

  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${site.url}/sitemap.xml`,
  };
}
