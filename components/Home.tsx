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
        <section className="mx-auto grid max-w-6xl gap-10 px-5 pb-14 pt-12 md:grid-cols-12 md:pt-16">
          <div className="md:col-span-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">{d.kicker}</p>
            <h1 className="mt-5 font-display text-[2.75rem] font-bold leading-[1.02] tracking-[-0.02em] md:text-[4.5rem]">
              {d.hero}
            </h1>
            <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-ink/80">{d.sub}</p>
          </div>
          <aside className="self-end md:col-span-4" aria-label={d.out.title}>
            <table className="w-full border-t-2 border-ink text-sm tabular-nums">
              <caption className="pb-2 text-left font-mono text-[11px] uppercase tracking-[0.18em] text-muted">{d.out.title}</caption>
              <tbody>
                {d.schedule.map(([day, what]) => (
                  <tr key={day} className="border-b border-rule">
                    <td className="w-14 py-2.5 font-mono text-accent">{day}</td>
                    <td className="py-2.5">{what}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </aside>
        </section>
        <section className="mx-auto max-w-6xl px-5">
          <Generator lang={lang} />
        </section>
        <PackCta lang={lang} />
        <section className="mx-auto mt-20 max-w-6xl px-5">
          <h2 className="border-b-2 border-ink pb-2 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">{d.tplHeading}</h2>
          <ul>
            {tpls.map((x, i) => (
              <li key={x.slug} className="border-b border-rule">
                <Link href={`/templates/${x.slug}`} className="grid grid-cols-[3rem_1fr] gap-4 py-4 hover:text-accent md:grid-cols-[3rem_1fr_1fr]">
                  <span className="font-mono text-sm tabular-nums text-muted">{String(i + 1).padStart(2, "0")}</span>
                  <span className="font-display text-xl font-semibold">{x.title}</span>
                  <span className="hidden text-sm text-muted md:block">{x.whenToSend}</span>
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
