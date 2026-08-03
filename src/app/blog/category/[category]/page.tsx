import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContentShell } from "@/components/content-shell";
import { Breadcrumb } from "@/components/breadcrumb";
import { PostCard } from "@/components/post-card";
import { allCategories, getCategory } from "@/lib/content/registry";
import { SITE_URL } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return allCategories().map((c) => ({ category: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const category = getCategory(categorySlug);
  if (!category) return {};
  return {
    title: `${category.name} articles`,
    description: `Guides in the "${category.name}" category on the CriFO blog — live scores, football apps, and watching football on Android.`,
    alternates: { canonical: `/blog/category/${category.slug}` },
    openGraph: {
      type: "website",
      url: `${SITE_URL}/blog/category/${category.slug}`,
      siteName: "CriFO",
      title: `${category.name} articles`,
    },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category: categorySlug } = await params;
  const category = getCategory(categorySlug);
  if (!category) notFound();

  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: category.name, path: `/blog/category/${category.slug}` },
  ];

  return (
    <ContentShell>
      <Breadcrumb items={crumbs} />
      <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
        {category.name}
      </h1>
      <p className="mb-10 max-w-2xl text-base leading-relaxed text-zinc-400">
        {category.posts.length} article{category.posts.length === 1 ? "" : "s"} in
        this category on the CriFO blog.
      </p>
      <div className="space-y-6">
        {category.posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </ContentShell>
  );
}
