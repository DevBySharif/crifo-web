import { getFirestore, doc, setDoc } from "firebase/firestore";
import { app } from "./firebase";

const db = getFirestore(app);

function logEvent(type: "pageview" | "download", source: string, page?: string) {
  try {
    const now = new Date();
    const bd = new Date(now.getTime() + 6 * 60 * 60 * 1000);
    const id = `${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;

    setDoc(doc(db, "visits", id), {
      type,
      source,
      page: page || window.location.pathname || "/",
      timestamp: now.toISOString(),
      date: bd.toISOString().split("T")[0],
      hour: bd.getUTCHours(),
      ua: (navigator.userAgent || "").slice(0, 120),
      ref: document.referrer || "",
    }).catch(() => {});
  } catch {}
}

export function trackVisit(source: "website" | "app_studio" | "app_lite", page?: string) {
  logEvent("pageview", source, page);
}

/** Fire when a user clicks the APK download button. */
export function trackDownload() {
  logEvent("download", "website", "apk");
}
