"use client";

import { useEffect, useState } from "react";

const ADMIN_PASSWORD = "eon2026";
const PROJECT = "footballeonofficial";
const API_KEY = "AIzaSyDeInKnv3pCF4zQHmvqQLwcIAwzS9LKxbc";
const BASE = `https://firestore.googleapis.com/v1/projects/${PROJECT}/databases/(default)/documents/visits`;

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

async function fetchVisits(): Promise<Visit[]> {
  const url = `${BASE}?orderBy=timestamp%20desc&pageSize=2000&key=${API_KEY}`;
  const res = await fetch(url);
  const json = await res.json();
  if (!json.documents) return [];
  return json.documents.map((doc: any) => {
    const f = doc.fields || {};
    return {
      type: f.type?.stringValue || "",
      source: f.source?.stringValue || "",
      page: f.page?.stringValue || "",
      timestamp: f.timestamp?.timestampValue || "",
      date: f.date?.stringValue || "",
      hour: f.hour?.integerValue || 0,
      ua: f.ua?.stringValue || "",
      ref: f.ref?.stringValue || "",
    } as Visit;
  });
}

function getDateStr(d: Date): string {
  const bd = new Date(d.getTime() + 6 * 3600000);
  return bd.toISOString().split("T")[0];
}

export default function AdminPage() {
  const [authed, setAuthed] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [visits, setVisits] = useState<Visit[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (sessionStorage.getItem("admin_auth") === "true") setAuthed(true);
  }, []);

  useEffect(() => {
    if (!authed) return;
    (async () => {
      try {
        const data = await fetchVisits();
        setVisits(data);
      } catch (e) {
        console.error("Admin fetch error:", e);
      }
      setLoading(false);
    })();
  }, [authed]);

  const handleLogin = () => {
    if (password === ADMIN_PASSWORD) {
      setAuthed(true);
      setError("");
      sessionStorage.setItem("admin_auth", "true");
    } else {
      setError("Wrong password");
    }
  };

  if (!authed) {
    return (
      <div style={{ background: "#080B08", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "system-ui, sans-serif" }}>
        <div style={{ background: "#131814", border: "1px solid rgba(159,239,0,0.15)", borderRadius: 16, padding: 32, width: 320, textAlign: "center" }}>
          <div style={{ fontSize: 32, marginBottom: 8 }}>🔐</div>
          <h1 style={{ color: "#fff", fontSize: 18, fontWeight: 800, marginBottom: 4 }}>Admin</h1>
          <p style={{ color: "#889A8E", fontSize: 12, marginBottom: 20 }}>Enter password to access</p>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} onKeyDown={(e) => e.key === "Enter" && handleLogin()} placeholder="Password"
            style={{ width: "100%", background: "#09090b", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8, padding: "10px 14px", color: "#fff", fontSize: 14, outline: "none", boxSizing: "border-box", marginBottom: 12 }} />
          {error && <p style={{ color: "#ef4444", fontSize: 12, marginBottom: 8 }}>{error}</p>}
          <button onClick={handleLogin} style={{ width: "100%", background: "#9FEF00", color: "#000", border: "none", borderRadius: 8, padding: 10, fontSize: 13, fontWeight: 700, cursor: "pointer" }}>Unlock</button>
        </div>
      </div>
    );
  }

  const total = visits.length;
  const today = getDateStr(new Date());
  const todayVisits = visits.filter((v) => v.date === today).length;
  const uniqueDays = new Set(visits.map((v) => v.date)).size;

  const last7 = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(Date.now() - i * 86400000);
    return getDateStr(d);
  }).reverse();
  const max7 = Math.max(...last7.map((d) => visits.filter((v) => v.date === d).length), 1);

  const bySource: Record<string, number> = {};
  visits.forEach((v) => { bySource[v.source] = (bySource[v.source] || 0) + 1; });

  const byPage: Record<string, number> = {};
  visits.forEach((v) => { const p = v.page || "/"; byPage[p] = (byPage[p] || 0) + 1; });

  const recent = visits.slice(0, 50);

  return (
    <div style={{ background: "#080B08", minHeight: "100vh", fontFamily: "system-ui, sans-serif", color: "#fff" }}>
      <div style={{ borderBottom: "1px solid rgba(159,239,0,0.1)", padding: "16px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ fontSize: 24 }}>📊</span>
          <div>
            <div style={{ fontSize: 16, fontWeight: 800 }}>Football Eon — Admin</div>
            <div style={{ fontSize: 10, color: "#9FEF00", fontWeight: 600 }}>{total} total · {uniqueDays} days</div>
          </div>
        </div>
        <button onClick={() => { sessionStorage.removeItem("admin_auth"); setAuthed(false); }}
          style={{ background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.2)", borderRadius: 8, padding: "6px 14px", fontSize: 11, fontWeight: 700, color: "#ef4444", cursor: "pointer" }}>Lock</button>
      </div>

      <div style={{ maxWidth: 960, margin: "0 auto", padding: 24 }}>
        {loading ? (
          <div style={{ textAlign: "center", padding: 60, color: "#889A8E", fontSize: 14 }}>
            <div style={{ border: "2px solid rgba(159,239,0,0.1)", borderTop: "2px solid #9FEF00", borderRadius: "50%", width: 24, height: 24, animation: "spin 1s linear infinite", margin: "0 auto 12px" }} />
            Loading analytics...
          </div>
        ) : (
          <>
            {/* Stats */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 12, marginBottom: 24 }}>
              {[
                { label: "Total Visits", value: total, icon: "👁️" },
                { label: "Today", value: todayVisits, icon: "📅" },
                { label: "Unique Days", value: uniqueDays, icon: "📆" },
                { label: "Sources", value: Object.keys(bySource).length, icon: "🔗" },
              ].map((s) => (
                <div key={s.label} style={{ background: "#131814", border: "1px solid rgba(255,255,255,0.04)", borderRadius: 12, padding: 16 }}>
                  <div style={{ fontSize: 10, color: "#889A8E", fontWeight: 600, display: "flex", alignItems: "center", gap: 6, marginBottom: 8 }}>
                    <span>{s.icon}</span><span>{s.label}</span>
                  </div>
                  <div style={{ fontSize: 28, fontWeight: 900, fontFamily: "monospace", color: "#9FEF00" }}>{s.value.toLocaleString()}</div>
                </div>
              ))}
            </div>

            {/* Chart */}
            <div style={{ background: "#131814", border: "1px solid rgba(255,255,255,0.04)", borderRadius: 12, padding: 20, marginBottom: 24 }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#889A8E", textTransform: "uppercase", letterSpacing: 1, marginBottom: 16 }}>Visits — Last 7 Days</div>
              <div style={{ display: "flex", alignItems: "end", gap: 1, height: 120 }}>
                {last7.map((d) => {
                  const val = visits.filter((v) => v.date === d).length;
                  return (
                    <div key={d} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
                      <span style={{ fontSize: 9, color: "#71717a", fontFamily: "monospace" }}>{val}</span>
                      <div style={{ width: "60%", borderRadius: "3px 3px 0 0", transition: "height 0.3s", background: "#9FEF00", height: `${(val / max7) * 100}%`, minHeight: val > 0 ? 4 : 0 }} />
                      <span style={{ fontSize: 7, color: "#52525b", fontFamily: "monospace" }}>{d.slice(5)}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Breakdowns */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 24 }}>
              <div style={{ background: "#131814", border: "1px solid rgba(255,255,255,0.04)", borderRadius: 12, padding: 20 }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: "#889A8E", textTransform: "uppercase", letterSpacing: 1, marginBottom: 12 }}>By Source</div>
                {Object.entries(bySource).sort((a, b) => b[1] - a[1]).map(([k, v]) => (
                  <div key={k} style={{ display: "flex", alignItems: "center", gap: 10, padding: "6px 0", borderBottom: "1px solid rgba(255,255,255,0.03)" }}>
                    <span style={{ fontSize: 10, fontWeight: 700, flex: 1, textTransform: "capitalize" }}>{k.replace("_", " ")}</span>
                    <div style={{ flex: 1, height: 6, background: "rgba(255,255,255,0.06)", borderRadius: 3, overflow: "hidden" }}>
                      <div style={{ height: "100%", width: `${(v / total) * 100}%`, background: "#9FEF00", borderRadius: 3 }} />
                    </div>
                    <span style={{ fontSize: 12, fontWeight: 700, color: "#9FEF00", fontFamily: "monospace", width: 40, textAlign: "right" }}>{v}</span>
                  </div>
                ))}
              </div>
              <div style={{ background: "#131814", border: "1px solid rgba(255,255,255,0.04)", borderRadius: 12, padding: 20 }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: "#889A8E", textTransform: "uppercase", letterSpacing: 1, marginBottom: 12 }}>By Page</div>
                {Object.entries(byPage).sort((a, b) => b[1] - a[1]).slice(0, 10).map(([k, v]) => (
                  <div key={k} style={{ display: "flex", alignItems: "center", gap: 10, padding: "6px 0", borderBottom: "1px solid rgba(255,255,255,0.03)" }}>
                    <span style={{ fontSize: 11, fontWeight: 600, flex: 1 }}>{k}</span>
                    <span style={{ fontSize: 12, fontWeight: 700, color: "#9FEF00", fontFamily: "monospace" }}>{v}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent */}
            <div style={{ background: "#131814", border: "1px solid rgba(255,255,255,0.04)", borderRadius: 12, padding: 20 }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: "#889A8E", textTransform: "uppercase", letterSpacing: 1, marginBottom: 12 }}>Recent 50 Visits</div>
              <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 11 }}>
                  <thead>
                    <tr style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
                      <th style={{ textAlign: "left", padding: "8px 10px", color: "#71717a", fontWeight: 700 }}>Time</th>
                      <th style={{ textAlign: "left", padding: "8px 10px", color: "#71717a", fontWeight: 700 }}>Source</th>
                      <th style={{ textAlign: "left", padding: "8px 10px", color: "#71717a", fontWeight: 700 }}>Page</th>
                      <th style={{ textAlign: "left", padding: "8px 10px", color: "#71717a", fontWeight: 700 }}>UA</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recent.map((v, i) => (
                      <tr key={i} style={{ borderBottom: "1px solid rgba(255,255,255,0.03)" }}>
                        <td style={{ padding: "8px 10px", color: "#fff", fontFamily: "monospace", fontSize: 10, whiteSpace: "nowrap" }}>{v.timestamp ? new Date(v.timestamp).toLocaleString() : v.date}</td>
                        <td style={{ padding: "8px 10px" }}>
                          <span style={{ background: v.source === "website" ? "rgba(159,239,0,0.1)" : "rgba(96,165,250,0.1)", color: v.source === "website" ? "#9FEF00" : "#60A5FA", padding: "2px 8px", borderRadius: 4, fontSize: 10, fontWeight: 700, textTransform: "capitalize" }}>{v.source?.replace(/_/g, " ") || "—"}</span>
                        </td>
                        <td style={{ padding: "8px 10px", color: "#a1a1aa", fontSize: 10 }}>{v.page || "—"}</td>
                        <td style={{ padding: "8px 10px", color: "#71717a", fontSize: 9, maxWidth: 200, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{(v.ua || "").slice(0, 60) || "—"}</td>
                      </tr>
                    ))}
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
