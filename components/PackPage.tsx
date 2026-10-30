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
  const BuyBlock = ({ inverted = false }: { inverted?: boolean }) => (
    <div>
      <a href={CHECKOUT_URL} className={inverted ? "btn h-12 bg-white px-6 text-[15px] text-brand-dark hover:bg-canvas" : "btn-primary h-12 px-6 text-[15px]"}>
        {c.buy}
      </a>
      <p className={`mt-3 text-[13px] ${inverted ? "text-white/70" : "text-ink-3"}`}>{c.secure}</p>
    </div>
  );
  const es = lang === "es";

  return (
    <div lang={lang}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header lang={lang} altHref={es ? "/pack" : "/es/pack"} />
      <main>
        <section className="container-x grid gap-12 pb-16 pt-14 md:pt-20 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <div>
            <nav aria-label="Breadcrumb" className="text-[13px] text-ink-3">
              <Link href={es ? "/es" : "/"} className="hover:text-ink">{es ? "Cobrá Sin Vueltas" : "Chase Invoice"}</Link>
              <span className="mx-2" aria-hidden>/</span><span className="text-ink-2">{c.kicker}</span>
            </nav>
            <h1 className="mt-5 max-w-[18ch] text-[40px] font-semibold leading-[1.05] tracking-display sm:text-[52px]">{c.title}</h1>
            <p className="mt-6 max-w-[56ch] text-[17px] leading-[1.65] text-ink-2">{c.lead}</p>
            <div className="mt-6 flex items-baseline gap-2">
              <span className="text-[32px] font-semibold tracking-heading tabular-nums">USD {PACK_PRICE}</span>
              <span className="text-[14px] text-ink-3">{es ? "pago único" : "one-time"}</span>
            </div>
            <div className="mt-6 max-w-md"><BuyBlock /></div>
          </div>
          <figure className="card self-start overflow-hidden" aria-label={c.inside}>
            <figcaption className="flex items-center justify-between gap-3 border-b border-line bg-well/60 px-5 py-3">
              <span className="flex items-center gap-2 text-[14px] font-medium">
                <svg aria-hidden width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 4.25C2 3.56 2.56 3 3.25 3h3.1l1.4 1.5h5c.69 0 1.25.56 1.25 1.25v6c0 .69-.56 1.25-1.25 1.25h-9.5C2.56 13 2 12.44 2 11.75v-7.5z" stroke="#0F766E" strokeWidth="1.4" /></svg>
                Late-Payment-Rescue-Pack
              </span>
              <span className="text-[12px] text-ink-3">{c.zip}</span>
            </figcaption>
            <ul className="divide-y divide-line">
              {FILES.map(([k, f, size]) => (
                <li key={f} className="flex items-center gap-3 px-5 py-2.5 text-[14px]">
                  <span className="inline-flex h-5 w-11 shrink-0 items-center justify-center rounded border border-line bg-well text-[10.5px] font-semibold text-ink-2">{k}</span>
                  <span className="min-w-0 flex-1 truncate text-ink">{f}</span>
                  <span className="shrink-0 text-[13px] tabular-nums text-ink-3">{size}</span>
                </li>
              ))}
            </ul>
          </figure>
        </section>

        <section className="container-x">
          <div className="border-b border-line pb-6">
            <h2 className="text-[28px] font-semibold tracking-heading sm:text-[32px]">{c.inside}</h2>
          </div>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {c.items.map(([h, p], i) => (
              <li key={h} className="rounded-xl border border-line bg-surface p-6">
                <span className="badge border-line-strong bg-well text-ink-2">{ITEM_TAGS[lang][i]}</span>
                <h3 className="mt-4 text-[17px] font-semibold tracking-heading">{h}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-ink-2">{p}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="container-x mt-24 grid gap-10 lg:grid-cols-[1.6fr_1fr] lg:gap-16">
          <div>
            <h2 className="text-[28px] font-semibold tracking-heading sm:text-[32px]">{c.faqTitle}</h2>
            <div className="mt-6 divide-y divide-line rounded-xl border border-line bg-surface">
              {c.faq.map(([q, a]) => (
                <details key={q} className="group px-5 py-4 sm:px-6">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[16px] font-medium [&::-webkit-details-marker]:hidden">
                    {q}
                    <svg aria-hidden className="shrink-0 text-ink-3 transition group-open:rotate-180" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </summary>
                  <p className="mt-3 text-[15px] leading-relaxed text-ink-2">{a}</p>
                </details>
              ))}
            </div>
          </div>
          <aside className="self-start rounded-xl border border-line bg-surface p-6 lg:mt-[60px]">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-soft" aria-hidden>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 2.5l6 2.25v4.5c0 3.9-2.6 6.9-6 8.25-3.4-1.35-6-4.35-6-8.25v-4.5L10 2.5z" stroke="#0F766E" strokeWidth="1.5" strokeLinejoin="round" /><path d="M7.25 10l2 2 3.5-4" stroke="#0F766E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </span>
            <h3 className="mt-4 text-[17px] font-semibold">{c.guarantee}</h3>
            <p className="mt-2 text-[14px] leading-relaxed text-ink-2">{c.guaranteeBody}</p>
          </aside>
        </section>

        <section className="container-x mt-24">
          <div className="relative overflow-hidden rounded-2xl bg-brand-dark px-6 py-10 text-white sm:px-10 sm:py-12">
            <div className="absolute inset-x-0 top-0 h-1 bg-coral" aria-hidden />
            <div className="grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-center">
              <div>
                <p className="text-[13px] font-medium text-white/70">{c.kicker}, USD {PACK_PRICE}</p>
                <h2 className="mt-3 max-w-[24ch] text-[26px] font-semibold leading-tight tracking-heading sm:text-[30px]">{c.title}</h2>
              </div>
              <BuyBlock inverted />
            </div>
          </div>
        </section>
      </main>
      <Footer lang={lang} />
    </div>
  );
}
