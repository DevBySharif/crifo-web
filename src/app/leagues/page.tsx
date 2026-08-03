import type { Metadata } from "next";
import { ContentShell } from "@/components/content-shell";
import { Breadcrumb } from "@/components/breadcrumb";
import { leaguesByRegion } from "@/lib/content/registry";
import { SITE_URL } from "@/lib/site";
import { webPageSchema } from "@/lib/seo/schema";

export const metadata: Metadata = {
  title: "Leagues",
  description:
    "Follow 100+ leagues and competitions worldwide with live scores, match stats, lineups and H2H — the Premier League, La Liga, Serie A, and more in one free Android app.",
  alternates: { canonical: "/leagues" },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/leagues`,
    siteName: "CriFO",
    title: "Live Football Leagues on CriFO",
  },
};

export default function LeaguesPage() {
  const byRegion = leaguesByRegion();
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Leagues", path: "/leagues" },
  ];
  const schema = webPageSchema({
    name: "Live Football Leagues",
    description: metadata.description ?? "",
    url: `${SITE_URL}/leagues`,
    breadcrumbs: crumbs,
  });

  return (
    <ContentShell wide>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Breadcrumb items={crumbs} />
      <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
        Live Football Leagues
      </h1>
      <p className="mb-10 max-w-2xl text-base leading-relaxed text-zinc-400">
        Live scores, match stats, lineups and head-to-head history for the
        world&apos;s top leagues — all free in the CriFO Android app, with
        1000+ built-in live TV channels.
      </p>
      {byRegion.map(({ region, leagues }) => (
        <section key={region} className="mb-12" aria-labelledby={`region-${region}`}>
          <h2 id={`region-${region}`} className="mb-5 text-xl font-bold text-white">
            {region}
          </h2>
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {leagues.map((l) => (
              <li key={l.slug}>
                <a
                  href={`/leagues/${l.slug}`}
                  className="flex items-center gap-3 rounded-2xl border border-[#00B4FF]/8 bg-[#0E0E1C] px-4 py-3 transition-all hover:border-[#00B4FF]/25 hover:bg-[#151632]"
                >
                  <span className="text-2xl" aria-hidden="true">
                    {l.flag}
                  </span>
                  <span className="text-sm font-semibold text-zinc-300">
                    {l.name}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </ContentShell>
  );
}
