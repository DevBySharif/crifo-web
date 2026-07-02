import { getFirestore, doc, setDoc } from "firebase/firestore";
import { app } from "./firebase";

const db = getFirestore(app);

export function trackVisit(source: "website" | "app_studio" | "app_lite", page?: string) {
  try {
    const now = new Date();
    const bdOffset = 6 * 60 * 60 * 1000;
    const bd = new Date(now.getTime() + bdOffset);

    const id = `${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;

    setDoc(doc(db, "visits", id), {
      type: "pageview",
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
