import type { Post } from "@/lib/content/types";
import { slugify } from "@/lib/content/registry";

export function PostCard({ post }: { post: Post }) {
  return (
    <article className="rounded-2xl border border-[#00B4FF]/8 bg-[#0E0E1C] p-6 transition-all hover:border-[#00B4FF]/25 hover:bg-[#151632]">
      <a href={`/blog/${post.slug}`}>
        <h2 className="mb-2 text-xl font-bold text-white transition-colors hover:text-[#00B4FF]">
          {post.title}
        </h2>
      </a>
      <p className="mb-3 text-sm leading-relaxed text-zinc-400">{post.description}</p>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-zinc-500">
        <span>{post.date}</span>
        <span>{post.readMinutes} min read</span>
        <a
          href={`/blog/category/${slugify(post.category)}`}
          className="text-[#00B4FF] hover:underline"
        >
          {post.category}
        </a>
        <span aria-hidden="true">·</span>
        {post.tags.map((tag) => (
          <a key={tag} href={`/blog/tag/${slugify(tag)}`} className="text-zinc-500 hover:text-[#00B4FF]">
            #{tag}
          </a>
        ))}
      </div>
    </article>
  );
}
