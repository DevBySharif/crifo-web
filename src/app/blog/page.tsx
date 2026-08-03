import type { Metadata } from "next";
import { ContentShell } from "@/components/content-shell";
import { Breadcrumb } from "@/components/breadcrumb";
import { PostCard } from "@/components/post-card";
import { allPosts, allCategories, allTags } from "@/lib/content/registry";
import { SITE_URL } from "@/lib/site";
import { webPageSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Guides and explainers on live football scores, watching football on Android, and following your favourite leagues with the free CriFO app.",
  alternates: { canonical: "/blog" },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/blog`,
    siteName: "CriFO",
    title: "CriFO Blog",
  },
};

export default function BlogIndexPage() {
  const posts = allPosts();
  const categories = allCategories();
  const tags = allTags();
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
  ];
  const schema = webPageSchema({
    name: "CriFO Blog",
    description: metadata.description ?? "",
    url: `${SITE_URL}/blog`,
    breadcrumbs: crumbs,
  });

  return (
    <ContentShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Breadcrumb items={crumbs} />
      <div className="mb-4 flex items-start justify-between gap-4">
        <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Blog
        </h1>
        <a
          href="/blog/rss.xml"
          className="mt-1 inline-flex shrink-0 items-center gap-2 rounded-lg border border-[#00B4FF]/20 bg-[#00B4FF]/10 px-3 py-1.5 text-xs font-semibold text-[#00B4FF] transition hover:bg-[#00B4FF]/20"
        >
          RSS
        </a>
      </div>
      <p className="mb-10 max-w-2xl text-base leading-relaxed text-zinc-400">
        Practical guides to live scores, watching football on Android, and the
        leagues that matter — written for fans, not for search engines.
      </p>

      <div className="mb-10 space-y-6">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>

      <section aria-labelledby="categories-heading" className="mb-8">
        <h2 id="categories-heading" className="mb-4 text-lg font-bold text-white">
          Categories
        </h2>
        <ul className="flex flex-wrap gap-3">
          {categories.map((c) => (
            <li key={c.name}>
              <a
                href={`/blog/category/${c.slug}`}
                className="rounded-full border border-[#00B4FF]/20 bg-[#00B4FF]/10 px-4 py-1.5 text-sm font-semibold text-[#00B4FF] transition hover:bg-[#00B4FF]/20"
              >
                {c.name} ({c.posts.length})
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="tags-heading">
        <h2 id="tags-heading" className="mb-4 text-lg font-bold text-white">
          Tags
        </h2>
        <ul className="flex flex-wrap gap-3">
          {tags.map((t) => (
            <li key={t.name}>
              <a
                href={`/blog/tag/${t.slug}`}
                className="rounded-full border border-[#00B4FF]/8 bg-[#0E0E1C] px-4 py-1.5 text-sm text-zinc-400 transition hover:text-[#00B4FF]"
              >
                #{t.name} ({t.posts.length})
              </a>
            </li>
          ))}
        </ul>
      </section>
    </ContentShell>
  );
}
