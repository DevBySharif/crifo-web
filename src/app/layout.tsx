import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
});

export const metadata: Metadata = {
  title: "Football Eon — Live Football Scores",
  description:
    "Download Football Eon for live scores, match details, and stats from Premier League, La Liga, Serie A, Bundesliga & more.",
  openGraph: {
    title: "Football Eon — Live Football Scores",
    description:
      "Live scores & match details from top European leagues. Free Android app.",
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
