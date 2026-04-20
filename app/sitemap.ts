import type { MetadataRoute } from "next";

const base = "https://estelooma.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/procedures`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/procedures/rhinoplasty`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/get-a-quote`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.5 },
    { url: `${base}/privacy-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];

  return staticRoutes;
}
