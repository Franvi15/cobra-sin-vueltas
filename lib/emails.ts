import type { Lang } from "./site";

export type Tone = "friendly" | "firm" | "final";
export interface EmailInput {
  clientName: string;
  invoiceNumber: string;
  amount: number;
  currency: string;
  dueDate: string; // yyyy-mm-dd
  yourName: string;
  tone: Tone;
}
export interface GeneratedEmail {
  offset: number;
  sendDate: string;
  subject: string;
  body: string;
}

export const OFFSETS = [3, 7, 14, 30] as const;

function parseDate(iso: string): Date {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, (m || 1) - 1, d || 1);
}
export function addDays(iso: string, days: number): Date {
  const dt = parseDate(iso);
  dt.setDate(dt.getDate() + days);
  return dt;
}
export function formatDate(d: Date, lang: Lang): string {
  return new Intl.DateTimeFormat(lang === "es" ? "es-AR" : "en-US", {
    day: "numeric", month: "long", year: "numeric",
  }).format(d);
}
export function formatMoney(amount: number, currency: string, lang: Lang): string {
  try {
    return new Intl.NumberFormat(lang === "es" ? "es-AR" : "en-US", {
      style: "currency", currency, currencyDisplay: "code",
    }).format(amount);
  } catch {
    return `${currency} ${amount.toFixed(2)}`;
  }
}

type Ctx = { c: string; n: string; a: string; due: string; me: string; send: string; t: Tone };
type Stage = { subject: (x: Ctx) => string; body: (x: Ctx) => string };

const pick = (t: Tone, f: string, m: string, h: string) => (t === "friendly" ? f : t === "firm" ? m : h);

const EN: Stage[] = [
  {
    subject: (x) => `Quick reminder: invoice ${x.n}`,
    body: (x) => `Hi ${x.c},

${pick(x.t, "Hope you're having a good week!", "I'm following up on an open invoice.", "I'm writing about an overdue invoice that needs attention.")} Invoice ${x.n} for ${x.a} was due on ${x.due} and I haven't seen the payment come through yet.

${pick(x.t, "It's probably just slipped through the cracks — it happens. ", "", "")}Could you confirm when it's scheduled to be paid? If anything is missing on your side (a PO number, a different billing address, a W-9), let me know and I'll send it right away.

${pick(x.t, "Thanks so much!", "Thanks in advance,", "Regards,")}
${x.me}`,
  },
  {
    subject: (x) => `Invoice ${x.n} — now 7 days overdue`,
    body: (x) => `Hi ${x.c},

Following up on invoice ${x.n} for ${x.a}, which was due on ${x.due} and is now one week past due.

${pick(x.t,
  "I know things get busy, so I wanted to make this easy: I've attached the invoice again. Could you let me know an expected payment date?",
  "I'd appreciate a confirmed payment date by the end of this week. I've attached the invoice again for convenience.",
  "Please confirm a payment date within 2 business days. The invoice is attached again for reference.")}

If there's a problem with the invoice or the work, please tell me now so we can sort it out quickly.

${pick(x.t, "Thanks!", "Best,", "Regards,")}
${x.me}`,
  },
  {
    subject: (x) => `Overdue: invoice ${x.n} (${x.a}) — action needed`,
    body: (x) => `Hi ${x.c},

Invoice ${x.n} for ${x.a} is now two weeks overdue (due ${x.due}). I haven't received a payment or a reply to my previous messages.

${pick(x.t,
  "I'd really like to keep things simple between us. Could you please arrange payment, or reply with a date I can count on?",
  "Please arrange payment within the next 7 days, or reply with a concrete payment date. Until the balance is settled, I'll need to pause any new work.",
  "Payment is required within 7 days. Until the balance is settled, all work and deliverables are on hold, and late fees under our agreement may apply.")}

If you need to split the payment into installments, I'm open to discussing it — just let me know today.

${pick(x.t, "Thank you,", "Regards,", "Regards,")}
${x.me}`,
  },
  {
    subject: (x) => `Final notice: invoice ${x.n} — ${x.a}`,
    body: (x) => `Hi ${x.c},

This is my final notice regarding invoice ${x.n} for ${x.a}, which was due on ${x.due} and is now 30 days overdue. I've reached out several times without resolution.

${pick(x.t,
  "I value our working relationship and would much rather settle this between us.",
  "I want to resolve this directly and professionally.",
  "I have no choice but to escalate this matter.")} If full payment is not received within 7 days of this email, I will ${pick(x.t, "need to consider next steps, including", "proceed with", "proceed with")} formal collection options, which may include applying the late fees in our agreement, a small-claims filing, or a collections agency.

Please pay the outstanding balance or contact me today to agree on a payment plan.

Regards,
${x.me}`,
  },
];

