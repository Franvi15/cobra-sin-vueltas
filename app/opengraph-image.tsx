import { ImageResponse } from "next/og";

export const alt = "Chase Invoice — Get paid without the awkward follow-ups";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#F3EEE3", color: "#16130F", padding: 72, borderLeft: "28px solid #E0401B" }}>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 26, letterSpacing: 4, textTransform: "uppercase" }}>
          <span>Chase Invoice · Cobrá Sin Vueltas</span>
          <span style={{ color: "#E0401B" }}>Free tool</span>
        </div>
        <div style={{ display: "flex", fontSize: 96, fontWeight: 900, lineHeight: 1, letterSpacing: -3, maxWidth: 1000 }}>
          Get paid without the awkward follow-ups.
        </div>
        <div style={{ display: "flex", gap: 28, fontSize: 40, fontWeight: 700 }}>
          {["+3", "+7", "+14", "+30"].map((d, i) => (
            <span key={d} style={{ color: i === 3 ? "#E0401B" : "#16130F", borderTop: "6px solid #16130F", paddingTop: 10, width: 150 }}>{d}</span>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
