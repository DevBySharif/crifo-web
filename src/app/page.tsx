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
      {/* Outer ring */}
      <circle cx="60" cy="60" r="56" stroke="url(#limeGrad)" strokeWidth="3" />
      {/* Pentagon */}
      <path
        d="M60 28L78 42L72 64H48L42 42L60 28Z"
        fill="url(#limeGrad)"
        fillOpacity="0.15"
        stroke="url(#limeGrad)"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      {/* Inner hex pattern */}
      <path
        d="M60 45L72 54L68 70H52L48 54L60 45Z"
        fill="url(#limeGrad)"
        fillOpacity="0.1"
        stroke="url(#limeGrad)"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      {/* Star */}
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
        {/* Hero */}
        <section className="relative flex min-h-dvh flex-col items-center justify-center px-6 pt-24 pb-20 text-center overflow-hidden">
          {/* Background effects */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#9FEF00_0%,_transparent_60%)] opacity-[0.06]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,_#131814_0%,_#080B08_70%)]" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjOUZFRjAwIiBmaWxsLW9wYWNpdHk9IjAuMDMiPjxjaXJjbGUgY3g9IjEiIGN5PSIxIiByPSIxIi8+PC9nPjwvc3ZnPg==')] opacity-50" />

          {/* Animated football elements */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            {/* Floating football icons */}
            <div className="animate-float absolute top-[15%] left-[8%] text-3xl opacity-[0.08]">⚽</div>
            <div className="animate-float-delayed absolute top-[25%] right-[10%] text-2xl opacity-[0.06]">⚽</div>
            <div className="animate-float absolute bottom-[20%] left-[15%] text-4xl opacity-[0.05]">⚽</div>
            <div className="animate-float-delayed absolute bottom-[30%] right-[5%] text-3xl opacity-[0.07]">⚽</div>
            {/* Glowing orbs */}
            <div className="animate-pulse-glow absolute top-[30%] left-[20%] w-32 h-32 rounded-full bg-[#9FEF00] blur-[80px] opacity-[0.04]" />
            <div className="animate-pulse-glow absolute top-[40%] right-[20%] w-40 h-40 rounded-full bg-[#8BDE00] blur-[100px] opacity-[0.03]" style={{ animationDelay: "1.5s" }} />
          </div>

          <div className="relative">
            {/* Logo */}
            <div className="mx-auto mb-8 w-28 h-28 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-[#9FEF00] to-[#6BB800] rounded-[32px] blur-xl opacity-30 animate-pulse-glow" />
              <div className="relative w-full h-full rounded-[32px] bg-gradient-to-br from-[#9FEF00] to-[#6BB800] shadow-2xl shadow-[#9FEF00]/30 flex items-center justify-center ring-1 ring-white/10">
                <FootballLogoSvg className="w-16 h-16" />
              </div>
            </div>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#9FEF00]/10 border border-[#9FEF00]/20 text-[#9FEF00] text-xs font-semibold mb-6 tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#9FEF00] animate-pulse" />
              Live Scores — Now Available
            </div>

            {/* Title */}
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

            {/* CTA */}
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
                className="inline-flex items-center gap-2 rounded-full border border-zinc-700/50 bg-[#131814] px-8 py-3.5 font-semibold text-zinc-300 transition-all hover:bg-[#1A1F1A] hover:border-zinc-600 text-base"
              >
                Explore Features
                <ChevronRight className="h-4 w-4" />
              </a>
            </div>

            {/* Leagues */}
            <div className="mt-12 flex flex-wrap justify-center gap-2">
              {leagues.map((l) => (
                <span
                  key={l.name}
                  className="inline-flex items-center gap-2 rounded-xl border border-[#9FEF00]/10 bg-[#131814] px-4 py-2 text-sm text-zinc-400 transition hover:border-[#9FEF00]/30 hover:text-zinc-200"
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

        {/* Stats Bar */}
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
        <section
          id="features"
          className="mx-auto max-w-6xl px-6 py-24 sm:py-32"
        >
          <div className="mb-16 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#9FEF00]/10 border border-[#9FEF00]/20 text-[#9FEF00] text-xs font-semibold mb-5 tracking-wider uppercase">
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
                  <h3 className="mb-2 text-lg font-bold text-white">
                    {f.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-zinc-400">
                    {f.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Leagues Grid */}
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
                  <span className="text-4xl transition group-hover:scale-110">
                    {l.flag}
                  </span>
                  <span className="text-sm font-semibold text-zinc-300 text-center leading-tight">
                    {l.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Download CTA */}
        <section
          id="download"
          className="relative mx-auto max-w-4xl px-6 py-24 text-center sm:py-32"
        >
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
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-6 py-10 text-center text-sm text-zinc-600">
          <div className="flex items-center gap-2.5 mb-1">
            <FootballLogoSvg className="w-6 h-6" />
            <span className="font-bold text-white">Football <span className="text-[#9FEF00]">Eon</span></span>
          </div>
          <p>© 2026 Football Eon. Not affiliated with ESPN or any football league.</p>
        </div>
      </footer>
    </>
  );
}