const ES: Stage[] = [
  {
    subject: (x) => `Recordatorio: factura ${x.n}`,
    body: (x) => `Hola ${x.c},

${pick(x.t, "¡Espero que estés muy bien!", "Te escribo por una factura pendiente.", "Te escribo por una factura vencida que necesita atención.")} La factura ${x.n} por ${x.a} venció el ${x.due} y todavía no me figura el pago.

${pick(x.t, "Seguramente se pasó entre tantas cosas, pasa siempre. ", "", "")}¿Me confirmás para cuándo está programado? Si te falta algo de mi lado (datos de facturación, CUIT, orden de compra), avisame y te lo mando al toque.

${pick(x.t, "¡Muchas gracias!", "Gracias de antemano,", "Saludos,")}
${x.me}`,
  },
  {
    subject: (x) => `Factura ${x.n}: 7 días vencida`,
    body: (x) => `Hola ${x.c},

Vuelvo sobre la factura ${x.n} por ${x.a}, que venció el ${x.due} y ya lleva una semana vencida.

${pick(x.t,
  "Sé que hay mucho movimiento, así que te la adjunto de nuevo para hacerlo fácil. ¿Me pasás una fecha estimada de pago?",
  "Te pido que me confirmes una fecha de pago antes del fin de esta semana. Te adjunto la factura de nuevo.",
  "Necesito que me confirmes la fecha de pago dentro de los próximos 2 días hábiles. Te adjunto la factura otra vez.")}

Si hay algún problema con la factura o con el trabajo, decímelo ahora así lo resolvemos rápido.

${pick(x.t, "¡Gracias!", "Saludos,", "Saludos,")}
${x.me}`,
  },
  {
    subject: (x) => `Factura ${x.n} (${x.a}) vencida: necesito respuesta`,
    body: (x) => `Hola ${x.c},

La factura ${x.n} por ${x.a} ya lleva dos semanas vencida (venció el ${x.due}) y no recibí el pago ni respuesta a mis mensajes anteriores.

${pick(x.t,
  "Me gustaría que esto siga siendo simple entre nosotros. ¿Podés gestionar el pago o pasarme una fecha concreta?",
  "Te pido que gestiones el pago dentro de los próximos 7 días o me confirmes una fecha concreta. Hasta que se regularice el saldo, voy a tener que pausar cualquier trabajo nuevo.",
  "El pago tiene que hacerse dentro de los próximos 7 días. Hasta que se regularice, quedan en pausa todos los trabajos y entregas, y pueden aplicarse los recargos por mora de nuestro acuerdo.")}

Si te sirve pagarlo en cuotas, lo podemos charlar: avisame hoy.

${pick(x.t, "Gracias,", "Saludos,", "Saludos,")}
${x.me}`,
  },
  {
    subject: (x) => `Último aviso: factura ${x.n} por ${x.a}`,
    body: (x) => `Hola ${x.c},

Este es mi último aviso por la factura ${x.n} por ${x.a}, vencida el ${x.due} y con 30 días de atraso. Te escribí varias veces sin obtener una solución.

${pick(x.t,
  "Valoro mucho que trabajemos juntos y prefiero resolverlo entre nosotros.",
  "Quiero resolverlo de forma directa y profesional.",
  "No me queda otra opción que escalar el tema.")} Si no recibo el pago total dentro de los 7 días de este correo, voy a ${pick(x.t, "tener que evaluar", "avanzar con", "avanzar con")} las vías formales de cobro, que pueden incluir los recargos por mora del acuerdo, una carta documento o una gestión de cobranza.

Por favor, aboná el saldo o escribime hoy para acordar un plan de pagos.

Saludos,
${x.me}`,
  },
];

export function generateEmails(input: EmailInput, lang: Lang): GeneratedEmail[] {
  const stages = lang === "es" ? ES : EN;
  const due = formatDate(addDays(input.dueDate, 0), lang);
  return OFFSETS.map((offset, i) => {
    const send = formatDate(addDays(input.dueDate, offset), lang);
    const ctx: Ctx = {
      c: input.clientName.trim() || (lang === "es" ? "equipo" : "there"),
      n: input.invoiceNumber.trim() || "#001",
      a: formatMoney(input.amount || 0, input.currency, lang),
      due, me: input.yourName.trim() || (lang === "es" ? "Tu nombre" : "Your name"),
      send, t: input.tone,
    };
    return { offset, sendDate: send, subject: stages[i].subject(ctx), body: stages[i].body(ctx) };
  });
}

export function mailtoHref(subject: string, body: string): string {
  return `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
