import {
  Download,
  BarChart3,
  Moon,
  Zap,
  Shield,
  Sparkles,
  ChevronRight,
  Star,
} from "lucide-react";

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
    desc: "16 MB only, optimized for quick loading & minimal battery usage",
  },
];

const leagues = [
  { name: "Premier League", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿" },
  { name: "La Liga", flag: "🇪🇸" },
  { name: "Serie A", flag: "🇮🇹" },
  { name: "Bundesliga", flag: "🇩🇪" },
  { name: "Ligue 1", flag: "🇫🇷" },
  { name: "Liga Portugal", flag: "🇵🇹" },
];

const stats = [
  { value: "7+", label: "Leagues" },
  { value: "30+", label: "Stat Categories" },
  { value: "16MB", label: "App Size" },
  { value: "Free", label: "No Ads" },
];

function FootballLogoSvg({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <circle cx="60" cy="60" r="56" stroke="url(#limeGrad)" strokeWidth="3" />
      <path
        d="M60 28L78 42L72 64H48L42 42L60 28Z"
        fill="url(#limeGrad)"
        fillOpacity="0.15"
        stroke="url(#limeGrad)"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M60 45L72 54L68 70H52L48 54L60 45Z"
        fill="url(#limeGrad)"
        fillOpacity="0.1"
        stroke="url(#limeGrad)"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M60 6L63 14L72 14L65 19L68 28L60 23L52 28L55 19L48 14L57 14L60 6Z"
        fill="#9FEF00"
        opacity="0.6"
      />
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

export default function Home() {
  return (
    <>
      {/* Nav */}
      <nav className="fixed top-0 inset-x-0 z-50 border-b border-[#9FEF00]/15 bg-[#080B08]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 h-16">
          <div className="flex items-center gap-3">
            <FootballLogoSvg className="w-9 h-9" />
            <span className="text-lg font-extrabold tracking-tight text-white">
              Football <span className="text-[#9FEF00]">Eon</span>
            </span>
          </div>
          <a
            href="#download"
            className="rounded-full bg-[#9FEF00] px-6 py-2 text-sm font-bold text-[#080B08] transition-all hover:bg-[#8BDE00] hover:scale-105 hover:shadow-lg hover:shadow-[#9FEF00]/30"
          >
            Download
          </a>
        </div>
      </nav>

      <main>
        {/* HERO — Animated Football Pitch */}
        <section className="relative flex min-h-dvh flex-col items-center justify-center px-6 pt-24 pb-20 text-center overflow-hidden">
          {/* Pitch background */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#080B08] via-[#0A1A0A] to-[#080B08]" />

          {/* Football pitch pattern overlay */}
          <svg
            className="absolute inset-0 w-full h-full opacity-[0.04]"
            viewBox="0 0 800 600"
            preserveAspectRatio="xMidYMid slice"
          >
            {/* Pitch outline */}
            <rect x="50" y="30" width="700" height="540" fill="none" stroke="#9FEF00" strokeWidth="1" />
            {/* Centre line */}
            <line x1="400" y1="30" x2="400" y2="570" stroke="#9FEF00" strokeWidth="0.8" />
            {/* Centre circle */}
            <circle cx="400" cy="300" r="60" fill="none" stroke="#9FEF00" strokeWidth="0.8" />
            {/* Centre spot */}
            <circle cx="400" cy="300" r="4" fill="#9FEF00" />
            {/* Left penalty area */}
            <rect x="50" y="195" width="120" height="210" fill="none" stroke="#9FEF00" strokeWidth="0.8" />
            {/* Right penalty area */}
            <rect x="630" y="195" width="120" height="210" fill="none" stroke="#9FEF00" strokeWidth="0.8" />
            {/* Left goal */}
            <rect x="40" y="240" width="15" height="120" fill="none" stroke="#9FEF00" strokeWidth="1.2" />
            {/* Right goal */}
            <rect x="745" y="240" width="15" height="120" fill="none" stroke="#9FEF00" strokeWidth="1.2" />
          </svg>

          {/* Stadium light sweep */}
          <div className="pointer-events-none absolute inset-0 animate-stadium-light bg-gradient-to-r from-transparent via-[#9FEF00] to-transparent blur-3xl" />

          {/* Floating animated footballs */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="animate-float1 absolute top-[20%] left-[5%] text-5xl opacity-[0.06] select-none">⚽</div>
            <div className="animate-float2 absolute top-[60%] right-[8%] text-4xl opacity-[0.05] select-none">⚽</div>
            <div className="animate-float3 absolute bottom-[15%] left-[50%] text-5xl opacity-[0.04] select-none">⚽</div>
          </div>

          {/* Animated glow behind logo */}
          <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#9FEF00] blur-[150px] opacity-[0.05] animate-glow-pulse" />

          <div className="relative z-10">
            <div className="mx-auto mb-8 w-28 h-28 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#9FEF00] to-[#6BB800] rounded-[32px] blur-xl opacity-30 animate-glow-pulse" />
              <div className="relative w-full h-full rounded-[32px] bg-gradient-to-br from-[#9FEF00] to-[#6BB800] shadow-2xl shadow-[#9FEF00]/30 flex items-center justify-center ring-1 ring-white/10">
                <FootballLogoSvg className="w-16 h-16" />
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#9FEF00]/10 border border-[#9FEF00]/20 text-[#9FEF00] text-xs font-semibold mb-6 tracking-wider uppercase backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#9FEF00] animate-pulse" />
              Live Scores — Now Available
            </div>

            <h1 className="mb-4 text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl text-white leading-[1.1]">
              Football
              <br />
              <span className="bg-gradient-to-r from-[#9FEF00] via-[#B5FF3C] to-[#7AD800] bg-clip-text text-transparent">
                Eon
              </span>
            </h1>

            <p className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg">
              Live scores, match stats & detailed events from the top European
              leagues — right on your phone.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#download"
                className="inline-flex items-center gap-2.5 rounded-full bg-[#9FEF00] px-8 py-3.5 font-bold text-[#080B08] transition-all hover:bg-[#8BDE00] hover:scale-105 hover:shadow-xl hover:shadow-[#9FEF00]/30 text-base group"
              >
                <Download className="h-5 w-5 transition group-hover:-translate-y-0.5" />
                Download APK
              </a>
              <a
                href="#features"
                className="inline-flex items-center gap-2 rounded-full border border-zinc-700/50 bg-[#131814] px-8 py-3.5 font-semibold text-zinc-300 transition-all hover:bg-[#1A1F1A] hover:border-zinc-600 text-base backdrop-blur-sm"
              >
                Explore Features
                <ChevronRight className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-12 flex flex-wrap justify-center gap-2">
              {leagues.map((l) => (
                <span
                  key={l.name}
                  className="inline-flex items-center gap-2 rounded-xl border border-[#9FEF00]/10 bg-[#131814]/80 px-4 py-2 text-sm text-zinc-400 transition hover:border-[#9FEF00]/30 hover:text-zinc-200 backdrop-blur-sm"
                >
                  <span className="text-base">{l.flag}</span>
                  <span className="hidden sm:inline">{l.name}</span>
                  <span className="sm:hidden">{l.name.slice(0, 12)}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 animate-bounce">
            <div className="w-5 h-8 rounded-full border border-zinc-700 flex justify-center pt-1.5">
              <div className="w-1 h-2 rounded-full bg-zinc-500" />
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="border-y border-[#9FEF00]/10 bg-[#131814]">
          <div className="mx-auto grid max-w-4xl grid-cols-2 gap-8 px-6 py-10 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl font-black text-[#9FEF00] tracking-tight">
                  {s.value}
                </div>
                <div className="text-sm text-zinc-500 font-medium mt-1">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section id="features" className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
          <div className="mb-16 text-center">
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
          <div className="grid gap-5 sm:grid-cols-2">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.title}
                  className="group rounded-2xl border border-[#9FEF00]/8 bg-[#131814] p-7 transition-all hover:border-[#9FEF00]/25 hover:bg-[#181D18] hover:shadow-lg hover:shadow-[#9FEF00]/5"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#9FEF00]/10 text-[#9FEF00] ring-1 ring-[#9FEF00]/20 transition group-hover:bg-[#9FEF00]/15">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-white">{f.title}</h3>
                  <p className="text-sm leading-relaxed text-zinc-400">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Leagues */}
        <section className="border-y border-[#9FEF00]/10 bg-[#131814]/50">
          <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
            <div className="mb-16 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#9FEF00]/10 border border-[#9FEF00]/20 text-[#9FEF00] text-xs font-semibold mb-5 tracking-wider uppercase">
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
                  <span className="text-4xl transition group-hover:scale-110">{l.flag}</span>
                  <span className="text-sm font-semibold text-zinc-300 text-center leading-tight">{l.name}</span>
                </div>
              ))}
            </div>
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
              <span>Version 1.0.0</span>
              <span className="w-1 h-1 rounded-full bg-zinc-700" />
              <span>Android 8.0+</span>
              <span className="w-1 h-1 rounded-full bg-zinc-700" />
              <span>16 MB</span>
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
          <p className="max-w-lg leading-relaxed">
            Football Eon uses publicly available data from ESPN API. This app is not
            affiliated with, endorsed by, or sponsored by ESPN or any sports league.
            All data displayed is for informational purposes only.
          </p>
        </div>
      </footer>
    </>
  );
}
