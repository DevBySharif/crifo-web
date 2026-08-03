import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContentShell } from "@/components/content-shell";
import { Breadcrumb } from "@/components/breadcrumb";
import { PostCard } from "@/components/post-card";
import { allTags, getTag } from "@/lib/content/registry";
import { SITE_URL } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return allTags().map((t) => ({ tag: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ tag: string }>;
}): Promise<Metadata> {
  const { tag: tagSlug } = await params;
  const tag = getTag(tagSlug);
  if (!tag) return {};
  return {
    title: `Posts tagged "${tag.name}"`,
    description: `Articles tagged "${tag.name}" on the CriFO blog — live scores, football apps, and watching football on Android.`,
    alternates: { canonical: `/blog/tag/${tag.slug}` },
    openGraph: {
      type: "website",
      url: `${SITE_URL}/blog/tag/${tag.slug}`,
      siteName: "CriFO",
      title: `Posts tagged "${tag.name}"`,
    },
  };
}

export default async function TagPage({
  params,
}: {
  params: Promise<{ tag: string }>;
}) {
  const { tag: tagSlug } = await params;
  const tag = getTag(tagSlug);
  if (!tag) notFound();

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: `Tag: ${tag.name}`, path: `/blog/tag/${tag.slug}` },
  ];

  return (
    <ContentShell>
      <Breadcrumb items={crumbs} />
      <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
        Posts tagged &quot;{tag.name}&quot;
      </h1>
      <p className="mb-10 max-w-2xl text-base leading-relaxed text-zinc-400">
        {tag.posts.length} article{tag.posts.length === 1 ? "" : "s"} on the
        CriFO blog.
      </p>
      <div className="space-y-6">
        {tag.posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </ContentShell>
  );
}
