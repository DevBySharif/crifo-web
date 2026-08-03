import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: "", changeFrequency: "weekly", priority: 1 },
    { path: "about", changeFrequency: "monthly", priority: 0.6 },
    { path: "contact", changeFrequency: "monthly", priority: 0.6 },
    { path: "privacy", changeFrequency: "yearly", priority: 0.3 },
    { path: "terms", changeFrequency: "yearly", priority: 0.3 },
  ] as const;

  return pages.map(({ path, changeFrequency, priority }) => ({
    url: `https://crifo.netlify.app/${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
