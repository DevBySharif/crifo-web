import { allPosts } from "@/lib/content/registry";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function GET() {
  const posts = allPosts();
  const items = posts
    .map((post) => {
      const url = `${SITE_URL}/blog/${post.slug}`;
      return [
        "<item>",
        `<title>${escapeXml(post.title)}</title>`,
        `<link>${url}</link>`,
        `<guid isPermaLink="true">${url}</guid>`,
        `<description>${escapeXml(post.description)}</description>`,
        `<pubDate>${new Date(post.date).toUTCString()}</pubDate>`,
        `<category>${escapeXml(post.category)}</category>`,
        "</item>",
      ].join("");
    })
    .join("");

  const xml = [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">`,
    "<channel>",
    `<title>CriFO Blog</title>`,
    `<link>${SITE_URL}/blog</link>`,
    `<description>Guides and explainers on live football scores, watching football on Android, and following your favourite leagues with the free CriFO app.</description>`,
    `<atom:link href="${SITE_URL}/blog/rss.xml" rel="self" type="application/rss+xml"/>`,
    items,
    "</channel>",
    "</rss>",
  ].join("\n");

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
