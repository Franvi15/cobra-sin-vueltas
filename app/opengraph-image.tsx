import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Chase Invoice: Get paid without the awkward follow-ups";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OG() {
  const logo = await readFile(join(process.cwd(), "public/logo-mark.png"));
  const src = `data:image/png;base64,${logo.toString("base64")}`;
  const days: [string, string][] = [["Day 3", "Reminder"], ["Day 7", "Follow-up"], ["Day 14", "Firm request"], ["Day 30", "Final notice"]];
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#FAF7F2", color: "#191917", padding: "64px 72px", fontFamily: "sans-serif" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} width={52} height={49} alt="" />
          <span style={{ fontSize: 34, fontWeight: 700, letterSpacing: -1 }}>Chase Invoice</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 76, fontWeight: 700, lineHeight: 1.05, letterSpacing: -3, maxWidth: 980 }}>
            Get paid without the awkward follow-ups.
          </div>
          <div style={{ display: "flex", marginTop: 24, fontSize: 28, color: "#57534E" }}>Four collection emails, dated and ready to send. Free.</div>
        </div>
        <div style={{ display: "flex", gap: 16 }}>
          {days.map(([d, l], i) => (
            <div key={d} style={{ display: "flex", flexDirection: "column", background: "#FFFFFF", border: "2px solid #E8E3DA", borderRadius: 16, padding: "16px 22px", width: 250 }}>
              <span style={{ display: "flex", fontSize: 22, fontWeight: 600, color: i === 3 ? "#B5432A" : "#0F766E" }}>{d}</span>
              <span style={{ display: "flex", fontSize: 26, marginTop: 4 }}>{l}</span>
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
