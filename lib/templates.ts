import { longtail } from "./longtail";
import type { Lang } from "./site";

export interface Template {
  slug: string;
  lang: Lang;
  /** slug of the equivalent page in the other language */
  alt: string;
  title: string;
  description: string;
  whenToSend: string;
  subject: string;
  body: string;
  tips: string[];
  /** collection stage in days after due date, if any */
  stage?: number;
  /** short card title */
  name: string;
  /** long-tail extras */
  longtail?: boolean;
  intro?: string;
  variant?: { label: string; subject: string; body: string };
  mistakes?: string[];
  faq?: [string, string][];
}

export const tplPath = (t: Pick<Template, "lang" | "slug" | "longtail">) =>
  t.lang === "es" && t.longtail ? `/es/templates/${t.slug}` : `/templates/${t.slug}`;


export const templates: Template[] = [
  {
    slug: "polite-payment-reminder-email",
    name: "Payment reminder",
    stage: 3,
    lang: "en",
    alt: "recordatorio-de-pago-factura-vencida",
    title: "Polite Payment Reminder Email: Free Template",
    description: "The first reminder for an overdue invoice. Send it 3 days after the due date, with the payment details in the body so the client can pay without searching.",
    whenToSend: "3 days after the due date. At this point most late invoices are an admin problem, not a refusal to pay.",
    subject: "Invoice [INVOICE #]: payment reminder",
    body: `Hi [CLIENT NAME],

Invoice [INVOICE #] for [AMOUNT] was due on [DUE DATE]. I don't have the payment on my side yet.

Payment details:

Amount: [AMOUNT]
Reference: [INVOICE #]
Pay to: [BANK / PAYMENT LINK]

If it has already gone out, send me the transfer date and I'll match it on my end.

Thanks,
[YOUR NAME]`,
    tips: [
      "Put the payment details in the email body. Every extra click is another day of delay.",
      "Attach the invoice again. Assume the first one is buried in someone's inbox.",
      "Send it to the person who pays, not only to your project contact. Copy your contact.",
    ],
  },
  {
    slug: "overdue-invoice-follow-up-email",
    name: "Follow-up",
    stage: 7,
    lang: "en",
    alt: "seguimiento-factura-impaga",
    title: "Overdue Invoice Follow-Up Email Template",
    description: "The second reminder, 7 days after the due date. Its only job is to get a payment date in writing.",
    whenToSend: "7 days after the due date, when the first reminder got no reply or no date.",
    subject: "Invoice [INVOICE #]: 7 days overdue",
    body: `Hi [CLIENT NAME],

Invoice [INVOICE #] for [AMOUNT] is 7 days overdue (due [DUE DATE]). I wrote on [DATE OF FIRST REMINDER] and haven't had a reply.

I need a payment date. Please reply by [DATE, 2 DAYS FROM NOW] with the date the transfer goes out.

If something is holding up approval (PO number, billing entity, tax details), tell me and I'll reissue the invoice the same day.

[YOUR NAME]`,
    tips: [
      "Ask for a date, not for payment. A date is easy to give and you can hold them to it.",
      "Give a reply deadline 2 business days out.",
      "Offer to fix paperwork now. Disputes raised on day 7 are cheap. On day 45 they are expensive.",
    ],
  },
  {
    slug: "firm-payment-request-email",
    name: "Firm payment request",
    stage: 14,
    lang: "en",
    alt: "mail-firme-para-cobrar-factura",
    title: "Firm Payment Request Email for Freelancers",
    description: "Day 14: the late fee from your contract starts, new work stops, and the client gets one clear way out.",
    whenToSend: "14 days after the due date, after two reminders without a payment date.",
    subject: "Invoice [INVOICE #]: 14 days overdue, late fee applies",
    body: `Hi [CLIENT NAME],

Invoice [INVOICE #] for [AMOUNT] is now 14 days overdue. I wrote on [DATE 1] and [DATE 2] and still don't have a payment date.

As set out in section [X] of our agreement, a late fee of [1.5% PER MONTH] applies to the balance from today. If the full [AMOUNT] arrives by [DATE, 5 DAYS FROM NOW], I'll waive it.

New work on the account is paused until the balance is cleared.

If cash flow is the issue, propose two installments in writing and I'll consider it.

[YOUR NAME]`,
    tips: [
      "Only apply a fee your contract allows. Check the legal cap where your client is.",
      "The waiver deadline is what gets the money moving. The fee itself rarely does.",
      "Pausing work is your strongest legitimate lever. Use it before anything legal.",
    ],
  },
  {
    slug: "final-notice-before-collections",
    name: "Final notice",
    stage: 30,
    lang: "en",
    alt: "ultimo-aviso-antes-de-acciones-legales",
    title: "Final Notice Before Collections: Email Template",
    description: "The day 30 final notice. A fixed deadline, the reminder history, and exactly what happens next. No threats you won't carry out.",
    whenToSend: "30 days after the due date, after at least three documented reminders.",
    subject: "Final notice: invoice [INVOICE #], [AMOUNT]",
    body: `Hi [CLIENT NAME],

This is the final notice for invoice [INVOICE #].

Amount: [AMOUNT]
Due date: [DUE DATE]
Days overdue: 30
Reminders sent: [DATE 1], [DATE 2], [DATE 3]

Payment in full is due by [DEADLINE, 7 DAYS FROM NOW]. If it has not arrived by then, I will:

1. keep all work and deliverables on hold,
2. add the late fees set out in our agreement, and
3. pass the debt to a collections agency or file a small-claims claim.

If you need to pay in installments, send a written proposal before [DEADLINE]. After that date the full balance is due.

Pay to: [BANK / PAYMENT LINK]

[YOUR NAME]`,
    tips: [
      "List the reminder dates. It shows a paper trail if this ends up in front of a judge or an agency.",
      "Only name steps you will take. An empty threat costs you the next negotiation.",
      "For larger amounts, send a signed letter as PDF along with the email.",
    ],
  },
  {
    slug: "late-payment-fee-notice-email",
    name: "Late fee notice",
    lang: "en",
    alt: "aviso-recargo-por-mora",
    title: "Late Payment Fee Notice Email Template",
    description: "How to tell a client a late fee has been added to an overdue invoice, with the contract clause and the new total.",
    whenToSend: "When your contract has a late fee clause and the grace period has passed.",
    subject: "Invoice [INVOICE #]: late fee added, new balance [NEW TOTAL]",
    body: `Hi [CLIENT NAME],

Invoice [INVOICE #] for [AMOUNT] is [DAYS] days past its due date of [DUE DATE].

Under section [X] of our agreement, a late fee of [1.5% PER MONTH] has been added. The balance is now [NEW TOTAL]. The updated invoice is attached.

If the original [AMOUNT] is paid in full by [DATE], I'll remove the fee. This is a one-time offer.

[YOUR NAME]`,
    tips: [
      "State the new total in the subject. The accounts team reads subjects, not paragraphs.",
      "Quote the clause number so it isn't up for debate.",
      "Check local law. Some places cap late interest or require it to be disclosed on the invoice.",
    ],
  },
  {
    slug: "recordatorio-de-pago-factura-vencida",
    name: "Recordatorio de pago",
    stage: 3,
    lang: "es",
    alt: "polite-payment-reminder-email",
    title: "Recordatorio de pago de factura vencida: plantilla gratis",
    description: "El primer recordatorio para una factura vencida. Se manda a los 3 días del vencimiento, con los datos de pago en el cuerpo del mail para que el cliente pague sin buscar nada.",
    whenToSend: "A los 3 días del vencimiento. En esta etapa casi siempre es un tema administrativo, no una negativa a pagar.",
    subject: "Factura [N° DE FACTURA]: recordatorio de pago",
    body: `Hola [NOMBRE DEL CLIENTE],

La factura [N° DE FACTURA] por [MONTO] venció el [FECHA DE VENCIMIENTO] y todavía no tengo el pago registrado.

Datos para el pago:

Monto: [MONTO]
Referencia: [N° DE FACTURA]
Cuenta: [CBU / ALIAS / LINK DE PAGO]

Si ya lo transferiste, pasame la fecha y lo busco en mi cuenta.

Gracias,
[TU NOMBRE]`,
    tips: [
      "Poné los datos de pago en el cuerpo del mail. Cada clic de más es un día más de atraso.",
      "Adjuntá la factura otra vez. Asumí que la primera quedó perdida en alguna casilla.",
      "Mandalo a quien paga, no solo a tu contacto del proyecto. Copiá a tu contacto.",
    ],
  },
  {
    slug: "seguimiento-factura-impaga",
    name: "Seguimiento",
    stage: 7,
    lang: "es",
    alt: "overdue-invoice-follow-up-email",
    title: "Mail de seguimiento por factura impaga",
    description: "El segundo aviso, a los 7 días del vencimiento. Tiene un solo objetivo: conseguir una fecha de pago por escrito.",
    whenToSend: "A los 7 días del vencimiento, si el primer recordatorio no tuvo respuesta o no trajo fecha.",
    subject: "Factura [N° DE FACTURA]: 7 días vencida",
    body: `Hola [NOMBRE DEL CLIENTE],

La factura [N° DE FACTURA] por [MONTO] lleva 7 días vencida (vencía el [FECHA DE VENCIMIENTO]). Te escribí el [FECHA DEL PRIMER AVISO] y no tuve respuesta.

Necesito una fecha de pago. Respondeme antes del [FECHA, EN 2 DÍAS] con el día en que sale la transferencia.

Si algo traba la aprobación (orden de compra, razón social, datos fiscales), avisame y te rehago la factura en el día.

[TU NOMBRE]`,
    tips: [
      "Pedí una fecha, no el pago. Una fecha es fácil de dar y después la podés reclamar.",
      "Poné un plazo de respuesta de 2 días hábiles.",
      "Ofrecé corregir papeles ahora. Un reclamo al día 7 sale barato. Al día 45, caro.",
    ],
  },
  {
    slug: "mail-firme-para-cobrar-factura",
    name: "Pedido firme de pago",
    stage: 14,
    lang: "es",
    alt: "firm-payment-request-email",
    title: "Mail firme para cobrar una factura atrasada",
    description: "Día 14: empieza a correr el recargo del contrato, se frena el trabajo nuevo y el cliente tiene una salida clara.",
    whenToSend: "A los 14 días del vencimiento, después de dos avisos sin fecha de pago.",
    subject: "Factura [N° DE FACTURA]: 14 días vencida, corre el recargo",
    body: `Hola [NOMBRE DEL CLIENTE],

La factura [N° DE FACTURA] por [MONTO] ya tiene 14 días de atraso. Te escribí el [FECHA 1] y el [FECHA 2], y sigo sin fecha de pago.

Según la cláusula [X] de nuestro acuerdo, desde hoy corre un recargo por mora del [3% MENSUAL] sobre el saldo. Si el total de [MONTO] entra antes del [FECHA, EN 5 DÍAS], no te lo cobro.

Los trabajos nuevos de la cuenta quedan en pausa hasta que se cancele el saldo.

Si el problema es de caja, mandame por escrito una propuesta en dos cuotas y la evalúo.

[TU NOMBRE]`,
    tips: [
      "Aplicá solo el recargo que figura en tu contrato. Revisá los topes legales.",
      "Lo que mueve la plata es el plazo para bonificar el recargo, no el recargo en sí.",
      "Pausar el trabajo es tu mejor herramienta legítima. Usala antes que cualquier vía legal.",
    ],
  },
  {
    slug: "ultimo-aviso-antes-de-acciones-legales",
    name: "Último aviso",
    stage: 30,
    lang: "es",
    alt: "final-notice-before-collections",
    title: "Último aviso de pago antes de acciones legales",
    description: "El aviso final del día 30. Un plazo fijo, el historial de avisos y qué pasa después. Sin amenazas que no vayas a cumplir.",
    whenToSend: "A los 30 días del vencimiento, con al menos tres avisos documentados.",
    subject: "Último aviso: factura [N° DE FACTURA], [MONTO]",
    body: `Hola [NOMBRE DEL CLIENTE],

Este es el último aviso por la factura [N° DE FACTURA].

Monto: [MONTO]
Vencimiento: [FECHA DE VENCIMIENTO]
Días de atraso: 30
Avisos enviados: [FECHA 1], [FECHA 2], [FECHA 3]

El pago total tiene que estar acreditado antes del [PLAZO, EN 7 DÍAS]. Si para esa fecha no entró, voy a:

1. mantener en pausa todos los trabajos y entregas,
2. sumar los recargos por mora previstos en nuestro acuerdo, y
3. pasar la deuda a una gestora de cobranzas o iniciar el reclamo judicial.

Si necesitás pagarlo en cuotas, mandame una propuesta por escrito antes del [PLAZO]. Pasada esa fecha, se exige el saldo completo.

Cuenta: [CBU / ALIAS / LINK DE PAGO]

[TU NOMBRE]`,
    tips: [
      "Listá las fechas de los avisos. Es tu constancia si el tema termina en una mediación o en un juzgado.",
      "Nombrá solo pasos que vas a dar. Una amenaza vacía te cuesta la próxima negociación.",
      "Para montos grandes, sumá una carta firmada en PDF o una carta documento.",
    ],
  },
  {
    slug: "aviso-recargo-por-mora",
    name: "Aviso de recargo por mora",
    lang: "es",
    alt: "late-payment-fee-notice-email",
    title: "Aviso de recargo por mora: plantilla de mail",
    description: "Cómo avisarle a un cliente que se sumó el recargo por mora a una factura vencida, con la cláusula del contrato y el nuevo total.",
    whenToSend: "Cuando tu contrato tiene cláusula de mora y ya pasó el período de gracia.",
    subject: "Factura [N° DE FACTURA]: recargo aplicado, nuevo saldo [NUEVO TOTAL]",
    body: `Hola [NOMBRE DEL CLIENTE],

La factura [N° DE FACTURA] por [MONTO] lleva [DÍAS] días vencida (vencía el [FECHA DE VENCIMIENTO]).

Según la cláusula [X] de nuestro acuerdo, se sumó un recargo por mora del [3% MENSUAL]. El saldo actual es [NUEVO TOTAL]. Te adjunto la factura actualizada.

Si el monto original de [MONTO] se acredita completo antes del [FECHA], saco el recargo. Es por única vez.

[TU NOMBRE]`,
    tips: [
      "Poné el nuevo total en el asunto. En administración leen asuntos, no párrafos.",
      "Citá el número de cláusula para que no quede en discusión.",
      "Revisá la ley local: en algunos lugares hay topes de interés o hay que informarlo en la factura.",
    ],
  },
];

export const allTemplates: Template[] = [...templates, ...longtail];
export const getTemplate = (slug: string) => allTemplates.find((t) => t.slug === slug);
