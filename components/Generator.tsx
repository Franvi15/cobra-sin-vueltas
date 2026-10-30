"use client";
import { useMemo, useState } from "react";
import type { Lang } from "@/lib/site";
import { t } from "@/lib/i18n";
import { generateEmails, mailtoHref, type Tone } from "@/lib/emails";
import CopyButton from "./CopyButton";

const CURRENCIES = ["USD", "EUR", "ARS", "GBP", "MXN", "CLP", "COP", "UYU", "BRL", "CAD", "AUD"];

export default function Generator({ lang }: { lang: Lang }) {
  const d = t(lang);
  const [f, setF] = useState({
    clientName: "", invoiceNumber: "", amount: "", currency: lang === "es" ? "ARS" : "USD",
    dueDate: "", yourName: "", tone: "friendly" as Tone, paymentDetails: "", lateFee: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const set = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setF((p) => ({ ...p, [k]: e.target.value }));

  const emails = useMemo(() => {
    if (!submitted || !f.dueDate) return [];
    return generateEmails({ ...f, amount: parseFloat(f.amount) || 0 }, lang);
  }, [f, submitted, lang]);

  const input = "mt-1 w-full border-0 border-b border-ink/40 bg-transparent px-0 py-1.5 text-[16px] tabular-nums placeholder:text-ink/30 focus:border-accent focus:outline-none focus:ring-0";
  const label = "block font-mono text-[10.5px] uppercase tracking-[0.16em] text-muted";

  return (
    <div className="grid gap-10 lg:grid-cols-12">
      <form
        onSubmit={(e) => { e.preventDefault(); setSubmitted(true); document.getElementById("emails")?.scrollIntoView({ behavior: "smooth" }); }}
        className="self-start border border-ink bg-[#FBF8F2] lg:sticky lg:top-6 lg:col-span-5"
        aria-labelledby="form-h"
      >
        <div className="flex items-baseline justify-between border-b border-ink px-5 py-3">
          <h2 id="form-h" className="font-mono text-[11px] uppercase tracking-[0.18em]">{d.form.heading}</h2>
          <span className="font-mono text-[11px] tabular-nums text-muted">{f.invoiceNumber || "INV-0000"}</span>
        </div>
        <div className="grid gap-x-6 gap-y-5 p-5 sm:grid-cols-2">
          <label className={`${label} sm:col-span-2`}>{d.form.client}
            <input required className={input} value={f.clientName} onChange={set("clientName")} placeholder={d.form.ph.client} />
          </label>
          <label className={label}>{d.form.invoice}
            <input required className={input} value={f.invoiceNumber} onChange={set("invoiceNumber")} placeholder={d.form.ph.invoice} />
          </label>
          <label className={label}>{d.form.due}
            <input required type="date" className={input} value={f.dueDate} onChange={set("dueDate")} />
          </label>
          <label className={label}>{d.form.amount}
            <input required type="number" min="0" step="0.01" inputMode="decimal" className={input} value={f.amount} onChange={set("amount")} placeholder="1200.00" />
          </label>
          <label className={label}>{d.form.currency}
            <select className={input} value={f.currency} onChange={set("currency")}>
              {CURRENCIES.map((c) => <option key={c}>{c}</option>)}
            </select>
          </label>
          <label className={`${label} sm:col-span-2`}>{d.form.pay}
            <input className={input} value={f.paymentDetails} onChange={set("paymentDetails")} placeholder={d.form.ph.pay} />
          </label>
          <label className={label}>{d.form.fee}
            <input className={input} value={f.lateFee} onChange={set("lateFee")} placeholder={d.form.ph.fee} />
          </label>
          <label className={label}>{d.form.you}
            <input required className={input} value={f.yourName} onChange={set("yourName")} placeholder={d.form.ph.you} />
          </label>
          <fieldset className="sm:col-span-2">
            <legend className={label}>{d.form.tone}</legend>
            <div className="mt-2 grid grid-cols-3 border border-ink">
              {(["friendly", "firm", "final"] as Tone[]).map((tone, i) => (
                <label key={tone} className={`cursor-pointer py-2 text-center font-mono text-[11px] uppercase tracking-[0.14em] ${i > 0 ? "border-l border-ink" : ""} ${f.tone === tone ? "bg-ink text-paper" : "hover:bg-ink/5"} has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-accent`}>
                  <input type="radio" name="tone" value={tone} checked={f.tone === tone} onChange={set("tone")} className="sr-only" />
                  {d.form.tones[tone]}
                </label>
              ))}
            </div>
          </fieldset>
        </div>
        <button type="submit" className="w-full border-t border-ink bg-ink py-3.5 font-mono text-xs uppercase tracking-[0.16em] text-paper hover:bg-accent">
          {d.form.generate}
        </button>
      </form>

      <div id="emails" className="scroll-mt-6 lg:col-span-7">
        <div className="grid grid-cols-[3.5rem_1fr_auto] items-baseline gap-4 border-b-2 border-ink pb-2 font-mono text-[10.5px] uppercase tracking-[0.16em] text-muted">
          <span>{d.out.day}</span><span>{d.out.title}</span><span>{d.out.send}</span>
        </div>
        {emails.length === 0 ? (
          <ol>
            {[3, 7, 14, 30].map((n, i) => (
              <li key={n} className="grid grid-cols-[3.5rem_1fr_auto] items-baseline gap-4 border-b border-rule py-4">
                <span className="font-mono tabular-nums text-ink/40">+{n}</span>
                <span className="text-ink/50">{d.out.stage[i]}</span>
                <span className="font-mono text-sm tabular-nums text-ink/30">__ / __ / ____</span>
              </li>
            ))}
            <li className="pt-4 text-sm text-muted">{d.out.empty}</li>
          </ol>
        ) : (
          <ol>
            {emails.map((em, i) => (
              <li key={em.offset} className="border-b border-rule">
                <details open={i === 0} className="group">
                  <summary className="grid cursor-pointer list-none grid-cols-[3.5rem_1fr_auto] items-baseline gap-4 py-4 hover:bg-ink/[0.03] [&::-webkit-details-marker]:hidden">
                    <span className="font-mono tabular-nums text-accent">+{em.offset}</span>
                    <span>
                      <span className="block font-mono text-[10.5px] uppercase tracking-[0.16em] text-muted">{d.out.stage[i]}</span>
                      <span className="mt-0.5 block font-semibold">{em.subject}</span>
                    </span>
                    <time dateTime={em.sendIso} className="font-mono text-sm tabular-nums">{em.sendDate}</time>
                  </summary>
                  <div className="pb-6 pl-0 sm:pl-[4.5rem]">
                    <pre className="whitespace-pre-wrap border-l-2 border-accent bg-[#FBF8F2] px-5 py-4 font-sans text-[15px] leading-relaxed">{em.body}</pre>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <CopyButton text={`${d.out.subject}: ${em.subject}\n\n${em.body}`} label={d.out.copy} copiedLabel={d.out.copied} />
                      <a href={mailtoHref(em.subject, em.body)} className="inline-flex items-center border border-ink px-4 py-2 font-mono text-[11px] uppercase tracking-[0.14em] hover:bg-ink hover:text-paper">
                        {d.out.open}
                      </a>
                    </div>
                  </div>
                </details>
              </li>
            ))}
          </ol>
        )}
      </div>
    </div>
  );
}
