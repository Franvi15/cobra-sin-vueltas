"use client";
import { useMemo, useState } from "react";
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
    clientName: "", invoiceNumber: "", amount: "", currency: es ? "ARS" : "USD",
    dueDate: "", yourName: "", tone: "friendly" as Tone, paymentDetails: "", lateFee: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [active, setActive] = useState(0);
  const set = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setF((p) => ({ ...p, [k]: e.target.value }));

  const emails = useMemo(() => {
    if (!submitted || !f.dueDate) return [];
    return generateEmails({ ...f, amount: parseFloat(f.amount) || 0 }, lang);
  }, [f, submitted, lang]);
  const em = emails[active];

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-8">
      <form
        onSubmit={(e) => {
          e.preventDefault(); setSubmitted(true); setActive(0);
          if (window.innerWidth < 1024) document.getElementById("preview")?.scrollIntoView({ behavior: "smooth" });
        }}
        className="card self-start lg:sticky lg:top-24"
        aria-labelledby="form-h"
      >
        <div className="border-b border-line px-5 py-4 sm:px-6">
          <h2 id="form-h" className="text-[15px] font-semibold text-ink">{d.form.heading}</h2>
          <p className="mt-0.5 text-[13px] text-ink-2">{es ? "Todo queda en tu navegador." : "Everything stays in your browser."}</p>
        </div>
        <div className="grid gap-x-4 gap-y-5 p-5 sm:grid-cols-2 sm:p-6">
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
            <div className="mt-1.5 flex rounded-lg shadow-[0_1px_1px_rgba(25,25,23,0.03)]">
              <input id="amount" required type="number" min="0" step="0.01" inputMode="decimal"
                className="field mt-0 rounded-r-none tabular-nums" value={f.amount} onChange={set("amount")} placeholder="1200.00" />
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
            <div className="mt-1.5 grid grid-cols-3 gap-1 rounded-lg border border-line bg-well p-1">
              {(["friendly", "firm", "final"] as Tone[]).map((tone) => (
                <label key={tone} className={`cursor-pointer rounded-md py-1.5 text-center text-[14px] font-medium transition has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-brand ${f.tone === tone ? "bg-surface text-ink shadow-[0_1px_2px_rgba(25,25,23,0.08),0_0_0_1px_rgba(25,25,23,0.06)]" : "text-ink-2 hover:text-ink"}`}>
                  <input type="radio" name="tone" value={tone} checked={f.tone === tone} onChange={set("tone")} className="sr-only" />
                  {d.form.tones[tone]}
                </label>
              ))}
            </div>
          </fieldset>
        </div>
        <div className="border-t border-line px-5 py-4 sm:px-6">
          <button type="submit" className="btn-primary h-11 w-full">{d.form.generate}</button>
        </div>
      </form>

      <div id="preview" className="scroll-mt-24">
        <div role="tablist" aria-label={d.out.title} className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {DAYS.map((n, i) => {
            const on = emails.length > 0 && active === i;
            return (
              <button key={n} role="tab" type="button" aria-selected={on} disabled={!emails.length}
                onClick={() => setActive(i)}
                className={`rounded-lg border px-3 py-2.5 text-left transition ${on ? "border-brand bg-surface shadow-card ring-1 ring-brand" : "border-line bg-surface/70 hover:border-line-strong"} disabled:cursor-default`}>
                <span className="flex items-center gap-2 text-[12px] font-medium text-ink-2">
                  <span className={`h-1.5 w-1.5 rounded-full ${n === 30 ? "bg-coral" : "bg-brand"} ${emails.length ? "" : "opacity-40"}`} aria-hidden />
                  {d.stageLabel} {n}
                </span>
                <span className="mt-0.5 block truncate text-[14px] font-medium text-ink">{d.out.stage[i]}</span>
                <span className="block truncate text-[12px] tabular-nums text-ink-3">{emails[i]?.sendDate ?? (es ? "Sin fecha" : "No date yet")}</span>
              </button>
            );
          })}
        </div>

        <article className="card mt-4 overflow-hidden" aria-live="polite">
          <div className="flex items-center gap-1.5 border-b border-line bg-well/60 px-4 py-2.5" aria-hidden>
            <span className="h-2.5 w-2.5 rounded-full bg-line-strong" /><span className="h-2.5 w-2.5 rounded-full bg-line-strong" /><span className="h-2.5 w-2.5 rounded-full bg-line-strong" />
            <span className="ml-3 text-[12px] text-ink-3">{es ? "Mensaje nuevo" : "New message"}</span>
          </div>
          <dl className="divide-y divide-line border-b border-line text-[14px]">
            <div className="flex gap-3 px-5 py-2.5"><dt className="w-16 shrink-0 text-ink-3">{es ? "Para" : "To"}</dt><dd className="truncate text-ink">{f.clientName || (es ? "Cliente" : "Client")}</dd></div>
            <div className="flex gap-3 px-5 py-2.5"><dt className="w-16 shrink-0 text-ink-3">{d.out.subject}</dt><dd className="font-medium text-ink">{em ? em.subject : <span className="font-normal text-ink-3">{es ? "Factura: recordatorio de pago" : "Invoice: payment reminder"}</span>}</dd></div>
            {em && <div className="flex gap-3 px-5 py-2.5"><dt className="w-16 shrink-0 text-ink-3">{d.out.send}</dt><dd className="text-ink"><time dateTime={em.sendIso}>{em.sendDate}</time></dd></div>}
          </dl>
          {em ? (
            <pre className="min-h-[320px] whitespace-pre-wrap px-5 py-6 font-sans text-[15px] leading-[1.7] text-ink sm:px-7">{em.body}</pre>
          ) : (
            <div className="flex min-h-[320px] flex-col items-center justify-center px-8 py-12 text-center">
              <div className="w-full max-w-sm space-y-2.5" aria-hidden>
                <div className="h-2.5 w-1/3 rounded-full bg-well" /><div className="h-2.5 w-full rounded-full bg-well" />
                <div className="h-2.5 w-5/6 rounded-full bg-well" /><div className="h-2.5 w-2/3 rounded-full bg-well" />
              </div>
              <p className="mt-8 max-w-sm text-[14px] leading-relaxed text-ink-2">{d.out.empty}</p>
            </div>
          )}
          {em && (
            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-line bg-well/40 px-5 py-3.5">
              <p className="text-[13px] text-ink-2">{es ? `Mail ${active + 1} de 4` : `Email ${active + 1} of 4`}</p>
              <div className="flex flex-wrap gap-2">
                <a href={mailtoHref(em.subject, em.body)} className="btn-secondary">
                  <svg aria-hidden width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="2" y="3.5" width="12" height="9" rx="1.75" stroke="currentColor" strokeWidth="1.4" /><path d="M2.5 4.5L8 8.5l5.5-4" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" /></svg>
                  {d.out.open}
                </a>
                <CopyButton text={`${d.out.subject}: ${em.subject}\n\n${em.body}`} label={d.out.copy} copiedLabel={d.out.copied} />
              </div>
            </div>
          )}
        </article>
      </div>
    </div>
  );
}
