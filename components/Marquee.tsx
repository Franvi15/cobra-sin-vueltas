import Link from "next/link";
import type { Lang } from "@/lib/site";
import { templates } from "@/lib/templates";
import { c, toneForStage } from "@/lib/copy";
import { t } from "@/lib/i18n";

function excerpt(body: string) {
  const lines = body.split("\n").map((l) => l.trim()).filter(Boolean);
  return lines.slice(1, 3).join(" ");
}

export default function Marquee({ lang }: { lang: Lang }) {
  const k = c(lang);
  const d = t(lang);
  const tpls = templates.filter((x) => x.lang === lang);
  const row1 = [...tpls, ...tpls];
  const row2 = [...k.exchanges, ...k.exchanges, ...k.exchanges, ...k.exchanges];
  return (
    <div className="space-y-5">
      <div className="pause-hover marquee-mask overflow-hidden">
        <ul className="marquee-track flex w-max animate-marquee gap-5 py-2">
          {row1.map((x, i) => {
            const tone = toneForStage(x.stage);
            return (
              <li key={i} aria-hidden={i >= tpls.length} className="w-[320px] shrink-0">
                <Link href={`/templates/${x.slug}`} tabIndex={i >= tpls.length ? -1 : 0}
                  className="group block h-full rounded-2xl border border-line bg-white p-5 shadow-card transition duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-lift">
                  <div className="flex items-center justify-between text-[12px]">
                    <span className="font-semibold text-brand">{x.stage ? `${d.stageLabel} ${x.stage}` : d.general}</span>
                    <span className={tone === "final" ? "font-medium text-coral-ink" : "text-ink-3"}>{k.tones[tone]}</span>
                  </div>
                  <p className="mt-3 line-clamp-1 text-[15px] font-semibold tracking-heading text-ink">{x.subject}</p>
                  <p className="mt-2 line-clamp-3 text-[13.5px] leading-relaxed text-ink-2">{excerpt(x.body)}</p>
                  <p className="mt-4 text-[13px] font-medium text-ink-3 transition-colors group-hover:text-brand">{d.readTpl}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="pause-hover marquee-mask overflow-hidden" aria-label={k.exampleTag}>
        <ul className="marquee-track flex w-max animate-marquee-r gap-5 py-2">
          {row2.map(([subj, reply, back], i) => (
            <li key={i} aria-hidden={i >= k.exchanges.length} className="w-[340px] shrink-0 rounded-2xl border border-white/10 bg-night-2 p-5 text-white">
              <p className="text-[11px] font-medium uppercase tracking-[0.08em] text-white/40">{k.exampleTag}</p>
              <p className="mt-3 truncate text-[13px] text-white/60"><span className="text-white/40">{k.youLabel}:</span> {subj}</p>
              <div className="mt-3 flex">
                <p className="max-w-[85%] rounded-2xl rounded-bl-md bg-white/10 px-3.5 py-2 text-[14px] leading-snug">{reply}</p>
              </div>
              <div className="mt-2 flex justify-end">
                <p className="max-w-[85%] rounded-2xl rounded-br-md bg-brand px-3.5 py-2 text-[14px] leading-snug">{back}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
