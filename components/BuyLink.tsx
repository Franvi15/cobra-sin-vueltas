"use client";
import { track } from "@vercel/analytics";
import { CHECKOUT_URL, type Lang } from "@/lib/site";

type Props = React.AnchorHTMLAttributes<HTMLAnchorElement> & { location: string; lang: Lang };

export default function BuyLink({ location, lang, onClick, children, ...rest }: Props) {
  return (
    <a
      href={CHECKOUT_URL}
      target="_blank"
      rel="noopener"
      {...rest}
      onClick={(e) => {
        try { track("pack_cta_click", { location, lang }); } catch {}
        onClick?.(e);
      }}
    >
      {children}
    </a>
  );
}
