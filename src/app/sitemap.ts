import type { MetadataRoute } from "next";
import { getSite, getNav } from "@/lib/site";

// Static export requires an explicit dynamic marker for metadata routes.
export const dynamic = "force-static";

/** Static sitemap for all routes. Route list derives from getNav() so a new nav entry is covered automatically. */
export default function sitemap(): MetadataRoute.Sitemap {
  const { url } = getSite();
  const lastModified = new Date();

  return getNav().map((item) => ({
    url: item.href === "/" ? url : `${url}${item.href}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: item.href === "/" ? 1 : 0.8,
  }));
}
