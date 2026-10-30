import type { Lang } from "@/lib/site";
import { GUMROAD_URL, PACK_PRICE, SITE_URL, CONTACT_EMAIL } from "@/lib/site";
import Header from "./Header";
import Footer from "./Footer";
import Waitlist from "./Waitlist";

const C = {
  en: {
    kicker: "Late Payment Rescue Pack",
    title: "Late Payment Rescue Pack — $19",
    lead: "Everything a freelancer needs to prevent late payments and recover the ones that already happened. In English and Spanish. Download once, use forever.",
    buy: "Buy the pack — $19",
    secure: "Secure checkout via Gumroad · Instant download",
    inside: "What's inside",
    items: [
      ["12 escalation email templates", "6 English + 6 Spanish: reminder, follow-up, firm request, payment-plan offer, late-fee notice, final notice. As editable .md files and one printable PDF."],
      ["Late-payment clause", "Drop-in contract clauses (EN/ES): due dates, late fees, work suspension, collection costs. Editable .docx."],
      ["Freelance service contract", "A clean, plain-language contract (EN/ES) with payment terms that actually protect you. Editable .docx."],
      ["Final notice letter", "A formal letter for 30+ days overdue, ready to sign and send as PDF. EN/ES .docx."],
      ["Payment tracker", "CSV that imports straight into Google Sheets or Notion: invoices, due dates, reminder stages, status."],
      ["The get-paid-on-time guide", "A practical PDF playbook: prevention, the +3/+7/+14/+30 escalation system, what to say on calls, when to walk away."],
    ],
    faqTitle: "FAQ",
    faq: [
      ["Is this legal advice?", "No. The contract and clauses are well-structured starting points written for freelancers, not legal advice. For large contracts, have a local lawyer review them."],
      ["What format are the files?", "PDF, Word (.docx), Markdown (.md) and CSV. They open in Google Docs, Word, Pages, Notion, Sheets and Excel."],
      ["Does it work outside the US or Argentina?", "Yes. Templates are jurisdiction-neutral; the guide flags where local rules (like late-fee caps) matter."],
      ["Can I use it for my clients or team?", "The license covers personal use for your own freelance business. You can't resell or redistribute the files."],
      ["What if it doesn't help?", "Email me within 14 days of purchase and I'll refund you in full. No questions, no forms."],
    ],
    guarantee: "14-day guarantee",
    guaranteeBody: `If the pack doesn't help you get paid, email ${CONTACT_EMAIL} within 14 days and get a full refund.`,
  },
  es: {
    kicker: "Pack de Rescate de Cobros",
    title: "Late Payment Rescue Pack — USD 19",
    lead: "Todo lo que un freelancer necesita para evitar pagos atrasados y recuperar los que ya pasaron. En español y en inglés. Lo descargás una vez y lo usás para siempre.",
    buy: "Comprar el pack — USD 19",
    secure: "Pago seguro con Gumroad · Descarga inmediata",
    inside: "Qué incluye",
    items: [
      ["12 plantillas de mails de cobro", "6 en español + 6 en inglés: recordatorio, seguimiento, pedido firme, plan de pagos, aviso de recargo y último aviso. En .md editables y un PDF imprimible."],
      ["Cláusula de mora", "Cláusulas listas para pegar en tu contrato (ES/EN): vencimientos, recargos, suspensión del trabajo, gastos de cobranza. .docx editable."],
      ["Contrato de servicios freelance", "Un contrato claro y en lenguaje simple (ES/EN) con condiciones de pago que te protegen de verdad. .docx editable."],
      ["Carta de último aviso", "Carta formal para atrasos de 30+ días, lista para firmar y mandar en PDF. ES/EN .docx."],
      ["Planilla de seguimiento", "CSV que importás directo en Google Sheets o Notion: facturas, vencimientos, etapa de aviso, estado."],
      ["Guía para cobrar a tiempo", "Un PDF práctico: prevención, el sistema +3/+7/+14/+30, qué decir por teléfono y cuándo soltar."],
    ],
    faqTitle: "Preguntas frecuentes",
    faq: [
      ["¿Es asesoramiento legal?", "No. El contrato y las cláusulas son un punto de partida bien armado para freelancers, no asesoramiento legal. Para contratos grandes, consultá con un abogado de tu país."],
      ["¿En qué formato vienen?", "PDF, Word (.docx), Markdown (.md) y CSV. Se abren en Google Docs, Word, Pages, Notion, Sheets y Excel."],
      ["¿Sirve fuera de Argentina?", "Sí. Las plantillas son neutrales; la guía marca dónde importan las reglas locales (como topes de recargos)."],
      ["¿Lo puedo compartir con mi equipo?", "La licencia es de uso personal para tu propio trabajo freelance. No se puede revender ni redistribuir."],
      ["¿Y si no me sirve?", "Escribime dentro de los 14 días de la compra y te devuelvo el 100%. Sin preguntas."],
    ],
    guarantee: "Garantía de 14 días",
    guaranteeBody: `Si el pack no te ayuda a cobrar, escribí a ${CONTACT_EMAIL} dentro de los 14 días y te devolvemos todo.`,
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
        <a href={GUMROAD_URL} className="inline-block bg-accent px-8 py-5 font-mono text-sm uppercase tracking-widest text-paper transition hover:bg-ink" data-gumroad-overlay-checkout="true">
          {c.buy} →
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
            <h1 className="mt-4 font-display text-5xl font-black leading-[0.95] tracking-tight md:text-7xl">{c.title}</h1>
            <p className="mt-6 max-w-xl text-lg md:text-xl">{c.lead}</p>
            <div className="mt-8 max-w-lg"><BuyBlock /></div>
          </div>
          <div className="relative self-start border-2 border-ink bg-white/50 p-6 font-mono text-xs leading-7">
            <span className="absolute -top-3 right-4 bg-accent px-2 py-0.5 text-paper">ZIP</span>
            <p className="font-bold">Late-Payment-Rescue-Pack/</p>
            {["01-Guide-Get-Paid-On-Time.pdf", "02-Templates/ (12 × .md)", "02-Templates-EN-ES.pdf", "03-Freelance-Contract-EN.docx", "03-Contrato-Freelance-ES.docx", "04-Late-Payment-Clauses-EN-ES.docx", "05-Final-Notice-Letter-EN-ES.docx", "06-Payment-Tracker.csv", "README.md · LICENSE.txt"].map((f) => (
              <p key={f} className="border-t border-rule">└ {f}</p>
            ))}
          </div>
        </section>

        <section className="border-t-2 border-ink pt-10">
          <h2 className="font-display text-4xl font-black">{c.inside}</h2>
          <ol className="mt-8 grid gap-x-10 md:grid-cols-2">
            {c.items.map(([h, p], i) => (
              <li key={h} className="flex gap-5 border-t border-rule py-6">
                <span className="font-display text-4xl font-black text-accent">{String(i + 1).padStart(2, "0")}</span>
                <div><h3 className="text-xl font-bold">{h}</h3><p className="mt-2 text-muted">{p}</p></div>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-16 grid gap-10 md:grid-cols-[2fr_1fr]">
          <div>
            <h2 className="font-display text-4xl font-black">{c.faqTitle}</h2>
            <div className="mt-6 border-t-2 border-ink">
              {c.faq.map(([q, a]) => (
                <details key={q} className="group border-b border-rule py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-bold">
                    {q}<span className="font-mono text-accent transition group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 text-muted">{a}</p>
                </details>
              ))}
            </div>
          </div>
          <aside className="self-start bg-olive p-8 text-paper">
            <p className="font-display text-6xl font-black">14</p>
            <h3 className="mt-2 font-mono text-xs uppercase tracking-widest">{c.guarantee}</h3>
            <p className="mt-4 text-paper/85">{c.guaranteeBody}</p>
          </aside>
        </section>

        <section className="mt-16 border-2 border-ink p-8 md:p-12">
          <div className="max-w-lg"><BuyBlock /></div>
        </section>
      </main>
      <Footer lang={lang} />
    </div>
  );
}
