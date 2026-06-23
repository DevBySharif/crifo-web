import { Download, BarChart3, Moon, Zap, Shield, Sparkles, ChevronRight } from "lucide-react";

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
    desc: "Premium dark interface with #9FEF00 lime accents, easy on the eyes",
  },
  {
    icon: Zap,
    title: "Fast & Light",
    desc: "16 MB only, optimized for quick loading & minimal battery usage",
  },
];

const leagues = [
  { name: "Premier League", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", badge: "PR" },
  { name: "La Liga", flag: "🇪🇸", badge: "LL" },
  { name: "Serie A", flag: "🇮🇹", badge: "SA" },
  { name: "Bundesliga", flag: "🇩🇪", badge: "BL" },
  { name: "Ligue 1", flag: "🇫🇷", badge: "L1" },
  { name: "Liga Portugal", flag: "🇵🇹", badge: "LP" },
];

const stats = [
  { value: "7+", label: "Leagues" },
  { value: "30+", label: "Stat Categories" },
  { value: "16MB", label: "App Size" },
  { value: "Free", label: "No Ads" },
];

export default function Home() {
  return (
    <>
      {/* Nav */}
      <nav className="fixed top-0 inset-x-0 z-50 border-b border-[#9FEF00]/20 bg-[#080B08]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 h-16">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-[#9FEF00] to-[#6BB800] shadow-lg shadow-[#9FEF00]/20">
              <span className="text-lg">⚽</span>
            </div>
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
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#9FEF00_0%,_transparent_60%)] opacity-[0.08]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,_#131814_0%,_#080B08_70%)]" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjOUZFRjAwIiBmaWxsLW9wYWNpdHk9IjAuMDMiPjxjaXJjbGUgY3g9IjEiIGN5PSIxIiByPSIxIi8+PC9nPjwvc3ZnPg==')] opacity-50" />
          <div className="relative">
            <div className="mx-auto mb-8 w-28 h-28 rounded-[32px] bg-gradient-to-br from-[#9FEF00] to-[#6BB800] shadow-2xl shadow-[#9FEF00]/30 flex items-center justify-center ring-1 ring-white/10">
              <span className="text-5xl drop-shadow-lg">⚽</span>
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#9FEF00]/10 border border-[#9FEF00]/20 text-[#9FEF00] text-xs font-semibold mb-6 tracking-wider uppercase">
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
                className="inline-flex items-center gap-2.5 rounded-full bg-[#9FEF00] px-8 py-3.5 font-bold text-[#080B08] transition-all hover:bg-[#8BDE00] hover:scale-105 hover:shadow-xl hover:shadow-[#9FEF00]/30 text-base"
              >
                <Download className="h-5 w-5" />
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
            <div className="mt-12 flex flex-wrap justify-center gap-2">
              {leagues.map((l) => (
                <span
                  key={l.name}
                  className="inline-flex items-center gap-2 rounded-xl border border-[#9FEF00]/10 bg-[#131814] px-4 py-2 text-sm text-zinc-400 transition hover:border-[#9FEF00]/30 hover:text-zinc-200"
                >
                  <span className="text-base">{l.flag}</span>
                  <span className="hidden sm:inline">{l.name}</span>
                  <span className="sm:hidden">{l.badge}</span>
                </span>
              ))}
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
          <div className="flex items-center gap-2 text-zinc-500">
            <span className="font-bold text-white">Football <span className="text-[#9FEF00]">Eon</span></span>
          </div>
          <p>© 2026 Football Eon. Not affiliated with ESPN or any football league.</p>
        </div>
      </footer>
    </>
  );
}
