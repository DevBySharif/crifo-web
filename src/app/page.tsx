import {
  BarChart3Icon,
  MoonIcon,
  ZapIcon,
  ShieldIcon,
  SparklesIcon,
  ChevronRightIcon,
  StarIcon,
  HelpCircleIcon,
  DownloadIcon,
} from "@/components/icons";
import AnnouncementBanner from "@/components/announcement-banner";
import BannerCarousel from "@/components/banner-carousel";
import { DownloadButton, DownloadMeta } from "@/components/download";
import SiteAnalytics from "@/components/site-analytics";
import { phoneScreens } from "@/lib/phone-screens";
import { SITE_URL, TELEGRAM_URL, APK_PATH } from "@/lib/site";

const features = [
  {
    icon: BarChart3Icon,
    title: "Live Scores — Worldwide",
    desc: "100+ leagues from every continent with live minutes, lineups, stats, H2H & ball-by-ball commentary",
  },
  {
    icon: ShieldIcon,
    title: "Live TV Built In",
    desc: "1000+ live TV channels streaming inside the app — tap a match's channel and watch instantly",
  },
  {
    icon: MoonIcon,
    title: "Dark & Light Mode",
    desc: "Premium electric-blue design with a one-tap theme switch that remembers your choice",
  },
  {
    icon: ZapIcon,
    title: "Fast & Light",
    desc: "Tuned for quick loading, smooth scrolling & minimal battery usage",
  },
];

