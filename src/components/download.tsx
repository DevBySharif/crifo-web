"use client";

import { useEffect, useState } from "react";
import { Download } from "lucide-react";
import { trackDownload } from "@/lib/tracker";
import { APK_PATH, ANDROID_MIN_VERSION, type Release } from "@/lib/site";

interface ReleaseState extends Release {
  versionCode?: number;
}

const SELF_HOSTED: ReleaseState = {
  apkUrl: APK_PATH,
  version: "1.4.6",
  sizeMb: "68 MB",
};

function useRelease(): ReleaseState {
  const [release, setRelease] = useState<ReleaseState>(SELF_HOSTED);

  useEffect(() => {
    let cancelled = false;
    fetch("/version.json", { cache: "no-store" })
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (cancelled || !data?.versionName) return;
        setRelease((prev) => ({
          apkUrl: typeof data.apkUrl === "string" && data.apkUrl ? data.apkUrl : prev.apkUrl,
          version: String(data.versionName),
          sizeMb: typeof data.sizeMb === "string" && data.sizeMb ? data.sizeMb : prev.sizeMb,
          versionCode: Number(data.versionCode) || undefined,
        }));
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  return release;
}

function downloadHref(release: ReleaseState): string {
  return release.versionCode ? `${release.apkUrl}?v=${release.versionCode}` : release.apkUrl;
}

export function DownloadButton({ variant = "hero" }: { variant?: "hero" | "cta" }) {
  const release = useRelease();

  if (variant === "cta") {
    return (
      <a
        href={downloadHref(release)}
        download
        onClick={() => trackDownload()}
        className="inline-flex items-center gap-3 rounded-full bg-[#00B4FF] px-10 py-4 text-lg font-black text-[#06060E] shadow-2xl shadow-[#00B4FF]/30 transition-all hover:bg-[#00A2E8] hover:scale-105 hover:shadow-[#00B4FF]/40"
      >
        <Download className="h-6 w-6" />
        Download APK
      </a>
    );
  }

  return (
    <a
      href={downloadHref(release)}
      download
      onClick={() => trackDownload()}
      className="inline-flex items-center gap-2.5 rounded-full bg-[#00B4FF] px-7 py-3.5 font-bold text-[#06060E] transition-all hover:bg-[#00A2E8] hover:scale-105 hover:shadow-xl hover:shadow-[#00B4FF]/30 text-base group"
    >
      <Download className="h-5 w-5 transition group-hover:-translate-y-0.5" />
      Download APK
    </a>
  );
}

export function DownloadMeta() {
  const release = useRelease();
  return (
    <div className="mt-6 flex items-center justify-center gap-6 text-sm text-zinc-600">
      <span>Version {release.version}</span>
      <span className="w-1 h-1 rounded-full bg-zinc-700" />
      <span>{ANDROID_MIN_VERSION}</span>
      <span className="w-1 h-1 rounded-full bg-zinc-700" />
      <span>{release.sizeMb}</span>
    </div>
  );
}
