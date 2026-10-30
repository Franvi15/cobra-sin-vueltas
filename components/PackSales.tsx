import Link from "next/link";
import { CHECKOUT_URL, PACK_PRICE, type Lang } from "@/lib/site";
import { c } from "@/lib/copy";
import { t } from "@/lib/i18n";
import DocStack from "./DocStack";

const Check = () => (
  <svg aria-hidden className="mt-1 shrink-0 text-brand-bright" width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3.5 8.5l3 3 6-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
);

export function BuyBox({ lang, dark = true }: { lang: Lang; dark?: boolean }) {
  const k = c(lang);
  return (
    <div>
      <div className="flex items-baseline gap-3">
        <span className={`text-[52px] font-semibold leading-none tracking-display tabular-nums ${dark ? "text-white" : "text-ink"}`}>USD {PACK_PRICE}</span>
        <span className={`text-[14px] ${dark ? "text-white/60" : "text-ink-3"}`}>{k.oneTime}</span>
      </div>
      <p className={`mt-3 max-w-[44ch] text-[14px] leading-relaxed ${dark ? "text-white/70" : "text-ink-2"}`}>{k.anchor}</p>
      <a href={CHECKOUT_URL} className="btn-buy mt-6 w-full sm:w-auto">
        {k.buy}
        <svg aria-hidden width="18" height="18" viewBox="0 0 16 16" fill="none"><path d="M3 8h9.5M8.5 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
      </a>
      <p className={`mt-3 text-[13px] ${dark ? "text-white/55" : "text-ink-3"}`}>{k.secure}. {k.instant}.</p>
      <div className={`mt-6 flex gap-3 rounded-xl p-4 ${dark ? "bg-white/5 ring-1 ring-white/10" : "bg-brand-soft"}`}>
        <svg aria-hidden className={`shrink-0 ${dark ? "text-brand-bright" : "text-brand"}`} width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 2.5l6 2.25v4.5c0 3.9-2.6 6.9-6 8.25-3.4-1.35-6-4.35-6-8.25v-4.5L10 2.5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /><path d="M7.25 10l2 2 3.5-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
        <p className={`text-[13.5px] leading-relaxed ${dark ? "text-white/80" : "text-ink-2"}`}>{k.guarantee}</p>
      </div>
    </div>
  );
}

export default function PackSales({ lang, showLink = true }: { lang: Lang; showLink?: boolean }) {
  const k = c(lang);
  const d = t(lang);
  return (
    <section id="pack" className="relative mt-28 overflow-hidden bg-night text-white sm:mt-36">
      <div className="bg-grid-dark pointer-events-none absolute inset-0" aria-hidden />
      <div className="container-x relative py-20 sm:py-28">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-16">
          <div>
            <p className="label-dark">{k.packKicker}</p>
            <h2 className="h-display mt-4 max-w-[16ch] text-[36px] sm:text-[52px]">{k.packTitle}</h2>
            <p className="mt-5 max-w-[56ch] text-[16px] leading-[1.7] text-white/70">{k.packSub}</p>
          </div>
          <DocStack lang={lang} />
        </div>
        <div className="mt-16 grid gap-12 border-t border-white/10 pt-14 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <ul className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
            {k.stack.map(([h, p]) => (
              <li key={h} className="flex gap-3">
                <Check />
                <div>
                  <p className="text-[15px] font-semibold">{h}</p>
                  <p className="mt-1 text-[14px] leading-relaxed text-white/60">{p}</p>
                </div>
              </li>
            ))}
            {showLink && (
              <li className="sm:col-span-2">
                <Link href={d.pack} className="text-[14px] font-medium text-brand-mint underline decoration-brand-mint/30 underline-offset-4 hover:decoration-brand-mint">{k.seeFiles}</Link>
              </li>
            )}
          </ul>
          <div className="rounded-2xl bg-white/[0.04] p-6 ring-1 ring-white/10 sm:p-8"><BuyBox lang={lang} /></div>
        </div>
      </div>
    </section>
  );
}