const leagues = [
  { name: "World Cup", flag: "🏆", color: "#8a1538" },
  { name: "Premier League", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿", color: "#38003c" },
  { name: "Champions League", flag: "⭐", color: "#0e1e5b" },
  { name: "La Liga", flag: "🇪🇸", color: "#febe00" },
  { name: "Serie A", flag: "🇮🇹", color: "#004694" },
  { name: "Bundesliga", flag: "🇩🇪", color: "#d20515" },
];

const faqs = [
  {
    q: "Is CriFO free to use?",
    a: "Yes. CriFO is completely free — no ads, no premium tier, no in-app purchases. Every feature, including live TV, is unlocked from the first launch.",
  },
  {
    q: "What leagues and competitions does CriFO cover?",
    a: "100+ leagues and competitions worldwide — Premier League, La Liga, Serie A, Bundesliga, Champions League, the World Cup, and many domestic leagues across Asia, Africa, and the Americas.",
  },
  {
    q: "Does CriFO have live TV channels?",
    a: "Yes — 1000+ live TV channels are built into the app, covering sports, news, and entertainment. Tap a live match's \"Where to watch\" channel to start streaming instantly.",
  },
  {
    q: "How do I install the CriFO APK?",
    a: "Download the APK from the button above, open it, and enable \"Install from Unknown Sources\" if prompted. CriFO requires Android 8.0 or newer.",
  },
  {
    q: "Is CriFO available on the Google Play Store?",
    a: "Not currently — CriFO is distributed as a direct APK download from this website so updates can ship immediately without store review delays.",
  },
  {
    q: "Is the CriFO APK safe to install?",
    a: "Yes. CriFO is built by a small independent team, is free with no ads, and does not request unnecessary permissions. The APK is served directly from this website over HTTPS with an immutable checksum. You can verify the version and size on the download page before installing.",
  },
  {
    q: "How do I update the app?",
    a: "Download the latest APK from this website — updates ship instantly without Play Store review delays. The app shows the installed version, and you can check the current version and size in the download section on the homepage.",
  },
  {
    q: "Does CriFO work on my phone?",
    a: "CriFO requires Android 8.0 (Oreo) or newer. It is lightweight and works on most modern Android phones and tablets, with a dark and light theme for comfortable use.",
  },
  {
    q: "Is live TV included for free?",
    a: "Yes — 1000+ live TV channels are included with no subscription. Tap a live match's \"Where to watch\" channel to stream instantly. Availability can vary by region and network.",
  },
];

function FootballLogoSvg({ className }: { className?: string }) {
  // eslint-disable-next-line @next/next/no-img-element
  return <img src="/brand/crifo-logo-512.png" alt="CriFO logo" width={512} height={512} className={`${className} rounded-[22%]`} />;
}

const softwareJsonLd = {
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
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/brand/crifo-logo-512.png`,
    },
  },
  sameAs: [TELEGRAM_URL],
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "CriFO",
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/brand/crifo-logo-512.png`,
    width: 512,
    height: 512,
  },
  sameAs: [TELEGRAM_URL],
  description:
    "CriFO is a free Android app for live football scores from 100+ leagues with 1000+ built-in live TV channels.",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    url: TELEGRAM_URL,
    availableLanguage: "English",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <SiteAnalytics />

      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:rounded-full focus:bg-[#00B4FF] focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-[#06060E]"
      >
        Skip to content
      </a>

      {/* Announcement banner + Nav (single fixed stack) */}
      <header className="fixed top-0 inset-x-0 z-50">
        <AnnouncementBanner />
        <nav className="border-b border-[#00B4FF]/10 bg-[#06060E]/80 backdrop-blur-2xl">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 h-16">
            <div className="flex items-center gap-3">
              <FootballLogoSvg className="w-8 h-8" />
              <span className="text-base font-extrabold tracking-tight text-white">
                Cri<span className="text-[#00B4FF]">FO</span>
              </span>
            </div>
            <div className="flex items-center gap-3">
              <a href="#features" className="text-sm text-zinc-400 hover:text-white transition hidden sm:block">Features</a>
              <a href="#faq" className="text-sm text-zinc-400 hover:text-white transition hidden sm:block">FAQ</a>
              <a href="#download" className="rounded-full bg-[#00B4FF] px-5 py-2 text-sm font-bold text-[#06060E] transition-all hover:bg-[#00A2E8] hover:scale-105 hover:shadow-lg hover:shadow-[#00B4FF]/30">
                Download
              </a>
            </div>
          </div>
        </nav>
      </header>

      <main id="main">
        {/* HERO */}
        <section className="relative min-h-dvh flex flex-col lg:flex-row items-center justify-center gap-10 px-6 pt-28 pb-20 overflow-hidden">
          {/* Background */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#06060E] via-[#0A0F22] to-[#06060E]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_40%_50%,_#00B4FF_0%,_transparent_60%)] opacity-[0.05]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_60%_50%,_#2563eb_0%,_transparent_60%)] opacity-[0.03]" />

          {/* Stadium light effect */}
          <div className="pointer-events-none absolute inset-0 animate-stadium-light bg-gradient-to-r from-transparent via-[#00B4FF] to-transparent blur-3xl" />

          {/* Animated background footballs */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="animate-float-ball absolute -top-10 -left-10 text-7xl opacity-[0.03] select-none">⚽</div>
            <div className="animate-float-ball2 absolute -bottom-10 -right-10 text-6xl opacity-[0.03] select-none">⚽</div>
          </div>

          {/* Hero content */}
          <div className="relative z-10 max-w-xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00B4FF]/10 border border-[#00B4FF]/20 text-[#00B4FF] text-xs font-semibold mb-6 tracking-wider uppercase backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00B4FF] animate-pulse" />
              100+ Leagues + Live TV
            </div>

            <h1 className="mb-4 text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl text-white leading-[1.1]">
              Cri<span className="bg-gradient-to-r from-[#00B4FF] via-[#33C9FF] to-[#0077FF] bg-clip-text text-transparent">FO</span>
            </h1>

            <p className="mb-8 text-base leading-relaxed text-zinc-400 sm:text-lg">
              Live football scores from 100+ leagues worldwide, match stats & built-in live TV — all in one free Android app.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              <DownloadButton variant="hero" />
              <a href="#features" className="inline-flex items-center gap-2 rounded-full border border-zinc-700/50 bg-[#0E0E1C] px-7 py-3.5 font-semibold text-zinc-300 transition-all hover:bg-[#16172E] hover:border-zinc-600 text-base">
                Explore
                <ChevronRightIcon className="h-4 w-4" />
              </a>
            </div>

            {/* Marquee leagues (decorative, repeats content for the animation) */}
            <div aria-hidden="true" className="mt-10 overflow-hidden">
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
          <BannerCarousel screens={phoneScreens} />
        </section>

        {/* Stats Bar */}
        <section className="border-y border-[#00B4FF]/8 bg-[#0E0E1C]/80">
          <div className="mx-auto grid max-w-4xl grid-cols-2 gap-8 px-6 py-10 sm:grid-cols-4">
            {[
              { value: "100+", label: "Leagues Covered" },
              { value: "1000+", label: "Live TV Channels" },
              { value: "68MB", label: "App Size" },
              { value: "Free", label: "No Ads / Premium" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-3xl font-black text-[#00B4FF] tracking-tight">{s.value}</div>
                <div className="text-xs text-zinc-400 font-medium mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section id="features" className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#00B4FF_0%,_transparent_60%)] opacity-[0.03]" />
          <div className="mb-16 text-center relative">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00B4FF]/10 border border-[#00B4FF]/20 text-[#00B4FF] text-xs font-semibold mb-5 tracking-wider uppercase backdrop-blur-sm">
              <SparklesIcon className="w-3.5 h-3.5" />
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
                  className="group rounded-2xl border border-[#00B4FF]/8 bg-[#0E0E1C] p-7 transition-all hover:border-[#00B4FF]/25 hover:bg-[#151632] hover:shadow-lg hover:shadow-[#00B4FF]/5"
                  style={{ viewTransitionName: `feature-${i}` }}
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#00B4FF]/10 text-[#00B4FF] ring-1 ring-[#00B4FF]/20 transition group-hover:bg-[#00B4FF]/15 group-hover:scale-110">
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
        <section className="border-y border-[#00B4FF]/8 bg-[#0E0E1C]/50">
          <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
            <div className="mb-16 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00B4FF]/10 border border-[#00B4FF]/20 text-[#00B4FF] text-xs font-semibold mb-5 tracking-wider uppercase backdrop-blur-sm">
                <StarIcon className="w-3.5 h-3.5" />
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
              {phoneScreens.map((screen) => (
                <div key={screen.id} className="flex flex-col items-center gap-4">
                  <PhoneFrameStatic>
                    {screen.content}
                  </PhoneFrameStatic>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00B4FF]" />
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
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00B4FF]/10 border border-[#00B4FF]/20 text-[#00B4FF] text-xs font-semibold mb-5 tracking-wider uppercase backdrop-blur-sm">
              <StarIcon className="w-3.5 h-3.5" />
              Leagues
            </div>
            <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-white">
              World Cup to your local league
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {leagues.map((l) => (
              <div
                key={l.name}
                className="group flex flex-col items-center gap-3 rounded-2xl border border-[#00B4FF]/8 bg-[#0E0E1C] p-6 transition-all hover:border-[#00B4FF]/25 hover:bg-[#151632]"
              >
                <span className="text-4xl transition group-hover:scale-110 group-hover:-rotate-6">{l.flag}</span>
                <span className="text-sm font-semibold text-zinc-300 text-center leading-tight">{l.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="border-y border-[#00B4FF]/8 bg-[#0E0E1C]/50">
          <div className="mx-auto max-w-3xl px-6 py-24 sm:py-32">
            <div className="mb-16 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00B4FF]/10 border border-[#00B4FF]/20 text-[#00B4FF] text-xs font-semibold mb-5 tracking-wider uppercase backdrop-blur-sm">
                <HelpCircleIcon className="w-3.5 h-3.5" />
                FAQ
              </div>
              <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl text-white">
                Frequently asked questions
              </h2>
            </div>
            <div className="space-y-4">
              {faqs.map((f) => (
                <details
                  key={f.q}
                  className="group rounded-2xl border border-[#00B4FF]/8 bg-[#0E0E1C] p-6 open:border-[#00B4FF]/25"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-white">
                    {f.q}
                    <ChevronRightIcon className="h-4 w-4 shrink-0 text-[#00B4FF] transition-transform group-open:rotate-90" />
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-400">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Download CTA */}
        <section id="download" className="relative mx-auto max-w-4xl px-6 py-24 text-center sm:py-32">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#00B4FF_0%,_transparent_60%)] opacity-[0.06]" />
          <div className="relative">
            <div className="mx-auto mb-8 w-20 h-20 rounded-2xl bg-gradient-to-br from-[#00B4FF] to-[#0077FF] shadow-2xl shadow-[#00B4FF]/30 flex items-center justify-center">
              <DownloadIcon className="h-9 w-9 text-[#06060E]" />
            </div>
            <h2 className="mb-4 text-4xl font-extrabold tracking-tight sm:text-5xl text-white">
              Get started now
            </h2>
            <p className="mb-10 text-zinc-400 text-base max-w-lg mx-auto leading-relaxed">
              Download the APK directly. Enable{" "}
              <span className="rounded-lg bg-[#0E0E1C] px-2 py-1 text-sm font-mono text-[#00B4FF] ring-1 ring-[#00B4FF]/20">
                Install from Unknown Sources
              </span>{" "}
              in your device settings.
            </p>
            <DownloadButton variant="cta" />
            <DownloadMeta />
            <p className="mt-4 text-sm text-zinc-500">
              Need help or found a bug?{" "}
              <a
                href={TELEGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#00B4FF] hover:underline"
              >
                Join our Telegram
              </a>
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#00B4FF]/8 bg-[#06060E]">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-6 py-10 text-center text-sm text-zinc-400">
          <div className="flex items-center gap-2.5 mb-1">
            <FootballLogoSvg className="w-6 h-6" />
            <span className="font-bold text-white">Cri<span className="text-[#00B4FF]">FO</span></span>
          </div>
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[#00B4FF] hover:underline"
          >
            Telegram Support
          </a>
          <nav aria-label="Footer" className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm">
            <a href="/about" className="text-zinc-400 transition-colors hover:text-white">
              About
            </a>
            <a href="/contact" className="text-zinc-400 transition-colors hover:text-white">
              Contact
            </a>
            <a href="/privacy" className="text-zinc-400 transition-colors hover:text-white">
              Privacy Policy
            </a>
            <a href="/terms" className="text-zinc-400 transition-colors hover:text-white">
              Terms
            </a>
          </nav>
          <p>© 2026 CriFO</p>
          <p className="max-w-lg leading-relaxed text-xs">
            CriFO uses publicly available football data from public sports APIs. This app is not affiliated with, endorsed by, or sponsored by ESPN or any sports league. All trademarks belong to their respective owners.
          </p>
        </div>
      </footer>
    </>
  );
}

function PhoneFrameStatic({ children }: { children: React.ReactNode }) {
  return (
    <div aria-hidden="true" className="relative w-[300px]">
      <div className="relative rounded-[32px] bg-zinc-900 p-2 shadow-2xl shadow-black/60 ring-1 ring-white/10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-b-xl z-10 flex items-center justify-center gap-2">
          <div className="w-2 h-2 rounded-full bg-zinc-800" />
        </div>
        <div className="rounded-[24px] bg-[#06060E] overflow-hidden relative">
          <div className="flex items-center justify-between px-5 pt-3 pb-1 text-[10px] text-white/60 bg-[#06060E] sticky top-0 z-10">
            <span className="font-semibold">9:41</span>
            <div className="flex items-center gap-1">
              <div className="w-4 h-2.5 rounded-sm border border-white/30 relative"><div className="absolute inset-0.5 rounded-sm bg-white/40" /></div>
              <span className="text-xs">📶</span>
            </div>
          </div>
          <div className="overflow-y-auto scrollbar-hide h-[480px]">{children}</div>
        </div>
      </div>
      <div className="absolute inset-0 rounded-[32px] bg-gradient-to-t from-white/[0.03] to-transparent pointer-events-none" />
    </div>
  );
}

