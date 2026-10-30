import type { Metadata, Viewport } from "next";
import { Fraunces, Inter_Tight, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const display = Fraunces({ subsets: ["latin"], weight: ["700", "900"], variable: "--font-display", display: "swap" });
const sans = Inter_Tight({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "Chase Invoice — Get paid without the awkward follow-ups", template: "%s · Chase Invoice" },
  description: "Free tool that writes four escalating invoice-collection emails for freelancers. English and Spanish.",
  applicationName: "Chase Invoice",
  authors: [{ name: "Franco Vidal", url: "https://franvimarketing.com" }],
  openGraph: { type: "website", siteName: "Chase Invoice · Cobrá Sin Vueltas" },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = { themeColor: "#F3EEE3" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
