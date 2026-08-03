import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContentShell } from "@/components/content-shell";
import { Breadcrumb } from "@/components/breadcrumb";
import { allLeagues, getLeague, relatedLeagues } from "@/lib/content/registry";
import { SITE_URL, APK_PATH } from "@/lib/site";
import { webPageSchema, faqSchema, softwareApplicationSchema } from "@/lib/seo/schema";

export const dynamicParams = false;

export function generateStaticParams() {
  return allLeagues().map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const league = getLeague(slug);
  if (!league) return {};
  return {
    title: `${league.name} Live Scores`,
    description: `Live ${league.name} scores on CriFO — every match with lineups, stats and H2H from ${league.country}. Free Android app with 1000+ built-in live TV channels.`,
    alternates: { canonical: `/leagues/${league.slug}` },
    openGraph: {
      type: "website",
      url: `${SITE_URL}/leagues/${league.slug}`,
      siteName: "CriFO",
      title: `${league.name} Live Scores on CriFO`,
      description: `Follow ${league.name} live on CriFO — scores, lineups, stats and live TV. Free Android app.`,
    },
  };
}

export default async function LeaguePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const league = getLeague(slug);
  if (!league) notFound();

  const url = `${SITE_URL}/leagues/${league.slug}`;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Leagues", path: "/leagues" },
    { name: league.name, path: `/leagues/${league.slug}` },
  ];
  const related = relatedLeagues(league.slug, 4);

  return (
    <ContentShell wide>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            webPageSchema({
              name: `${league.name} Live Scores`,
              description: `Live ${league.name} scores on CriFO — every match with lineups, stats and H2H.`,
              url,
              breadcrumbs: crumbs,
              faqs: league.faqs,
            }),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema(league.faqs)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareApplicationSchema()),
        }}
      />
      <Breadcrumb items={crumbs} />

      <article>
        <header className="mb-8">
          <div className="mb-4 flex items-center gap-4">
            <span className="text-6xl" aria-hidden="true">
              {league.flag}
            </span>
            <div>
              <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                {league.name} Live Scores
              </h1>
              <p className="mt-1 text-sm text-zinc-500">
                {league.country} · {league.region}
              </p>
            </div>
          </div>
        </header>

        <section className="mb-10" aria-label="About">
          <p className="max-w-3xl text-base leading-relaxed text-zinc-400">
            {league.intro}
          </p>
        </section>

        <section className="mb-10" aria-labelledby="follow-heading">
          <h2 id="follow-heading" className="mb-4 text-xl font-bold text-white">
            Follow {league.name} on CriFO
          </h2>
          <ul className="max-w-3xl space-y-3">
            {league.keyInfo.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-relaxed text-zinc-400">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#00B4FF]" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-10 rounded-2xl border border-[#00B4FF]/20 bg-gradient-to-br from-[#00B4FF]/10 to-[#0077FF]/5 p-6 sm:p-8">
          <h2 className="mb-2 text-lg font-bold text-white">
            Get {league.name} live scores free
          </h2>
          <p className="mb-5 max-w-2xl text-sm leading-relaxed text-zinc-400">
            Download the CriFO APK and follow {league.name} in real time — live
            minutes, lineups, stats and head-to-head history, plus 1000+ built-in
            live TV channels. No ads, no subscriptions.
          </p>
          <a
            href={`${APK_PATH}`}
            className="inline-flex items-center gap-2 rounded-xl bg-[#00B4FF] px-6 py-3 text-sm font-bold text-[#06060E] transition hover:bg-[#33c4ff]"
          >
            Download CriFO free
          </a>
        </section>

        <section className="mb-10" aria-labelledby="related-heading">
          <h2 id="related-heading" className="mb-4 text-xl font-bold text-white">
            Related leagues
          </h2>
          <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((r) => (
              <li key={r.slug}>
                <a
                  href={`/leagues/${r.slug}`}
                  className="flex items-center gap-3 rounded-2xl border border-[#00B4FF]/8 bg-[#0E0E1C] px-4 py-3 transition-all hover:border-[#00B4FF]/25 hover:bg-[#151632]"
                >
                  <span className="text-2xl" aria-hidden="true">
                    {r.flag}
                  </span>
                  <span className="text-sm font-semibold text-zinc-300">
                    {r.name}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="faq-heading">
          <h2 id="faq-heading" className="mb-4 text-xl font-bold text-white">
            {league.name} — frequently asked questions
          </h2>
          <div className="space-y-3">
            {league.faqs.map((f) => (
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
    </ContentShell>
  );
}
