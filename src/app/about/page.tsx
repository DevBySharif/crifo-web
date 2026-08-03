import type { Metadata } from "next";
import { InfoPage, h2, p, li } from "@/components/info-page";
import { SITE_URL, TELEGRAM_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "About CriFO — the free Android app for live football scores from 100+ leagues and 1000+ built-in live TV channels.",
  alternates: { canonical: "/about" },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/about`,
    siteName: "CriFO",
    title: "About CriFO",
  },
};

export default function AboutPage() {
  return (
    <InfoPage title="About CriFO">
      <p className={p}>
        CriFO is a free Android app for football fans who want live scores,
        full match details, and live TV in one place — without ads or paywalls.
      </p>
      <h2 className={h2}>What CriFO does</h2>
      <p className={p}>
        CriFO streams live scores from 100+ leagues and competitions worldwide,
        including the Premier League, La Liga, Serie A, Bundesliga, Champions
        League, and the World Cup. Every match includes live minutes, lineups,
        statistics, head-to-head history, and ball-by-ball commentary.
      </p>
      <p className={p}>
        The app also bundles 1000+ live TV channels — sports, news, and
        entertainment — so you can tap a live match&apos;s &quot;Where to
        watch&quot; channel and start streaming instantly.
      </p>
      <h2 className={h2}>Why it&apos;s free</h2>
      <p className={p}>
        CriFO has no ads, no premium tier, and no in-app purchases. Every
        feature is unlocked from the first launch. We ship directly as an APK so
        updates reach users immediately, without store review delays.
      </p>
      <h2 className={h2}>The team</h2>
      <p className={p}>
        CriFO is built by a small independent team that loves football. We
        welcome feedback and bug reports — the fastest way to reach us is on
        Telegram:{" "}
        <a
          href={TELEGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-[#00B4FF] hover:underline"
        >
          @CriFO support
        </a>
        .
      </p>
      <h2 className={h2}>Disclosure</h2>
      <p className={p}>
        CriFO aggregates publicly available football data from public sports
        APIs. The app is not affiliated with, endorsed by, or sponsored by ESPN
        or any sports league. All trademarks belong to their respective owners.
      </p>
      <ul className={`${li} list-disc space-y-1 pl-5`}>
        <li>Free, no ads — every feature unlocked.</li>
        <li>Live scores for 100+ leagues worldwide.</li>
        <li>1000+ built-in live TV channels.</li>
        <li>Requires Android 8.0 or newer.</li>
      </ul>
    </InfoPage>
  );
}
