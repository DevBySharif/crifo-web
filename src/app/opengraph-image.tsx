import { ImageResponse } from "next/og";
import { LOGO_DATA_URI } from "@/lib/logo-data";

export const dynamic = "force-static";
export const alt = "CriFO — Live Football Scores & Live TV";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #06060E 0%, #0A0F22 50%, #06060E 100%)",
          color: "#fff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={LOGO_DATA_URI}
            width={96}
            height={96}
            style={{ borderRadius: 24 }}
            alt="CriFO"
          />
          <div style={{ display: "flex", fontSize: 96, fontWeight: 900, letterSpacing: -2 }}>
            <span>Cri</span>
            <span style={{ color: "#00B4FF" }}>FO</span>
          </div>
        </div>
        <div style={{ fontSize: 40, fontWeight: 700, marginTop: 32 }}>
          Live Football Scores & Live TV
        </div>
        <div style={{ fontSize: 26, color: "#8891A8", marginTop: 16 }}>
          100+ leagues · 1000+ live TV channels · Free Android app
        </div>
      </div>
    ),
    { ...size }
  );
}
