import type { Metadata } from "next";
import { InfoPage, h2, p, li } from "@/components/info-page";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "CriFO terms of service: use of the app, the APK download, and disclaimer that CriFO is not affiliated with ESPN or any sports league.",
  alternates: { canonical: "/terms" },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/terms`,
    siteName: "CriFO",
    title: "CriFO Terms of Service",
  },
};

export default function TermsPage() {
  return (
    <InfoPage title="Terms of Service">
      <p className={p}>
        By downloading or using CriFO you agree to these terms. If you do not
        agree, please do not use the app.
      </p>
      <h2 className={h2}>License</h2>
      <p className={p}>
        The CriFO APK is licensed to you for personal, non-commercial use. You
        may not reverse-engineer, redistribute, or resell the app, and you may
        not remove or alter any copyright notices.
      </p>
      <h2 className={h2}>Use of the service</h2>
      <p className={p}>
        CriFO provides live scores, match statistics, and links to publicly
        available live TV streams. Content availability may change at any time
        and we cannot guarantee the accuracy, completeness, or availability of
        any data or stream.
      </p>
      <h2 className={h2}>No warranty</h2>
      <p className={p}>
        CriFO is provided &quot;as is&quot; without warranties of any kind,
        express or implied. We are not liable for any damages arising from your
        use of the app, including reliance on scores, statistics, or stream
        availability.
      </p>
      <h2 className={h2}>Disclaimer</h2>
      <p className={p}>
        CriFO aggregates publicly available football data from public sports
        APIs and is not affiliated with, endorsed by, or sponsored by ESPN or
        any sports league. All trademarks belong to their respective owners.
      </p>
      <h2 className={h2}>Governing law</h2>
      <p className={p}>
        These terms are governed by the applicable laws of your jurisdiction.
      </p>
      <ul className={`${li} list-disc space-y-1 pl-5`}>
        <li>Personal, non-commercial use only.</li>
        <li>Live scores and streams provided &quot;as is&quot;.</li>
        <li>Not affiliated with ESPN or any sports league.</li>
      </ul>
    </InfoPage>
  );
}
