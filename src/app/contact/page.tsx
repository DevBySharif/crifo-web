import type { Metadata } from "next";
import { InfoPage, h2, p, li } from "@/components/info-page";
import { SITE_URL, TELEGRAM_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact CriFO for support, feedback, and bug reports. The fastest way to reach us is Telegram.",
  alternates: { canonical: "/contact" },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/contact`,
    siteName: "CriFO",
    title: "Contact CriFO",
  },
};

const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact CriFO",
  url: `${SITE_URL}/contact`,
  mainEntity: {
    "@type": "Organization",
    name: "CriFO",
    url: SITE_URL,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      url: TELEGRAM_URL,
      availableLanguage: "English",
    },
  },
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      <InfoPage title="Contact">
        <p className={p}>
          We read every message. The fastest way to get support, report a bug,
          or suggest a feature is our Telegram group.
        </p>
        <h2 className={h2}>Telegram support</h2>
        <p className={p}>
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[#00B4FF] hover:underline"
          >
            Join the CriFO Telegram
          </a>{" "}
          for installation help, feedback, and bug reports. Expect a reply
          within a day.
        </p>
        <h2 className={h2}>What to include</h2>
        <p className={p}>
          When reporting a problem, mention your Android version and phone
          model, and a short description of what happened. A screenshot helps a
          lot.
        </p>
        <h2 className={h2}>Other inquiries</h2>
        <p className={p}>
          For everything else — partnerships, media, or legal questions — use
          the same Telegram channel.
        </p>
        <ul className={`${li} list-disc space-y-1 pl-5`}>
          <li>Installation help and bug reports.</li>
          <li>Feature requests and feedback.</li>
          <li>Media and partnership inquiries.</li>
        </ul>
      </InfoPage>
    </>
  );
}
