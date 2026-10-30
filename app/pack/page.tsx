import type { Metadata } from "next";
import PackPage from "@/components/PackPage";
import { alternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Late Payment Rescue Pack — $19",
  description: "12 EN/ES collection email templates, late-payment clause, freelance contract, final notice letter, payment tracker and a get-paid guide. $19, 14-day guarantee.",
  alternates: alternates("/pack", "/es/pack", "en"),
};
export default function Page() { return <PackPage lang="en" />; }
