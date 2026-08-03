import type { ReactNode } from "react";

const h2 = "mt-8 mb-3 text-lg font-bold text-white";
const p = "text-sm leading-relaxed text-zinc-400";
const li = "text-sm leading-relaxed text-zinc-400";

export function InfoPage({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <>
      <header className="border-b border-[#00B4FF]/8 bg-[#0E0E1C]/60">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-5">
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
      <main id="main" className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
        <h1 className="mb-8 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          {title}
        </h1>
        <div className="space-y-2">{children}</div>
      </main>
      <footer className="border-t border-[#00B4FF]/8 py-8 text-center text-xs text-zinc-500">
        <a href="/" className="text-[#00B4FF] hover:underline">
          © 2026 CriFO
        </a>
      </footer>
    </>
  );
}

export { h2, p, li };
