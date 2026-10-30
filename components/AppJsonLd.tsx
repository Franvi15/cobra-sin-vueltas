import { SITE_URL } from "@/lib/site";
export default function AppJsonLd({ lang }: { lang: "en" | "es" }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: lang === "es" ? "Cobrá Sin Vueltas" : "Chase Invoice",
    url: `${SITE_URL}${lang === "es" ? "/es" : "/"}`,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Any (web browser)",
    inLanguage: lang,
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    creator: { "@type": "Person", name: "Franco Vidal", url: "https://franvimarketing.com" },
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
