"use client";

import { useEffect, useState } from "react";
import type { PhoneScreen } from "@/lib/phone-screens";

function PhoneFrame({ children, active }: { children: React.ReactNode; active?: boolean }) {
  return (
    <div className={`relative w-[300px] ${active ? "animate-phone-float" : ""}`}>
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

export default function BannerCarousel({ screens }: { screens: PhoneScreen[] }) {
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((p) => (p + 1) % screens.length), 3000);
    return () => clearInterval(t);
  }, [screens.length]);
  return (
    <div className="relative z-10 shrink-0">
      <div className="absolute -inset-20 bg-[#00B4FF] opacity-[0.03] blur-[100px] rounded-full" />
      <PhoneFrame active>
        <div key={idx}>{screens[idx].content}</div>
      </PhoneFrame>
      <div className="flex justify-center gap-1.5 mt-3">
        {screens.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Show ${screens[i].label} screen`}
            onClick={() => setIdx(i)}
            className={`w-1.5 h-1.5 rounded-full transition-all ${i === idx ? "bg-[#00B4FF] w-3" : "bg-zinc-700"}`}
          />
        ))}
      </div>
    </div>
  );
}
