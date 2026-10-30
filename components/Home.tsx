import type { Lang } from "@/lib/site";
import { t } from "@/lib/i18n";
import Header from "./Header";
import Footer from "./Footer";
import Generator from "./Generator";
import PackCta from "./PackCta";
import StageBadge from "./StageBadge";
import Link from "next/link";
import { templates } from "@/lib/templates";

const DAYS = [3, 7, 14, 30];

export default function Home({ lang }: { lang: Lang }) {
  const d = t(lang);
  const tpls = templates.filter((x) => x.lang === lang);
  return (
    <div lang={lang}>
      <Header lang={lang} />
      <main>
        <section className="container-x grid gap-12 pb-16 pt-14 md:pt-20 lg:grid-cols-[1.25fr_1fr] lg:items-end lg:gap-16">
          <div>
            <p className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-coral" aria-hidden />
              {d.kicker}
            </p>
            <h1 className="mt-5 max-w-[16ch] text-[40px] font-semibold leading-[1.05] tracking-display text-ink sm:text-[52px] lg:text-[60px]">
              {d.hero}
            </h1>
            <p className="mt-6 max-w-[56ch] text-[17px] leading-[1.65] text-ink-2">{d.sub}</p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#generator" className="btn-primary h-11 px-5">{d.form.generate}</a>
              <Link href={d.pack} className="btn-secondary h-11 px-5">{d.nav.pack}</Link>
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-[13px] text-ink-2">
              {d.trust.map((x) => (
                <li key={x} className="flex items-center gap-2">
                  <svg aria-hidden width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3.5 8.5l3 3 6-7" stroke="#0F766E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  {x}
                </li>
              ))}
            </ul>
          </div>
          <aside className="card p-2" aria-label={d.out.title}>
            <div className="flex items-center justify-between px-4 pb-3 pt-3">
              <h2 className="text-[14px] font-semibold text-ink">{d.out.title}</h2>
              <span className="text-[12px] text-ink-3">{lang === "es" ? "Desde el vencimiento" : "From the due date"}</span>
            </div>
            <ol className="rounded-lg border border-line bg-canvas/60">
              {d.schedule.map(([, what], i) => (
                <li key={i} className="flex items-center gap-4 border-b border-line px-4 py-3.5 last:border-b-0">
                  <span className="w-[68px] shrink-0"><StageBadge day={DAYS[i]} label={`${d.stageLabel} ${DAYS[i]}`} /></span>
                  <span className="min-w-0">
                    <span className="block text-[14px] font-medium text-ink">{d.out.stage[i]}</span>
                    <span className="block text-[13px] text-ink-2">{what}</span>
                  </span>
                </li>
              ))}
            </ol>
          </aside>
        </section>

        <section id="generator" className="container-x scroll-mt-20">
          <Generator lang={lang} />
        </section>

        <section id="templates" className="container-x mt-28 scroll-mt-20">
          <div className="flex flex-col justify-between gap-3 border-b border-line pb-6 sm:flex-row sm:items-end">
            <div>
              <h2 className="text-[28px] font-semibold leading-tight tracking-heading text-ink sm:text-[32px]">{d.tplHeading}</h2>
              <p className="mt-2 max-w-[60ch] text-[15px] text-ink-2">{d.tplSub}</p>
            </div>
          </div>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {tpls.map((x) => (
              <li key={x.slug}>
                <Link href={`/templates/${x.slug}`}
                  className="group flex h-full flex-col rounded-xl border border-line bg-surface p-5 transition duration-200 hover:-translate-y-0.5 hover:border-line-strong hover:shadow-lift">
                  <div className="flex items-center justify-between">
                    <StageBadge day={x.stage} label={x.stage ? `${d.stageLabel} ${x.stage}` : d.general} />
                    <svg aria-hidden className="text-ink-3 transition group-hover:translate-x-0.5 group-hover:text-brand" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 3.5L10.5 8 6 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </div>
                  <h3 className="mt-4 text-[17px] font-semibold tracking-heading text-ink">{x.name}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-ink-2">{x.description}</p>
                  <p className="mt-auto pt-5 text-[13px] font-medium text-brand">{d.readTpl}</p>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <PackCta lang={lang} />
      </main>
      <Footer lang={lang} />
    </div>
  );
}
