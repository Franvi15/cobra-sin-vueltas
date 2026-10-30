import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { templates, getTemplate } from "@/lib/templates";
import { alternates } from "@/lib/seo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CopyButton from "@/components/CopyButton";
import PackCta from "@/components/PackCta";
import StageBadge from "@/components/StageBadge";
import { t } from "@/lib/i18n";

export const dynamicParams = false;

export function generateStaticParams() {
  return templates.map((t) => ({ slug: t.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const tpl = getTemplate(params.slug);
  if (!tpl) return {};
  const en = tpl.lang === "en" ? tpl.slug : tpl.alt;
  const es = tpl.lang === "es" ? tpl.slug : tpl.alt;
  return {
    title: tpl.title,
    description: tpl.description,
    alternates: alternates(`/templates/${en}`, `/templates/${es}`, tpl.lang),
    openGraph: { title: tpl.title, description: tpl.description, locale: tpl.lang === "es" ? "es_AR" : "en_US", type: "article" },
  };
}

export default function TemplatePage({ params }: { params: { slug: string } }) {
  const tpl = getTemplate(params.slug);
  if (!tpl) notFound();
  const es = tpl.lang === "es";
  const full = `${es ? "Asunto" : "Subject"}: ${tpl.subject}\n\n${tpl.body}`;
  const related = templates.filter((t) => t.lang === tpl.lang && t.slug !== tpl.slug);
  const d = t(tpl.lang);
  return (
    <div lang={tpl.lang}>
      <Header lang={tpl.lang} altHref={`/templates/${tpl.alt}`} />
      <main className="container-x">
        <nav aria-label="Breadcrumb" className="pt-10 text-[13px] text-ink-3">
          <Link href={es ? "/es" : "/"} className="hover:text-ink">{es ? "Cobrá Sin Vueltas" : "Chase Invoice"}</Link>
          <span className="mx-2" aria-hidden>/</span>
          <Link href={`${es ? "/es" : "/"}#templates`} className="hover:text-ink">{d.nav.templates}</Link>
          <span className="mx-2" aria-hidden>/</span><span className="text-ink-2">{tpl.name}</span>
        </nav>
        <article className="grid gap-12 pt-6 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-16">
          <div>
            <StageBadge day={tpl.stage} label={tpl.stage ? `${d.stageLabel} ${tpl.stage}` : d.general} />
            <h1 className="mt-4 max-w-[22ch] text-[34px] font-semibold leading-[1.1] tracking-display sm:text-[44px]">{tpl.title}</h1>
            <p className="mt-5 max-w-[60ch] text-[17px] leading-[1.65] text-ink-2">{tpl.description}</p>
            <div className="mt-6 flex gap-3 rounded-xl border border-line bg-surface px-4 py-3.5 text-[15px]">
              <svg aria-hidden className="mt-0.5 shrink-0" width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="7" stroke="#0F766E" strokeWidth="1.5" /><path d="M9 5v4l2.5 1.5" stroke="#0F766E" strokeWidth="1.5" strokeLinecap="round" /></svg>
              <p><span className="font-medium text-ink">{es ? "Cuándo mandarlo" : "When to send"}.</span> <span className="text-ink-2">{tpl.whenToSend}</span></p>
            </div>
            <div className="card mt-8 overflow-hidden">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line bg-well/50 px-5 py-3">
                <p className="min-w-0 text-[14px]"><span className="text-ink-3">{es ? "Asunto" : "Subject"}</span><span className="ml-3 font-medium text-ink">{tpl.subject}</span></p>
                <CopyButton text={full} label={es ? "Copiar plantilla" : "Copy template"} copiedLabel={es ? "Copiado" : "Copied"} />
              </div>
              <pre className="whitespace-pre-wrap px-5 py-6 font-sans text-[15px] leading-[1.7] text-ink sm:px-7">{tpl.body}</pre>
            </div>
            <p className="mt-4 text-[14px] text-ink-2">
              {es ? "Para tenerlo con tus datos y las fechas calculadas, usá el " : "To get it with your details and the dates worked out, use the "}
              <Link href={es ? "/es#generator" : "/#generator"} className="font-medium text-brand underline decoration-brand/30 underline-offset-4 hover:decoration-brand">{es ? "generador gratis" : "free generator"}</Link>.
            </p>
          </div>
          <aside className="space-y-8 self-start lg:sticky lg:top-24">
            <section>
              <h2 className="text-[14px] font-semibold text-ink">{es ? "Consejos" : "Tips"}</h2>
              <ul className="mt-3 space-y-3">
                {tpl.tips.map((tip) => (
                  <li key={tip} className="flex gap-3 text-[14px] leading-relaxed text-ink-2">
                    <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-brand" aria-hidden />{tip}
                  </li>
                ))}
              </ul>
            </section>
            <section>
              <h2 className="text-[14px] font-semibold text-ink">{es ? "Más plantillas" : "More templates"}</h2>
              <ul className="mt-3 divide-y divide-line rounded-xl border border-line bg-surface">
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link href={`/templates/${r.slug}`} className="flex items-center justify-between gap-3 px-4 py-3 text-[14px] font-medium text-ink hover:bg-well/60">
                      {r.name}
                      <StageBadge day={r.stage} label={r.stage ? `${d.stageLabel} ${r.stage}` : d.general} />
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          </aside>
        </article>
      </main>
      <PackCta lang={tpl.lang} />
      <Footer lang={tpl.lang} />
    </div>
  );
}
