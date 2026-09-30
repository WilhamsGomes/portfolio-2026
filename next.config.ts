import type { NextConfig } from "next";

import { isIndexable } from "./src/lib/env";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    // Em previews, reforça o bloqueio de indexação além do robots.txt e da meta tag.
    if (isIndexable()) return [];

    return [
      {
        source: "/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },
};

export default nextConfig;
