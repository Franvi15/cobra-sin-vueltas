"use client";
import { useEffect, useState } from "react";
import type { Lang } from "@/lib/site";
import BuyLink from "./BuyLink";

export default function StickyBuy({ label, note, lang, location }: { label: string; note: string; lang: Lang; location: string }) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const on = () => setShow(window.scrollY > 700 && window.innerHeight + window.scrollY < document.body.scrollHeight - 500);
    on(); window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <div className={`fixed inset-x-0 bottom-0 z-40 transition-transform duration-300 ${show ? "translate-y-0" : "translate-y-full"}`} aria-hidden={!show}>
      <div className="border-t border-white/10 bg-night/95 backdrop-blur">
        <div className="container-x flex items-center justify-between gap-4 py-3">
          <p className="hidden text-[14px] text-white/80 sm:block">{note}</p>
          <BuyLink location={location} lang={lang} tabIndex={show ? 0 : -1} className="btn h-11 w-full bg-coral px-6 text-[15px] font-semibold text-night hover:bg-[#FA8569] sm:w-auto">{label}</BuyLink>
        </div>
      </div>
    </div>
  );
}
