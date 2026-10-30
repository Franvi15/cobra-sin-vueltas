import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { allTemplates, getTemplate, tplPath, type Template } from "@/lib/templates";
import { alternates } from "@/lib/seo";
import TemplateView from "@/components/TemplateView";

export const dynamicParams = false;

export function generateStaticParams() {
  return allTemplates.filter((t) => t.lang === "es" && !!t.longtail).map((t) => ({ slug: t.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const tpl = getTemplate(params.slug) as Template | undefined;
  if (!tpl || !(tpl.lang === "es" && !!tpl.longtail)) return {};
  const other = getTemplate(tpl.alt);
  const lang: string = tpl.lang;
  const self = tplPath(tpl);
  const op = other ? tplPath(other) : tpl.lang === "es" ? "/" : "/es";
  const en = lang === "en" ? self : op;
  const es = tpl.lang === "es" ? self : op;
  return {
    title: tpl.title,
    description: tpl.description,
    alternates: alternates(en, es, tpl.lang),
    openGraph: { title: tpl.title, description: tpl.description, locale: tpl.lang === "es" ? "es_AR" : "en_US", type: "article" },
  };
}

export default function Page({ params }: { params: { slug: string } }) {
  const tpl = getTemplate(params.slug) as Template | undefined;
  if (!tpl || !(tpl.lang === "es" && !!tpl.longtail)) notFound();
  return <TemplateView tpl={tpl} />;
}
