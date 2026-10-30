import Link from "next/link";
import { CHECKOUT_URL, type Lang } from "@/lib/site";
import { t } from "@/lib/i18n";

export default function PackCta({ lang }: { lang: Lang }) {
  const d = t(lang);
  return (
    <section className="container-x mt-32 sm:mt-40">
      <div className="section grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-20">
        <div>
          <p className="label">{d.cta.kicker}</p>
          <h2 className="h-section mt-4 max-w-[18ch]">{d.cta.title}</h2>
        </div>
        <div className="lg:pt-9">
          <p className="max-w-[56ch] text-[16px] leading-[1.7] text-ink-2">{d.cta.body}</p>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
            <a href={CHECKOUT_URL} className="btn-primary h-11 px-5">{d.cta.buy}</a>
            <Link href={d.pack} className="link text-[14px]">{d.cta.button}</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
