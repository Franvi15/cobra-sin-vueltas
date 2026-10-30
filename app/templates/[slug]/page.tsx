import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { templates, getTemplate } from "@/lib/templates";
import { alternates } from "@/lib/seo";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CopyButton from "@/components/CopyButton";
import PackCta from "@/components/PackCta";

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
  return (
    <div lang={tpl.lang}>
      <Header lang={tpl.lang} altHref={`/templates/${tpl.alt}`} />
      <main className="mx-auto max-w-6xl px-5">
        <article className="grid gap-10 pt-14 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-accent">{es ? "Plantilla gratis" : "Free template"}</p>
            <h1 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-tight md:text-6xl">{tpl.title}</h1>
            <p className="mt-5 text-lg">{tpl.description}</p>
            <p className="mt-6 border-l-4 border-ink pl-4 text-muted">
              <strong className="font-mono text-[11px] uppercase tracking-widest text-ink">{es ? "Cuándo mandarlo" : "When to send"}:</strong> {tpl.whenToSend}
            </p>
            <div className="mt-10 border-2 border-ink bg-white/60">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-ink px-5 py-3">
                <p className="text-sm"><span className="font-mono text-[11px] uppercase tracking-widest text-muted">{es ? "Asunto" : "Subject"}: </span><strong>{tpl.subject}</strong></p>
                <CopyButton text={full} label={es ? "Copiar plantilla" : "Copy template"} copiedLabel={es ? "Copiado" : "Copied"} />
              </div>
              <pre className="whitespace-pre-wrap p-6 font-sans text-[16px] leading-relaxed">{tpl.body}</pre>
            </div>
            <p className="mt-4 text-sm text-muted">
              {es ? "Para tenerlo con tus datos y las fechas calculadas, usá el " : "To get it with your details and the dates worked out, use the "}
              <Link href={es ? "/es" : "/"} className="font-semibold text-ink underline decoration-accent decoration-2 underline-offset-4">{es ? "generador gratis" : "free generator"}</Link>.
            </p>
          </div>
          <aside className="self-start md:sticky md:top-6">
            <h2 className="font-mono text-xs uppercase tracking-widest text-muted">{es ? "Consejos" : "Tips"}</h2>
            <ol className="mt-3 space-y-4">
              {tpl.tips.map((tip, i) => (
                <li key={i} className="flex gap-3 border-t border-rule pt-4">
                  <span className="font-display text-2xl font-semibold text-accent">{i + 1}</span><span>{tip}</span>
                </li>
              ))}
            </ol>
            <h2 className="mt-10 font-mono text-xs uppercase tracking-widest text-muted">{es ? "Más plantillas" : "More templates"}</h2>
            <ul className="mt-3 divide-y divide-rule border-y border-ink">
              {related.map((r) => (
                <li key={r.slug}><Link href={`/templates/${r.slug}`} className="block py-3 font-semibold hover:text-accent">{r.title}</Link></li>
              ))}
            </ul>
          </aside>
        </article>
      </main>
      <PackCta lang={tpl.lang} />
      <Footer lang={tpl.lang} />
    </div>
  );
}
