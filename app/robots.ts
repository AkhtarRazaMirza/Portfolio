import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const rawUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  const siteUrl = rawUrl && rawUrl.length > 0 ? rawUrl.replace(/\/+$/, "") : "https://www.akhtarraza.in";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
