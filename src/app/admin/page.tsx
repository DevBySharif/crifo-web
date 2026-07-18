"use client";

import { useEffect, useMemo, useState } from "react";
import {
  getFirestore, doc, getDoc, setDoc,
  collection, query, orderBy, limit, getDocs,
} from "firebase/firestore";
import {
  getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut,
  type User,
} from "firebase/auth";
import { app } from "@/lib/firebase";

const BLUE = "#00B4FF";
function getDb() { return getFirestore(app!); }
function getAuthInstance() { return getAuth(app!); }

interface Visit {
  type: string;
  source: string;
  page: string;
  timestamp: string;
  date: string;
  hour: number;
  ua: string;
  ref: string;
}

// Reads visits via the authenticated Firestore SDK (respects security rules —
// only the signed-in admin can read the collection).
async function fetchVisits(): Promise<Visit[]> {
  const q = query(collection(getDb(), "visits"), orderBy("timestamp", "desc"), limit(2000));
  const snap = await getDocs(q);
  return snap.docs.map((d) => {
    const f = d.data() as Record<string, unknown>;
    return {
      type: String(f.type ?? ""),
      source: String(f.source ?? ""),
      page: String(f.page ?? ""),
      timestamp: String(f.timestamp ?? ""),
      date: String(f.date ?? ""),
      hour: Number(f.hour ?? 0),
      ua: String(f.ua ?? ""),
      ref: String(f.ref ?? ""),
    } as Visit;
  });
}

function getDateStr(d: Date): string {
  const bd = new Date(d.getTime() + 6 * 3600000);
  return bd.toISOString().split("T")[0];
}

function parseUA(ua: string) {
  const u = (ua || "").toLowerCase();
  let device = "Desktop";
  if (/ipad|tablet/.test(u)) device = "Tablet";
  else if (/mobile|iphone|android/.test(u)) device = "Mobile";
  let os = "Other";
  if (/android/.test(u)) os = "Android";
  else if (/iphone|ipad|ios/.test(u)) os = "iOS";
  else if (/windows/.test(u)) os = "Windows";
  else if (/mac os|macintosh/.test(u)) os = "macOS";
  else if (/linux/.test(u)) os = "Linux";
  let browser = "Other";
  if (/edg\//.test(u)) browser = "Edge";
  else if (/opr\/|opera/.test(u)) browser = "Opera";
  else if (/chrome|crios/.test(u)) browser = "Chrome";
  else if (/firefox|fxios/.test(u)) browser = "Firefox";
  else if (/safari/.test(u)) browser = "Safari";
  return { device, os, browser };
}

function refLabel(ref: string): string {
  if (!ref) return "Direct / None";
  try {
    return new URL(ref).hostname.replace(/^www\./, "");
  } catch {
    return ref.slice(0, 30);
  }
}

const card: React.CSSProperties = {
  background: "#0E0E1C",
  border: "1px solid rgba(0,180,255,0.10)",
  borderRadius: 14,
  padding: 20,
};
const sectionTitle: React.CSSProperties = {
  fontSize: 11,
  fontWeight: 800,
  color: "#8891A8",
  textTransform: "uppercase",
  letterSpacing: 1.2,
  marginBottom: 14,
};

function BarList({ data, total }: { data: [string, number][]; total: number }) {
  if (data.length === 0)
    return <div style={{ color: "#52566b", fontSize: 12 }}>No data yet</div>;
  const max = Math.max(...data.map((d) => d[1]), 1);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      {data.map(([k, v]) => (
        <div key={k} style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ fontSize: 12, fontWeight: 600, color: "#c7ccdb", width: 110, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{k}</span>
          <div style={{ flex: 1, height: 8, background: "rgba(255,255,255,0.05)", borderRadius: 4, overflow: "hidden" }}>
            <div style={{ height: "100%", width: `${(v / max) * 100}%`, background: `linear-gradient(90deg, ${BLUE}, #0077FF)`, borderRadius: 4 }} />
          </div>
          <span style={{ fontSize: 12, fontWeight: 700, color: BLUE, fontFamily: "monospace", width: 62, textAlign: "right" }}>
            {v}
            <span style={{ color: "#52566b", fontSize: 10 }}> {total ? Math.round((v / total) * 100) : 0}%</span>
          </span>
        </div>
      ))}
    </div>
  );
}

