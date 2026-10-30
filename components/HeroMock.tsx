"use client";
import { useEffect, useState } from "react";
import type { Lang } from "@/lib/site";
import { c } from "@/lib/copy";

const DAYS = [3, 7, 14, 30];
const DATES = { en: ["Oct 23", "Oct 27", "Nov 3", "Nov 19"], es: ["23/10", "27/10", "3/11", "19/11"] };

/** Animated inbox: the four follow-ups go out in order, then the payment lands. */
export default function HeroMock({ lang }: { lang: Lang }) {
  const m = c(lang).mock;
  const es = lang === "es";
  const [step, setStep] = useState(5);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setStep(0);
    let s = 0;
    const id = setInterval(() => { s = s >= 7 ? 0 : s + 1; setStep(s); }, 1500);
    return () => clearInterval(id);
  }, []);
  const shown = Math.min(step, 4);
  const paid = step >= 5;
  const sel = Math.max(0, shown - 1);
  const amount = es ? "ARS 480.000" : "USD 2,400";
  const overdue = shown === 0 ? 0 : DAYS[shown - 1];

  return (
    <div className="relative" aria-hidden>
      <div className="overflow-hidden rounded-2xl bg-white text-ink shadow-mock">
        <div className="flex items-center justify-between border-b border-line bg-[#F7F5F1] px-4 py-2.5">
          <div className="flex items-center gap-2 text-[12px] font-medium text-ink-2">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><rect x="2" y="3.5" width="12" height="9" rx="1.75" stroke="currentColor" strokeWidth="1.4" /><path d="M2.5 4.5L8 8.5l5.5-4" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" /></svg>
            {m.sent}
          </div>
          <div className={`text-[12px] font-semibold tabular-nums transition-colors ${paid ? "text-brand" : overdue ? "text-coral-ink" : "text-ink-3"}`}>
            {paid ? m.paidSub : overdue ? `${amount}, ${overdue} ${es ? "días vencida" : "days overdue"}` : amount}
          </div>
        </div>
        <div className="grid min-h-[340px] grid-cols-1 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)]">
          <ul className="border-line sm:border-r">
            {shown === 0 && <li className="px-4 py-10 text-center text-[12px] text-ink-3">{es ? "Factura vencida. Todavía no mandaste nada." : "Invoice due. Nothing sent yet."}</li>}
            {[3, 2, 1, 0].filter((i) => i < shown).map((i) => {
              return (
                <li key={i} className={`animate-fade-in border-b border-line px-4 py-3 transition-colors duration-500 ${i === sel && !paid ? "bg-brand-soft/70" : ""}`}>
                  <div className="flex items-baseline justify-between gap-2 text-[11px]">
                    <span className={`font-semibold ${i === 3 ? "text-coral-ink" : "text-brand"}`}>{es ? "Día" : "Day"} {DAYS[i]}</span>
                    <span className="tabular-nums text-ink-3">{DATES[lang][i]}</span>
                  </div>
                  <p className="mt-1 truncate text-[13px] font-medium text-ink">{m.subjects[i]}</p>
                  <p className="mt-0.5 truncate text-[12px] text-ink-3">{m.previews[i]}</p>
                </li>
              );
            })}
          </ul>
          <div className="hidden p-5 sm:block">
            {shown > 0 && (
              <div key={sel} className="animate-fade-in">
                <p className="text-[11px] text-ink-3">{es ? "Para" : "To"}: {m.to}</p>
                <p className="mt-2 text-[15px] font-semibold leading-snug tracking-heading">{m.subjects[sel]}</p>
                <div className="mt-4 space-y-2.5 text-[12.5px] leading-relaxed text-ink-2">
                  <p>{es ? "Hola," : "Hi,"}</p>
                  <p>{m.previews[sel]}</p>
                  <div className="space-y-1.5 pt-1">
                    <div className="h-2 w-11/12 rounded-full bg-well" />
                    <div className="h-2 w-4/5 rounded-full bg-well" />
                    <div className="h-2 w-2/3 rounded-full bg-well" />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className={`absolute -bottom-6 left-4 right-4 sm:-left-8 sm:right-auto sm:w-[300px] transition-all duration-700 ${paid ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}`}>
        <div className="flex items-center gap-3 rounded-xl bg-white p-3.5 shadow-mock ring-1 ring-brand/20">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-coral text-night">
            <svg width="18" height="18" viewBox="0 0 16 16" fill="none"><path d="M3.5 8.5l3 3 6-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </span>
          <div className="min-w-0">
            <p className="text-[12px] text-ink-3">{m.paid}</p>
            <p className="text-[20px] font-semibold tabular-nums tracking-heading text-ink">{amount}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
