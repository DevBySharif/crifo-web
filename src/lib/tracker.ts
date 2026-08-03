import { FIREBASE_ENABLED, createDocument } from "@/lib/firebase-rest";

async function logEvent(type: "pageview" | "download", source: string, page?: string) {
  if (!FIREBASE_ENABLED) return;
  try {
    const now = new Date();
    const bd = new Date(now.getTime() + 6 * 60 * 60 * 1000);
    const id = `${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
    await createDocument("visits", id, {
      type,
      source,
      page: page || (typeof window !== "undefined" ? window.location.pathname : "/"),
      timestamp: now.toISOString(),
      date: bd.toISOString().split("T")[0],
      hour: bd.getUTCHours(),
      ua: typeof navigator !== "undefined" ? navigator.userAgent.slice(0, 120) : "",
      ref: typeof document !== "undefined" ? document.referrer : "",
    });
  } catch {}
}

export function trackVisit(source: "website" | "app_studio" | "app_lite", page?: string) {
  logEvent("pageview", source, page);
}

export function trackDownload() {
  logEvent("download", "website", "apk");
}
