import type { Lang } from "@/lib/site";
import { CHECKOUT_URL, PACK_PRICE, SITE_URL, CONTACT_EMAIL } from "@/lib/site";
import Header from "./Header";
import Footer from "./Footer";
import Link from "next/link";
import PackSales, { BuyBox } from "./PackSales";
import DocStack from "./DocStack";
import Reveal from "./Reveal";
import StickyBuy from "./StickyBuy";
import { copy } from "@/lib/copy";

const FILES: [string, string, string][] = [  // [kind, filename, size]
  ["PDF", "Guide-Get-Paid-On-Time.pdf", "126 KB"],
  ["MD", "Templates/ (12 files, .md)", "9 KB"],
  ["PDF", "Templates-EN-ES.pdf", "128 KB"],
  ["DOCX", "Freelance-Contract-EN.docx", "69 KB"],
  ["DOCX", "Contrato-Freelance-ES.docx", "69 KB"],
  ["DOCX", "Late-Payment-Clauses-EN-ES.docx", "69 KB"],
  ["DOCX", "Final-Notice-Letter-EN-ES.docx", "69 KB"],
  ["CSV", "Payment-Tracker.csv", "1 KB"],
  ["MD", "README.md", "2 KB"],
  ["TXT", "LICENSE.txt", "1 KB"],
];


const ITEM_TAGS = {
  en: ["PDF guide", "Emails", "Contract", "Clauses", "Letter", "Tracker"],
  es: ["Guía PDF", "Mails", "Contrato", "Cláusulas", "Carta", "Planilla"],
} as const;

