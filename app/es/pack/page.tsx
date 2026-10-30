import type { Metadata } from "next";
import PackPage from "@/components/PackPage";
import { alternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: { absolute: "Pack de Rescate de Cobros, USD 19 · Cobrá Sin Vueltas" },
  description: "12 plantillas de cobro ES/EN, cláusula de mora, contrato freelance, carta de último aviso, planilla de seguimiento y guía. USD 19, garantía de 14 días.",
  alternates: alternates("/pack", "/es/pack", "es"),
  openGraph: { locale: "es_AR" },
};
export default function Page() { return <PackPage lang="es" />; }
