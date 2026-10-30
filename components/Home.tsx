import type { Lang } from "@/lib/site";
import { t } from "@/lib/i18n";
import Header from "./Header";
import Footer from "./Footer";
import Generator from "./Generator";
import PackCta from "./PackCta";
import Link from "next/link";
import { templates } from "@/lib/templates";

export default function Home({ lang }: { lang: Lang }) {
  const d = t(lang);
  const tpls = templates.filter((x) => x.lang === lang);
  return (
    <div lang={lang}>
      <Header lang={lang} />
      <main>
        <section className="mx-auto max-w-6xl px-5 pb-12 pt-14 md:pt-20">
          <p className="font-mono text-xs uppercase tracking-widest text-accent">{d.kicker}</p>
          <h1 className="mt-4 max-w-5xl font-display text-5xl font-black leading-[0.95] tracking-tight md:text-8xl">
            {d.hero}
          </h1>
          <div className="mt-8 grid gap-6 border-t border-ink pt-6 md:grid-cols-[2fr_1fr]">
            <p className="max-w-2xl text-lg md:text-xl">{d.sub}</p>
            <p className="font-mono text-[11px] uppercase leading-relaxed tracking-widest text-muted md:text-right">
              +3 → +7 → +14 → +30<br />{lang === "es" ? "amable · firme · final" : "friendly · firm · final"}
            </p>
          </div>
        </section>
        <section className="mx-auto max-w-6xl px-5">
          <Generator lang={lang} />
        </section>
        <PackCta lang={lang} />
        <section className="mx-auto mt-20 max-w-6xl px-5">
          <h2 className="font-mono text-xs uppercase tracking-widest text-muted">{lang === "es" ? "Plantillas gratis" : "Free templates"}</h2>
          <ul className="mt-4 divide-y divide-rule border-y border-ink">
            {tpls.map((x) => (
              <li key={x.slug}>
                <Link href={`/templates/${x.slug}`} className="flex items-center justify-between gap-4 py-4 font-display text-xl font-bold hover:text-accent md:text-2xl">
                  {x.title}<span aria-hidden>→</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <Footer lang={lang} />
    </div>
  );
}
