import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
});

const SITE_URL = "https://crifo.netlify.app";
const TITLE = "CriFO — Live Football Scores & 1000+ Live TV Channels";
const DESCRIPTION =
  "Free Android app: live football scores from 100+ leagues, match stats, lineups & H2H, plus 1000+ built-in live TV channels. No ads. Download the APK.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s | CriFO",
  },
  description: DESCRIPTION,
  applicationName: "CriFO",
  keywords: [
    "live football scores",
    "football live tv",
    "free football app",
    "live soccer scores",
    "football streaming app",
    "live tv channels app",
    "premier league live scores",
    "world cup live scores",
    "bein sports live",
    "CriFO",
  ],
  authors: [{ name: "CriFO" }],
  creator: "CriFO",
  category: "sports",
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "CriFO",
    title: TITLE,
    description:
      "Live scores from 100+ leagues, full match details & 1000+ built-in live TV channels. Free Android app.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description:
      "Live scores from 100+ leagues + 1000+ live TV channels. Free Android app.",
  },
  icons: { icon: "/icon.svg" },
  verification: {
    google: "Mtjq0xtNrSUWlpTjEP7FjvNxkftqwrxC8QG0Lt5aLNQ",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} h-full`}>
      <body className="h-full font-sans antialiased bg-[#06060E] text-zinc-100 selection:bg-[#00B4FF]/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
