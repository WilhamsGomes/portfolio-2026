import type { MetadataRoute } from "next";

import { siteConfig } from "@/content/site";
import { isIndexable } from "@/lib/env";

export default function robots(): MetadataRoute.Robots {
  // Ambientes de preview não devem ser indexados. Veja o README.
  if (!isIndexable()) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }

  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}
