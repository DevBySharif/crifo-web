import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContentShell } from "@/components/content-shell";
import { Breadcrumb } from "@/components/breadcrumb";
import { PostRenderer, postToc } from "@/components/post-renderer";
import { allPosts, getPost, relatedPosts, slugify } from "@/lib/content/registry";
import { SITE_URL, APK_PATH } from "@/lib/site";
import { articleSchema, faqSchema } from "@/lib/seo/schema";

export const dynamicParams = false;

export function generateStaticParams() {
  return allPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      url: `${SITE_URL}/blog/${post.slug}`,
      siteName: "CriFO",
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      modifiedTime: post.updated,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const url = `${SITE_URL}/blog/${post.slug}`;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: post.title, path: `/blog/${post.slug}` },
  ];
  const toc = postToc(post.sections);
  const related = relatedPosts(post.slug, 3);
  const updatedDate = new Date(post.updated).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <ContentShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema({ title: post.title, description: post.description, url, date: post.date, updated: post.updated, author: post.author, tags: post.tags })) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(post.faqs)) }}
      />
      <Breadcrumb items={crumbs} />

      <article>
        <header className="mb-8">
          <div className="mb-3 flex flex-wrap items-center gap-2 text-xs text-zinc-500">
            <a href={`/blog/category/${slugify(post.category)}`} className="font-semibold text-[#00B4FF] hover:underline">
              {post.category}
            </a>
            <span aria-hidden="true">·</span>
            <span>{post.readMinutes} min read</span>
            <span aria-hidden="true">·</span>
            <span>Updated {updatedDate}</span>
          </div>
          <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            {post.title}
          </h1>
          <p className="mb-5 max-w-2xl text-base leading-relaxed text-zinc-400">
            {post.intro}
          </p>
          <div className="flex items-center gap-3 border-y border-[#00B4FF]/8 py-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#00B4FF]/15 font-bold text-[#00B4FF]">
              C
            </div>
            <div className="text-sm">
              <a href={post.author.url} className="font-semibold text-white hover:text-[#00B4FF]">
                {post.author.name}
              </a>
              <p className="text-xs text-zinc-500">CriFO editorial</p>
            </div>
          </div>
        </header>

        {toc.length > 1 && (
          <nav aria-label="Table of contents" className="mb-8 rounded-2xl border border-[#00B4FF]/8 bg-[#0E0E1C] p-5">
            <p className="mb-3 text-sm font-bold text-white">On this page</p>
            <ol className="list-decimal space-y-1.5 pl-5 text-sm text-zinc-400">
              {toc.map((t) => (
                <li key={t.id}>
                  <a href={`#${t.id}`} className="transition-colors hover:text-[#00B4FF]">
                    {t.text}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        )}

        <PostRenderer sections={post.sections} />

        <section aria-labelledby="faq-heading" className="mt-10">
          <h2 id="faq-heading" className="mb-4 text-xl font-bold text-white">
            Frequently asked questions
          </h2>
          <div className="space-y-3">
            {post.faqs.map((f) => (
              <details
                key={f.q}
                className="rounded-2xl border border-[#00B4FF]/8 bg-[#0E0E1C] p-5 open:border-[#00B4FF]/25"
              >
                <summary className="cursor-pointer list-none font-semibold text-white">
                  {f.q}
                </summary>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{f.a}</p>
              </details>
            ))}
          </div>
        </section>
      </article>

      <aside aria-label="Related articles" className="mt-12">
        <h2 className="mb-4 text-xl font-bold text-white">Related articles</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {related.map((r) => (
            <a
              key={r.slug}
              href={`/blog/${r.slug}`}
              className="rounded-2xl border border-[#00B4FF]/8 bg-[#0E0E1C] p-5 transition-all hover:border-[#00B4FF]/25 hover:bg-[#151632]"
            >
              <h3 className="mb-2 text-sm font-bold text-white">{r.title}</h3>
              <p className="line-clamp-3 text-xs leading-relaxed text-zinc-400">
                {r.description}
              </p>
            </a>
          ))}
        </div>
      </aside>

      <aside aria-label="Get the app" className="mt-12 rounded-2xl border border-[#00B4FF]/20 bg-gradient-to-br from-[#00B4FF]/10 to-[#0077FF]/5 p-6 text-center sm:p-8">
        <h2 className="mb-2 text-lg font-bold text-white">
          Follow it live with CriFO
        </h2>
        <p className="mx-auto mb-5 max-w-lg text-sm leading-relaxed text-zinc-400">
          Live scores from 100+ leagues, full match stats, and 1000+ built-in
          live TV channels. Free, no ads, no subscription.
        </p>
        <a
          href={`${APK_PATH}`}
          className="inline-flex items-center gap-2 rounded-xl bg-[#00B4FF] px-6 py-3 text-sm font-bold text-[#06060E] transition hover:bg-[#33c4ff]"
        >
          Download CriFO free
        </a>
      </aside>
    </ContentShell>
  );
}
