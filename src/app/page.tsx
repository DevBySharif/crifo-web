import { Download, BarChart3, Moon, Zap, Trophy, Shield } from "lucide-react";

const features = [
  {
    icon: BarChart3,
    title: "Live Scores",
    desc: "Premier League, La Liga, Serie A, Bundesliga, Ligue 1 & more — real-time updates",
  },
  {
    icon: Shield,
    title: "Match Details",
    desc: "Stats, goals, cards, substitutions — powered by ESPN API",
  },
  {
    icon: Moon,
    title: "Dark Theme",
    desc: "Easy on the eyes, beautiful dark mode throughout",
  },
  {
    icon: Zap,
    title: "Fast & Light",
    desc: "16 MB only, optimised for quick loading & battery saving",
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
  { value: "7+", label: "Leagues Covered" },
  { value: "30+", label: "Stat Categories" },
  { value: "16MB", label: "App Size" },
  { value: "Free", label: "No Ads" },
];

export default function Home() {
  return (
    <>
      {/* Nav */}
      <nav className="fixed top-0 inset-x-0 z-50 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-lg">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 h-14">
          <span className="flex items-center gap-2 text-lg font-bold tracking-tight">
            <span className="text-xl">⚽</span> Football Eon
          </span>
          <a
            href="#download"
            className="rounded-full bg-emerald-600 px-5 py-1.5 text-sm font-semibold transition hover:bg-emerald-500"
          >
            Download
          </a>
        </div>
      </nav>

      <main>
        {/* Hero */}
        <section className="relative flex min-h-dvh flex-col items-center justify-center px-6 pt-20 pb-16 text-center overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(16,185,129,0.12)_0%,_transparent_60%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(59,130,246,0.08)_0%,_transparent_50%)]" />
          <div className="relative">
            <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-[28px] bg-gradient-to-br from-emerald-500 to-emerald-700 shadow-2xl shadow-emerald-500/25">
              <span className="text-5xl">⚽</span>
            </div>
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Football
              <span className="bg-gradient-to-r from-emerald-400 to-emerald-200 bg-clip-text text-transparent">
                {" "}Eon
              </span>
            </h1>
            <p className="mx-auto mb-8 max-w-lg text-base leading-relaxed text-zinc-400 sm:text-lg">
              Live scores, match stats & detailed events from the top European
              leagues — right on your phone.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="#download"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-7 py-3 font-semibold transition hover:bg-emerald-500 hover:scale-[1.03]"
              >
                <Download className="h-5 w-5" />
                Download APK
              </a>
              <a
                href="#features"
                className="inline-flex items-center gap-2 rounded-full border border-zinc-700 bg-zinc-900 px-7 py-3 font-semibold transition hover:bg-zinc-800"
              >
                Learn More
              </a>
            </div>
            <div className="mt-10 flex flex-wrap justify-center gap-1.5">
              {leagues.map((l) => (
                <span
                  key={l.name}
                  className="inline-flex items-center gap-1.5 rounded-full border border-zinc-800 bg-zinc-900/60 px-3.5 py-1.5 text-xs text-zinc-400"
                >
                  {l.flag} {l.name}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="border-y border-zinc-800 bg-zinc-900/50">
          <div className="mx-auto grid max-w-3xl grid-cols-2 gap-8 px-6 py-12 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-2xl font-bold text-emerald-400">
                  {s.value}
                </div>
                <div className="text-sm text-zinc-500">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section
          id="features"
          className="mx-auto max-w-5xl px-6 py-20 sm:py-28"
        >
          <div className="mb-14 text-center">
            <span className="mb-3 inline-block rounded-full bg-emerald-950 px-4 py-1 text-xs font-semibold text-emerald-400 ring-1 ring-emerald-800/50">
              Features
            </span>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Everything a football fan needs
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.title}
                  className="group rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6 transition hover:border-zinc-700 hover:bg-zinc-900"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-950 text-emerald-400 ring-1 ring-emerald-800/50">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mb-1.5 text-lg font-semibold">{f.title}</h3>
                  <p className="text-sm leading-relaxed text-zinc-400">
                    {f.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Screenshots */}
        <section className="border-y border-zinc-800 bg-zinc-900/30">
          <div className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
            <div className="mb-14 text-center">
              <span className="mb-3 inline-block rounded-full bg-zinc-800 px-4 py-1 text-xs font-semibold text-zinc-400 ring-1 ring-zinc-700/50">
                Preview
              </span>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                See it in action
              </h2>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="flex aspect-[9/16] items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-900 text-6xl text-zinc-700"
                >
                  📱
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Download CTA */}
        <section
          id="download"
          className="mx-auto max-w-3xl px-6 py-20 text-center sm:py-28"
        >
          <div className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-700 shadow-xl shadow-emerald-500/20">
            <Download className="h-7 w-7 text-white" />
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Get Football Eon
          </h2>
          <p className="mb-8 text-zinc-400">
            Download the APK directly. Enable{" "}
            <span className="rounded bg-zinc-800 px-1.5 py-0.5 text-sm font-mono text-zinc-300">
              Install from Unknown Sources
            </span>{" "}
            in your device settings.
          </p>
          <a
            href="/app-lite-debug.apk"
            download
            className="inline-flex items-center gap-3 rounded-full bg-emerald-600 px-10 py-4 text-lg font-bold shadow-xl shadow-emerald-600/25 transition hover:bg-emerald-500 hover:scale-[1.04]"
          >
            <Download className="h-6 w-6" />
            Download APK
          </a>
          <p className="mt-4 text-sm text-zinc-600">
            Version 1.0.0 &bull; Android 8.0+ &bull; 16 MB
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-800 bg-zinc-950">
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-2 px-6 py-8 text-center text-sm text-zinc-600">
          <p>© 2026 Football Eon</p>
          <p>
            Football Eon is not affiliated with ESPN or any football league. All
            trademarks belong to their respective owners.
          </p>
        </div>
      </footer>
    </>
  );
}