export default function AdminPage() {
  const [user, setUser] = useState<User | null>(null);
  const [authReady, setAuthReady] = useState(false); // initial auth check done
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loggingIn, setLoggingIn] = useState(false);
  const [visits, setVisits] = useState<Visit[]>([]);
  const [loading, setLoading] = useState(true);
  const [range, setRange] = useState<7 | 30 | 90>(30);
  const authed = !!user;

  // Announcement control
  const [annText, setAnnText] = useState("");
  const [annEnabled, setAnnEnabled] = useState(false);
  const [annSaving, setAnnSaving] = useState(false);
  const [annSaved, setAnnSaved] = useState(false);

  // Real Firebase Auth session (persisted by the SDK across reloads).
  useEffect(() => {
    return onAuthStateChanged(getAuthInstance(), (u) => {
      setUser(u);
      setAuthReady(true);
    });
  }, []);

  useEffect(() => {
    if (!user) return;
    (async () => {
      setLoading(true);
      try {
        const data = await fetchVisits();
        setVisits(data);
      } catch (e) {
        console.error("Admin fetch error:", e);
      }
      setLoading(false);
      try {
        const snap = await getDoc(doc(getDb(), "config", "site"));
        if (snap.exists()) {
          const d = snap.data();
          setAnnText(String(d.announcement ?? ""));
          setAnnEnabled(Boolean(d.announcementEnabled));
        }
      } catch (e) {
        console.error("Config fetch error:", e);
      }
    })();
  }, [user]);

  const handleLogin = async () => {
    setLoggingIn(true);
    setError("");
    try {
      await signInWithEmailAndPassword(getAuthInstance(), email.trim(), password);
      // onAuthStateChanged will flip us into the dashboard.
    } catch (e) {
      const code = (e as { code?: string }).code ?? "";
      setError(
        code === "auth/invalid-credential" || code === "auth/wrong-password" || code === "auth/user-not-found"
          ? "Wrong email or password"
          : code === "auth/too-many-requests"
          ? "Too many attempts — try again later"
          : "Sign-in failed. Check your connection."
      );
    }
    setLoggingIn(false);
  };

  const saveAnnouncement = async () => {
    setAnnSaving(true);
    setAnnSaved(false);
    try {
      await setDoc(doc(getDb(), "config", "site"), {
        announcement: annText.trim(),
        announcementEnabled: annEnabled,
        updatedAt: new Date().toISOString(),
      });
      setAnnSaved(true);
      setTimeout(() => setAnnSaved(false), 2500);
    } catch (e) {
      console.error("Announcement save error:", e);
      alert("Failed to save. Check Firestore rules for config/site writes.");
    }
    setAnnSaving(false);
  };

  const stats = useMemo(() => {
    const today = getDateStr(new Date());
    const pageRows = visits.filter((v) => v.type !== "download");
    const downloadRows = visits.filter((v) => v.type === "download");
    const total = pageRows.length;
    const todayVisits = pageRows.filter((v) => v.date === today).length;
    const downloads = downloadRows.length;
    const todayDownloads = downloadRows.filter((v) => v.date === today).length;
    const uniqueDays = new Set(visits.map((v) => v.date).filter(Boolean)).size;
    const conversion = total ? ((downloads / total) * 100).toFixed(1) : "0";
    const avgPerDay = uniqueDays ? Math.round(total / uniqueDays) : 0;

    const days = Array.from({ length: range }, (_, i) => getDateStr(new Date(Date.now() - i * 86400000))).reverse();
    const series = days.map((d) => ({
      date: d,
      visits: pageRows.filter((v) => v.date === d).length,
      downloads: downloadRows.filter((v) => v.date === d).length,
    }));

    const count = (fn: (v: Visit) => string, rows = pageRows) => {
      const m: Record<string, number> = {};
      rows.forEach((v) => { const k = fn(v) || "Other"; m[k] = (m[k] || 0) + 1; });
      return Object.entries(m).sort((a, b) => b[1] - a[1]);
    };

    const devices = count((v) => parseUA(v.ua).device);
    const os = count((v) => parseUA(v.ua).os);
    const browsers = count((v) => parseUA(v.ua).browser);
    const referrers = count((v) => refLabel(v.ref)).slice(0, 8);
    const pages = count((v) => v.page || "/").slice(0, 8);
    const sources = count((v) => (v.source || "—").replace(/_/g, " "), visits);

    const hourly = Array.from({ length: 24 }, (_, h) => pageRows.filter((v) => v.hour === h).length);

    return { total, todayVisits, downloads, todayDownloads, uniqueDays, conversion, avgPerDay, series, devices, os, browsers, referrers, pages, sources, hourly };
  }, [visits, range]);

  if (!authReady) {
    return (
      <div style={{ background: "#06060E", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ border: `2px solid rgba(0,180,255,0.15)`, borderTop: `2px solid ${BLUE}`, borderRadius: "50%", width: 26, height: 26, animation: "spin 1s linear infinite" }} />
        <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
      </div>
    );
  }

  if (!authed) {
    return (
      <div style={{ background: "#06060E", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "system-ui, sans-serif" }}>
        <div style={{ ...card, width: 340, textAlign: "center" }}>
          <div style={{ width: 52, height: 52, margin: "0 auto 12px", borderRadius: 14, background: `linear-gradient(135deg, ${BLUE}, #0077FF)`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24 }}>🔐</div>
          <h1 style={{ color: "#fff", fontSize: 20, fontWeight: 800, marginBottom: 4 }}>CriFO Admin</h1>
          <p style={{ color: "#8891A8", fontSize: 12, marginBottom: 20 }}>Sign in to continue</p>
          <input type="email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} onKeyDown={(e) => e.key === "Enter" && handleLogin()} placeholder="Email"
            style={{ width: "100%", background: "#06060E", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 10, padding: "11px 14px", color: "#fff", fontSize: 14, outline: "none", boxSizing: "border-box", marginBottom: 10 }} />
          <input type="password" autoComplete="current-password" value={password} onChange={(e) => setPassword(e.target.value)} onKeyDown={(e) => e.key === "Enter" && handleLogin()} placeholder="Password"
            style={{ width: "100%", background: "#06060E", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 10, padding: "11px 14px", color: "#fff", fontSize: 14, outline: "none", boxSizing: "border-box", marginBottom: 12 }} />
          {error && <p style={{ color: "#ef4444", fontSize: 12, marginBottom: 8 }}>{error}</p>}
          <button onClick={handleLogin} disabled={loggingIn} style={{ width: "100%", background: BLUE, color: "#06060E", border: "none", borderRadius: 10, padding: 12, fontSize: 14, fontWeight: 800, cursor: loggingIn ? "default" : "pointer", opacity: loggingIn ? 0.6 : 1 }}>{loggingIn ? "Signing in…" : "Sign in"}</button>
        </div>
      </div>
    );
  }

  const maxSeries = Math.max(...stats.series.map((s) => s.visits), 1);
  const maxHour = Math.max(...stats.hourly, 1);

  return (
    <div style={{ background: "#06060E", minHeight: "100vh", fontFamily: "system-ui, sans-serif", color: "#fff" }}>
      {/* Header */}
      <div style={{ borderBottom: "1px solid rgba(0,180,255,0.12)", padding: "16px 24px", display: "flex", alignItems: "center", justifyContent: "space-between", position: "sticky", top: 0, background: "rgba(6,6,14,0.9)", backdropFilter: "blur(12px)", zIndex: 10 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ width: 34, height: 34, borderRadius: 10, background: `linear-gradient(135deg, ${BLUE}, #0077FF)`, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: 15, color: "#06060E" }}>C</div>
          <div>
            <div style={{ fontSize: 16, fontWeight: 800 }}>CriFO <span style={{ color: BLUE }}>Analytics</span></div>
            <div style={{ fontSize: 10, color: "#8891A8", fontWeight: 600 }}>{stats.total.toLocaleString()} visits · {stats.uniqueDays} days tracked</div>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <span style={{ fontSize: 11, color: "#52566b" }}>{user?.email}</span>
          <button onClick={() => signOut(getAuthInstance())}
            style={{ background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.25)", borderRadius: 8, padding: "7px 16px", fontSize: 11, fontWeight: 700, color: "#ef4444", cursor: "pointer" }}>Sign out</button>
        </div>
      </div>

      <div style={{ maxWidth: 1080, margin: "0 auto", padding: 24 }}>
        {loading ? (
          <div style={{ textAlign: "center", padding: 80, color: "#8891A8", fontSize: 14 }}>
            <div style={{ border: `2px solid rgba(0,180,255,0.15)`, borderTop: `2px solid ${BLUE}`, borderRadius: "50%", width: 26, height: 26, animation: "spin 1s linear infinite", margin: "0 auto 12px" }} />
            Loading analytics…
            <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
          </div>
        ) : (
          <>
            {/* Stat cards */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 12, marginBottom: 20 }}>
              {[
                { label: "Total Visits", value: stats.total, sub: `+${stats.todayVisits} today`, icon: "👁️" },
                { label: "APK Downloads", value: stats.downloads, sub: `+${stats.todayDownloads} today`, icon: "⬇️" },
                { label: "Conversion", value: `${stats.conversion}%`, sub: "visit → download", icon: "🎯" },
                { label: "Avg / Day", value: stats.avgPerDay, sub: `${stats.uniqueDays} days`, icon: "📈" },
              ].map((s) => (
                <div key={s.label} style={card}>
                  <div style={{ fontSize: 10, color: "#8891A8", fontWeight: 700, display: "flex", alignItems: "center", gap: 6, marginBottom: 10 }}>
                    <span>{s.icon}</span><span style={{ textTransform: "uppercase", letterSpacing: 0.6 }}>{s.label}</span>
                  </div>
                  <div style={{ fontSize: 30, fontWeight: 900, fontFamily: "monospace", color: BLUE, lineHeight: 1 }}>{typeof s.value === "number" ? s.value.toLocaleString() : s.value}</div>
                  <div style={{ fontSize: 10, color: "#52566b", marginTop: 6 }}>{s.sub}</div>
                </div>
              ))}
            </div>

            {/* Announcement control */}
            <div style={{ ...card, marginBottom: 20 }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
                <div style={sectionTitle}>📣 Site Announcement Banner</div>
                <label style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12, fontWeight: 700, color: annEnabled ? BLUE : "#8891A8", cursor: "pointer" }}>
                  <input type="checkbox" checked={annEnabled} onChange={(e) => setAnnEnabled(e.target.checked)} style={{ accentColor: BLUE, width: 16, height: 16 }} />
                  {annEnabled ? "Live on website" : "Hidden"}
                </label>
              </div>
              <textarea value={annText} onChange={(e) => setAnnText(e.target.value)} placeholder="e.g. 🎉 New update out now — fullscreen fixed! Download v1.4.4."
                rows={2}
                style={{ width: "100%", background: "#06060E", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 10, padding: "10px 14px", color: "#fff", fontSize: 13, outline: "none", boxSizing: "border-box", resize: "vertical", fontFamily: "inherit" }} />
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 12 }}>
                <button onClick={saveAnnouncement} disabled={annSaving}
                  style={{ background: BLUE, color: "#06060E", border: "none", borderRadius: 8, padding: "9px 20px", fontSize: 13, fontWeight: 800, cursor: annSaving ? "default" : "pointer", opacity: annSaving ? 0.6 : 1 }}>
                  {annSaving ? "Saving…" : "Save banner"}
                </button>
                {annSaved && <span style={{ color: "#22C55E", fontSize: 12, fontWeight: 700 }}>✓ Saved — live on website</span>}
                <span style={{ color: "#52566b", fontSize: 11, marginLeft: "auto" }}>Shows a bar at the top of crifo.netlify.app</span>
              </div>
            </div>

            {/* Trend chart */}
            <div style={{ ...card, marginBottom: 20 }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
                <div style={sectionTitle}>Traffic — last {range} days</div>
                <div style={{ display: "flex", gap: 6 }}>
                  {([7, 30, 90] as const).map((r) => (
                    <button key={r} onClick={() => setRange(r)}
                      style={{ background: range === r ? BLUE : "rgba(255,255,255,0.05)", color: range === r ? "#06060E" : "#8891A8", border: "none", borderRadius: 6, padding: "4px 12px", fontSize: 11, fontWeight: 700, cursor: "pointer" }}>{r}d</button>
                  ))}
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "end", gap: 2, height: 140 }}>
                {stats.series.map((s) => (
                  <div key={s.date} title={`${s.date}: ${s.visits} visits, ${s.downloads} downloads`} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "end", gap: 3, height: "100%" }}>
                    <div style={{ width: "70%", display: "flex", flexDirection: "column", justifyContent: "end", height: "100%" }}>
                      <div style={{ width: "100%", background: `linear-gradient(180deg, ${BLUE}, #0077FF)`, borderRadius: "3px 3px 0 0", height: `${(s.visits / maxSeries) * 100}%`, minHeight: s.visits > 0 ? 3 : 0 }} />
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8, fontSize: 9, color: "#52566b", fontFamily: "monospace" }}>
                <span>{stats.series[0]?.date.slice(5)}</span>
                <span>{stats.series[stats.series.length - 1]?.date.slice(5)}</span>
              </div>
            </div>

            {/* Breakdowns grid */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 16, marginBottom: 20 }}>
              <div style={card}><div style={sectionTitle}>📱 Device</div><BarList data={stats.devices} total={stats.total} /></div>
              <div style={card}><div style={sectionTitle}>💻 Operating System</div><BarList data={stats.os} total={stats.total} /></div>
              <div style={card}><div style={sectionTitle}>🌐 Browser</div><BarList data={stats.browsers} total={stats.total} /></div>
              <div style={card}><div style={sectionTitle}>🔗 Top Referrers</div><BarList data={stats.referrers} total={stats.total} /></div>
              <div style={card}><div style={sectionTitle}>📄 Top Pages</div><BarList data={stats.pages} total={stats.total} /></div>
              <div style={card}><div style={sectionTitle}>📊 Source</div><BarList data={stats.sources} total={visits.length} /></div>
            </div>

            {/* Hourly */}
            <div style={{ ...card, marginBottom: 20 }}>
              <div style={sectionTitle}>🕐 Visits by hour (BD time)</div>
              <div style={{ display: "flex", alignItems: "end", gap: 3, height: 90 }}>
                {stats.hourly.map((v, h) => (
                  <div key={h} title={`${h}:00 — ${v}`} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "end", gap: 4, height: "100%" }}>
                    <div style={{ width: "100%", background: v > 0 ? BLUE : "rgba(255,255,255,0.05)", borderRadius: 2, height: `${(v / maxHour) * 100}%`, minHeight: v > 0 ? 3 : 2, opacity: v > 0 ? 0.4 + 0.6 * (v / maxHour) : 1 }} />
                    {h % 6 === 0 && <span style={{ fontSize: 8, color: "#52566b", fontFamily: "monospace" }}>{h}</span>}
                  </div>
                ))}
              </div>
            </div>

            {/* Recent */}
            <div style={card}>
              <div style={sectionTitle}>Recent activity</div>
              <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 11 }}>
                  <thead>
                    <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
                      {["Time", "Type", "Source", "Page", "Device", "Referrer"].map((h) => (
                        <th key={h} style={{ textAlign: "left", padding: "8px 10px", color: "#52566b", fontWeight: 700, whiteSpace: "nowrap" }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {visits.slice(0, 60).map((v, i) => {
                      const { device } = parseUA(v.ua);
                      const isDl = v.type === "download";
                      return (
                        <tr key={i} style={{ borderBottom: "1px solid rgba(255,255,255,0.03)" }}>
                          <td style={{ padding: "8px 10px", color: "#c7ccdb", fontFamily: "monospace", fontSize: 10, whiteSpace: "nowrap" }}>{v.timestamp ? new Date(v.timestamp).toLocaleString() : v.date}</td>
                          <td style={{ padding: "8px 10px" }}>
                            <span style={{ background: isDl ? "rgba(34,197,94,0.12)" : "rgba(0,180,255,0.1)", color: isDl ? "#22C55E" : BLUE, padding: "2px 8px", borderRadius: 4, fontSize: 10, fontWeight: 700 }}>{isDl ? "download" : "view"}</span>
                          </td>
                          <td style={{ padding: "8px 10px", color: "#a1a1aa", fontSize: 10, textTransform: "capitalize" }}>{(v.source || "—").replace(/_/g, " ")}</td>
                          <td style={{ padding: "8px 10px", color: "#a1a1aa", fontSize: 10 }}>{v.page || "—"}</td>
                          <td style={{ padding: "8px 10px", color: "#a1a1aa", fontSize: 10 }}>{device}</td>
                          <td style={{ padding: "8px 10px", color: "#71717a", fontSize: 10, maxWidth: 180, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{refLabel(v.ref)}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
