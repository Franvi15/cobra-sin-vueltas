import type { Lang } from "./site";

export const dict = {
  en: {
    home: "/", pack: "/pack", other: "/es", otherLabel: "Español",
    nav: { tool: "Free tool", pack: "Rescue Pack", templates: "Templates" },
    kicker: "Free tool · No sign-up",
    hero: "Get paid without the awkward follow-ups.",
    sub: "Fill in the invoice once. Get four escalating collection emails — day 3, 7, 14 and 30 — ready to copy or send. Nothing leaves your browser.",
    form: {
      client: "Client name", invoice: "Invoice number", amount: "Amount", currency: "Currency",
      due: "Due date", you: "Your name", tone: "Tone", generate: "Write my emails",
      tones: { friendly: "Friendly", firm: "Firm", final: "Final" },
      ph: { client: "Acme Studio", invoice: "INV-0042", you: "Alex Rivera" },
    },
    out: {
      title: "Your follow-up sequence", day: "Day", send: "Send on", copy: "Copy", copied: "Copied",
      open: "Open in mail app", empty: "Fill in the form and your four emails appear here.",
      subject: "Subject",
    },
    cta: {
      kicker: "Late Payment Rescue Pack",
      title: "Stop chasing. Start with a contract that gets you paid.",
      body: "12 battle-tested EN/ES templates, a late-payment clause, a freelance contract, a final-notice letter, a payment tracker and a no-fluff guide. One payment of $19.",
      button: "See what's inside",
    },
    footer: { made: "A small tool by", privacy: "Privacy", terms: "Terms" },
  },
  es: {
    home: "/es", pack: "/es/pack", other: "/", otherLabel: "English",
    nav: { tool: "Herramienta", pack: "Pack de cobro", templates: "Plantillas" },
    kicker: "Gratis · Sin registro",
    hero: "Cobrá tus facturas sin incomodidad.",
    sub: "Cargá la factura una vez y obtené cuatro mails de cobro que suben de tono — día 3, 7, 14 y 30 — listos para copiar o enviar. Nada sale de tu navegador.",
    form: {
      client: "Nombre del cliente", invoice: "N° de factura", amount: "Monto", currency: "Moneda",
      due: "Fecha de vencimiento", you: "Tu nombre", tone: "Tono", generate: "Escribir mis mails",
      tones: { friendly: "Amable", firm: "Firme", final: "Final" },
      ph: { client: "Estudio Acme", invoice: "FC-0042", you: "Sofi Pérez" },
    },
    out: {
      title: "Tu secuencia de seguimiento", day: "Día", send: "Enviar el", copy: "Copiar", copied: "Copiado",
      open: "Abrir en el mail", empty: "Completá el formulario y acá aparecen tus cuatro mails.",
      subject: "Asunto",
    },
    cta: {
      kicker: "Pack de Rescate de Cobros",
      title: "Dejá de perseguir. Empezá con un contrato que te hace cobrar.",
      body: "12 plantillas EN/ES probadas, cláusula de mora, contrato freelance, carta de último aviso, planilla de seguimiento y una guía sin relleno. Un solo pago de USD 19.",
      button: "Ver qué incluye",
    },
    footer: { made: "Una herramienta de", privacy: "Privacidad", terms: "Términos" },
  },
} as const;

export const t = (lang: Lang) => dict[lang];
