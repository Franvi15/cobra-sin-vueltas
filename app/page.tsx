import type { Metadata } from "next";
import Home from "@/components/Home";
import AppJsonLd from "@/components/AppJsonLd";
import { alternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: { absolute: "Chase Invoice — Free invoice reminder email generator for freelancers" },
  description: "Get paid without the awkward follow-ups. Generate 4 escalating payment reminder emails (day 3, 7, 14, 30) in seconds. Free, private, no sign-up.",
  alternates: alternates("/", "/es", "en"),
  openGraph: { locale: "en_US", url: "/" },
};

export default function Page() {
  return (<><AppJsonLd lang="en" /><Home lang="en" /></>);
}
