"use client";
import { useEffect, useMemo, useState } from "react";
import type { Lang } from "@/lib/site";
import { t } from "@/lib/i18n";
import { generateEmails, mailtoHref, type Tone } from "@/lib/emails";
import CopyButton from "./CopyButton";

const CURRENCIES = ["USD", "EUR", "ARS", "GBP", "MXN", "CLP", "COP", "UYU", "BRL", "CAD", "AUD"];
const DAYS = [3, 7, 14, 30];

export default function Generator({ lang }: { lang: Lang }) {
  const d = t(lang);
  const es = lang === "es";
  const [f, setF] = useState({
    clientName: es ? "Estudio Norte" : "Northwind Studio", invoiceNumber: es ? "FC-0042" : "INV-0042", amount: es ? "480000" : "2400", currency: es ? "ARS" : "USD",
    dueDate: "2026-10-20", yourName: es ? "Sofi Pérez" : "Alex Rivera", tone: "friendly" as Tone, paymentDetails: "", lateFee: es ? "3% mensual" : "1.5% per month",
  });
  const [submitted, setSubmitted] = useState(true);
  const [active, setActive] = useState(0);
  const set = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setF((p) => ({ ...p, [k]: e.target.value }));

  const emails = useMemo(() => {
    if (!submitted || !f.dueDate) return [];
    return generateEmails({ ...f, amount: parseFloat(f.amount) || 0 }, lang);
  }, [f, submitted, lang]);
  const em = emails[active];
  useEffect(() => {
    const dt = new Date(); dt.setDate(dt.getDate() - 16);
    setF((p) => ({ ...p, dueDate: dt.toISOString().slice(0, 10) }));
  }, []);

  return (
    <div className="overflow-hidden rounded-3xl bg-white shadow-panel lg:grid lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
      <form
        onSubmit={(e) => {
          e.preventDefault(); setSubmitted(true); setActive(0);
          if (window.innerWidth < 1024) document.getElementById("preview")?.scrollIntoView({ behavior: "smooth" });
        }}
        className="border-b border-line bg-[#F7F5F0] p-6 sm:p-8 lg:border-b-0 lg:border-r"
        aria-labelledby="form-h"
      >
        <div className="flex items-center justify-between gap-3">
          <h3 id="form-h" className="text-[16px] font-semibold tracking-heading">{d.form.heading}</h3>
          <span className="flex items-center gap-1.5 text-[12px] text-ink-3">
            <svg aria-hidden width="13" height="13" viewBox="0 0 16 16" fill="none"><rect x="3" y="7" width="10" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.4" /><path d="M5.5 7V5a2.5 2.5 0 015 0v2" stroke="currentColor" strokeWidth="1.4" /></svg>
            {es ? "Privado, en tu navegador" : "Private, in your browser"}
          </span>
        </div>
        <div className="mt-6 grid gap-x-4 gap-y-5 sm:grid-cols-2">
          <label className="field-label sm:col-span-2">{d.form.client}
            <input required className="field" value={f.clientName} onChange={set("clientName")} placeholder={d.form.ph.client} autoComplete="organization" />
          </label>
          <label className="field-label">{d.form.invoice}
            <input required className="field" value={f.invoiceNumber} onChange={set("invoiceNumber")} placeholder={d.form.ph.invoice} />
          </label>
          <label className="field-label">{d.form.due}
            <input required type="date" className="field" value={f.dueDate} onChange={set("dueDate")} />
          </label>
          <div className="sm:col-span-2">
            <label htmlFor="amount" className="field-label">{d.form.amount}</label>
            <div className="mt-1.5 flex">
              <input id="amount" required type="number" min="0" step="0.01" inputMode="decimal"
                className="field mt-0 rounded-r-none tabular-nums focus:z-10" value={f.amount} onChange={set("amount")} placeholder="1200.00" />
              <label className="sr-only" htmlFor="currency">{d.form.currency}</label>
              <select id="currency" className="field mt-0 w-[92px] shrink-0 -translate-x-px rounded-l-none bg-well font-medium" value={f.currency} onChange={set("currency")}>
                {CURRENCIES.map((c) => <option key={c}>{c}</option>)}
              </select>
            </div>
          </div>
          <label className="field-label sm:col-span-2">{d.form.pay}
            <input className="field" value={f.paymentDetails} onChange={set("paymentDetails")} placeholder={d.form.ph.pay} />
          </label>
          <label className="field-label">{d.form.fee}
            <input className="field" value={f.lateFee} onChange={set("lateFee")} placeholder={d.form.ph.fee} />
          </label>
          <label className="field-label">{d.form.you}
            <input required className="field" value={f.yourName} onChange={set("yourName")} placeholder={d.form.ph.you} autoComplete="name" />
          </label>
          <fieldset className="sm:col-span-2">
            <legend className="field-label">{d.form.tone}</legend>
            <div className="mt-1.5 grid grid-cols-3 gap-1 rounded-lg border border-line-strong bg-white p-1">
              {(["friendly", "firm", "final"] as Tone[]).map((tone) => (
                <label key={tone} className={`cursor-pointer rounded-md py-2 text-center text-[14px] font-medium transition has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-brand ${f.tone === tone ? (tone === "final" ? "bg-coral text-night" : "bg-night text-white") : "text-ink-2 hover:bg-well hover:text-ink"}`}>
                  <input type="radio" name="tone" value={tone} checked={f.tone === tone} onChange={set("tone")} className="sr-only" />
                  {d.form.tones[tone]}
                </label>
              ))}
            </div>
          </fieldset>
        </div>
        <button type="submit" className="btn-primary mt-7 h-12 w-full text-[16px]">{d.form.generate}</button>
      </form>

      <div id="preview" className="flex min-w-0 scroll-mt-20 flex-col">
        <div role="tablist" aria-label={d.out.title} className="grid grid-cols-4 gap-1.5 border-b border-line bg-white p-3 sm:p-4">
          {DAYS.map((n, i) => {
            const on = emails.length > 0 && active === i;
            return (
              <button key={n} role="tab" type="button" aria-selected={on} disabled={!emails.length}
                onClick={() => setActive(i)}
                className={`rounded-lg px-2.5 py-2 text-left transition sm:px-3 ${on ? "bg-night text-white shadow-lift" : "text-ink-2 hover:bg-well"} disabled:cursor-default`}>
                <span className={`block text-[12px] font-semibold tabular-nums ${on ? (n === 30 ? "text-coral" : "text-brand-mint") : n === 30 ? "text-coral-ink" : "text-brand"}`}>{d.stageLabel} {n}</span>
                <span className="mt-0.5 hidden truncate text-[13px] font-medium sm:block">{d.out.stage[i]}</span>
                <span className={`hidden truncate text-[11.5px] tabular-nums sm:block ${on ? "text-white/60" : "text-ink-3"}`}>{emails[i]?.sendDate ?? "..."}</span>
              </button>
            );
          })}
        </div>

        <article className="flex flex-1 flex-col" aria-live="polite">
          <dl className="divide-y divide-line border-b border-line text-[14px]">
            <div className="flex gap-3 px-6 py-3 sm:px-8"><dt className="w-16 shrink-0 text-ink-3">{es ? "Para" : "To"}</dt><dd className="truncate font-medium text-ink">{f.clientName || (es ? "Cliente" : "Client")}</dd></div>
            <div className="flex gap-3 px-6 py-3 sm:px-8"><dt className="w-16 shrink-0 text-ink-3">{d.out.subject}</dt><dd key={`s${active}`} className="animate-fade-in font-semibold text-ink">{em ? em.subject : "..."}</dd></div>
            {em && <div className="flex gap-3 px-6 py-3 sm:px-8"><dt className="w-16 shrink-0 text-ink-3">{d.out.send}</dt><dd className="tabular-nums text-ink"><time dateTime={em.sendIso}>{em.sendDate}</time></dd></div>}
          </dl>
          {em ? (
            <pre key={`b${active}${f.tone}`} className="min-h-[360px] flex-1 animate-fade-in whitespace-pre-wrap px-6 py-7 font-sans text-[15.5px] leading-[1.75] text-ink sm:px-8">{em.body}</pre>
          ) : (
            <p className="min-h-[360px] flex-1 px-8 py-10 text-[15px] text-ink-3">{d.out.empty}</p>
          )}
          {em && (
            <div className="flex flex-col gap-3 border-t border-line bg-[#FBFAF7] px-6 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-8">
              <p className="text-[13px] text-ink-3">{es ? `Mail ${active + 1} de 4` : `Email ${active + 1} of 4`}</p>
              <div className="flex gap-2">
                <a href={mailtoHref(em.subject, em.body)} className="btn-secondary flex-1 sm:flex-none">
                  <svg aria-hidden width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="2" y="3.5" width="12" height="9" rx="1.75" stroke="currentColor" strokeWidth="1.4" /><path d="M2.5 4.5L8 8.5l5.5-4" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" /></svg>
                  {d.out.open}
                </a>
                <CopyButton className="btn-primary flex-1 sm:flex-none" text={`${d.out.subject}: ${em.subject}\n\n${em.body}`} label={d.out.copy} copiedLabel={d.out.copied} />
              </div>
            </div>
          )}
        </article>
      </div>
    </div>
  );
}
