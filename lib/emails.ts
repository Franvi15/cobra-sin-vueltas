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
  paymentDetails?: string;
  lateFee?: string;
}
export interface GeneratedEmail {
  offset: number;
  sendDate: string;
  sendIso: string;
  subject: string;
  body: string;
}

export const OFFSETS = [3, 7, 14, 30] as const;
export const PRE_OFFSET = -2;

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
function isoOf(d: Date) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
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

type Ctx = {
  c: string; n: string; a: string; me: string; t: Tone; pay: string; fee: string;
  due: string; d: (offset: number) => string;
};
type Stage = { subject: (x: Ctx) => string; body: (x: Ctx) => string };
const pick = (t: Tone, f: string, m: string, h: string) => (t === "friendly" ? f : t === "firm" ? m : h);
const lines = (...xs: (string | false)[]) => xs.filter((x) => x !== false).join("\n\n");

const EN: Stage[] = [
  {
    subject: (x) => `Invoice ${x.n}: payment reminder`,
    body: (x) => lines(
      `Hi ${x.c},`,
      `Invoice ${x.n} for ${x.a} was due on ${x.due}. I don't have the payment on my side yet.`,
      pick(x.t, "Probably an oversight, so here are the details again:", "Payment details:", "Payment details:") +
        `\n\nAmount: ${x.a}\nReference: ${x.n}\nPay to: ${x.pay || "details on the invoice (attached again)"}`,
      "If it has already gone out, send me the transfer date and I'll match it on my end.",
      pick(x.t, `Thanks,\n${x.me}`, `Thanks,\n${x.me}`, x.me),
    ),
  },
  {
    subject: (x) => `Invoice ${x.n}: 7 days overdue`,
    body: (x) => lines(
      `Hi ${x.c},`,
      `Invoice ${x.n} for ${x.a} is 7 days overdue (due ${x.due}). I wrote on ${x.d(3)} and haven't had a reply.`,
      pick(x.t,
        `Can you give me a payment date? A one-line reply by ${x.d(9)} is enough.`,
        `I need a payment date. Please reply by ${x.d(9)} with the date the transfer goes out.`,
        `Reply by ${x.d(9)} with a confirmed payment date.`),
      "If something is holding up approval (PO number, billing entity, tax details), tell me and I'll reissue the invoice the same day.",
      x.me,
    ),
  },
  {
    subject: (x) => `Invoice ${x.n}: 14 days overdue, late fee applies`,
    body: (x) => lines(
      `Hi ${x.c},`,
      `Invoice ${x.n} for ${x.a} is now 14 days overdue. I wrote on ${x.d(3)} and ${x.d(7)} and still don't have a payment date.`,
      x.fee
        ? `As set out in our agreement, a late fee of ${x.fee} applies to the balance from today.`
        : "As set out in our agreement, the late fee applies to the balance from today.",
      pick(x.t,
        `If the full ${x.a} arrives by ${x.d(19)}, I'll waive the fee.`,
        `If the full ${x.a} arrives by ${x.d(19)}, I'll waive the fee. After that it stays.`,
        "The fee will not be waived."),
      pick(x.t,
        "I'm holding new work on the account until this is settled.",
        "New work on the account is paused until the balance is cleared.",
        "All work on the account is paused until the balance is cleared."),
      "If cash flow is the issue, propose two installments in writing and I'll consider it.",
      x.me,
    ),
  },
  {
    subject: (x) => `Final notice: invoice ${x.n}, ${x.a}`,
    body: (x) => lines(
      `Hi ${x.c},`,
      pick(x.t,
        `I've sent three reminders about invoice ${x.n} without an answer, so this is the final notice.`,
        `This is the final notice for invoice ${x.n}.`,
        `This is the final notice for invoice ${x.n}. There will not be another reminder.`),
      `Amount: ${x.a}\nDue date: ${x.due}\nDays overdue: 30\nReminders sent: ${x.d(3)}, ${x.d(7)}, ${x.d(14)}`,
      `Payment in full is due by ${x.d(37)}. If it has not arrived by then, I will:\n\n1. keep all work and deliverables on hold,\n2. add the late fees set out in our agreement, and\n3. pass the debt to a collections agency or file a small-claims claim.`,
      `If you need to pay in installments, send a written proposal before ${x.d(37)}. After that date the full balance is due.`,
      `Pay to: ${x.pay || "details on the attached invoice"}`,
      x.me,
    ),
  },
];

