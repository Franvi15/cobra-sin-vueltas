import type { Metadata } from "next";
import LegalShell from "@/components/LegalShell";
export const metadata: Metadata = { title: "Privacy Policy", description: "How Chase Invoice handles your data.", alternates: { canonical: "/privacy" } };
export default function Page() {
  return (
    <LegalShell title="Privacy Policy" updated="October 30, 2026">
      <p>Chase Invoice (published in Spanish as “Cobrá Sin Vueltas”) is operated by Franco Vidal (<a href="https://franvimarketing.com">franvimarketing.com</a>). Contact: <a href="mailto:hello@franvimarketing.com">hello@franvimarketing.com</a>.</p>
      <h2>What we don’t collect</h2>
      <p>The email generator runs entirely in your browser. The client names, invoice numbers, amounts, dates and names you type are never sent to or stored on our servers. There are no accounts and no database.</p>
      <h2>Analytics</h2>
      <p>We use Vercel Web Analytics to count page views. It is cookieless and collects aggregated, anonymized data (page, referrer, country, browser, device type). It does not track you across sites.</p>
      <h2>Purchases</h2>
      <p>The Late Payment Rescue Pack is sold through Payhip. When you buy, Payhip processes your payment and shares your name and email with us so we can deliver the product and handle refunds and support. Payhip’s own privacy policy applies to the checkout.</p>
      <h2>Emails you send us</h2>
      <p>If you write to us, we receive your email address and message through our normal mailbox. We use it only to reply, and we delete it on request.</p>
      <h2>Your rights</h2>
      <p>You can ask us to access, correct or delete any personal data we hold about you by writing to <a href="mailto:hello@franvimarketing.com">hello@franvimarketing.com</a>. This includes rights under the GDPR and Argentina’s Personal Data Protection Law No. 25,326.</p>
      <h2>Changes</h2>
      <p>If we change this policy we’ll update the date above.</p>
      <p lang="es" className="border-t border-rule pt-6 text-muted"><strong>Resumen en español:</strong> el generador funciona 100% en tu navegador y no guardamos lo que escribís. Usamos analítica anónima sin cookies. Las compras las procesa Payhip. Para ejercer tus derechos escribí a hello@franvimarketing.com.</p>
    </LegalShell>
  );
}
