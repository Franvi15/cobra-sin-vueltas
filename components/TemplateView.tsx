import { stageText } from "@/lib/templates";
import Link from "next/link";
import { allTemplates, templates, tplPath, type Template } from "@/lib/templates";
import Header from "./Header";
import Footer from "./Footer";
import CopyButton from "./CopyButton";
import Generator from "./Generator";
import PackSales from "./PackSales";
import StickyBuy from "./StickyBuy";
import { t } from "@/lib/i18n";
import { c, toneForStage } from "@/lib/copy";
import BuyLink from "./BuyLink";

function Mail({ subject, body, es, label }: { subject: string; body: string; es: boolean; label: string }) {
  const full = `${es ? "Asunto" : "Subject"}: ${subject}\n\n${body}`;
  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-panel">
      <div className="flex items-center justify-between gap-3 border-b border-line bg-[#F7F5F0] px-5 py-3">
        <span className="text-[12.5px] font-semibold text-ink-2">{label}</span>
        <CopyButton className="btn-primary h-9 px-3.5 text-[13.5px]" text={full} label={es ? "Copiar" : "Copy"} copiedLabel={es ? "Copiado" : "Copied"} />
      </div>
      <dl className="border-b border-line px-6 py-3 text-[14px] sm:px-8">
        <div className="flex gap-3"><dt className="w-16 shrink-0 text-ink-3">{es ? "Asunto" : "Subject"}</dt><dd className="font-semibold text-ink">{subject}</dd></div>
      </dl>
      <pre className="whitespace-pre-wrap px-6 py-7 font-sans text-[15.5px] leading-[1.8] text-ink sm:px-8">{body}</pre>
    </div>
  );
}