const ES: Stage[] = [
  {
    subject: (x) => `Factura ${x.n}: recordatorio de pago`,
    body: (x) => lines(
      `Hola ${x.c},`,
      `La factura ${x.n} por ${x.a} venció el ${x.due} y todavía no tengo el pago registrado.`,
      pick(x.t, "Seguro se pasó, así que te dejo los datos de nuevo:", "Datos para el pago:", "Datos para el pago:") +
        `\n\nMonto: ${x.a}\nReferencia: ${x.n}\nCuenta: ${x.pay || "los datos están en la factura (te la adjunto de nuevo)"}`,
      "Si ya lo transferiste, pasame la fecha y lo busco en mi cuenta.",
      pick(x.t, `Gracias,\n${x.me}`, `Gracias,\n${x.me}`, x.me),
    ),
  },
  {
    subject: (x) => `Factura ${x.n}: 7 días vencida`,
    body: (x) => lines(
      `Hola ${x.c},`,
      `La factura ${x.n} por ${x.a} lleva 7 días vencida (vencía el ${x.due}). Te escribí el ${x.d(3)} y no tuve respuesta.`,
      pick(x.t,
        `¿Me pasás una fecha de pago? Con una línea antes del ${x.d(9)} me alcanza.`,
        `Necesito una fecha de pago. Respondeme antes del ${x.d(9)} con el día en que sale la transferencia.`,
        `Respondeme antes del ${x.d(9)} con una fecha de pago confirmada.`),
      "Si algo traba la aprobación (orden de compra, razón social, datos fiscales), avisame y te rehago la factura en el día.",
      x.me,
    ),
  },
  {
    subject: (x) => `Factura ${x.n}: 14 días vencida, corre el recargo`,
    body: (x) => lines(
      `Hola ${x.c},`,
      `La factura ${x.n} por ${x.a} ya tiene 14 días de atraso. Te escribí el ${x.d(3)} y el ${x.d(7)}, y sigo sin fecha de pago.`,
      x.fee
        ? `Según nuestro acuerdo, desde hoy corre un recargo por mora de ${x.fee} sobre el saldo.`
        : "Según nuestro acuerdo, desde hoy corre el recargo por mora sobre el saldo.",
      pick(x.t,
        `Si el total de ${x.a} entra antes del ${x.d(19)}, no te cobro el recargo.`,
        `Si el total de ${x.a} entra antes del ${x.d(19)}, no te cobro el recargo. Después queda firme.`,
        "El recargo no se bonifica."),
      pick(x.t,
        "Mientras tanto, freno los trabajos nuevos de la cuenta.",
        "Los trabajos nuevos de la cuenta quedan en pausa hasta que se cancele el saldo.",
        "Todos los trabajos de la cuenta quedan en pausa hasta que se cancele el saldo."),
      "Si el problema es de caja, mandame por escrito una propuesta en dos cuotas y la evalúo.",
      x.me,
    ),
  },
  {
    subject: (x) => `Último aviso: factura ${x.n}, ${x.a}`,
    body: (x) => lines(
      `Hola ${x.c},`,
      pick(x.t,
        `Te mandé tres recordatorios por la factura ${x.n} sin respuesta, así que este es el último aviso.`,
        `Este es el último aviso por la factura ${x.n}.`,
        `Este es el último aviso por la factura ${x.n}. No va a haber otro recordatorio.`),
      `Monto: ${x.a}\nVencimiento: ${x.due}\nDías de atraso: 30\nAvisos enviados: ${x.d(3)}, ${x.d(7)}, ${x.d(14)}`,
      `El pago total tiene que estar acreditado antes del ${x.d(37)}. Si para esa fecha no entró, voy a:\n\n1. mantener en pausa todos los trabajos y entregas,\n2. sumar los recargos por mora previstos en nuestro acuerdo, y\n3. pasar la deuda a una gestora de cobranzas o iniciar el reclamo judicial.`,
      `Si necesitás pagarlo en cuotas, mandame una propuesta por escrito antes del ${x.d(37)}. Pasada esa fecha, se exige el saldo completo.`,
      `Cuenta: ${x.pay || "los datos están en la factura adjunta"}`,
      x.me,
    ),
  },
];

const PRE_EN: Stage = {
  subject: (x) => `Heads-up: invoice ${x.n} is due ${x.due}`,
  body: (x) => lines(
    `Hi ${x.c},`,
    `Quick heads-up so nothing gets stuck at the last minute: invoice ${x.n} for ${x.a} is due on ${x.due}, two days from now.`,
    `Here are the details in one place:\n\nAmount: ${x.a}\nReference: ${x.n}\nPay to: ${x.pay || "details on the invoice (attached again)"}`,
    "If it needs someone else to approve it, or you need a PO number or different billing details on the invoice, just let me know and I'll sort it today.",
    "And if it's already scheduled, ignore this one. Thanks!",
    x.me,
  ),
};
const PRE_ES: Stage = {
  subject: (x) => `Aviso: la factura ${x.n} vence el ${x.due}`,
  body: (x) => lines(
    `Hola ${x.c},`,
    `Te escribo para que no se nos pase: la factura ${x.n} por ${x.a} vence el ${x.due}, en dos días.`,
    `Te dejo los datos juntos así queda a mano:\n\nMonto: ${x.a}\nReferencia: ${x.n}\nCuenta: ${x.pay || "los datos están en la factura (te la adjunto de nuevo)"}`,
    "Si la tiene que aprobar otra persona, o necesitás que figure una orden de compra u otra razón social, avisame y la corrijo hoy mismo.",
    "Y si ya está programado el pago, ignorá este mensaje. ¡Gracias!",
    x.me,
  ),
};

export function generateEmails(input: EmailInput, lang: Lang, opts: { predue?: boolean } = {}): GeneratedEmail[] {
  const stages = lang === "es" ? ES : EN;
  const d = (o: number) => formatDate(addDays(input.dueDate, o), lang);
  const ctx: Ctx = {
    c: input.clientName.trim() || (lang === "es" ? "equipo" : "there"),
    n: input.invoiceNumber.trim() || "#001",
    a: formatMoney(input.amount || 0, input.currency, lang),
    me: input.yourName.trim() || (lang === "es" ? "Tu nombre" : "Your name"),
    t: input.tone,
    pay: (input.paymentDetails || "").trim(),
    fee: (input.lateFee || "").trim(),
    due: d(0),
    d,
  };
  const list = OFFSETS.map((offset, i) => ({ offset: offset as number, stage: stages[i] }));
  if (opts.predue) list.unshift({ offset: PRE_OFFSET, stage: lang === "es" ? PRE_ES : PRE_EN });
  return list.map(({ offset, stage }) => ({
    offset,
    sendDate: d(offset),
    sendIso: isoOf(addDays(input.dueDate, offset)),
    subject: stage.subject(ctx),
    body: stage.body(ctx),
  }));
}

export function mailtoHref(subject: string, body: string): string {
  return `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
