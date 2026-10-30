import type { Metadata } from "next";
import Home from "@/components/Home";
import AppJsonLd from "@/components/AppJsonLd";
import { alternates } from "@/lib/seo";

export const metadata: Metadata = {
  title: { absolute: "Cobrá Sin Vueltas: Generador gratis de mails para cobrar facturas" },
  description: "Cobrá tus facturas sin incomodidad. Generá 4 mails de cobro que suben de tono (día 3, 7, 14 y 30) en segundos. Gratis, privado y sin registro.",
  alternates: alternates("/", "/es", "es"),
  openGraph: { locale: "es_AR", url: "/es" },
};

export default function Page() {
  return (<><AppJsonLd lang="es" /><Home lang="es" /></>);
}
