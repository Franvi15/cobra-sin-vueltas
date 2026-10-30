import type { Lang } from "@/lib/site";
import { GUMROAD_URL, PACK_PRICE, SITE_URL, CONTACT_EMAIL } from "@/lib/site";
import Header from "./Header";
import Footer from "./Footer";
import Waitlist from "./Waitlist";

const FILES: [string, string, string][] = [
  ["01", "01-Guide-Get-Paid-On-Time.pdf", "92 KB"],
  ["02", "02-Templates/ (12 files, .md)", "9 KB"],
  ["02", "02-Templates-EN-ES.pdf", "95 KB"],
  ["03", "03-Freelance-Contract-EN.docx", "38 KB"],
  ["03", "03-Contrato-Freelance-ES.docx", "38 KB"],
  ["04", "04-Late-Payment-Clauses-EN-ES.docx", "38 KB"],
  ["05", "05-Final-Notice-Letter-EN-ES.docx", "37 KB"],
  ["06", "06-Payment-Tracker.csv", "1 KB"],
  ["", "README.md", "2 KB"],
  ["", "LICENSE.txt", "1 KB"],
];

const C = {
  en: {
    kicker: "Late Payment Rescue Pack",
    title: "The paperwork that gets invoices paid.",
    lead: "Contract, late-fee clauses, 12 collection emails, a final notice letter and a tracker. The same documents a collections desk works from, written for freelancers. English and Spanish.",
    buy: `Buy the pack, USD ${PACK_PRICE}`,
    secure: "Checkout by Gumroad. Files download right after payment.",
    inside: "What's in the folder",
    zip: "ZIP, 21 files, 351 KB",
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
    secure: "Pago por Gumroad. La descarga queda disponible apenas se acredita.",
    inside: "Qué hay en la carpeta",
    zip: "ZIP, 21 archivos, 351 KB",
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
      availability: GUMROAD_URL ? "https://schema.org/InStock" : "https://schema.org/PreOrder",
      url: GUMROAD_URL || url,
      hasMerchantReturnPolicy: { "@type": "MerchantReturnPolicy", merchantReturnDays: 14, returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow" },
    },
  };
  const BuyBlock = () =>
    GUMROAD_URL ? (
      <div>
        <a href={GUMROAD_URL} className="inline-block bg-accent px-7 py-4 font-mono text-xs uppercase tracking-[0.16em] text-paper hover:bg-ink" data-gumroad-overlay-checkout="true">
          {c.buy}
        </a>
        <p className="mt-3 font-mono text-[11px] uppercase tracking-widest text-muted">{c.secure}</p>
      </div>
    ) : (
      <Waitlist lang={lang} />
    );

  return (
    <div lang={lang}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header lang={lang} altHref={lang === "es" ? "/pack" : "/es/pack"} />
      <main className="mx-auto max-w-6xl px-5">
        <section className="grid gap-10 pb-12 pt-14 md:grid-cols-[3fr_2fr] md:pt-20">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-accent">{c.kicker}</p>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.02] tracking-tight md:text-6xl">{c.title}</h1>
            <p className="mt-6 max-w-xl text-lg md:text-xl">{c.lead}</p>
            <div className="mt-8 max-w-lg"><BuyBlock /></div>
          </div>
          <figure className="self-start border border-ink bg-[#FBF8F2] font-mono text-[12px]" aria-label={c.inside}>
            <figcaption className="flex justify-between border-b border-ink px-4 py-2.5 uppercase tracking-[0.14em]">
              <span>Late-Payment-Rescue-Pack/</span><span className="text-muted">{c.zip}</span>
            </figcaption>
            <table className="w-full tabular-nums">
              <tbody>
                {FILES.map(([n, f, size]) => (
                  <tr key={f} className="border-t border-rule first:border-t-0">
                    <td className="w-8 py-2 pl-4 text-accent">{n}</td>
                    <td className="py-2 pr-2 break-all">{f}</td>
                    <td className="whitespace-nowrap py-2 pr-4 text-right text-muted">{size}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </figure>
        </section>

        <section className="border-t-2 border-ink pt-10">
          <h2 className="font-display text-3xl font-semibold">{c.inside}</h2>
          <ol className="mt-8 grid gap-x-10 md:grid-cols-2">
            {c.items.map(([h, p], i) => (
              <li key={h} className="flex gap-5 border-t border-rule py-6">
                <span className="pt-1 font-mono text-sm tabular-nums text-accent">{String(i + 1).padStart(2, "0")}</span>
                <div><h3 className="text-lg font-semibold">{h}</h3><p className="mt-2 text-muted">{p}</p></div>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-16 grid gap-10 md:grid-cols-[2fr_1fr]">
          <div>
            <h2 className="font-display text-3xl font-semibold">{c.faqTitle}</h2>
            <div className="mt-6 border-t-2 border-ink">
              {c.faq.map(([q, a]) => (
                <details key={q} className="group border-b border-rule py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-semibold">
                    {q}<span className="font-mono text-accent transition group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 text-muted">{a}</p>
                </details>
              ))}
            </div>
          </div>
          <aside className="self-start bg-olive p-8 text-paper">
            <p className="font-display text-6xl font-semibold tabular-nums">14</p>
            <h3 className="mt-2 font-mono text-xs uppercase tracking-widest">{c.guarantee}</h3>
            <p className="mt-4 text-paper/85">{c.guaranteeBody}</p>
          </aside>
        </section>

        <section className="mt-16 border-y-2 border-ink py-10">
          <div className="max-w-lg"><BuyBlock /></div>
        </section>
      </main>
      <Footer lang={lang} />
    </div>
  );
}
