import type { ReactNode } from "react";

export interface PhoneScreen {
  id: string;
  label: string;
  content: ReactNode;
}

export const phoneScreens: PhoneScreen[] = [
  {
    id: "home",
    label: "Home",
    content: (
      <div className="p-4 text-left text-sm">
        <div className="flex items-center justify-between mb-4">
          <div className="font-extrabold text-[#00B4FF] text-lg tracking-wide">CriFO</div>
          <div className="flex items-center gap-2">
            <span className="text-[9px] bg-red-500/15 text-red-400 border border-red-500/30 px-2.5 py-1 rounded-full font-bold">● LIVE</span>
            <span className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[11px]">☀</span>
          </div>
        </div>
        <div className="flex items-center gap-1.5 mb-3">
          <span className="text-red-400 text-[10px]">▎</span>
          <span className="font-bold text-white text-xs tracking-wider">LIVE NOW</span>
          <span className="ml-auto text-[10px] bg-red-500/20 text-red-400 px-2.5 py-0.5 rounded font-bold">3</span>
        </div>
        {[
          { home: "Arsenal", away: "Chelsea", score: "2-1", minute: "67'" },
          { home: "Barcelona", away: "Real Madrid", score: "1-1", minute: "42'" },
          { home: "Bayern", away: "Dortmund", score: "3-0", minute: "55'" },
        ].map((m, i) => (
          <div key={i} className="mb-2 rounded-lg bg-[#0E0E1C] p-3 border border-white/5">
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
        <div className="mt-3 rounded-lg bg-[#0E0E1C] p-3.5 border border-dashed border-white/5">
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
        <div className="flex items-center gap-1.5 mb-3">
          <span className="font-extrabold text-[#00B4FF] text-sm tracking-widest">SCORES</span>
          <span className="ml-auto text-[10px] text-zinc-500 bg-white/5 px-2.5 py-0.5 rounded">📅 Today</span>
        </div>
        <div className="flex gap-1.5 mb-3">
          {["28","29","30","1","2","3","4"].map((d, i) => (
            <div key={i} className={`flex-1 rounded-lg py-1.5 text-center text-[10px] font-bold ${i === 4 ? "bg-[#00B4FF] text-white" : "bg-white/5 text-zinc-500 border border-white/5"}`}>{d}</div>
          ))}
        </div>
        {[
          { l: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 Premier League", matches: [{ a: "Arsenal", b: "Chelsea", s: "2-1" }, { a: "Man City", b: "Liverpool", s: "3-0" }] },
          { l: "🇪🇸 La Liga", matches: [{ a: "Barcelona", b: "Real Madrid", s: "1-1" }, { a: "Atletico", b: "Sevilla", s: "0-0" }] },
        ].map((lg, i) => (
          <div key={i} className="mb-3 rounded-lg bg-[#0E0E1C] p-3 border border-white/5">
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
            <div key={i} className="flex items-center gap-3 rounded-lg bg-[#0E0E1C] p-3 border border-white/5">
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
