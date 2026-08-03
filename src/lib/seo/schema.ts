import { SITE_URL, APK_PATH, TELEGRAM_URL } from "@/lib/site";
import type { FaqItem } from "@/lib/content/types";

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function faqSchema(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function webPageSchema({
  name,
  description,
  url,
  breadcrumbs,
  faqs,
}: {
  name: string;
  description: string;
  url: string;
  breadcrumbs: { name: string; path: string }[];
  faqs?: FaqItem[];
}) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url,
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbs.map((item, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: item.name,
        item: `${SITE_URL}${item.path}`,
      })),
    },
    primaryImageOfPage: `${SITE_URL}/brand/crifo-logo-512.png`,
    inLanguage: "en",
    publisher: {
      "@type": "Organization",
      name: "CriFO",
      url: SITE_URL,
      logo: `${SITE_URL}/brand/crifo-logo-512.png`,
    },
  };
  if (faqs && faqs.length > 0) {
    schema.mainEntity = faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    }));
  }
  return schema;
}

export function articleSchema({
  title,
  description,
  url,
  date,
  updated,
  author,
  tags,
}: {
  title: string;
  description: string;
  url: string;
  date: string;
  updated: string;
  author: { name: string; url: string };
  tags: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url,
    image: `${SITE_URL}/brand/crifo-logo-512.png`,
    datePublished: date,
    dateModified: updated,
    inLanguage: "en",
    author: {
      "@type": "Organization",
      name: author.name,
      url: `${SITE_URL}${author.url}`,
    },
    publisher: {
      "@type": "Organization",
      name: "CriFO",
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/brand/crifo-logo-512.png` },
    },
    mainEntityOfPage: url,
    keywords: tags.join(", "),
  };
}

export function softwareApplicationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "CriFO",
    operatingSystem: "Android 8.0+",
    applicationCategory: "SportsApplication",
    description:
      "Free Android app for live football scores from 100+ leagues plus 1000+ built-in live TV channels.",
    url: SITE_URL,
    downloadUrl: `${SITE_URL}${APK_PATH}`,
    installUrl: `${SITE_URL}/#download`,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    publisher: {
      "@type": "Organization",
      name: "CriFO",
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: `${SITE_URL}/brand/crifo-logo-512.png` },
    },
    sameAs: [TELEGRAM_URL],
  };
}
