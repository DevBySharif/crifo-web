export function trackVisit(source: "website" | "app_studio" | "app_lite", page?: string) {
  try {
    const now = new Date();
    const bdOffset = 6 * 60 * 60 * 1000;
    const bd = new Date(now.getTime() + bdOffset);

    const body = {
      fields: {
        type:     { stringValue: "pageview" },
        source:   { stringValue: source },
        page:     { stringValue: page || window.location.pathname || "/" },
        timestamp:{ timestampValue: now.toISOString() },
        date:     { stringValue: bd.toISOString().split("T")[0] },
        hour:     { integerValue: bd.getUTCHours() },
        ua:       { stringValue: (navigator.userAgent || "").slice(0, 120) },
        ref:      { stringValue: document.referrer || "" },
      },
    };

    const projectId = "footballeonofficial";
    const url = `https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents/visits?key=AIzaSyDeInKnv3pCF4zQHmvqQLwcIAwzS9LKxbc`;

    fetch(url, { method: "POST", body: JSON.stringify(body), headers: { "Content-Type": "application/json" } })
      .catch(() => {});
  } catch {}
}
