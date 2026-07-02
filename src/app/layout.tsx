import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
});

export const metadata: Metadata = {
  title: "CriFO — Live Football Scores & Live TV",
  description:
    "Download CriFO for live scores from 100+ leagues worldwide, match stats, lineups, H2H, plus 59+ built-in live TV sports channels. Free Android app.",
  openGraph: {
    title: "CriFO — Live Football Scores & Live TV",
    description:
      "Live scores from 100+ leagues, full match details & built-in live TV. Free Android app.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} h-full`}>
      <body className="h-full font-sans antialiased bg-[#080B08] text-zinc-100 selection:bg-[#9FEF00]/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
