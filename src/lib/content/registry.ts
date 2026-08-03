import { LEAGUES, REGIONS } from "./leagues";
import { POSTS } from "./posts";
import type { League, Post, Region } from "./types";

// ── Leagues ────────────────────────────────────────────────────────────────

export function allLeagues(): League[] {
  return LEAGUES;
}

export function getLeague(slug: string): League | undefined {
  return LEAGUES.find((l) => l.slug === slug);
}

export function leaguesByRegion(): { region: Region; leagues: League[] }[] {
  return (REGIONS as readonly Region[]).map((region) => ({
    region,
    leagues: LEAGUES.filter((l) => l.region === region).sort(
      (a, b) => b.popularity - a.popularity,
    ),
  }));
}

export function relatedLeagues(slug: string, count = 4): League[] {
  const current = getLeague(slug);
  if (!current) return [];
  const sameRegion = LEAGUES.filter(
    (l) => l.slug !== slug && l.region === current.region,
  ).sort((a, b) => b.popularity - a.popularity);
  const others = LEAGUES.filter(
    (l) => l.slug !== slug && l.region !== current.region,
  ).sort((a, b) => b.popularity - a.popularity);
  return [...sameRegion, ...others].slice(0, count);
}

// ── Posts ──────────────────────────────────────────────────────────────────

export function allPosts(): Post[] {
  return [...POSTS].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPost(slug: string): Post | undefined {
  return POSTS.find((p) => p.slug === slug);
}

export function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function allCategories(): { name: string; slug: string; posts: Post[] }[] {
  const map = new Map<string, Post[]>();
  for (const post of allPosts()) {
    map.set(post.category, [...(map.get(post.category) ?? []), post]);
  }
  return [...map.entries()].map(([name, posts]) => ({
    name,
    slug: slugify(name),
    posts,
  }));
}

export function allTags(): { name: string; slug: string; posts: Post[] }[] {
  const map = new Map<string, Post[]>();
  for (const post of allPosts()) {
    for (const tag of post.tags) {
      map.set(tag, [...(map.get(tag) ?? []), post]);
    }
  }
  return [...map.entries()]
    .map(([name, posts]) => ({ name, slug: slugify(name), posts }))
    .sort((a, b) => b.posts.length - a.posts.length);
}

export function getCategory(slug: string) {
  return allCategories().find((c) => c.slug === slug);
}

export function getTag(slug: string) {
  return allTags().find((t) => t.slug === slug);
}

export function relatedPosts(slug: string, count = 3): Post[] {
  const current = getPost(slug);
  if (!current) return [];
  const others = allPosts().filter((p) => p.slug !== slug);
  const scored = others
    .map((post) => {
      const sharedTags = post.tags.filter((t) => current.tags.includes(t)).length;
      const score =
        sharedTags * 3 + (post.category === current.category ? 2 : 0);
      return { post, score };
    })
    .sort((a, b) => b.score - a.score);
  return scored.slice(0, count).map((s) => s.post);
}
