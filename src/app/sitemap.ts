import type { MetadataRoute } from "next";
import { allLeagues, allPosts, allCategories, allTags } from "@/lib/content/registry";

export const dynamic = "force-static";

const BASE = "https://crifo.netlify.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: { path: string; priority: number; frequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "", priority: 1, frequency: "weekly" },
    { path: "leagues", priority: 0.8, frequency: "weekly" },
    { path: "blog", priority: 0.8, frequency: "weekly" },
    { path: "about", priority: 0.6, frequency: "monthly" },
    { path: "contact", priority: 0.6, frequency: "monthly" },
    { path: "privacy", priority: 0.3, frequency: "yearly" },
    { path: "terms", priority: 0.3, frequency: "yearly" },
  ];

  const leaguePages = allLeagues().map((l) => ({
    url: `${BASE}/leagues/${l.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const blogPages = allPosts().map((p) => ({
    url: `${BASE}/blog/${p.slug}`,
    lastModified: new Date(p.updated),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const tagPages = allTags().map((t) => ({
    url: `${BASE}/blog/tag/${t.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  const categoryPages = allCategories().map((c) => ({
    url: `${BASE}/blog/category/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [
    ...staticPages.map(({ path, priority, frequency }) => ({
      url: `${BASE}/${path}`,
      lastModified: new Date(),
      changeFrequency: frequency,
      priority,
    })),
    ...leaguePages,
    ...blogPages,
    ...tagPages,
    ...categoryPages,
  ];
}
