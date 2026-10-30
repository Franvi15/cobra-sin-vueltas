import type { Lang } from "@/lib/site";
import { t } from "@/lib/i18n";
import Header from "./Header";
import Footer from "./Footer";
import Generator from "./Generator";
import PackCta from "./PackCta";
import Link from "next/link";
import { templates } from "@/lib/templates";

const DAYS = [3, 7, 14, 30];

export default function Home({ lang }: { lang: Lang }) {
  const d = t(lang);
  const es = lang === "es";
  const tpls = templates.filter((x) => x.lang === lang);
  return (
    <div lang={lang}>
      <Header lang={lang} />
      <main>
        <section className="container-x pb-20 pt-20 sm:pb-28 sm:pt-32">
          <p className="label">{d.kicker}</p>
          <h1 className="h-display mt-6 max-w-[14ch] text-[44px] sm:text-[68px] lg:text-[84px]">{d.hero}</h1>
          <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-20">
            <p className="max-w-[52ch] text-[17px] leading-[1.7] text-ink-2 sm:text-[18px]">{d.sub}</p>
            <div className="flex flex-col items-start gap-6 lg:items-end lg:justify-end">
              <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
                <a href="#generator" className="btn-primary h-11 px-5">{d.form.generate}</a>
                <Link href={d.pack} className="link text-[14px]">{d.nav.pack}</Link>
              </div>
              <p className="text-[13px] text-ink-3">{d.trust.join(". ")}.</p>
            </div>
          </div>
        </section>

        <section className="container-x" aria-label={d.out.title}>
          <ol className="grid border-t border-line sm:grid-cols-2 lg:grid-cols-4">
            {d.schedule.map(([, what], i) => (
              <li key={i} className="border-b border-line py-7 sm:pr-8 lg:border-b-0 lg:[&:not(:first-child)]:border-l lg:[&:not(:first-child)]:pl-8">
                <p className="text-[13px] tabular-nums text-ink-3">{d.stageLabel} {DAYS[i]}</p>
                <p className="mt-3 text-[17px] font-medium tracking-heading text-ink">{d.out.stage[i]}</p>
                <p className="mt-1.5 text-[14px] leading-relaxed text-ink-2">{what}</p>
              </li>
            ))}
          </ol>
        </section>

        <section id="generator" className="container-x mt-32 scroll-mt-16 sm:mt-40">
          <div className="section grid gap-6 lg:grid-cols-[1fr_1fr] lg:gap-20">
            <h2 className="h-section max-w-[16ch]">{d.genHeading}</h2>
            <p className="max-w-[48ch] text-[16px] leading-[1.7] text-ink-2 lg:pt-3">{d.genSub}</p>
          </div>
          <div className="mt-14 sm:mt-16"><Generator lang={lang} /></div>
        </section>

        <section id="templates" className="container-x mt-32 scroll-mt-16 sm:mt-40">
          <div className="section grid gap-6 lg:grid-cols-[1fr_1fr] lg:gap-20">
            <h2 className="h-section">{d.tplHeading}</h2>
            <p className="max-w-[48ch] text-[16px] leading-[1.7] text-ink-2 lg:pt-3">{d.tplSub}</p>
          </div>
          <ul className="mt-14 border-t border-line sm:mt-16">
            {tpls.map((x) => (
              <li key={x.slug}>
                <Link href={`/templates/${x.slug}`}
                  className="group grid gap-1 border-b border-line py-6 transition-colors sm:grid-cols-[120px_minmax(0,1fr)_minmax(0,1.4fr)_auto] sm:items-baseline sm:gap-8">
                  <span className="text-[13px] tabular-nums text-ink-3">{x.stage ? `${d.stageLabel} ${x.stage}` : d.general}</span>
                  <span className="text-[18px] font-medium tracking-heading text-ink">{x.name}</span>
                  <span className="text-[14px] leading-relaxed text-ink-2">{x.description}</span>
                  <span className="mt-2 text-[14px] text-ink-3 transition-colors group-hover:text-brand sm:mt-0">{d.readTpl}</span>
                </Link>
              </li>
            ))}
          </ul>
          <p className="sr-only">{es ? "Plantillas" : "Templates"}</p>
        </section>

        <PackCta lang={lang} />
      </main>
      <Footer lang={lang} />
    </div>
  );
}
