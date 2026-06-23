import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Football Eon - Live Football Scores",
  description:
    "Download Football Eon for live scores, match details, and stats from Premier League, La Liga, Serie A, Bundesliga & more.",
  openGraph: {
    title: "Football Eon - Live Football Scores",
    description:
      "Live scores & match details from top European leagues. Download the APK now.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="h-full font-sans antialiased bg-zinc-950 text-zinc-100">
        {children}
      </body>
    </html>
  );
}
