import type { Metadata } from "next";
import { InfoPage, h2, p, li } from "@/components/info-page";
import { SITE_URL, TELEGRAM_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "CriFO privacy policy: the app and website record only anonymous analytics events (page, timestamp, referrer, user-agent) and store no personal data.",
  alternates: { canonical: "/privacy" },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/privacy`,
    siteName: "CriFO",
    title: "CriFO Privacy Policy",
  },
};

export default function PrivacyPage() {
  return (
    <InfoPage title="Privacy Policy">
      <p className={p}>
        This policy explains what data CriFO (the app and this website)
        collects and how it is used. We keep data collection to the minimum
        needed to operate the service.
      </p>
      <h2 className={h2}>Website analytics</h2>
      <p className={p}>
        This website records anonymous analytics events to understand how many
        people visit and download the app. Each event stores only: the event
        type (visit or download), the page, a timestamp, a coarse user-agent
        string, and the referrer. No names, emails, IP addresses, or device
        identifiers are collected or stored.
      </p>
      <h2 className={h2}>The app</h2>
      <p className={p}>
        CriFO the app does not require an account and does not collect personal
        data. It fetches live football data and live TV streams from public
        sources. It does not track your location.
      </p>
      <h2 className={h2}>Third parties</h2>
      <p className={p}>
        The app and website rely on publicly available data from public sports
        APIs and on your internet connection for live streams. We do not sell or
        share analytics data with third parties.
      </p>
      <h2 className={h2}>Your choices</h2>
      <p className={p}>
        Because we store no personal data, there is nothing to delete. If you
        have questions about privacy, contact us on Telegram:{" "}
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
      <h2 className={h2}>Changes</h2>
      <p className={p}>
        We may update this policy from time to time. The latest version is
        always available at this page.
      </p>
      <ul className={`${li} list-disc space-y-1 pl-5`}>
        <li>No accounts, no personal data, no ads.</li>
        <li>Anonymous analytics only (page, timestamp, referrer, user-agent).</li>
        <li>No selling or sharing of data.</li>
      </ul>
    </InfoPage>
  );
}
