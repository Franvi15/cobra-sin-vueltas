import Link from "next/link";
import type { Lang } from "@/lib/site";
import { t } from "@/lib/i18n";

export default function PackCta({ lang }: { lang: Lang }) {
  const d = t(lang);
  return (
    <section className="mx-auto mt-24 max-w-6xl px-5">
      <div className="grid gap-8 border-y-2 border-ink py-10 md:grid-cols-12">
        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent md:col-span-3">{d.cta.kicker}</p>
        <div className="md:col-span-6">
          <h2 className="font-display text-3xl font-bold leading-tight md:text-4xl">{d.cta.title}</h2>
          <p className="mt-4 text-ink/80">{d.cta.body}</p>
        </div>
        <div className="md:col-span-3 md:self-end md:text-right">
          <Link href={d.pack} className="inline-block border-2 border-ink bg-ink px-5 py-3 font-mono text-xs uppercase tracking-[0.14em] text-paper hover:border-accent hover:bg-accent">
            {d.cta.button}
          </Link>
        </div>
      </div>
    </section>
  );
}
