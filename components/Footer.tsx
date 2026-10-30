import Link from "next/link";
import type { Lang } from "@/lib/site";
import { OPERATOR_URL, CONTACT_EMAIL } from "@/lib/site";
import { t } from "@/lib/i18n";
import Logo from "./Logo";

export default function Footer({ lang }: { lang: Lang }) {
  const d = t(lang);
  const es = lang === "es";
  const a = "text-[14px] text-ink-2 transition-colors hover:text-ink";
  return (
    <footer className="container-x mt-32 sm:mt-40">
      <div className="grid gap-12 border-t border-line py-16 md:grid-cols-[2fr_1fr_1fr_1fr]">
        <div className="max-w-xs">
          <Logo name={es ? "Cobrá Sin Vueltas" : "Chase Invoice"} />
          <p className="mt-4 text-[14px] leading-relaxed text-ink-3">{d.footer.blurb}</p>
        </div>
        <div>
          <p className="label">{d.footer.product}</p>
          <ul className="mt-4 space-y-3">
            <li><Link className={a} href={`${d.home}#generator`}>{d.nav.tool}</Link></li>
            <li><Link className={a} href={`${d.home}#templates`}>{d.nav.templates}</Link></li>
            <li><Link className={a} href={d.pack}>{d.nav.pack}</Link></li>
          </ul>
        </div>
        <div>
          <p className="label">{d.footer.company}</p>
          <ul className="mt-4 space-y-3">
            <li><a className={a} href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></li>
            <li><a className={a} href={OPERATOR_URL}>franvimarketing.com</a></li>
          </ul>
        </div>
        <div>
          <p className="label">{d.footer.legal}</p>
          <ul className="mt-4 space-y-3">
            <li><Link className={a} href="/privacy">{d.footer.privacy}</Link></li>
            <li><Link className={a} href="/terms">{d.footer.terms}</Link></li>
            <li><Link className={a} href={d.other} hrefLang={es ? "en" : "es"}>{d.otherLabel}</Link></li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col gap-2 pb-10 text-[13px] text-ink-3 sm:flex-row sm:justify-between">
        <p>© {new Date().getFullYear()} Chase Invoice. {d.footer.made} Franco Vidal.</p>
        <p>{d.footer.note}</p>
      </div>
    </footer>
  );
}
