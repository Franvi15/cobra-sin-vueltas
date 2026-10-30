import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { templates, getTemplate } from "@/lib/templates";
import { alternates } from "@/lib/seo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CopyButton from "@/components/CopyButton";
import PackCta from "@/components/PackCta";
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
        <nav aria-label="Breadcrumb" className="pt-12 text-[13px] text-ink-3 sm:pt-16">
          <Link href={es ? "/es" : "/"} className="hover:text-ink">{es ? "Cobrá Sin Vueltas" : "Chase Invoice"}</Link>
          <span className="mx-2" aria-hidden>/</span>
          <Link href={`${es ? "/es" : "/"}#templates`} className="hover:text-ink">{d.nav.templates}</Link>
        </nav>
        <header className="pb-16 pt-14 sm:pb-20 sm:pt-20">
          <p className="label tabular-nums">{tpl.stage ? `${d.stageLabel} ${tpl.stage}` : d.general}</p>
          <h1 className="h-display mt-5 max-w-[20ch] text-[38px] sm:text-[56px]">{tpl.title}</h1>
          <p className="mt-8 max-w-[60ch] text-[17px] leading-[1.7] text-ink-2 sm:text-[18px]">{tpl.description}</p>
        </header>
        <article className="grid gap-16 border-t border-line pt-12 lg:grid-cols-[minmax(0,1fr)_300px] lg:gap-24">
          <div className="min-w-0">
            <dl className="space-y-2 text-[14px]">
              <div className="flex gap-4"><dt className="w-24 shrink-0 text-ink-3">{es ? "Cuándo" : "When"}</dt><dd className="text-ink-2">{tpl.whenToSend}</dd></div>
              <div className="flex gap-4"><dt className="w-24 shrink-0 text-ink-3">{es ? "Asunto" : "Subject"}</dt><dd className="text-ink">{tpl.subject}</dd></div>
            </dl>
            <pre className="mt-10 whitespace-pre-wrap border-t border-line pt-10 font-sans text-[16px] leading-[1.8] text-ink">{tpl.body}</pre>
            <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-4 border-t border-line pt-8">
              <CopyButton className="btn-primary" text={full} label={es ? "Copiar plantilla" : "Copy template"} copiedLabel={es ? "Copiado" : "Copied"} />
              <p className="text-[14px] text-ink-2">
                {es ? "O usá el " : "Or use the "}
                <Link href={es ? "/es#generator" : "/#generator"} className="link-brand">{es ? "generador gratis" : "free generator"}</Link>
                {es ? " con tus datos y fechas." : " with your details and dates."}
              </p>
            </div>
          </div>
          <aside className="space-y-14 self-start lg:sticky lg:top-24">
            <section>
              <h2 className="label">{es ? "Consejos" : "Tips"}</h2>
              <ul className="mt-4 divide-y divide-line border-t border-line">
                {tpl.tips.map((tip) => (
                  <li key={tip} className="py-4 text-[14px] leading-relaxed text-ink-2">{tip}</li>
                ))}
              </ul>
            </section>
            <section>
              <h2 className="label">{es ? "Más plantillas" : "More templates"}</h2>
              <ul className="mt-4 divide-y divide-line border-t border-line">
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link href={`/templates/${r.slug}`} className="flex items-baseline justify-between gap-4 py-3.5 text-[14px] text-ink transition-colors hover:text-brand">
                      {r.name}
                      <span className="shrink-0 text-[13px] tabular-nums text-ink-3">{r.stage ? `${d.stageLabel} ${r.stage}` : ""}</span>
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
