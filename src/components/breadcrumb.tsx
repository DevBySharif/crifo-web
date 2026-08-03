import { breadcrumbSchema } from "@/lib/seo/schema";

export function Breadcrumb({
  items,
}: {
  items: { name: string; path: string }[];
}) {
  return (
    <nav aria-label="Breadcrumb">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema(items)),
        }}
      />
      <ol className="mb-6 flex flex-wrap items-center gap-2 text-xs text-zinc-500">
        {items.map((item, i) => {
          const last = i === items.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-2">
              {i > 0 && <span aria-hidden="true">/</span>}
              {last ? (
                <span className="font-medium text-zinc-300" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <a href={item.path} className="text-zinc-500 transition-colors hover:text-white">
                  {item.name}
                </a>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
