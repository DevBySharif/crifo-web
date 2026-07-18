async function getDb() {
  try {
    const [{ getFirestore }, { app }] = await Promise.all([
      import("firebase/firestore"),
      import("./firebase"),
    ]);
    return app ? getFirestore(app) : null;
  } catch {
    return null;
  }
}

async function logEvent(type: "pageview" | "download", source: string, page?: string) {
  try {
    const db = await getDb();
    if (!db) return;
    const { doc, setDoc } = await import("firebase/firestore");
    const now = new Date();
    const bd = new Date(now.getTime() + 6 * 60 * 60 * 1000);
    const id = `${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
    await setDoc(doc(db, "visits", id), {
      type,
      source,
      page: page || (typeof window !== "undefined" ? window.location.pathname : "/"),
      timestamp: now.toISOString(),
      date: bd.toISOString().split("T")[0],
      hour: bd.getUTCHours(),
      ua: (typeof navigator !== "undefined" ? navigator.userAgent : "").slice(0, 120),
      ref: typeof document !== "undefined" ? document.referrer : "",
    }).catch(() => {});
  } catch {}
}

export function trackVisit(source: "website" | "app_studio" | "app_lite", page?: string) {
  logEvent("pageview", source, page);
}

export function trackDownload() {
  logEvent("download", "website", "apk");
}
