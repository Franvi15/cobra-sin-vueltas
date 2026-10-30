import type { Lang } from "./site";

export const dict = {
  en: {
    home: "/", pack: "/pack", other: "/es", otherLabel: "Español",
    nav: { tool: "Generator", pack: "Rescue Pack", templates: "Templates" },
    kicker: "Free collection email generator",
    hero: "Get paid without the awkward follow-ups.",
    sub: "Enter the invoice once. You get the four emails a collections pro would send on days 3, 7, 14 and 30 after the due date, each dated and ready to send. Nothing you type leaves your browser.",
    schedule: [
      ["+3", "Reminder with payment details"],
      ["+7", "Ask for a payment date"],
      ["+14", "Late fee starts, work paused"],
      ["+30", "Final notice, 7-day deadline"],
    ],
    form: {
      heading: "Invoice details",
      client: "Client name", invoice: "Invoice no.", amount: "Amount", currency: "Currency",
      due: "Due date", you: "Your name", tone: "Tone", generate: "Write the sequence",
      pay: "Payment details (optional)", fee: "Late fee per contract (optional)",
      tones: { friendly: "Friendly", firm: "Firm", final: "Final" },
      ph: { client: "Acme Studio", invoice: "INV-0042", you: "Alex Rivera", pay: "Wise / IBAN / payment link", fee: "1.5% per month" },
    },
    out: {
      title: "Follow-up schedule", day: "Day", send: "Send", copy: "Copy", copied: "Copied",
      open: "Open in mail", empty: "Fill in the invoice details. The four emails appear here with their send dates.",
      subject: "Subject", stage: ["Reminder", "Follow-up", "Firm request", "Final notice"],
    },
    cta: {
      kicker: "Late Payment Rescue Pack, $19",
      title: "Most late payments are decided before the work starts.",
      body: "The pack has the contract terms that prevent them and the paperwork for when they happen anyway: 12 email templates in English and Spanish, a late payment clause set, a freelance contract, a final notice letter, an invoice tracker and a 5-page guide.",
      button: "See the files",
    },
    tplHeading: "Free templates",
    footer: { made: "Built by", privacy: "Privacy", terms: "Terms" },
  },
  es: {
    home: "/es", pack: "/es/pack", other: "/", otherLabel: "English",
    nav: { tool: "Generador", pack: "Pack de cobro", templates: "Plantillas" },
    kicker: "Generador gratis de mails de cobro",
    hero: "Cobrá tus facturas sin incomodidad.",
    sub: "Cargás la factura una vez y te armamos los cuatro mails que mandaría alguien que cobra para vivir: a los 3, 7, 14 y 30 días del vencimiento, con fecha y listos para enviar. Lo que escribís no sale de tu navegador.",
    schedule: [
      ["+3", "Recordatorio con datos de pago"],
      ["+7", "Pedido de fecha de pago"],
      ["+14", "Corre el recargo, se frena el trabajo"],
      ["+30", "Último aviso, plazo de 7 días"],
    ],
    form: {
      heading: "Datos de la factura",
      client: "Cliente", invoice: "N° de factura", amount: "Monto", currency: "Moneda",
      due: "Vencimiento", you: "Tu nombre", tone: "Tono", generate: "Armar la secuencia",
      pay: "Datos de pago (opcional)", fee: "Recargo según contrato (opcional)",
      tones: { friendly: "Amable", firm: "Firme", final: "Final" },
      ph: { client: "Estudio Acme", invoice: "FC-0042", you: "Sofi Pérez", pay: "Alias, CBU o link de pago", fee: "3% mensual" },
    },
    out: {
      title: "Cronograma de seguimiento", day: "Día", send: "Enviar", copy: "Copiar", copied: "Copiado",
      open: "Abrir en el mail", empty: "Completá los datos de la factura. Los cuatro mails aparecen acá con su fecha de envío.",
      subject: "Asunto", stage: ["Recordatorio", "Seguimiento", "Pedido firme", "Último aviso"],
    },
    cta: {
      kicker: "Pack de Rescate de Cobros, USD 19",
      title: "La mayoría de los atrasos se definen antes de empezar el trabajo.",
      body: "El pack trae las condiciones de contrato que los evitan y los papeles para cuando pasan igual: 12 plantillas de mail en español e inglés, cláusulas de mora, un contrato freelance, una carta de último aviso, una planilla de seguimiento y una guía de 5 páginas.",
      button: "Ver los archivos",
    },
    tplHeading: "Plantillas gratis",
    footer: { made: "Hecho por", privacy: "Privacidad", terms: "Términos" },
  },
} as const;

export const t = (lang: Lang) => dict[lang];
