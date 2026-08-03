"use client";

import { useEffect, useState } from "react";

const FIREBASE_ENABLED = Boolean(process.env.NEXT_PUBLIC_FIREBASE_API_KEY);

function runWhenIdle(fn: () => void) {
  if (typeof requestIdleCallback === "function") {
    requestIdleCallback(() => fn(), { timeout: 2500 });
  } else {
    setTimeout(fn, 2500);
  }
}

export default function AnnouncementBanner() {
  const [text, setText] = useState("");
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!FIREBASE_ENABLED) return;
    runWhenIdle(async () => {
      try {
        const { getDocument } = await import("@/lib/firebase-rest");
        const d = await getDocument("config/site");
        if (!d) return;
        const msg = String(d.announcement ?? "").trim();
        if (d.announcementEnabled && msg) {
          const dismissed = sessionStorage.getItem("ann_dismissed");
          if (dismissed !== msg) {
            setText(msg);
            setShow(true);
          }
        }
      } catch {}
    });
  }, []);

  if (!show) return null;
  return (
    <div className="w-full bg-gradient-to-r from-[#00B4FF] to-[#0077FF] text-[#06060E]">
      <div className="mx-auto flex max-w-6xl items-center gap-3 px-6 py-2.5 text-sm font-semibold">
        <span className="shrink-0">📣</span>
        <span className="flex-1 text-center sm:text-left">{text}</span>
        <button
          type="button"
          aria-label="Dismiss announcement"
          onClick={() => { sessionStorage.setItem("ann_dismissed", text); setShow(false); }}
          className="shrink-0 rounded-full px-2 py-0.5 text-[#06060E]/70 hover:text-[#06060E] hover:bg-black/10 transition"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
