import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { Analytics } from "@vercel/analytics/react";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "Chase Invoice: Get paid without the awkward follow-ups", template: "%s | Chase Invoice" },
  description: "Free tool that writes four escalating invoice collection emails for freelancers. English and Spanish.",
  applicationName: "Chase Invoice",
  authors: [{ name: "Franco Vidal", url: "https://franvimarketing.com" }],
  openGraph: { type: "website", siteName: "Chase Invoice" },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = { themeColor: "#FAF7F2" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
