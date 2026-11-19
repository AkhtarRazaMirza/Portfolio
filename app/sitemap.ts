import type { MetadataRoute } from "next";
import { caseStudies } from "@/lib/case-studies-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const caseStudyEntries: MetadataRoute.Sitemap = Object.keys(caseStudies).map((slug) => ({
    url: `https://www.akhtarraza.in/projects/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    {
      url: "https://www.akhtarraza.in",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    ...caseStudyEntries,
  ];
}
