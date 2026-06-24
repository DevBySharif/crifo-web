"use client";
import { useEffect, useState } from "react";
import {
  Download,
  BarChart3,
  Moon,
  Zap,
  Shield,
  Sparkles,
  ChevronRight,
  Star,
  Check,
} from "lucide-react";
import { trackVisit } from "@/lib/tracker";

const features = [
  {
    icon: BarChart3,
    title: "Live Scores",
    desc: "Premier League, La Liga, Serie A, Bundesliga, Ligue 1 & Liga Portugal — real-time updates",
  },
  {
    icon: Shield,
    title: "Match Details",
    desc: "Goals, cards, substitutions, 30+ stat categories — powered by ESPN",
  },
  {
    icon: Moon,
    title: "Dark Theme",
    desc: "Premium dark interface with lime accents, easy on the eyes",
  },
  {
    icon: Zap,
    title: "Fast & Light",
    desc: "20 MB only, optimized for quick loading & minimal battery usage",
  },
];

const leagues = [
  { name: "Premier League", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", color: "#38003c" },
  { name: "La Liga", flag: "🇪🇸", color: "#febe00" },
  { name: "Serie A", flag: "🇮🇹", color: "#004694" },
  { name: "Bundesliga", flag: "🇩🇪", color: "#d20515" },
  { name: "Ligue 1", flag: "🇫🇷", color: "#002395" },
  { name: "Liga Portugal", flag: "🇵🇹", color: "#046a38" },
];

const phoneScreens = [
  {
    id: "home",
    label: "Home",
    content: (
      <div className="p-4 text-left text-sm">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#9FEF00]/20 text-lg font-bold">⚽</div>
          <div>
            <div className="font-bold text-white text-sm leading-tight">Football Fan</div>
            <div className="text-[11px] text-zinc-500">Welcome back</div>
          </div>
        </div>
        <div className="flex items-center gap-1.5 mb-3">
          <span className="text-[#9FEF00] text-[10px]">●</span>
          <span className="font-bold text-white text-xs tracking-wider">LIVE MATCHES</span>
          <span className="ml-auto text-[10px] bg-red-500/20 text-red-400 px-2.5 py-0.5 rounded font-bold">4 LIVE</span>
        </div>
        {[
          { home: "Arsenal", away: "Chelsea", score: "2-1", minute: "67'" },
          { home: "Barcelona", away: "Real Madrid", score: "1-1", minute: "42'" },
          { home: "Bayern", away: "Dortmund", score: "3-0", minute: "55'" },
        ].map((m, i) => (
          <div key={i} className="mb-2 rounded-lg bg-[#131814] p-3 border border-white/5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 flex-1 min-w-0">
                <span className="text-[13px] text-zinc-300 font-medium truncate">{m.home}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-base text-white font-mono">{m.score}</span>
                <span className="text-[10px] bg-red-500/20 text-red-400 px-2 py-0.5 rounded font-bold">{m.minute}</span>
              </div>
              <div className="flex items-center gap-2 flex-1 min-w-0 justify-end">
                <span className="text-[13px] text-zinc-300 font-medium truncate">{m.away}</span>
              </div>
            </div>
          </div>
        ))}
        <div className="mt-3 rounded-lg bg-[#131814] p-3.5 border border-dashed border-white/5">
          <div className="text-[10px] text-zinc-600 text-center font-medium">⬆ Scroll for more matches</div>
        </div>
      </div>
    ),
  },
  {
    id: "score",
    label: "Score",
    content: (
      <div className="p-4 text-left text-sm">
        <div className="flex items-center gap-1.5 mb-4">
          <span className="text-[#9FEF00] text-[10px]">●</span>
          <span className="font-bold text-white text-xs tracking-wider">SCORES</span>
          <span className="ml-auto text-[10px] text-zinc-500 bg-white/5 px-2.5 py-0.5 rounded">↻ Live</span>
        </div>
        {[
          { l: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 Premier League", matches: [{ a: "Arsenal", b: "Chelsea", s: "2-1" }, { a: "Man City", b: "Liverpool", s: "3-0" }] },
          { l: "🇪🇸 La Liga", matches: [{ a: "Barcelona", b: "Real Madrid", s: "1-1" }, { a: "Atletico", b: "Sevilla", s: "0-0" }] },
        ].map((lg, i) => (
          <div key={i} className="mb-3 rounded-lg bg-[#131814] p-3 border border-white/5">
            <div className="flex items-center gap-1.5 mb-2.5">
              <span className="text-xs font-semibold">{lg.l}</span>
              <span className="ml-auto text-[9px] bg-white/5 text-zinc-500 px-2 py-0.5 rounded">{lg.matches.length} matches</span>
            </div>
            {lg.matches.map((m, j) => (
              <div key={j} className="flex items-center justify-between py-1.5 text-xs border-t border-white/5 first:border-t-0">
                <span className="text-zinc-300 w-20 truncate font-medium">{m.a}</span>
                <span className="font-bold text-white font-mono text-sm">{m.s}</span>
                <span className="text-zinc-300 w-20 truncate text-right font-medium">{m.b}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "livetv",
    label: "Live TV",
    content: (
      <div className="p-4 text-left text-sm">
        <div className="relative mb-4 rounded-xl bg-black overflow-hidden border border-white/5">
          <div className="aspect-video flex items-center justify-center bg-gradient-to-br from-zinc-900 to-black">
            <div className="text-center">
              <div className="text-4xl mb-2">📺</div>
              <div className="text-[11px] text-zinc-500 font-mono tracking-widest">LIVE STREAM</div>
            </div>
          </div>
          <div className="absolute top-2 left-2 flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
            <span className="text-[9px] font-bold text-white tracking-wider bg-black/70 px-2.5 py-0.5 rounded">LIVE</span>
          </div>
          <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between">
            <span className="text-[9px] text-white/90 bg-black/70 px-2.5 py-0.5 rounded font-medium">beIN SPORTS HD 1</span>
            <span className="text-[9px] text-white/70 bg-black/70 px-2.5 py-0.5 rounded font-mono">42:15</span>
          </div>
        </div>
        <div className="space-y-2">
          {[
            { ch: "Sky Sports PL", match: "Arsenal vs Chelsea", live: true },
            { ch: "ESPN 2", match: "Barcelona vs Real Madrid", live: true },
            { ch: "DAZN 1", match: "Bayern vs Dortmund", live: false },
            { ch: "CBS Sports", match: "AC Milan vs Inter", live: false },
          ].map((c, i) => (
            <div key={i} className="flex items-center gap-3 rounded-lg bg-[#131814] p-3 border border-white/5">
              <div className={`w-3 h-3 rounded-full shrink-0 ${c.live ? 'bg-red-500 animate-pulse' : 'bg-zinc-600'}`} />
              <div className="flex-1 min-w-0">
                <div className="font-bold text-white text-xs truncate">{c.ch}</div>
                <div className="text-[10px] text-zinc-500 truncate">{c.match}</div>
              </div>
              {c.live && <span className="text-[9px] bg-red-500/20 text-red-400 px-2.5 py-0.5 rounded font-bold shrink-0">LIVE</span>}
              {!c.live && <span className="text-[9px] bg-zinc-800 text-zinc-500 px-2.5 py-0.5 rounded shrink-0">UPCOMING</span>}
            </div>
          ))}
        </div>
      </div>
    ),
  },
];

function FootballLogoSvg({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="60" cy="60" r="56" stroke="url(#limeGrad)" strokeWidth="3" />
      <path d="M60 28L78 42L72 64H48L42 42L60 28Z" fill="url(#limeGrad)" fillOpacity="0.15" stroke="url(#limeGrad)" strokeWidth="2" strokeLinejoin="round" />
      <path d="M60 45L72 54L68 70H52L48 54L60 45Z" fill="url(#limeGrad)" fillOpacity="0.1" stroke="url(#limeGrad)" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M60 6L63 14L72 14L65 19L68 28L60 23L52 28L55 19L48 14L57 14L60 6Z" fill="#9FEF00" opacity="0.6" />
      <circle cx="60" cy="60" r="50" stroke="#9FEF00" strokeOpacity="0.15" strokeWidth="0.5" />
      <defs>
        <linearGradient id="limeGrad" x1="20" y1="20" x2="100" y2="100">
          <stop stopColor="#9FEF00" />
          <stop offset="1" stopColor="#6BB800" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function BannerCarousel() {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((p) => (p + 1) % phoneScreens.length), 3000);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="relative z-10 shrink-0">
      <div className="absolute -inset-20 bg-[#9FEF00] opacity-[0.03] blur-[100px] rounded-full" />
      <PhoneFrame active>
        <div key={idx}>
          {phoneScreens[idx].content}
        </div>
      </PhoneFrame>
      <div className="flex justify-center gap-1.5 mt-3">
        {phoneScreens.map((_, i) => (
          <button key={i} onClick={() => setIdx(i)} className={`w-1.5 h-1.5 rounded-full transition-all ${i === idx ? "bg-[#9FEF00] w-3" : "bg-zinc-700"}`} />
        ))}
      </div>
    </div>
  );
}

function PhoneFrame({ children, active, size = "hero" }: { children: React.ReactNode; active?: boolean; size?: "hero" | "preview" }) {
  const widthClass = "w-[300px]";
  const contentHeight = "h-[480px]";
  return (
    <div className={`relative ${widthClass} ${active ? "animate-phone-float" : ""}`}>
      <div className="relative rounded-[32px] bg-zinc-900 p-2 shadow-2xl shadow-black/60 ring-1 ring-white/10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-b-xl z-10 flex items-center justify-center gap-2">
          <div className="w-2 h-2 rounded-full bg-zinc-800" />
        </div>
        <div className="rounded-[24px] bg-[#080B08] overflow-hidden relative">
          <div className="flex items-center justify-between px-5 pt-3 pb-1 text-[10px] text-white/60 bg-[#080B08] sticky top-0 z-10">
            <span className="font-semibold">9:41</span>
            <div className="flex items-center gap-1">
              <div className="w-4 h-2.5 rounded-sm border border-white/30 relative"><div className="absolute inset-0.5 rounded-sm bg-white/40" /></div>
              <span className="text-xs">📶</span>
            </div>
          </div>
          <div className={`overflow-y-auto scrollbar-hide ${contentHeight}`}>{children}</div>
        </div>
      </div>
      <div className="absolute inset-0 rounded-[32px] bg-gradient-to-t from-white/[0.03] to-transparent pointer-events-none" />
    </div>
  );
}

export default function Home() {
  useEffect(() => { trackVisit("website"); }, []);
  return (
    <>
      {/* Nav */}
      <nav className="fixed top-0 inset-x-0 z-50 border-b border-[#9FEF00]/10 bg-[#080B08]/80 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 h-16">
          <div className="flex items-center gap-3">
            <FootballLogoSvg className="w-8 h-8" />
            <span className="text-base font-extrabold tracking-tight text-white">
              Football <span className="text-[#9FEF00]">Eon</span>
            </span>
          </div>
          <div className="flex items-center gap-3">
            <a href="#features" className="text-sm text-zinc-400 hover:text-white transition hidden sm:block">Features</a>
            <a href="#download" className="rounded-full bg-[#9FEF00] px-5 py-2 text-sm font-bold text-[#080B08] transition-all hover:bg-[#8BDE00] hover:scale-105 hover:shadow-lg hover:shadow-[#9FEF00]/30">
              Download
            </a>
          </div>
        </div>
      </nav>

      <main>
        {/* HERO */}
        <section className="relative min-h-dvh flex flex-col lg:flex-row items-center justify-center gap-10 px-6 pt-28 pb-20 overflow-hidden">
          {/* Background */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#080B08] via-[#0A1A0A] to-[#080B08]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_40%_50%,_#9FEF00_0%,_transparent_60%)] opacity-[0.05]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_60%_50%,_#2563eb_0%,_transparent_60%)] opacity-[0.03]" />
          
          {/* Stadium light effect */}
          <div className="pointer-events-none absolute inset-0 animate-stadium-light bg-gradient-to-r from-transparent via-[#9FEF00] to-transparent blur-3xl" />

          {/* Animated background footballs */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="animate-float-ball absolute -top-10 -left-10 text-7xl opacity-[0.03] select-none">⚽</div>
            <div className="animate-float-ball2 absolute -bottom-10 -right-10 text-6xl opacity-[0.03] select-none">⚽</div>
          </div>

          {/* Hero content */}
          <div className="relative z-10 max-w-xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#9FEF00]/10 border border-[#9FEF00]/20 text-[#9FEF00] text-xs font-semibold mb-6 tracking-wider uppercase backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#9FEF00] animate-pulse" />
              7+ Leagues — Live Now
            </div>

            <h1 className="mb-4 text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl text-white leading-[1.1]">
              Football <span className="bg-gradient-to-r from-[#9FEF00] via-[#B5FF3C] to-[#7AD800] bg-clip-text text-transparent">Eon</span>
            </h1>

            <p className="mb-8 text-base leading-relaxed text-zinc-400 sm:text-lg">
              Live scores, match stats & detailed events from the top European leagues — right on your phone.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              <a href="#download" className="inline-flex items-center gap-2.5 rounded-full bg-[#9FEF00] px-7 py-3.5 font-bold text-[#080B08] transition-all hover:bg-[#8BDE00] hover:scale-105 hover:shadow-xl hover:shadow-[#9FEF00]/30 text-base group">
                <Download className="h-5 w-5 transition group-hover:-translate-y-0.5" />
                Download APK
              </a>
              <a href="#features" className="inline-flex items-center gap-2 rounded-full border border-zinc-700/50 bg-[#131814] px-7 py-3.5 font-semibold text-zinc-300 transition-all hover:bg-[#1A1F1A] hover:border-zinc-600 text-base">
                Explore
                <ChevronRight className="h-4 w-4" />
              </a>
            </div>

            {/* Marquee leagues */}
            <div className="mt-10 overflow-hidden">
              <div className="flex gap-3 animate-marquee whitespace-nowrap">
                {[...leagues, ...leagues].map((l, i) => (
                  <span key={i} className="inline-flex items-center gap-1.5 rounded-full border border-white/5 bg-white/[0.02] px-3 py-1 text-[10px] text-zinc-500">
                    {l.flag} {l.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Phone mockup — auto-rotating carousel */}
          <BannerCarousel />
        </section>

        {/* Stats Bar */}
        <section className="border-y border-[#9FEF00]/8 bg-[#131814]/80">
          <div className="mx-auto grid max-w-4xl grid-cols-2 gap-8 px-6 py-10 sm:grid-cols-4">
            {[
              { value: "7+", label: "Leagues Covered" },
              { value: "30+", label: "Stat Categories" },
              { value: "20MB", label: "App Size" },
              { value: "Free", label: "No Ads / Premium" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl font-black text-[#9FEF00] tracking-tight">{s.value}</div>
                <div className="text-xs text-zinc-500 font-medium mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section id="features" className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#9FEF00_0%,_transparent_60%)] opacity-[0.03]" />
          <div className="mb-16 text-center relative">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#9FEF00]/10 border border-[#9FEF00]/20 text-[#9FEF00] text-xs font-semibold mb-5 tracking-wider uppercase backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5" />
              Features
            </div>
            <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-white">
              Built for the fans
            </h2>
            <p className="mt-3 text-zinc-500 text-base max-w-md mx-auto">
              Everything you need to follow your favorite teams and leagues
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 relative">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.title}
                  className="group rounded-2xl border border-[#9FEF00]/8 bg-[#131814] p-7 transition-all hover:border-[#9FEF00]/25 hover:bg-[#181D18] hover:shadow-lg hover:shadow-[#9FEF00]/5"
                  style={{ viewTransitionName: `feature-${i}` }}
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#9FEF00]/10 text-[#9FEF00] ring-1 ring-[#9FEF00]/20 transition group-hover:bg-[#9FEF00]/15 group-hover:scale-110">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-white">{f.title}</h3>
                  <p className="text-sm leading-relaxed text-zinc-400">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* App Screenshots */}
        <section className="border-y border-[#9FEF00]/8 bg-[#131814]/50">
          <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
            <div className="mb-16 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#9FEF00]/10 border border-[#9FEF00]/20 text-[#9FEF00] text-xs font-semibold mb-5 tracking-wider uppercase backdrop-blur-sm">
                <Star className="w-3.5 h-3.5" />
                Preview
              </div>
              <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-white">
                See it in action
              </h2>
              <p className="mt-3 text-zinc-500 text-base max-w-md mx-auto">
                Three screens that show everything you need
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 justify-items-center">
              {phoneScreens.map((screen, i) => (
                <div key={screen.id} className="flex flex-col items-center gap-4">
                  <PhoneFrame size="preview">
                    {screen.content}
                  </PhoneFrame>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#9FEF00]" />
                    <span className="text-sm font-semibold text-zinc-300">{screen.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leagues */}
        <section className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
          <div className="mb-16 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#9FEF00]/10 border border-[#9FEF00]/20 text-[#9FEF00] text-xs font-semibold mb-5 tracking-wider uppercase backdrop-blur-sm">
              <Star className="w-3.5 h-3.5" />
              Leagues
            </div>
            <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-white">
              Top European leagues
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {leagues.map((l) => (
              <div
                key={l.name}
                className="group flex flex-col items-center gap-3 rounded-2xl border border-[#9FEF00]/8 bg-[#131814] p-6 transition-all hover:border-[#9FEF00]/25 hover:bg-[#181D18]"
              >
                <span className="text-4xl transition group-hover:scale-110 group-hover:-rotate-6">{l.flag}</span>
                <span className="text-sm font-semibold text-zinc-300 text-center leading-tight">{l.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Download CTA */}
        <section id="download" className="relative mx-auto max-w-4xl px-6 py-24 text-center sm:py-32">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#9FEF00_0%,_transparent_60%)] opacity-[0.06]" />
          <div className="relative">
            <div className="mx-auto mb-8 w-20 h-20 rounded-2xl bg-gradient-to-br from-[#9FEF00] to-[#6BB800] shadow-2xl shadow-[#9FEF00]/30 flex items-center justify-center">
              <Download className="h-9 w-9 text-[#080B08]" />
            </div>
            <h2 className="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl text-white">
              Get started now
            </h2>
            <p className="mb-10 text-zinc-400 text-base max-w-lg mx-auto leading-relaxed">
              Download the APK directly. Enable{" "}
              <span className="rounded-lg bg-[#131814] px-2 py-1 text-sm font-mono text-[#9FEF00] ring-1 ring-[#9FEF00]/20">
                Install from Unknown Sources
              </span>{" "}
              in your device settings.
            </p>
            <a
              href="/app-lite-debug.apk"
              download
              className="inline-flex items-center gap-3 rounded-full bg-[#9FEF00] px-10 py-4 text-lg font-black text-[#080B08] shadow-2xl shadow-[#9FEF00]/30 transition-all hover:bg-[#8BDE00] hover:scale-105 hover:shadow-[#9FEF00]/40"
            >
              <Download className="h-6 w-6" />
              Download APK
            </a>
            <div className="mt-6 flex items-center justify-center gap-6 text-sm text-zinc-600">
              <span>Version 1.1.0</span>
              <span className="w-1 h-1 rounded-full bg-zinc-700" />
              <span>Android 8.0+</span>
              <span className="w-1 h-1 rounded-full bg-zinc-700" />
              <span>20 MB</span>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#9FEF00]/8 bg-[#080B08]">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-6 py-10 text-center text-sm text-zinc-600">
          <div className="flex items-center gap-2.5 mb-1">
            <FootballLogoSvg className="w-6 h-6" />
            <span className="font-bold text-white">Football <span className="text-[#9FEF00]">Eon</span></span>
          </div>
          <p>© 2026 Football Eon</p>
          <p className="max-w-lg leading-relaxed text-xs">
            Football Eon uses publicly available data from ESPN API. This app is not affiliated with, endorsed by, or sponsored by ESPN or any sports league. All trademarks belong to their respective owners.
          </p>
        </div>
      </footer>
    </>
  );
}