const C = {
  en: {
    kicker: "Late Payment Rescue Pack",
    title: "The paperwork that gets invoices paid.",
    lead: "Contract, late-fee clauses, 12 collection emails, a final notice letter and a tracker. The same documents a collections desk works from, written for freelancers. English and Spanish.",
    buy: `Buy the pack, USD ${PACK_PRICE}`,
    secure: "Secure checkout by Payhip. Files download right after payment.",
    inside: "What's in the folder",
    zip: "ZIP, 21 files, 493 KB",
    items: [
      ["Guide: get paid on time", "8 sections, EN and ES. What to settle before the work starts, what goes on the invoice, the day +3, +7, +14 and +30 schedule, a phone script, and when to stop chasing."],
      ["12 collection emails", "6 EN, 6 ES: reminder, follow-up, firm request with late fee, payment plan, late fee notice, final notice. Editable .md files plus one printable PDF."],
      ["Freelance contract", "Services agreement in EN and ES with deposit, due date, late fee, work suspension and collection costs written in. Editable .docx."],
      ["Late-payment clauses", "The payment clauses on their own, to paste into a contract you already use, plus invoice footer lines. EN and ES .docx."],
      ["Final notice letter", "Formal letter for invoices 30 days overdue. Fill in, sign, send as PDF. EN and ES .docx."],
      ["Payment tracker", "CSV for Google Sheets, Notion or Excel. One row per invoice: due date, balance, stage, last contact, next action date."],
    ],
    faqTitle: "Questions",
    faq: [
      ["Is this legal advice?", "No. The contract and clauses are solid starting points, not legal advice. For large contracts, have a lawyer in your country review them."],
      ["What format are the files?", "PDF, Word (.docx), Markdown (.md) and CSV. They open in Google Docs, Word, Pages, Notion, Sheets and Excel."],
      ["Does it work outside the US or Argentina?", "Yes. The templates don't depend on one country. The guide notes where local rules, such as caps on late interest, apply."],
      ["Can my team use it?", "The license covers your own freelance business. You can't resell or redistribute the files."],
      ["What if it doesn't help?", "Email me within 14 days of purchase for a full refund. No form to fill in."],
    ],
    guarantee: "14-day refund",
    guaranteeBody: `If the pack doesn't help you collect, email ${CONTACT_EMAIL} within 14 days and you get a full refund.`,
  },
  es: {
    kicker: "Pack de Rescate de Cobros",
    title: "Los papeles que hacen que te paguen.",
    lead: "Contrato, cláusulas de mora, 12 mails de cobranza, carta de último aviso y planilla de seguimiento. Los mismos documentos con los que trabaja un área de cobranzas, adaptados a freelancers. En español y en inglés.",
    buy: `Comprar el pack, USD ${PACK_PRICE}`,
    secure: "Pago seguro por Payhip. La descarga queda disponible apenas se acredita.",
    inside: "Qué hay en la carpeta",
    zip: "ZIP, 21 archivos, 493 KB",
    items: [
      ["Guía para cobrar a tiempo", "8 secciones, ES y EN. Qué dejar firmado antes de empezar, qué tiene que decir la factura, el calendario de los días +3, +7, +14 y +30, un guion para llamar y cuándo dejar de perseguir."],
      ["12 mails de cobranza", "6 ES, 6 EN: recordatorio, seguimiento, pedido firme con recargo, plan de pagos, aviso de recargo y último aviso. Archivos .md editables y un PDF para imprimir."],
      ["Contrato freelance", "Contrato de servicios en ES y EN con anticipo, vencimiento, recargo por mora, suspensión del trabajo y gastos de cobranza. .docx editable."],
      ["Cláusulas de mora", "Las cláusulas de pago sueltas, para pegar en el contrato que ya usás, más líneas para el pie de factura. ES y EN .docx."],
      ["Carta de último aviso", "Carta formal para facturas con 30 días de atraso. Completás, firmás y mandás en PDF. ES y EN .docx."],
      ["Planilla de seguimiento", "CSV para Google Sheets, Notion o Excel. Una fila por factura: vencimiento, saldo, etapa, último contacto y próxima acción."],
    ],
    faqTitle: "Preguntas",
    faq: [
      ["¿Es asesoramiento legal?", "No. El contrato y las cláusulas son una buena base, no asesoramiento legal. Para contratos grandes, que los revise un abogado de tu país."],
      ["¿En qué formato vienen?", "PDF, Word (.docx), Markdown (.md) y CSV. Se abren en Google Docs, Word, Pages, Notion, Sheets y Excel."],
      ["¿Sirve fuera de Argentina?", "Sí. Las plantillas no dependen de un país. La guía marca dónde pesan las reglas locales, como los topes de interés por mora."],
      ["¿Lo puede usar mi equipo?", "La licencia cubre tu propio trabajo freelance. No se puede revender ni redistribuir."],
      ["¿Y si no me sirve?", "Escribime dentro de los 14 días de la compra y te devuelvo el total. Sin formularios."],
    ],
    guarantee: "Devolución en 14 días",
    guaranteeBody: `Si el pack no te ayuda a cobrar, escribí a ${CONTACT_EMAIL} dentro de los 14 días y te devolvemos el total.`,
  },
};

