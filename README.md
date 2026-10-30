# Cobrá Sin Vueltas · Chase Invoice

Free web tool that writes four escalating invoice-collection emails (day +3, +7, +14, +30 after the due date) for freelancers, in English and Argentine Spanish. It also hosts the sales page for the $19 **Late Payment Rescue Pack** on Payhip.

Next.js 14 (App Router) · Tailwind CSS · TypeScript · no database · no paid APIs. Everything is statically generated; the generator runs 100% client-side.

## Routes

| Route | What |
|---|---|
| `/`, `/es` | Generator (EN / ES) |
| `/pack`, `/es/pack` | Pack sales page (Product JSON-LD, FAQ, 14-day guarantee) |
| `/templates/[slug]` | 10 static SEO template pages (5 EN + 5 ES, hreflang-paired); data in `lib/templates.ts` |
| `/privacy`, `/terms` | Legal pages |
| `/sitemap.xml`, `/robots.txt`, `/opengraph-image` | SEO |

## Environment

Copy `.env.example` to `.env.local`:

- `NEXT_PUBLIC_SITE_URL`: canonical origin (fallback `https://cobrasinvueltas.com`).
- `NEXT_PUBLIC_CHECKOUT_URL`: Payhip checkout URL for the pack. Defaults to `https://payhip.com/b/iuXDm` when unset.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint
npm run build
```

## Deploy (Vercel)

Import the repo, set the two env vars, deploy. Enable Web Analytics in the Vercel dashboard (`@vercel/analytics` is already wired in `app/layout.tsx`).

## Structure

- `lib/emails.ts`: email copy (EN/ES × 3 tones × 4 stages), date/currency formatting, mailto builder
- `lib/templates.ts`: SEO template content
- `lib/i18n.ts`: UI copy
- `components/`: Generator, PackPage, Header/Footer, CopyButton

Operated by Franco Vidal · [franvimarketing.com](https://franvimarketing.com) · hello@franvimarketing.com
