import Link from "next/link";
import { CHECKOUT_URL, type Lang } from "@/lib/site";
import { t } from "@/lib/i18n";

export default function PackCta({ lang }: { lang: Lang }) {
  const d = t(lang);
  return (
    <section className="container-x mt-24">
      <div className="relative overflow-hidden rounded-2xl bg-brand-dark px-6 py-10 text-white sm:px-10 sm:py-12">
        <div className="absolute inset-x-0 top-0 h-1 bg-coral" aria-hidden />
        <div className="grid gap-8 md:grid-cols-[1.6fr_1fr] md:items-end">
          <div>
            <p className="text-[13px] font-medium text-white/70">{d.cta.kicker}</p>
            <h2 className="mt-3 max-w-[22ch] text-[26px] font-semibold leading-tight tracking-heading sm:text-[32px]">{d.cta.title}</h2>
            <p className="mt-4 max-w-[62ch] text-[15px] leading-relaxed text-white/80">{d.cta.body}</p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <a href={CHECKOUT_URL} className="btn h-11 bg-white px-5 text-brand-dark hover:bg-canvas">{d.cta.buy}</a>
            <Link href={d.pack} className="btn h-11 border border-white/30 px-5 text-white hover:bg-white/10">{d.cta.button}</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
