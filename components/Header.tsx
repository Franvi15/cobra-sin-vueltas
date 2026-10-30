import Link from "next/link";
import type { Lang } from "@/lib/site";
import { t } from "@/lib/i18n";
import Logo from "./Logo";

export default function Header({ lang, altHref }: { lang: Lang; altHref?: string }) {
  const d = t(lang);
  const es = lang === "es";
  return (
    <header className="sticky top-0 z-30 border-b border-line bg-canvas/85 backdrop-blur-md supports-[backdrop-filter]:bg-canvas/75">
      <div className="container-x flex h-16 items-center justify-between gap-4">
        <Link href={d.home} aria-label={es ? "Cobrá Sin Vueltas, inicio" : "Chase Invoice, home"} className="rounded-md">
          <Logo name={es ? "Cobrá Sin Vueltas" : "Chase Invoice"} sub={es ? "por Chase Invoice" : undefined} />
        </Link>
        <nav aria-label="Main" className="flex items-center gap-1 text-[14px]">
          <Link href={`${d.home}#generator`} className="btn-ghost hidden h-9 px-3 sm:inline-flex">{d.nav.tool}</Link>
          <Link href={`${d.home}#templates`} className="btn-ghost hidden h-9 px-3 md:inline-flex">{d.nav.templates}</Link>
          <Link href={d.pack} className="btn-ghost h-9 px-3">{d.nav.pack}</Link>
          <span className="mx-1 hidden h-5 w-px bg-line sm:block" aria-hidden />
          <Link href={altHref ?? d.other} hrefLang={es ? "en" : "es"} lang={es ? "en" : "es"}
            className="inline-flex h-8 items-center rounded-md border border-line-strong bg-surface px-2.5 text-[13px] font-medium text-ink-2 hover:border-ink-3 hover:text-ink">
            {es ? "English" : "Español"}
          </Link>
        </nav>
      </div>
    </header>
  );
}
