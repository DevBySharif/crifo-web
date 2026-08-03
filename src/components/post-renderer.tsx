import type { ContentBlock } from "@/lib/content/types";

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function postToc(sections: ContentBlock[]) {
  return sections
    .filter((s) => s.type === "h2")
    .map((s) => ({ id: slugify((s as { text: string }).text), text: (s as { text: string }).text }));
}

export function PostRenderer({ sections }: { sections: ContentBlock[] }) {
  return (
    <div className="space-y-4">
      {sections.map((block, i) => {
        switch (block.type) {
          case "h2":
            return (
              <h2
                key={i}
                id={slugify(block.text)}
                className="mb-2 mt-8 text-xl font-bold text-white sm:text-2xl"
              >
                {block.text}
              </h2>
            );
          case "h3":
            return (
              <h3 key={i} className="mb-2 mt-6 text-lg font-bold text-white">
                {block.text}
              </h3>
            );
          case "p":
            return (
              <p key={i} className="text-sm leading-relaxed text-zinc-400">
                {block.text}
              </p>
            );
          case "ul":
            return (
              <ul
                key={i}
                className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-zinc-400"
              >
                {block.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol
                key={i}
                className="list-decimal space-y-2 pl-5 text-sm leading-relaxed text-zinc-400"
              >
                {block.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ol>
            );
          case "quote":
            return (
              <blockquote
                key={i}
                className="border-l-2 border-[#00B4FF] pl-4 text-sm italic leading-relaxed text-zinc-300"
              >
                {block.text}
              </blockquote>
            );
          case "link":
            return (
              <a
                key={i}
                href={block.href}
                className="mt-4 inline-flex items-center gap-2 rounded-xl bg-[#00B4FF] px-6 py-3 text-sm font-bold text-[#06060E] transition hover:bg-[#33c4ff]"
              >
                {block.text}
              </a>
            );
        }
      })}
    </div>
  );
}