export default function TemplateView({ tpl }: { tpl: Template }) {
  const es = tpl.lang === "es";
  const d = t(tpl.lang);
  const k = c(tpl.lang);
  const alt = allTemplates.find((x) => x.slug === tpl.alt);
  const altHref = alt ? tplPath(alt) : es ? "/" : "/es";
  const pool = allTemplates.filter((x) => x.lang === tpl.lang && x.slug !== tpl.slug);
  const start = Math.max(0, allTemplates.indexOf(tpl) % Math.max(1, pool.length));
  const related = [...pool.slice(start), ...pool.slice(0, start)].slice(0, 6);
  const core = templates.filter((x) => x.lang === tpl.lang).slice(0, 3);
  const tone = toneForStage(tpl.stage);
  const pre = tpl.stage === -2;
  const faqLd = tpl.faq?.length
    ? { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: tpl.faq.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) }
    : null;
  const H2 = "text-[24px] font-semibold tracking-heading text-ink sm:text-[28px]";
  return (
    <div lang={tpl.lang}>
      {faqLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />}
      <Header lang={tpl.lang} altHref={altHref} />
      <main>
        <section className="relative overflow-hidden bg-night text-white">
          <div className="bg-grid-dark pointer-events-none absolute inset-0" aria-hidden />
          <div className="container-x relative pb-16 pt-10 sm:pb-20 sm:pt-14">
            <nav aria-label="Breadcrumb" className="text-[13px] text-white/50">
              <Link href={es ? "/es" : "/"} className="hover:text-white">{es ? "Cobrá Sin Vueltas" : "Chase Invoice"}</Link>
              <span className="mx-2" aria-hidden>/</span>
              <Link href={`${es ? "/es" : "/"}#templates`} className="hover:text-white">{d.nav.templates}</Link>
            </nav>
            <div className="mt-10 flex flex-wrap items-center gap-3 text-[13px]">
              <span className="font-semibold text-brand-mint">{stageText(tpl.stage, d)}</span>
              <span className={tone === "final" ? "text-coral" : "text-white/55"}>{k.tones[tone]}</span>
            </div>
            <h1 className="h-display mt-4 max-w-[22ch] text-[36px] sm:text-[54px]">{tpl.title}</h1>
            <p className="mt-6 max-w-[62ch] text-[17px] leading-[1.7] text-white/70">{tpl.intro ?? tpl.description}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#template" className="btn h-12 bg-white px-6 text-[15px] font-semibold text-night hover:bg-brand-soft">{es ? "Ver la plantilla" : "See the template"}</a>
              <a href="#generator" className="btn h-12 border border-white/25 px-6 text-[15px] font-semibold text-white hover:bg-white/10">{es ? "Generarla con mis datos" : "Fill it with my details"}</a>
            </div>
          </div>
        </section>

        <div className="container-x grid gap-14 pt-16 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-20">
          <article className="min-w-0 space-y-16">
            <section>
              <h2 className={H2}>{es ? "Cuándo mandarlo" : "When to send it"}</h2>
              <p className="mt-4 max-w-[65ch] text-[16.5px] leading-[1.75] text-ink-2">{tpl.whenToSend}</p>
            </section>
            <section id="template" className="scroll-mt-20">
              <h2 className={H2}>{es ? "La plantilla completa" : "The full template"}</h2>
              <div className="mt-6"><Mail subject={tpl.subject} body={tpl.body} es={es} label={es ? "Plantilla" : "Template"} /></div>
            </section>
            {tpl.variant && (
              <section>
                <h2 className={H2}>{es ? "Variante" : "Variant"}: {tpl.variant.label}</h2>
                <div className="mt-6"><Mail subject={tpl.variant.subject} body={tpl.variant.body} es={es} label={tpl.variant.label} /></div>
              </section>
            )}
            {tpl.mistakes?.length ? (
              <section>
                <h2 className={H2}>{es ? "Errores que conviene evitar" : "Mistakes to avoid"}</h2>
                <ul className="mt-6 space-y-3">
                  {tpl.mistakes.map((m) => (
                    <li key={m} className="flex gap-4 rounded-xl border border-line bg-white p-5 text-[15.5px] leading-relaxed text-ink-2">
                      <span aria-hidden className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-coral-soft text-[14px] font-bold text-coral-ink">&times;</span>{m}
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}
            {tpl.faq?.length ? (
              <section>
                <h2 className={H2}>{es ? "Preguntas frecuentes" : "FAQ"}</h2>
                <div className="mt-6 divide-y divide-line rounded-2xl border border-line bg-white">
                  {tpl.faq.map(([q, a]) => (
                    <details key={q} className="group px-6 py-5">
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[16px] font-semibold [&::-webkit-details-marker]:hidden">
                        {q}<span aria-hidden className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-well transition group-open:rotate-45">+</span>
                      </summary>
                      <p className="mt-3 text-[15px] leading-relaxed text-ink-2">{a}</p>
                    </details>
                  ))}
                </div>
              </section>
            ) : null}
          </article>
          <aside className="space-y-8 self-start lg:sticky lg:top-24">
            <section className="rounded-2xl border border-line bg-white p-6">
              <h2 className="label">{es ? "Consejos" : "Tips"}</h2>
              <ul className="mt-3 divide-y divide-line">
                {tpl.tips.map((tip) => <li key={tip} className="py-3.5 text-[14px] leading-relaxed text-ink-2">{tip}</li>)}
              </ul>
            </section>
            <section className="rounded-2xl bg-night p-6 text-white">
              <p className="text-[15px] font-semibold">{es ? "Los 12 mails, contrato y planilla" : "All 12 emails, contract and tracker"}</p>
              <p className="mt-2 text-[13.5px] leading-relaxed text-white/65">{es ? "Pago único. Garantía de 14 días." : "One payment. 14-day money-back guarantee."}</p>
              <BuyLink location="template_sidebar" lang={tpl.lang} className="btn mt-5 h-11 w-full bg-coral font-semibold text-night hover:bg-[#FA8569]">{k.buy}</BuyLink>
            </section>
          </aside>
        </div>

        <section id="generator" className="container-x mt-24 scroll-mt-16">
          <h2 className="h-section">{pre ? (es ? "Generá el aviso previo y los 4 mails con tus datos" : "Generate the heads-up and all 4 follow-ups") : es ? "Generá los 4 mails con tus datos" : "Generate all 4 emails with your details"}</h2>
          <p className="mt-3 max-w-[60ch] text-[16.5px] text-ink-2">{es ? "Gratis, sin cuenta. Fechas calculadas desde el vencimiento." : "Free, no account. Dates calculated from the due date."}</p>
          <div className="mt-10"><Generator lang={tpl.lang} ctaLocation="template_generator_result" defaultPredue={pre} /></div>
          {pre && (
            <p className="mt-6 text-[15px] text-ink-2">
              <Link href={es ? "/es?predue=1#generator" : "/?predue=1#generator"} className="font-semibold text-brand underline underline-offset-4 hover:text-ink">
                {es ? "Abrir el generador completo con el aviso previo activado" : "Open the full generator with the pre-due reminder on"}
              </Link>
            </p>
          )}
        </section>

        <section className="container-x mt-24">
          <h2 className="h-section">{es ? "Más plantillas" : "More templates"}</h2>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[...core.filter((x) => x.slug !== tpl.slug), ...related].filter((x, i, a) => a.findIndex((y) => y.slug === x.slug) === i).slice(0, 6).map((r) => (
              <li key={r.slug}>
                <Link href={tplPath(r)} className="group flex h-full flex-col rounded-2xl border border-line bg-white p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-lift">
                  <span className="text-[12.5px] font-semibold text-brand">{stageText(r.stage, d)}</span>
                  <span className="mt-3 text-[17px] font-semibold tracking-heading text-ink">{r.name}</span>
                  <span className="mt-2 line-clamp-2 text-[14px] text-ink-2">{r.subject}</span>
                  <span className="mt-auto pt-4 text-[14px] font-semibold text-brand">{d.readTpl} <span aria-hidden className="inline-block transition-transform group-hover:translate-x-1">&rarr;</span></span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
        <PackSales lang={tpl.lang} />
      </main>
      <Footer lang={tpl.lang} />
      <StickyBuy label={k.buy} note={k.sticky} lang={tpl.lang} location="template_sticky" />
    </div>
  );
}
