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
    <div className="grid gap-16 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20">
      <form
        onSubmit={(e) => {
          e.preventDefault(); setSubmitted(true); setActive(0);
          if (window.innerWidth < 1024) document.getElementById("preview")?.scrollIntoView({ behavior: "smooth" });
        }}
        className="self-start lg:sticky lg:top-24"
        aria-labelledby="form-h"
      >
        <h3 id="form-h" className="label">{d.form.heading}</h3>
        <div className="mt-6 grid gap-x-5 gap-y-6 sm:grid-cols-2">
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
            <div className="mt-2 flex">
              <input id="amount" required type="number" min="0" step="0.01" inputMode="decimal"
                className="field mt-0 rounded-r-none tabular-nums" value={f.amount} onChange={set("amount")} placeholder="1200.00" />
              <label className="sr-only" htmlFor="currency">{d.form.currency}</label>
              <select id="currency" className="field mt-0 w-[88px] shrink-0 -translate-x-px rounded-l-none" value={f.currency} onChange={set("currency")}>
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
            <div className="mt-3 flex gap-6">
              {(["friendly", "firm", "final"] as Tone[]).map((tone) => (
                <label key={tone} className={`cursor-pointer border-b pb-1 text-[15px] transition-colors has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-brand ${f.tone === tone ? "border-ink text-ink" : "border-transparent text-ink-3 hover:text-ink"}`}>
                  <input type="radio" name="tone" value={tone} checked={f.tone === tone} onChange={set("tone")} className="sr-only" />
                  {d.form.tones[tone]}
                </label>
              ))}
            </div>
          </fieldset>
        </div>
        <button type="submit" className="btn-primary mt-10 h-11 w-full sm:w-auto sm:px-6">{d.form.generate}</button>
      </form>

      <div id="preview" className="min-w-0 scroll-mt-24">
        <div role="tablist" aria-label={d.out.title} className="grid grid-cols-4 border-b border-line">
          {DAYS.map((n, i) => {
            const on = emails.length > 0 && active === i;
            return (
              <button key={n} role="tab" type="button" aria-selected={on} disabled={!emails.length}
                onClick={() => setActive(i)}
                className={`-mb-px border-b pb-3 text-left transition-colors disabled:cursor-default ${on ? "border-ink" : "border-transparent hover:border-line-strong"}`}>
                <span className={`block text-[13px] tabular-nums ${on ? "text-ink" : "text-ink-3"}`}>{d.stageLabel} {n}</span>
                <span className={`mt-1 hidden truncate text-[14px] sm:block ${on ? "text-ink" : "text-ink-2"}`}>{d.out.stage[i]}</span>
              </button>
            );
          })}
        </div>

        <article aria-live="polite" className="pt-8">
          <dl className="space-y-2 text-[14px]">
            <div className="flex gap-4"><dt className="w-16 shrink-0 text-ink-3">{es ? "Para" : "To"}</dt><dd className="truncate text-ink">{f.clientName || <span className="text-ink-3">{es ? "Cliente" : "Client"}</span>}</dd></div>
            <div className="flex gap-4"><dt className="w-16 shrink-0 text-ink-3">{d.out.subject}</dt><dd className="text-ink">{em ? em.subject : <span className="text-ink-3">{es ? "Factura: recordatorio de pago" : "Invoice: payment reminder"}</span>}</dd></div>
            <div className="flex gap-4"><dt className="w-16 shrink-0 text-ink-3">{d.out.send}</dt><dd className="tabular-nums text-ink">{em ? <time dateTime={em.sendIso}>{em.sendDate}</time> : <span className="text-ink-3">{es ? "Sin fecha" : "No date yet"}</span>}</dd></div>
          </dl>
          <div className="mt-8 border-t border-line pt-8">
            {em ? (
              <pre className="whitespace-pre-wrap font-sans text-[16px] leading-[1.75] text-ink">{em.body}</pre>
            ) : (
              <p className="max-w-[44ch] text-[16px] leading-[1.75] text-ink-3">{d.out.empty}</p>
            )}
          </div>
          {em && (
            <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6">
              <p className="text-[13px] tabular-nums text-ink-3">{es ? `Mail ${active + 1} de 4` : `Email ${active + 1} of 4`}</p>
              <div className="flex flex-wrap items-center gap-5">
                <a href={mailtoHref(em.subject, em.body)} className="link text-[14px]">{d.out.open}</a>
                <CopyButton text={`${d.out.subject}: ${em.subject}\n\n${em.body}`} label={d.out.copy} copiedLabel={d.out.copied} />
              </div>
            </div>
          )}
        </article>
      </div>
    </div>
  );
}
