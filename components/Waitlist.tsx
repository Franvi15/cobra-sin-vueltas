"use client";
import { useState } from "react";
import { CONTACT_EMAIL } from "@/lib/site";

export default function Waitlist({ lang, inverted = false }: { lang: "en" | "es"; inverted?: boolean }) {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const es = lang === "es";
  const id = inverted ? "wl-email-2" : "wl-email";
  function submit(e: React.FormEvent) {
    e.preventDefault();
    const subject = es ? "Lista de espera: Pack de Rescate de Cobros" : "Waitlist: Late Payment Rescue Pack";
    const body = es
      ? `Hola Franco, quiero que me avises cuando el pack esté disponible.\n\nMi email: ${email}`
      : `Hi Franco, please let me know when the pack is available.\n\nMy email: ${email}`;
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }
  return (
    <form onSubmit={submit} className="w-full">
      <label htmlFor={id} className={`block text-[13px] font-medium ${inverted ? "text-white/80" : "text-ink"}`}>
        {es ? "Disponible pronto. Dejá tu mail y te aviso." : "Available soon. Leave your email and I'll let you know."}
      </label>
      <div className="mt-2 flex flex-col gap-2 sm:flex-row">
        <input id={id} type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
          placeholder={es ? "tu@email.com" : "you@company.com"} autoComplete="email"
          className={`field mt-0 h-11 flex-1 ${inverted ? "border-white/20 bg-white/10 text-white placeholder:text-white/50 hover:border-white/40 focus:border-white focus:ring-white/20" : ""}`} />
        <button className={inverted ? "btn h-11 bg-white px-5 text-brand-dark hover:bg-canvas" : "btn-primary h-11 px-5"}>
          {es ? "Avisame" : "Notify me"}
        </button>
      </div>
      <p className={`mt-2 text-[12px] ${inverted ? "text-white/60" : "text-ink-3"}`} aria-live="polite">
        {sent
          ? (es ? `Se abrió tu cliente de mail. Si no, escribí a ${CONTACT_EMAIL}.` : `Your mail app should have opened. If not, write to ${CONTACT_EMAIL}.`)
          : (es ? "Se abre tu cliente de mail con el mensaje listo." : "Opens your mail app with the message ready.")}
      </p>
    </form>
  );
}
