"use client";
import { useState } from "react";
import { CONTACT_EMAIL } from "@/lib/site";

export default function Waitlist({ lang }: { lang: "en" | "es" }) {
  const [email, setEmail] = useState("");
  const es = lang === "es";
  function submit(e: React.FormEvent) {
    e.preventDefault();
    const subject = es ? "Lista de espera: Pack de Rescate de Cobros" : "Waitlist: Late Payment Rescue Pack";
    const body = es
      ? `Hola Franco, quiero que me avises cuando el pack esté disponible.\n\nMi email: ${email}`
      : `Hi Franco, please let me know when the pack is available.\n\nMy email: ${email}`;
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }
  return (
    <form onSubmit={submit} className="w-full">
      <p className="font-mono text-[11px] uppercase tracking-widest text-accent">{es ? "Muy pronto · Sumate a la lista" : "Coming soon · Join the waitlist"}</p>
      <div className="mt-3 flex flex-col gap-2 sm:flex-row">
        <label className="sr-only" htmlFor="wl-email">Email</label>
        <input id="wl-email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
          placeholder={es ? "tu@email.com" : "you@email.com"}
          className="flex-1 border-2 border-ink bg-paper px-4 py-3 text-ink focus:border-accent focus:outline-none" />
        <button className="bg-accent px-6 py-3 font-mono text-sm uppercase tracking-widest text-paper hover:bg-ink">
          {es ? "Avisame" : "Notify me"}
        </button>
      </div>
    </form>
  );
}