export default function PackPage({ lang }: { lang: Lang }) {
  const c = C[lang];
  const url = `${SITE_URL}${lang === "es" ? "/es/pack" : "/pack"}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Late Payment Rescue Pack",
    description: c.lead,
    brand: { "@type": "Brand", name: "Chase Invoice" },
    image: `${SITE_URL}/opengraph-image`,
    url,
    offers: {
      "@type": "Offer", price: PACK_PRICE.toFixed(2), priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: CHECKOUT_URL,
      hasMerchantReturnPolicy: { "@type": "MerchantReturnPolicy", merchantReturnDays: 14, returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow" },
    },
  };
  const es = lang === "es";
  const k = copy[lang];
  const SPAN = ["sm:col-span-2 lg:col-span-4", "lg:col-span-2", "lg:col-span-2", "lg:col-span-2", "lg:col-span-2", "sm:col-span-2 lg:col-span-2"];

  return (
    <div lang={lang}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: c.faq.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) }) }} />
      <Header lang={lang} altHref={es ? "/pack" : "/es/pack"} />
      <main>
        <section className="relative overflow-hidden bg-night text-white">
          <div className="bg-grid-dark pointer-events-none absolute inset-0" aria-hidden />
          <div className="container-x relative pb-20 pt-10 sm:pb-28 sm:pt-14">
            <nav aria-label="Breadcrumb" className="text-[13px] text-white/50">
              <Link href={es ? "/es" : "/"} className="hover:text-white">{es ? "Cobrá Sin Vueltas" : "Chase Invoice"}</Link>
              <span className="mx-2" aria-hidden>/</span><span className="text-white/80">{c.kicker}</span>
            </nav>
            <div className="mt-10 grid gap-14 lg:grid-cols-[1.15fr_1fr] lg:items-center">
              <div>
                <p className="label-dark">{c.kicker}</p>
                <h1 className="h-display mt-4 max-w-[15ch] text-[42px] sm:text-[60px]">{c.title}</h1>
                <p className="mt-6 max-w-[56ch] text-[17px] leading-[1.7] text-white/70">{c.lead}</p>
                <div className="mt-10 max-w-md"><BuyBox lang={lang} /></div>
              </div>
              <DocStack lang={lang} />
            </div>
          </div>
        </section>

        <section className="container-x mt-24 sm:mt-28">
          <Reveal className="flex flex-col justify-between gap-3 md:flex-row md:items-end">
            <h2 className="h-section">{c.inside}</h2>
            <p className="text-[14px] tabular-nums text-ink-3">Late-Payment-Rescue-Pack.zip, {c.zip}</p>
          </Reveal>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
            {c.items.map(([h, p], i) => (
              <Reveal as="li" key={h} delay={(i % 3) * 80} className={`rounded-2xl border p-7 ${i === 0 ? "border-night bg-night text-white" : "border-line bg-white shadow-card"} ${SPAN[i]}`}>
                <p className={`text-[12.5px] font-semibold ${i === 0 ? "text-brand-mint" : "text-brand"}`}>{ITEM_TAGS[lang][i]}</p>
                <h3 className={`mt-3 font-semibold tracking-heading ${i === 0 ? "text-[26px]" : "text-[19px]"}`}>{h}</h3>
                <p className={`mt-2 text-[15px] leading-relaxed ${i === 0 ? "max-w-[60ch] text-white/70" : "text-ink-2"}`}>{p}</p>
              </Reveal>
            ))}
          </ul>
          <div className="mt-6 overflow-hidden rounded-2xl border border-line bg-white">
            <div className="flex items-center justify-between border-b border-line bg-well/60 px-5 py-3 text-[13px]">
              <span className="font-semibold">{es ? "Archivos incluidos" : "Files included"}</span>
              <span className="text-ink-3">{c.zip}</span>
            </div>
            <ul className="grid divide-y divide-line sm:grid-cols-2 sm:divide-y-0">
              {FILES.map(([kd, f, size]) => (
                <li key={f} className="flex items-center gap-3 border-line px-5 py-3 text-[14px] sm:border-b">
                  <span className={`w-11 shrink-0 rounded px-1.5 py-0.5 text-center text-[10.5px] font-bold ${kd === "PDF" ? "bg-coral-soft text-coral-ink" : kd === "DOCX" ? "bg-[#E8EEFB] text-[#2B5DCC]" : "bg-brand-soft text-brand"}`}>{kd}</span>
                  <span className="min-w-0 flex-1 truncate">{f}</span>
                  <span className="shrink-0 text-[12.5px] tabular-nums text-ink-3">{size}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="container-x mt-24 grid gap-12 sm:mt-28 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <Reveal>
            <h2 className="h-section">{c.faqTitle}</h2>
            <p className="mt-4 max-w-[40ch] text-[16px] leading-relaxed text-ink-2">{c.guaranteeBody}</p>
            <a href={CHECKOUT_URL} className="btn-buy mt-8">{k.buy}</a>
          </Reveal>
          <div className="divide-y divide-line rounded-2xl border border-line bg-white">
            {c.faq.map(([q, a]) => (
              <details key={q} className="group px-6 py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[16.5px] font-semibold tracking-heading [&::-webkit-details-marker]:hidden">
                  {q}
                  <span aria-hidden className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-well text-ink-2 transition group-open:rotate-45 group-open:bg-night group-open:text-white">+</span>
                </summary>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-2">{a}</p>
              </details>
            ))}
          </div>
        </section>

        <PackSales lang={lang} showLink={false} />
      </main>
      <Footer lang={lang} />
      <StickyBuy label={k.buy} note={k.sticky} />
    </div>
  );
}
