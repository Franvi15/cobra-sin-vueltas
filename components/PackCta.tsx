import Link from "next/link";
import type { Lang } from "@/lib/site";
import { t } from "@/lib/i18n";

export default function PackCta({ lang }: { lang: Lang }) {
  const d = t(lang);
  return (
    <section className="mx-auto mt-20 max-w-6xl px-5">
      <div className="grid gap-8 border-2 border-ink bg-ink p-8 text-paper md:grid-cols-[1fr_auto] md:items-end md:p-12">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-accent">{d.cta.kicker} — $19</p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl font-black leading-tight md:text-5xl">{d.cta.title}</h2>
          <p className="mt-4 max-w-2xl text-paper/80">{d.cta.body}</p>
        </div>
        <Link href={d.pack} className="inline-block bg-accent px-6 py-4 text-center font-mono text-sm uppercase tracking-widest text-paper transition hover:bg-paper hover:text-ink">
          {d.cta.button} →
        </Link>
      </div>
    </section>
  );
}
