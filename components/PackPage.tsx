import type { Lang } from "@/lib/site";
import { CHECKOUT_URL, PACK_PRICE, SITE_URL, CONTACT_EMAIL } from "@/lib/site";
import Header from "./Header";
import Footer from "./Footer";
import Link from "next/link";

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
  const Buy = () => (
    <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
      <a href={CHECKOUT_URL} className="btn-primary h-11 px-5">{c.buy}</a>
      <p className="text-[13px] text-ink-3">{c.secure}</p>
    </div>
  );

  return (
    <div lang={lang}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header lang={lang} altHref={es ? "/pack" : "/es/pack"} />
      <main>
        <section className="container-x pb-20 pt-12 sm:pb-28 sm:pt-16">
          <nav aria-label="Breadcrumb" className="text-[13px] text-ink-3">
            <Link href={es ? "/es" : "/"} className="hover:text-ink">{es ? "Cobrá Sin Vueltas" : "Chase Invoice"}</Link>
            <span className="mx-2" aria-hidden>/</span><span>{c.kicker}</span>
          </nav>
          <h1 className="h-display mt-14 max-w-[15ch] text-[44px] sm:mt-20 sm:text-[68px] lg:text-[80px]">{c.title}</h1>
          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-20">
            <p className="max-w-[56ch] text-[17px] leading-[1.7] text-ink-2 sm:text-[18px]">{c.lead}</p>
            <div className="lg:justify-self-end lg:text-right">
              <p className="text-[40px] font-medium tracking-display tabular-nums text-ink">USD {PACK_PRICE}</p>
              <p className="mt-1 text-[13px] text-ink-3">{es ? "Pago único" : "One-time payment"}</p>
            </div>
          </div>
          <div className="mt-12"><Buy /></div>
        </section>

        <section className="container-x">
          <div className="section grid gap-6 lg:grid-cols-[1fr_1fr] lg:gap-20">
            <h2 className="h-section">{c.inside}</h2>
            <p className="text-[14px] tabular-nums text-ink-3 lg:pt-4 lg:text-right">Late-Payment-Rescue-Pack.zip, {c.zip}</p>
          </div>
          <ul className="mt-14 border-t border-line sm:mt-16">
            {c.items.map(([h, p], i) => (
              <li key={h} className="grid gap-2 border-b border-line py-8 sm:grid-cols-[120px_minmax(0,1fr)_minmax(0,1.6fr)] sm:gap-8">
                <span className="text-[13px] text-ink-3">{ITEM_TAGS[lang][i]}</span>
                <h3 className="text-[18px] font-medium tracking-heading text-ink">{h}</h3>
                <p className="text-[15px] leading-[1.7] text-ink-2">{p}</p>
              </li>
            ))}
          </ul>
          <table className="mt-14 w-full text-[14px]">
            <caption className="label pb-4 text-left">{es ? "Archivos" : "Files"}</caption>
            <tbody className="divide-y divide-line border-y border-line">
              {FILES.map(([k, f, size]) => (
                <tr key={f}>
                  <td className="w-16 py-3 text-[13px] text-ink-3">{k}</td>
                  <td className="py-3 text-ink-2"><span className="break-all">{f}</span></td>
                  <td className="py-3 text-right tabular-nums text-ink-3">{size}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section className="container-x mt-32 sm:mt-40">
          <div className="section grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
            <div>
              <h2 className="h-section">{c.faqTitle}</h2>
              <p className="mt-10 text-[15px] font-medium text-ink">{c.guarantee}</p>
              <p className="mt-2 max-w-[44ch] text-[15px] leading-[1.7] text-ink-2">{c.guaranteeBody}</p>
            </div>
            <div className="border-t border-line">
              {c.faq.map(([q, a]) => (
                <details key={q} className="group border-b border-line py-6">
                  <summary className="flex cursor-pointer list-none items-baseline justify-between gap-6 text-[17px] font-medium tracking-heading text-ink [&::-webkit-details-marker]:hidden">
                    {q}
                    <span aria-hidden className="shrink-0 text-[18px] font-normal text-ink-3 transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-4 max-w-[60ch] text-[15px] leading-[1.7] text-ink-2">{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="container-x mt-32 sm:mt-40">
          <div className="section">
            <p className="label">{c.kicker}, USD {PACK_PRICE}</p>
            <h2 className="h-section mt-4 max-w-[20ch]">{c.title}</h2>
            <div className="mt-10"><Buy /></div>
          </div>
        </section>
      </main>
      <Footer lang={lang} />
    </div>
  );
}
