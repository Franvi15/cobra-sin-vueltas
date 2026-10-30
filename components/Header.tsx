import Link from "next/link";
import type { Lang } from "@/lib/site";
import { t } from "@/lib/i18n";
import Logo from "./Logo";

export default function Header({ lang, altHref }: { lang: Lang; altHref?: string }) {
  const d = t(lang);
  const es = lang === "es";
  const a = "hidden text-ink-2 transition-colors hover:text-ink sm:inline";
  return (
    <header className="sticky top-0 z-30 bg-canvas/90 backdrop-blur supports-[backdrop-filter]:bg-canvas/80">
      <div className="container-x flex h-16 items-center justify-between gap-6">
        <Link href={d.home} aria-label={es ? "Cobrá Sin Vueltas, inicio" : "Chase Invoice, home"} className="rounded-sm">
          <Logo name={es ? "Cobrá Sin Vueltas" : "Chase Invoice"} sub={es ? "por Chase Invoice" : undefined} />
        </Link>
        <nav aria-label="Main" className="flex items-center gap-7 text-[14px]">
          <Link href={`${d.home}#generator`} className={a}>{d.nav.tool}</Link>
          <Link href={`${d.home}#templates`} className={`${a} md:inline`}>{d.nav.templates}</Link>
          <Link href={d.pack} className="text-ink-2 transition-colors hover:text-ink">{d.nav.pack}</Link>
          <Link href={altHref ?? d.other} hrefLang={es ? "en" : "es"} lang={es ? "en" : "es"} className="text-ink-3 transition-colors hover:text-ink">
            {es ? "EN" : "ES"}<span className="sr-only">{es ? ", English" : ", Español"}</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
