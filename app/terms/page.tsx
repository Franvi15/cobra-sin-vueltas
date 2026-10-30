import type { Metadata } from "next";
import LegalShell from "@/components/LegalShell";
export const metadata: Metadata = { title: "Terms of Use", description: "Terms for using Chase Invoice / Cobrá Sin Vueltas and the Late Payment Rescue Pack.", alternates: { canonical: "/terms" } };
export default function Page() {
  return (
    <LegalShell title="Terms of Use" updated="October 30, 2026">
      <p>These terms apply to this website and to the Late Payment Rescue Pack, operated by Franco Vidal (<a href="https://franvimarketing.com">franvimarketing.com</a>). Contact: <a href="mailto:hello@franvimarketing.com">hello@franvimarketing.com</a>.</p>
      <h2>The free tool and templates</h2>
      <p>You may use the generator and the free templates for any lawful purpose, including commercially for your own business. Review every email before sending it; you are responsible for what you send.</p>
      <h2>Not legal advice</h2>
      <p>Everything on this site and in the pack is general information, not legal, tax or financial advice. Laws on late fees, interest and debt collection vary by country and state. For significant amounts, consult a qualified professional in your jurisdiction.</p>
      <h2>The paid pack</h2>
      <ul>
        <li>Price: USD 19, one-time, processed by Gumroad.</li>
        <li>License: personal use for your own freelance or small business. You may edit the files and use them with your own clients. You may not resell, redistribute, or publish the files or substantial parts of them.</li>
        <li>Refunds: if you’re not satisfied, email us within 14 days of purchase for a full refund.</li>
      </ul>
      <h2>Liability</h2>
      <p>The site and materials are provided “as is”. To the extent permitted by law, our total liability for any claim related to them is limited to the amount you paid us (if any).</p>
      <h2>Governing law</h2>
      <p>These terms are governed by the laws of the Argentine Republic, without prejudice to mandatory consumer protections in your country of residence.</p>
      <p lang="es" className="border-t border-rule pt-6 text-muted"><strong>Resumen en español:</strong> la herramienta y las plantillas son gratis; revisá cada mail antes de enviarlo. No es asesoramiento legal. El pack cuesta USD 19, es de uso personal y tiene garantía de devolución de 14 días.</p>
    </LegalShell>
  );
}
