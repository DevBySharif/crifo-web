"use client";

import { useEffect } from "react";
import { trackVisit } from "@/lib/tracker";

function runWhenIdle(fn: () => void) {
  if (typeof requestIdleCallback === "function") {
    requestIdleCallback(() => fn(), { timeout: 1500 });
  } else {
    setTimeout(fn, 1500);
  }
}

export default function SiteAnalytics() {
  useEffect(() => {
    runWhenIdle(() => trackVisit("website"));
  }, []);
  return null;
}
