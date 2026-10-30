import Link from "next/link";
import type { Lang } from "@/lib/site";
import { t } from "@/lib/i18n";

export default function Header({ lang, altHref }: { lang: Lang; altHref?: string }) {
  const d = t(lang);
  const tplHref = lang === "es" ? "/templates/recordatorio-de-pago-factura-vencida" : "/templates/polite-payment-reminder-email";
  return (
    <header className="border-b border-ink">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
        <Link href={d.home} className="group flex items-baseline gap-2">
          <span className="font-display text-2xl font-semibold tracking-tight">{lang === "es" ? "Cobrá Sin Vueltas" : "Chase Invoice"}</span>
        </Link>
        <nav className="flex items-center gap-4 font-mono text-[11px] uppercase tracking-widest sm:gap-6">
          <Link href={d.home} className="hidden hover:text-accent sm:inline">{d.nav.tool}</Link>
          <Link href={tplHref} className="hidden hover:text-accent md:inline">{d.nav.templates}</Link>
          <Link href={d.pack} className="hover:text-accent">{d.nav.pack}</Link>
          <Link href={altHref ?? d.other} hrefLang={lang === "es" ? "en" : "es"} className="border border-ink px-2 py-1 hover:bg-ink hover:text-paper">
            {lang === "es" ? "EN" : "ES"}
          </Link>
        </nav>
      </div>
    </header>
  );
}
