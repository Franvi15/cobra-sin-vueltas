import Link from "next/link";
import type { Lang } from "@/lib/site";
import { OPERATOR_URL, CONTACT_EMAIL } from "@/lib/site";
import { t } from "@/lib/i18n";

export default function Footer({ lang }: { lang: Lang }) {
  const d = t(lang);
  return (
    <footer className="mt-24 border-t border-ink">
      <div className="mx-auto grid max-w-6xl gap-6 px-5 py-10 font-mono text-xs uppercase tracking-widest sm:grid-cols-3">
        <p>
          {d.footer.made}{" "}
          <a href={OPERATOR_URL} className="underline decoration-accent decoration-2 underline-offset-4 hover:text-accent">franvimarketing.com</a>
        </p>
        <p><a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-accent">{CONTACT_EMAIL}</a></p>
        <p className="flex gap-4 sm:justify-end">
          <Link href="/privacy" className="hover:text-accent">{d.footer.privacy}</Link>
          <Link href="/terms" className="hover:text-accent">{d.footer.terms}</Link>
          <span>© {new Date().getFullYear()}</span>
        </p>
      </div>
    </footer>
  );
}
