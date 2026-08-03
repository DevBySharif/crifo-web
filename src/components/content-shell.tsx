import type { ReactNode } from "react";

export function ContentShell({
  children,
  wide = false,
}: {
  children: ReactNode;
  wide?: boolean;
}) {
  return (
    <>
      <header className="border-b border-[#00B4FF]/8 bg-[#0E0E1C]/60">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a href="/" className="flex items-center gap-2.5">
            <img
              src="/brand/crifo-logo-512.png"
              alt="CriFO logo"
              width={32}
              height={32}
              className="rounded-[22%]"
            />
            <span className="font-bold text-white">
              Cri<span className="text-[#00B4FF]">FO</span>
            </span>
          </a>
          <a
            href="/"
            className="text-sm font-semibold text-[#00B4FF] hover:underline"
          >
            Back to Home
          </a>
        </div>
      </header>
      <main
        id="main"
        className={
          wide
            ? "mx-auto max-w-6xl px-6 py-12 sm:py-16"
            : "mx-auto max-w-3xl px-6 py-12 sm:py-16"
        }
      >
        {children}
      </main>
      <footer className="border-t border-[#00B4FF]/8 bg-[#06060E]">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-6 py-10 text-center text-sm text-zinc-400">
          <div className="flex items-center gap-2.5 mb-1">
            <img
              src="/brand/crifo-logo-512.png"
              alt=""
              width={24}
              height={24}
              className="rounded-[22%]"
            />
            <span className="font-bold text-white">
              Cri<span className="text-[#00B4FF]">FO</span>
            </span>
          </div>
          <nav
            aria-label="Footer"
            className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm"
          >
            <a href="/" className="text-zinc-400 transition-colors hover:text-white">
              Home
            </a>
            <a href="/leagues" className="text-zinc-400 transition-colors hover:text-white">
              Leagues
            </a>
            <a href="/blog" className="text-zinc-400 transition-colors hover:text-white">
              Blog
            </a>
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
        </div>
      </footer>
    </>
  );
}
