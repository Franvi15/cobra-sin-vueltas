import Link from "next/link";
import type { Lang } from "@/lib/site";
import BuyLink from "./BuyLink";
import { t } from "@/lib/i18n";
import Logo from "./Logo";

export default function Header({ lang, altHref }: { lang: Lang; altHref?: string }) {
  const d = t(lang);
  const es = lang === "es";
  const a = "hidden text-white/70 transition-colors hover:text-white sm:inline";
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-night/85 text-white backdrop-blur-md">
      <div className="container-x flex h-16 items-center justify-between gap-6">
        <Link href={d.home} aria-label={es ? "Cobrá Sin Vueltas, inicio" : "Chase Invoice, home"} className="rounded-sm">
          <Logo dark name={es ? "Cobrá Sin Vueltas" : "Chase Invoice"} sub={es ? "por Chase Invoice" : undefined} />
        </Link>
        <nav aria-label="Main" className="flex items-center gap-5 text-[14px] sm:gap-7">
          <Link href={`${d.home}#generator`} className={a}>{d.nav.tool}</Link>
          <Link href={`${d.home}#templates`} className={`${a} md:inline`}>{d.nav.templates}</Link>
          <Link href={d.pack} className="hidden text-white/70 transition-colors hover:text-white sm:inline">{d.nav.pack}</Link>
          <Link href={altHref ?? d.other} hrefLang={es ? "en" : "es"} lang={es ? "en" : "es"} className="text-white/50 transition-colors hover:text-white">
            {es ? "EN" : "ES"}<span className="sr-only">{es ? ", English" : ", Español"}</span>
          </Link>
          <BuyLink location="header" lang={lang} className="btn h-9 bg-coral px-3.5 text-[13.5px] font-semibold text-night hover:bg-[#FA8569]">{es ? "Pack USD 19" : "Pack, $19"}</BuyLink>
        </nav>
      </div>
    </header>
  );
}
