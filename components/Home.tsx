import type { Lang } from "@/lib/site";
import { t } from "@/lib/i18n";
import { c, toneForStage } from "@/lib/copy";
import Header from "./Header";
import Footer from "./Footer";
import Generator from "./Generator";
import HeroMock from "./HeroMock";
import Marquee from "./Marquee";
import PackSales from "./PackSales";
import Reveal from "./Reveal";
import StickyBuy from "./StickyBuy";
import Link from "next/link";
import { templates } from "@/lib/templates";
import { CHECKOUT_URL } from "@/lib/site";

export default function Home({ lang }: { lang: Lang }) {
  const d = t(lang);
  const k = c(lang);
  const tpls = templates.filter((x) => x.lang === lang);
  return (
    <div lang={lang}>
      <Header lang={lang} />
      <main>
        <section className="relative overflow-hidden bg-night text-white">
          <div className="bg-grid-dark pointer-events-none absolute inset-0" aria-hidden />
          <div className="container-x relative grid gap-16 pb-24 pt-16 sm:pt-24 lg:grid-cols-[1fr_1.05fr] lg:items-center lg:gap-12 lg:pb-32">
            <div>
              <p className="label-dark">{k.heroKicker}</p>
              <h1 className="h-display mt-5 text-[42px] sm:text-[60px] lg:text-[68px]">
                <span className="block text-brand-mint">{k.heroTitle[0]}</span>
                <span className="block">{k.heroTitle[1]}</span>
                <span className="block">{k.heroTitle[2]}</span>
              </h1>
              <p className="mt-6 max-w-[50ch] text-[17px] leading-[1.65] text-white/70 sm:text-[18px]">{k.heroSub}</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a href="#generator" className="btn h-12 bg-white px-6 text-[16px] font-semibold text-night shadow-[0_8px_24px_-8px_rgba(153,246,228,0.45)] hover:bg-brand-soft">{k.heroCta}</a>
                <a href={CHECKOUT_URL} className="btn h-12 border border-coral/60 px-6 text-[16px] font-semibold text-coral hover:bg-coral hover:text-night">{k.buy}</a>
              </div>
              <p className="mt-4 text-[13px] text-white/50">{k.heroNote}</p>
            </div>
            <div className="lg:pl-6"><HeroMock lang={lang} /></div>
          </div>
          <div className="relative border-t border-white/10 bg-night-2/60">
            <dl className="container-x grid grid-cols-2 lg:grid-cols-4">
              {k.cred.map(([a, b], i) => (
                <div key={a} className={`py-6 ${i % 2 ? "pl-5 sm:pl-8" : ""} ${i > 0 ? "lg:border-l lg:border-white/10 lg:pl-8" : ""} ${i > 1 ? "border-t border-white/10 lg:border-t-0" : ""}`}>
                  <dt className="text-[22px] font-semibold tracking-heading text-white">{a}</dt>
                  <dd className="mt-1 text-[13.5px] text-white/55">{b}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="py-24 sm:py-28" aria-labelledby="mq-h">
          <div className="container-x">
            <Reveal className="max-w-2xl">
              <p className="label">{d.nav.templates}</p>
              <h2 id="mq-h" className="h-section mt-3">{k.marqueeTitle}</h2>
              <p className="mt-4 text-[17px] leading-relaxed text-ink-2">{k.marqueeSub}</p>
            </Reveal>
          </div>
          <div className="mt-12"><Marquee lang={lang} /></div>
        </section>

        <section className="container-x" aria-labelledby="how-h">
          <Reveal><h2 id="how-h" className="h-section">{k.howTitle}</h2></Reveal>
          <ol className="mt-12 grid gap-5 md:grid-cols-3">
            {k.how.map(([h, p], i) => (
              <Reveal as="li" key={h} delay={i * 120} className="relative overflow-hidden rounded-2xl border border-line bg-white p-7 shadow-card">
                <span className="text-[56px] font-semibold leading-none tracking-display text-brand/35 tabular-nums">0{i + 1}</span>
                <h3 className="mt-6 text-[20px] font-semibold tracking-heading">{h}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-2">{p}</p>
              </Reveal>
            ))}
          </ol>
          <p className="mt-5 text-[13px] text-ink-3">{k.howNote}</p>
        </section>

        <section id="generator" className="relative mt-28 scroll-mt-16 sm:mt-36">
          <div className="bg-grid-light pointer-events-none absolute inset-x-0 -top-10 h-[480px]" aria-hidden />
          <div className="container-x relative">
            <Reveal className="mx-auto max-w-2xl text-center">
              <p className="label">{d.nav.tool}</p>
              <h2 className="h-section mt-3">{k.genTitle}</h2>
              <p className="mt-4 text-[17px] leading-relaxed text-ink-2">{k.genSub}</p>
            </Reveal>
            <div className="mt-12"><Generator lang={lang} /></div>
          </div>
        </section>

        <section id="templates" className="container-x mt-28 scroll-mt-16 sm:mt-36">
          <Reveal className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <h2 className="h-section">{k.tplTitle}</h2>
              <p className="mt-4 text-[17px] leading-relaxed text-ink-2">{k.tplSub}</p>
            </div>
          </Reveal>
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {tpls.map((x, i) => {
              const tone = toneForStage(x.stage);
              return (
                <Reveal as="li" key={x.slug} delay={(i % 3) * 80}>
                  <Link href={`/templates/${x.slug}`} className="group flex h-full flex-col rounded-2xl border border-line bg-white p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-lift">
                    <div className="flex items-center justify-between text-[12.5px]">
                      <span className="font-semibold text-brand">{x.stage ? `${d.stageLabel} ${x.stage}` : d.general}</span>
                      <span className={tone === "final" ? "font-medium text-coral-ink" : "text-ink-3"}>{k.tones[tone]}</span>
                    </div>
                    <h3 className="mt-4 text-[19px] font-semibold tracking-heading text-ink">{x.name}</h3>
                    <p className="mt-2 text-[14px] leading-relaxed text-ink-2">{x.description}</p>
                    <div className="mt-5 rounded-lg bg-well px-3.5 py-2.5 text-[13px] text-ink-2">
                      <span className="text-ink-3">{d.out.subject}: </span>{x.subject}
                    </div>
                    <span className="mt-auto inline-flex items-center gap-1.5 pt-5 text-[14px] font-semibold text-brand">
                      {d.readTpl}
                      <svg aria-hidden className="transition-transform group-hover:translate-x-1" width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M3 8h9.5M8.5 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </span>
                  </Link>
                </Reveal>
              );
            })}
            {tpls.length % 3 !== 0 && (
              <li>
                <a href="#generator" className="group flex h-full flex-col justify-between rounded-2xl bg-night p-6 text-white shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-lift">
                  <div>
                    <p className="text-[12.5px] font-semibold text-brand-mint">{lang === "es" ? "Con tus datos" : "With your details"}</p>
                    <h3 className="mt-4 text-[19px] font-semibold tracking-heading">{lang === "es" ? "Los 4 mails, ya fechados" : "All 4 emails, already dated"}</h3>
                    <p className="mt-2 text-[14px] leading-relaxed text-white/65">{k.genSub}</p>
                  </div>
                  <span className="mt-6 text-[14px] font-semibold text-brand-mint">{k.heroCta} <span aria-hidden className="inline-block transition-transform group-hover:translate-x-1">&rarr;</span></span>
                </a>
              </li>
            )}
          </ul>
        </section>

        <PackSales lang={lang} />
        <section className="container-x mt-24 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-line bg-white p-7">
            <h3 className="text-[18px] font-semibold tracking-heading">{k.forTitle}</h3>
            <ul className="mt-4 space-y-3 text-[15px] text-ink-2">{k.forList.map((x) => <li key={x} className="flex gap-3"><span aria-hidden className="text-brand">+</span>{x}</li>)}</ul>
          </div>
          <div className="rounded-2xl border border-line bg-white p-7">
            <h3 className="text-[18px] font-semibold tracking-heading">{k.notTitle}</h3>
            <ul className="mt-4 space-y-3 text-[15px] text-ink-2">{k.notList.map((x) => <li key={x} className="flex gap-3"><span aria-hidden className="text-coral-ink">&times;</span>{x}</li>)}</ul>
          </div>
        </section>
      </main>
      <Footer lang={lang} />
      <StickyBuy label={k.buy} note={k.sticky} />
    </div>
  );
}
