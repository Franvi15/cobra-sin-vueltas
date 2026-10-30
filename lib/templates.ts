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
}

export const templates: Template[] = [
  {
    slug: "polite-payment-reminder-email",
    lang: "en",
    alt: "recordatorio-de-pago-factura-vencida",
    title: "Polite Payment Reminder Email (Free Template)",
    description: "A friendly, no-pressure payment reminder email for freelancers to send a few days after an invoice is due. Copy, paste, get paid.",
    whenToSend: "1–3 days after the due date, when the delay is most likely an oversight.",
    subject: "Quick reminder: invoice [INVOICE #]",
    body: `Hi [CLIENT NAME],

Hope your week is going well! Just a quick note that invoice [INVOICE #] for [AMOUNT] was due on [DUE DATE], and I haven't seen the payment come through yet.

It's probably just slipped through the cracks. Could you confirm when it's scheduled to be paid? If you need anything from me (a PO number, updated billing details, a tax form), let me know and I'll send it right away.

I've attached the invoice again for convenience.

Thanks so much,
[YOUR NAME]`,
    tips: [
      "Assume good faith in the first reminder. Most late payments are process problems, not bad intent.",
      "Always reattach the invoice so they don't have to dig for it.",
      "Ask a direct question (\"when is it scheduled?\") so the reply has to include a date.",
    ],
  },
  {
    slug: "overdue-invoice-follow-up-email",
    lang: "en",
    alt: "seguimiento-factura-impaga",
    title: "Overdue Invoice Follow-Up Email Template",
    description: "A clear second follow-up for an invoice that's one week overdue. Firm, professional, and designed to get a payment date in writing.",
    whenToSend: "About 7 days after the due date, if the first reminder got no answer or no date.",
    subject: "Invoice [INVOICE #] — 7 days overdue",
    body: `Hi [CLIENT NAME],

I'm following up on invoice [INVOICE #] for [AMOUNT], which was due on [DUE DATE] and is now one week overdue.

Could you confirm a payment date by the end of this week? I've attached the invoice again for reference.

If there's an issue with the invoice or the work delivered, please let me know now so we can sort it out quickly — I'd rather fix it than let it drag on.

Best,
[YOUR NAME]`,
    tips: [
      "Put the number of days overdue in the subject line. It's factual and it gets opened.",
      "Give a concrete deadline for a reply, not just for the payment.",
      "Invite objections early: disputes raised at day 7 are easier to solve than at day 45.",
    ],
  },
  {
    slug: "firm-payment-request-email",
    lang: "en",
    alt: "mail-firme-para-cobrar-factura",
    title: "Firm Payment Request Email for Freelancers",
    description: "When polite isn't working: a firm payment request that pauses work until the invoice is settled, without burning the relationship.",
    whenToSend: "Around 14 days overdue, after two unanswered reminders.",
    subject: "Overdue: invoice [INVOICE #] ([AMOUNT]) — action needed",
    body: `Hi [CLIENT NAME],

Invoice [INVOICE #] for [AMOUNT] is now two weeks overdue (due [DUE DATE]). I haven't received payment or a reply to my previous two messages.

Please arrange payment within the next 7 days, or reply with a confirmed payment date. Until the balance is settled, I'm pausing new work and deliverables on the account.

If paying in installments would help, I'm open to it — just reply today and we'll agree on a schedule.

Regards,
[YOUR NAME]`,
    tips: [
      "Pausing work is your strongest legitimate lever. Use it before threatening anything else.",
      "Offering installments gives a struggling client a way to say yes.",
      "Keep it short. Long emails read as anxious; short ones read as confident.",
    ],
  },
  {
    slug: "final-notice-before-collections",
    lang: "en",
    alt: "ultimo-aviso-antes-de-acciones-legales",
    title: "Final Notice Before Collections — Email Template",
    description: "A professional final notice for invoices 30+ days overdue. States the deadline and the consequences clearly, with no empty threats.",
    whenToSend: "30 days or more past due, after at least three documented reminders.",
    subject: "Final notice: invoice [INVOICE #] — [AMOUNT]",
    body: `Hi [CLIENT NAME],

This is my final notice regarding invoice [INVOICE #] for [AMOUNT], which was due on [DUE DATE] and is now [DAYS] days overdue. I've contacted you on [DATE 1], [DATE 2] and [DATE 3] without resolution.

If full payment is not received by [DEADLINE — 7 days from today], I will proceed with formal collection, which may include:

• applying the late-payment fee set out in our agreement,
• filing a small-claims action, and/or
• referring the debt to a collections agency.

I would much rather resolve this directly. Please pay the outstanding balance or contact me before the deadline to agree on a payment plan.

Regards,
[YOUR NAME]`,
    tips: [
      "Only list consequences you are actually prepared to carry out.",
      "List the dates of previous reminders: it shows a paper trail.",
      "Send it as an email and, if the amount justifies it, also as a signed PDF letter.",
    ],
  },
  {
    slug: "late-payment-fee-notice-email",
    lang: "en",
    alt: "aviso-recargo-por-mora",
    title: "Late Payment Fee Notice Email Template",
    description: "How to tell a client a late fee is being applied to an overdue invoice — calmly, with the contract clause referenced.",
    whenToSend: "When your contract includes a late-fee clause and the grace period has passed.",
    subject: "Late fee applied — invoice [INVOICE #]",
    body: `Hi [CLIENT NAME],

As invoice [INVOICE #] for [AMOUNT] remains unpaid [DAYS] days after its due date of [DUE DATE], a late-payment fee of [FEE — e.g. 1.5% per month] has been applied, as set out in section [X] of our agreement.

The updated balance is [NEW TOTAL]. An updated invoice is attached.

If the original amount is paid in full by [DATE], I'm happy to waive the fee as a one-time courtesy.

Thanks,
[YOUR NAME]`,
    tips: [
      "Only charge fees your contract actually allows — and check local law for caps.",
      "Offering to waive the fee for quick payment often works better than the fee itself.",
      "Reference the exact clause number so it's not open to debate.",
    ],
  },
  {
    slug: "recordatorio-de-pago-factura-vencida",
    lang: "es",
    alt: "polite-payment-reminder-email",
    title: "Recordatorio de pago de factura vencida (plantilla gratis)",
    description: "Un mail amable para recordarle a un cliente una factura vencida, pensado para freelancers. Copiá, pegá y cobrá.",
    whenToSend: "Entre 1 y 3 días después del vencimiento, cuando lo más probable es que sea un olvido.",
    subject: "Recordatorio: factura [N° DE FACTURA]",
    body: `Hola [NOMBRE DEL CLIENTE],

¡Espero que estés muy bien! Te escribo para recordarte que la factura [N° DE FACTURA] por [MONTO] venció el [FECHA DE VENCIMIENTO] y todavía no me figura el pago.

Seguramente se pasó entre tantas cosas. ¿Me confirmás para cuándo está programado? Si necesitás algo de mi lado (datos de facturación, CUIT, orden de compra), avisame y te lo mando al toque.

Te adjunto la factura de nuevo para que la tengas a mano.

¡Muchas gracias!
[TU NOMBRE]`,
    tips: [
      "En el primer recordatorio asumí buena fe: casi siempre es un tema de proceso, no de mala intención.",
      "Adjuntá siempre la factura para que no la tengan que buscar.",
      "Hacé una pregunta concreta (\"¿para cuándo está programado?\") así la respuesta trae una fecha.",
    ],
  },
  {
    slug: "seguimiento-factura-impaga",
    lang: "es",
    alt: "overdue-invoice-follow-up-email",
    title: "Mail de seguimiento por factura impaga",
    description: "Segundo seguimiento para una factura con una semana de atraso. Profesional, claro y pensado para conseguir una fecha de pago por escrito.",
    whenToSend: "Unos 7 días después del vencimiento, si el primer recordatorio no tuvo respuesta.",
    subject: "Factura [N° DE FACTURA]: 7 días vencida",
    body: `Hola [NOMBRE DEL CLIENTE],

Vuelvo sobre la factura [N° DE FACTURA] por [MONTO], que venció el [FECHA DE VENCIMIENTO] y ya lleva una semana de atraso.

¿Me podés confirmar una fecha de pago antes del viernes? Te la adjunto de nuevo.

Si hay algún problema con la factura o con el trabajo entregado, decímelo ahora así lo resolvemos rápido. Prefiero arreglarlo antes que dejarlo estirar.

Saludos,
[TU NOMBRE]`,
    tips: [
      "Poné los días de atraso en el asunto: es un dato objetivo y se abre.",
      "Pedí un plazo concreto para la respuesta, no solo para el pago.",
      "Invitá a plantear problemas temprano: un reclamo al día 7 se resuelve más fácil que al día 45.",
    ],
  },
  {
    slug: "mail-firme-para-cobrar-factura",
    lang: "es",
    alt: "firm-payment-request-email",
    title: "Mail firme para cobrar una factura atrasada",
    description: "Cuando la amabilidad no alcanza: un pedido de pago firme que pausa el trabajo hasta regularizar, sin romper la relación.",
    whenToSend: "Alrededor de los 14 días de atraso, después de dos recordatorios sin respuesta.",
    subject: "Factura [N° DE FACTURA] ([MONTO]) vencida: necesito respuesta",
    body: `Hola [NOMBRE DEL CLIENTE],

La factura [N° DE FACTURA] por [MONTO] ya lleva dos semanas vencida (venció el [FECHA DE VENCIMIENTO]) y no recibí el pago ni respuesta a mis dos mensajes anteriores.

Te pido que gestiones el pago dentro de los próximos 7 días o me confirmes una fecha concreta. Hasta que se regularice el saldo, pauso los trabajos y entregas nuevas de la cuenta.

Si te sirve pagarlo en cuotas, lo charlamos: respondeme hoy y armamos un cronograma.

Saludos,
[TU NOMBRE]`,
    tips: [
      "Pausar el trabajo es tu mejor herramienta legítima. Usala antes que cualquier amenaza.",
      "Ofrecer cuotas le da al cliente con problemas de caja una forma de decir que sí.",
      "Mantenelo corto: los mails largos suenan ansiosos; los cortos, seguros.",
    ],
  },
  {
    slug: "ultimo-aviso-antes-de-acciones-legales",
    lang: "es",
    alt: "final-notice-before-collections",
    title: "Último aviso de pago antes de acciones legales",
    description: "Plantilla de último aviso para facturas con 30+ días de atraso. Plazo claro y consecuencias concretas, sin amenazas vacías.",
    whenToSend: "Con 30 días o más de atraso, después de al menos tres recordatorios documentados.",
    subject: "Último aviso: factura [N° DE FACTURA] por [MONTO]",
    body: `Hola [NOMBRE DEL CLIENTE],

Este es mi último aviso por la factura [N° DE FACTURA] por [MONTO], vencida el [FECHA DE VENCIMIENTO] y con [DÍAS] días de atraso. Te escribí el [FECHA 1], el [FECHA 2] y el [FECHA 3] sin obtener una solución.

Si no recibo el pago total antes del [PLAZO — 7 días desde hoy], voy a avanzar con las vías formales de cobro, que pueden incluir:

• aplicar el recargo por mora previsto en nuestro acuerdo,
• enviar una carta documento, y/o
• iniciar una gestión de cobro judicial o extrajudicial.

Prefiero resolverlo directamente con vos. Por favor, aboná el saldo o escribime antes del plazo para acordar un plan de pagos.

Saludos,
[TU NOMBRE]`,
    tips: [
      "Mencioná solo consecuencias que realmente estés dispuesto a ejecutar.",
      "Listá las fechas de los avisos anteriores: deja constancia del seguimiento.",
      "Si el monto lo justifica, mandalo también como carta firmada en PDF.",
    ],
  },
  {
    slug: "aviso-recargo-por-mora",
    lang: "es",
    alt: "late-payment-fee-notice-email",
    title: "Aviso de recargo por mora (plantilla de mail)",
    description: "Cómo avisarle a un cliente que se aplica un recargo por pago atrasado, con calma y citando la cláusula del contrato.",
    whenToSend: "Cuando tu contrato incluye una cláusula de recargo y ya pasó el período de gracia.",
    subject: "Recargo por mora aplicado: factura [N° DE FACTURA]",
    body: `Hola [NOMBRE DEL CLIENTE],

Como la factura [N° DE FACTURA] por [MONTO] sigue impaga a [DÍAS] días de su vencimiento ([FECHA DE VENCIMIENTO]), se aplicó un recargo por mora de [RECARGO — ej. 3% mensual], según la cláusula [X] de nuestro acuerdo.

El saldo actualizado es [NUEVO TOTAL]. Te adjunto la factura actualizada.

Si abonás el monto original completo antes del [FECHA], con gusto dejo sin efecto el recargo por única vez.

Gracias,
[TU NOMBRE]`,
    tips: [
      "Cobrá solo los recargos que tu contrato permite, y revisá los límites legales de tu país.",
      "Ofrecer bonificar el recargo por pago rápido suele funcionar mejor que el recargo en sí.",
      "Citá el número exacto de cláusula para que no quede en discusión.",
    ],
  },
];

export const getTemplate = (slug: string) => templates.find((t) => t.slug === slug);
