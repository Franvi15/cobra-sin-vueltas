"use client";
import { useMemo, useState } from "react";
import type { Lang } from "@/lib/site";
import { t } from "@/lib/i18n";
import { generateEmails, mailtoHref, type Tone } from "@/lib/emails";
import CopyButton from "./CopyButton";

const CURRENCIES = ["USD", "EUR", "ARS", "GBP", "MXN", "CLP", "COP", "UYU", "BRL", "CAD", "AUD"];

function defaultDue() {
  const d = new Date();
  d.setDate(d.getDate() - 3);
  return d.toISOString().slice(0, 10);
}

export default function Generator({ lang }: { lang: Lang }) {
  const d = t(lang);
  const [f, setF] = useState({
    clientName: "", invoiceNumber: "", amount: "", currency: lang === "es" ? "ARS" : "USD",
    dueDate: "", yourName: "", tone: "friendly" as Tone,
  });
  const [submitted, setSubmitted] = useState(false);
  const set = (k: keyof typeof f) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setF((p) => ({ ...p, [k]: e.target.value }));

  const emails = useMemo(() => {
    if (!submitted) return [];
    return generateEmails({ ...f, amount: parseFloat(f.amount) || 0, dueDate: f.dueDate || defaultDue() }, lang);
  }, [f, submitted, lang]);

  const input = "mt-1 w-full border-0 border-b-2 border-ink bg-transparent px-0 py-2 text-lg focus:border-accent focus:outline-none focus:ring-0";
  const label = "block font-mono text-[11px] uppercase tracking-widest text-muted";

  return (
    <div className="grid gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
      <form
        onSubmit={(e) => { e.preventDefault(); setSubmitted(true); document.getElementById("emails")?.scrollIntoView({ behavior: "smooth" }); }}
        className="space-y-6 self-start border-2 border-ink bg-white/40 p-6 lg:sticky lg:top-6"
      >
        <div className="grid gap-6 sm:grid-cols-2">
          <label className={label}>{d.form.client}
            <input required className={input} value={f.clientName} onChange={set("clientName")} placeholder={d.form.ph.client} />
          </label>
          <label className={label}>{d.form.invoice}
            <input required className={input} value={f.invoiceNumber} onChange={set("invoiceNumber")} placeholder={d.form.ph.invoice} />
          </label>
          <label className={label}>{d.form.amount}
            <input required type="number" min="0" step="0.01" inputMode="decimal" className={input} value={f.amount} onChange={set("amount")} placeholder="1200" />
          </label>
          <label className={label}>{d.form.currency}
            <select className={input} value={f.currency} onChange={set("currency")}>
              {CURRENCIES.map((c) => <option key={c}>{c}</option>)}
            </select>
          </label>
          <label className={label}>{d.form.due}
            <input required type="date" className={input} value={f.dueDate} onChange={set("dueDate")} />
          </label>
          <label className={label}>{d.form.you}
            <input required className={input} value={f.yourName} onChange={set("yourName")} placeholder={d.form.ph.you} />
          </label>
        </div>
        <fieldset>
          <legend className={label}>{d.form.tone}</legend>
          <div className="mt-2 grid grid-cols-3 border-2 border-ink">
            {(["friendly", "firm", "final"] as Tone[]).map((tone) => (
              <label key={tone} className={`cursor-pointer py-2 text-center font-mono text-xs uppercase tracking-widest transition ${f.tone === tone ? "bg-ink text-paper" : "hover:bg-ink/10"}`}>
                <input type="radio" name="tone" value={tone} checked={f.tone === tone} onChange={set("tone")} className="sr-only" />
                {d.form.tones[tone]}
              </label>
            ))}
          </div>
        </fieldset>
        <button type="submit" className="w-full bg-accent py-4 font-mono text-sm uppercase tracking-widest text-paper transition hover:bg-ink">
          {d.form.generate} →
        </button>
      </form>

      <div id="emails" className="scroll-mt-6">
        <h2 className="font-display text-3xl font-black">{d.out.title}</h2>
        {emails.length === 0 ? (
          <ol className="mt-6 space-y-3">
            {[3, 7, 14, 30].map((n) => (
              <li key={n} className="flex items-center gap-4 border-t border-rule py-4 text-muted">
                <span className="font-display text-4xl font-black text-rule">+{n}</span>
                <span className="text-sm">{d.out.empty}</span>
              </li>
            ))}
          </ol>
        ) : (
          <ol className="mt-6 space-y-8">
            {emails.map((em) => (
              <li key={em.offset} className="border-t-2 border-ink pt-5">
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <p className="flex items-baseline gap-3">
                    <span className="font-display text-5xl font-black text-accent">+{em.offset}</span>
                    <span className="font-mono text-[11px] uppercase tracking-widest text-muted">{d.out.day} {em.offset} · {d.out.send} {em.sendDate}</span>
                  </p>
                  <div className="flex gap-2">
                    <CopyButton text={`${d.out.subject}: ${em.subject}\n\n${em.body}`} label={d.out.copy} copiedLabel={d.out.copied} />
                    <a href={mailtoHref(em.subject, em.body)} className="inline-flex items-center border border-ink px-4 py-2 font-mono text-xs uppercase tracking-widest hover:bg-ink hover:text-paper">
                      {d.out.open}
                    </a>
                  </div>
                </div>
                <p className="mt-4 font-semibold"><span className="font-mono text-[11px] uppercase tracking-widest text-muted">{d.out.subject}: </span>{em.subject}</p>
                <pre className="mt-3 whitespace-pre-wrap border-l-4 border-accent bg-white/60 p-5 font-sans text-[15px] leading-relaxed">{em.body}</pre>
              </li>
            ))}
          </ol>
        )}
      </div>
    </div>
  );
}
