import type { MetadataRoute } from "next";
import { SEO_PAGES, SITE_URL } from "@/lib/seo";
// Deliberately omit historical articles/assets pending removal-list reconciliation.
// Do not derive public URLs from data/blogs.json merely because records remain there.
export default function sitemap(): MetadataRoute.Sitemap {
  return Object.keys(SEO_PAGES).map(path => ({ url: `${SITE_URL}${path}` }));
}
