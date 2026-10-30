import type { Template } from "./templates";

export const longtail: Template[] = [
{
  "slug": "overdue-invoice-email-template",
  "lang": "en",
  "alt": "plantilla-email-factura-vencida",
  "longtail": true,
  "name": "Overdue invoice email",
  "title": "Overdue Invoice Email Template (Copy and Send Today)",
  "description": "A ready-to-send overdue invoice email: subject line, full body, a shorter variant, and the mistakes that make clients ignore it.",
  "intro": "An invoice is overdue the day after its due date. This is the email to send once it is clearly late and the polite nudge has not worked: short, specific, and built so the client can pay or reply in under a minute.",
  "whenToSend": "Send it 5 to 10 days after the due date, when one reminder has gone unanswered or there was no reminder at all. Before that, a friendly nudge is enough. After 14 days, move to a firm request with a deadline.",
  "subject": "Invoice [INVOICE #] is overdue: [AMOUNT]",
  "body": "Hi [CLIENT NAME],\n\nInvoice [INVOICE #] for [AMOUNT] was due on [DUE DATE] and is now [X] days overdue.\n\nTo make it easy, here is everything in one place:\n\nAmount: [AMOUNT]\nReference: [INVOICE #]\nPay to: [BANK DETAILS / PAYMENT LINK]\n\nCould you confirm the date the payment will go out? If something on the invoice is holding it up, tell me what it is and I'll fix it today.\n\nThanks,\n[YOUR NAME]",
  "tips": [
    "Ask one question only: the payment date.",
    "Send it Tuesday to Thursday morning, when inboxes are being worked.",
    "Log the date you sent it. You will reference it in the next email."
  ],
  "variant": {
    "label": "Three-line version for clients who pay late but always pay",
    "subject": "Overdue: invoice [INVOICE #]",
    "body": "Hi [CLIENT NAME],\n\nQuick flag: invoice [INVOICE #] ([AMOUNT]) was due [DUE DATE]. Payment link: [LINK].\n\nWhat date should I expect it?\n\n[YOUR NAME]"
  },
  "mistakes": [
    "Attaching the invoice and writing \"see attached\". Put the amount, reference and payment details in the body so nobody has to open a file.",
    "Asking \"did you get my invoice?\". It invites \"no\" or silence. Ask for a payment date instead.",
    "Sending it to the person you worked with when someone else pays. Copy accounts payable, or ask who handles payments.",
    "Apologizing for asking. You delivered the work; the invoice is a normal business document."
  ],
  "faq": [
    [
      "How many days after the due date is an invoice overdue?",
      "Technically one day. In practice, wait 3 days for a friendly reminder and use this overdue email from about day 7."
    ],
    [
      "Should I add a late fee in the first overdue email?",
      "Only mention it if your contract or invoice already states one. Introducing a fee for the first time in a reminder is hard to enforce and sours the relationship."
    ],
    [
      "What if the client replies with a date and then misses it?",
      "Reply the day after the missed date, quote their own date back, and move to the firm request template."
    ]
  ],
  "stage": 7
},
{
  "slug": "payment-reminder-email-after-30-days",
  "lang": "en",
  "alt": "recordatorio-de-pago-30-dias",
  "longtail": true,
  "name": "Reminder after 30 days",
  "title": "Payment Reminder Email After 30 Days Overdue (Template)",
  "description": "What to send when an invoice is 30 days past due: a template with a fixed deadline, the reminder history, and the next step stated plainly.",
  "intro": "At 30 days overdue, another soft reminder teaches the client that waiting works. This email changes the register: it lists what you already sent, sets one fixed date, and says what happens if that date passes.",
  "whenToSend": "On day 30 after the due date, after at least two earlier reminders. If you have sent nothing so far, send the overdue invoice email first; jumping straight to this one reads as hostile.",
  "subject": "Invoice [INVOICE #]: 30 days overdue, payment needed by [DATE]",
  "body": "Hi [CLIENT NAME],\n\nInvoice [INVOICE #] for [AMOUNT] is now 30 days past its due date of [DUE DATE].\n\nI wrote about it on [DATE 1], [DATE 2] and [DATE 3] and have not received payment or a payment date.\n\nI need the full [AMOUNT] by [DATE, 7 DAYS FROM NOW]. Payment details:\n\nPay to: [BANK DETAILS / PAYMENT LINK]\nReference: [INVOICE #]\n\nIf it is not received by then, I will [CHARGE THE LATE FEE IN SECTION X / PAUSE ALL WORK / START A FORMAL CLAIM]. I'd rather not, so if there is a problem, call me at [PHONE] before that date.\n\n[YOUR NAME]",
  "tips": [
    "List the dates of earlier reminders. It shows a paper trail without saying so.",
    "Offer a phone call. Some clients answer the phone and not email.",
    "Keep it under 150 words."
  ],
  "variant": {
    "label": "For a client you want to keep",
    "subject": "Invoice [INVOICE #]: can we settle this by [DATE]?",
    "body": "Hi [CLIENT NAME],\n\nInvoice [INVOICE #] ([AMOUNT]) is 30 days overdue and I want to close it out without it affecting our work together.\n\nCan you pay by [DATE]? If the full amount is hard right now, I can accept two payments: [HALF] by [DATE] and the rest by [DATE + 14].\n\nJust reply with which option works.\n\n[YOUR NAME]"
  },
  "mistakes": [
    "Threatening something you will not do. Name only the step you will actually take.",
    "Leaving the deadline open (\"as soon as possible\"). A calendar date is what makes the email work.",
    "Sending it to the same single contact who has gone silent. Add their manager or the finance inbox.",
    "Removing the payment details because \"they already have them\". Every email should be payable on its own."
  ],
  "faq": [
    [
      "Is 30 days overdue a lot?",
      "Yes. Most invoices that are paid late are paid within two weeks of the due date. At 30 days it needs a fixed deadline and a consequence."
    ],
    [
      "Can I stop work at 30 days?",
      "If your contract allows suspension for non-payment, yes, and say so in this email. If it does not, check the contract before stating it."
    ],
    [
      "Should I send a formal letter instead?",
      "Send this email first. If the deadline passes, a signed final notice letter is the next step."
    ]
  ],
  "stage": 30
},
{
  "slug": "final-notice-before-collections-email",
  "lang": "en",
  "alt": "ultimo-aviso-antes-de-accion-legal",
  "longtail": true,
  "name": "Collections handoff notice",
  "title": "Final Notice Before Collections Email (Handoff Template)",
  "description": "The last email before you hand an unpaid invoice to a collections agency or small claims: exact wording, a shorter variant and what not to say.",
  "intro": "This is not a reminder. It is the notice you send once you have decided to escalate, so the client hears it from you first and gets one clean last chance. Send it only when you are prepared to follow through.",
  "whenToSend": "After day 30, once earlier reminders and a firm deadline have passed with no payment and no reply. You should already know which agency or court process you will use and what it costs.",
  "subject": "Final notice: invoice [INVOICE #] will be referred on [DATE]",
  "body": "Dear [CLIENT NAME],\n\nThis is a final notice regarding invoice [INVOICE #] for [AMOUNT], due on [DUE DATE].\n\nReminders were sent on [DATE 1], [DATE 2] and [DATE 3]. To date I have received neither payment nor a proposed payment date.\n\nIf the full balance of [AMOUNT] is not received by [DATE, 7 TO 10 DAYS FROM NOW], the debt will be referred to [COLLECTIONS AGENCY / SMALL CLAIMS COURT] on the following business day. Any collection costs allowed under our agreement will be added to the balance.\n\nPayment details:\n[BANK DETAILS / PAYMENT LINK]\nReference: [INVOICE #]\n\nIf you believe this amount is not owed, reply in writing before that date with the reason.\n\n[YOUR NAME]\n[BUSINESS NAME, ADDRESS]",
  "tips": [
    "Send it as a PDF letter too, signed, from your business email.",
    "Keep a copy of every reminder in one folder before you send this.",
    "Check local rules on collection costs and debt notices; they vary by country and state."
  ],
  "variant": {
    "label": "Shorter, for small balances",
    "subject": "Final notice: invoice [INVOICE #]",
    "body": "[CLIENT NAME],\n\nInvoice [INVOICE #] ([AMOUNT]) remains unpaid after three reminders. Unless it is paid by [DATE], I will file a small claim for the amount plus allowable costs.\n\nPayment: [LINK]\n\n[YOUR NAME]"
  },
  "mistakes": [
    "Sending it as a bluff. If the date passes and nothing happens, every future invoice gets paid later.",
    "Adding fees or interest your contract does not allow.",
    "Insulting or emotional language. This email may end up in front of a third party; write it so it reads well there.",
    "Discussing the debt with anyone at the client company who is not responsible for it."
  ],
  "faq": [
    [
      "What is the difference between a final notice and a collections letter?",
      "The final notice comes from you and gives a last deadline. A collections letter comes from the agency or lawyer after referral."
    ],
    [
      "How long should the final deadline be?",
      "Seven to ten days is common and reasonable. Shorter can look like pressure; longer loses urgency."
    ],
    [
      "Is this legal advice?",
      "No. It is a template. For large amounts, ask a lawyer in your jurisdiction before referring a debt."
    ]
  ],
  "stage": 30
},
{
  "slug": "polite-payment-reminder-for-freelancers",
  "lang": "en",
  "alt": "recordatorio-de-pago-amable-freelancer",
  "longtail": true,
  "name": "Polite reminder for freelancers",
  "title": "Polite Payment Reminder for Freelancers (Email Template)",
  "description": "A polite payment reminder written for freelancers: warm without being apologetic, with payment details in the body and a variant for retainer clients.",
  "intro": "Freelancers usually wait too long to send the first reminder because it feels awkward with a client they like. Polite does not mean vague. This template stays friendly and still makes paying the easiest thing the client can do.",
  "whenToSend": "Three days after the due date. If you have a good relationship, you can also send it on the due date itself as a heads up.",
  "subject": "Quick reminder: invoice [INVOICE #]",
  "body": "Hi [CLIENT NAME],\n\nHope the [PROJECT] launch is going well.\n\nA quick reminder that invoice [INVOICE #] for [AMOUNT] was due on [DUE DATE]. It may simply have slipped through, so here are the details:\n\nAmount: [AMOUNT]\nPay to: [BANK DETAILS / PAYMENT LINK]\nReference: [INVOICE #]\n\nIf it's already on its way, just let me know the date and ignore this.\n\nThanks so much,\n[YOUR NAME]",
  "tips": [
    "A one-line personal opener is fine; keep it to one line.",
    "Send from the same thread as the original invoice so the history is attached.",
    "Set a calendar reminder for day 7 when you send this."
  ],
  "variant": {
    "label": "For monthly retainer clients",
    "subject": "Retainer invoice for [MONTH]",
    "body": "Hi [CLIENT NAME],\n\nThe [MONTH] retainer invoice ([INVOICE #], [AMOUNT]) was due on [DUE DATE] and I don't see it yet. Same details as always: [PAYMENT LINK].\n\nCould you check it's in this week's payment run?\n\nThanks,\n[YOUR NAME]"
  },
  "mistakes": [
    "\"Sorry to bother you\". You are not bothering anyone; drop it.",
    "Burying the amount in the third paragraph. It should be visible without scrolling.",
    "Adding a long update about the project. Keep the reminder about the invoice.",
    "Waiting a month because the relationship is good. Good clients appreciate an early nudge."
  ],
  "faq": [
    [
      "Is it rude to send a payment reminder?",
      "No. It is standard business practice, and most clients pay late because of admin, not intent."
    ],
    [
      "How soon can a freelancer send a reminder?",
      "On the due date or up to three days after. Sending one before the due date is also fine for new clients."
    ],
    [
      "What if I'm friends with the client?",
      "Use this template anyway. Keeping it businesslike protects the friendship."
    ]
  ],
  "stage": 3
},
{
  "slug": "how-to-ask-a-client-for-payment",
  "lang": "en",
  "alt": "como-cobrarle-a-un-cliente",
  "longtail": true,
  "name": "How to ask for payment",
  "title": "How to Ask a Client for Payment (Without Making It Awkward)",
  "description": "A practical guide to asking a client for payment: what to say, when, and in which channel, with a ready email template and a phone script.",
  "intro": "Asking for money is a process, not a single message. You make it easy before the work starts, you send a clear invoice, and you follow up on fixed days. This page gives you the words for each step and an email you can send now.",
  "whenToSend": "Use the email below as soon as an invoice is due or past due. The steps before it (terms in writing, deposit, clear invoice) belong at the start of the project.",
  "subject": "Payment for [PROJECT]: invoice [INVOICE #]",
  "body": "Hi [CLIENT NAME],\n\nThe [PROJECT] work is complete and invoice [INVOICE #] for [AMOUNT] was due on [DUE DATE].\n\nYou can pay here: [PAYMENT LINK / BANK DETAILS], reference [INVOICE #].\n\nCould you let me know when it's scheduled? If you need anything from me for your accounts team (a PO number, a W-9, a different invoice format), tell me and I'll send it today.\n\nBest,\n[YOUR NAME]",
  "tips": [
    "Ask for a 30 to 50% deposit on new clients.",
    "Find out who actually pays invoices before you send the first one.",
    "Confirm any promised date by email the same day."
  ],
  "variant": {
    "label": "Phone script",
    "subject": "Call script (not an email)",
    "body": "\"Hi [NAME], it's [YOUR NAME]. I'm calling about invoice [INVOICE #] for [AMOUNT], which was due on [DATE]. I wanted to check whether anything is holding it up on your side.\"\n\n(Let them answer. Then:)\n\n\"Great. What date can I expect the payment? I'll note it down.\"\n\n(Close with:) \"Thanks. I'll send you a quick email confirming that date.\""
  },
  "mistakes": [
    "Starting work without written payment terms. Agree on amount, due date and late fee before the first deliverable.",
    "Sending a vague message like \"just checking in\". Name the invoice, the amount and the ask.",
    "Negotiating the price after the fact. If the client disputes scope, handle that separately from the overdue amount.",
    "Only following up when you remember. Pick fixed days (3, 7, 14, 30) and stick to them."
  ],
  "faq": [
    [
      "What is the best way to ask a client for payment?",
      "In writing, with the invoice number, amount, due date and a payment link in the message, ending with one question: when will it be paid."
    ],
    [
      "Should I call or email?",
      "Email first so there is a record. Call if two emails go unanswered, then confirm the call by email."
    ],
    [
      "How do I ask for payment upfront?",
      "State it in your proposal: a deposit is due before work starts, and the start date is set when it arrives."
    ]
  ]
},
{
  "slug": "second-payment-reminder-email",
  "lang": "en",
  "alt": "segundo-recordatorio-de-pago",
  "longtail": true,
  "name": "Second reminder",
  "title": "Second Payment Reminder Email (Template and Timing)",
  "description": "The second payment reminder: what changes from the first one, a template that asks for a written payment date, and a variant for when the first got no reply.",
  "intro": "The first reminder assumes an oversight. The second one can't, but it shouldn't accuse either. Its job is narrower: get a payment date in writing. Once you have a date, every later step becomes simple.",
  "whenToSend": "Seven days after the due date, or four days after the first reminder if it got no reply.",
  "subject": "Second reminder: invoice [INVOICE #], [X] days overdue",
  "body": "Hi [CLIENT NAME],\n\nFollowing up on my message from [DATE OF FIRST REMINDER]. Invoice [INVOICE #] for [AMOUNT] is now [X] days overdue and I haven't had a reply.\n\nCould you reply with the date the payment will be made? That's all I need for now.\n\nDetails again:\nAmount: [AMOUNT]\nPay to: [BANK DETAILS / PAYMENT LINK]\nReference: [INVOICE #]\n\nThanks,\n[YOUR NAME]",
  "tips": [
    "Promise not to chase before their date. It makes it easy to give you one.",
    "If the client is a company, copy the accounts payable address.",
    "Keep the subject line specific so it is searchable."
  ],
  "variant": {
    "label": "When the first reminder got a vague reply",
    "subject": "Re: invoice [INVOICE #]",
    "body": "Hi [CLIENT NAME],\n\nThanks for saying you'd look into it last week. I still don't see the payment for invoice [INVOICE #] ([AMOUNT]).\n\nCan you give me a specific date? I'll put it in my calendar and won't chase before then.\n\n[YOUR NAME]"
  },
  "mistakes": [
    "Copying the first reminder word for word. Reference it by date instead.",
    "Adding pressure too early. Save deadlines and fees for day 14.",
    "Forgetting to reply in the same thread, so the first reminder is lost.",
    "Accepting \"soon\" or \"this week\" as an answer. Ask for the day."
  ],
  "faq": [
    [
      "How long should I wait between payment reminders?",
      "Around four to seven days early on: day 3, day 7, day 14 and day 30 after the due date is a common schedule."
    ],
    [
      "What should a second reminder say?",
      "Reference the first reminder, state how overdue the invoice is, repeat the payment details and ask for a payment date."
    ]
  ],
  "stage": 7
},
{
  "slug": "invoice-past-due-email-to-client",
  "lang": "en",
  "alt": "aviso-de-factura-vencida",
  "longtail": true,
  "name": "Past due notice",
  "title": "Invoice Past Due Email to Client (Template)",
  "description": "A past due invoice email for clients who have gone quiet: clear amount, days past due, payment details and a deadline, plus a version for partial payments.",
  "intro": "\"Past due\" is the phrase accounts payable teams recognise and route. This email uses it on purpose, states the facts in the first two lines and gives a deadline, so it gets acted on rather than filed.",
  "whenToSend": "Around 14 days past the due date, after a reminder and a follow-up. It also works as the first message to a large company's AP inbox at any point after the due date.",
  "subject": "Past due: invoice [INVOICE #] ([AMOUNT], due [DUE DATE])",
  "body": "Hello,\n\nInvoice [INVOICE #] for [AMOUNT] is past due. It was due on [DUE DATE], [X] days ago.\n\nPlease arrange payment by [DATE, 5 BUSINESS DAYS FROM NOW]:\n\nPay to: [BANK DETAILS / PAYMENT LINK]\nReference: [INVOICE #]\nPO / order number: [PO, IF ANY]\n\nIf the invoice is on hold, please tell me what is needed to release it. A copy is attached.\n\nRegards,\n[YOUR NAME]\n[BUSINESS NAME]",
  "tips": [
    "Ask your contact once for the AP email address and save it.",
    "Attach the invoice PDF again even if you sent it before.",
    "Use business days for deadlines when writing to companies."
  ],
  "variant": {
    "label": "When the client paid only part",
    "subject": "Past due balance: invoice [INVOICE #]",
    "body": "Hi [CLIENT NAME],\n\nThanks for the payment of [AMOUNT RECEIVED] on [DATE]. A balance of [REMAINING] on invoice [INVOICE #] is still past due.\n\nCould you pay the remaining [REMAINING] by [DATE]? Same details: [PAYMENT LINK].\n\n[YOUR NAME]"
  },
  "mistakes": [
    "Putting the key facts at the bottom. AP teams scan subject and first line only.",
    "Leaving out the PO number when the client uses them. Invoices without a PO often sit unpaid.",
    "Using a generic subject like \"Following up\".",
    "Sending it only to your contact when the company has a payables inbox."
  ],
  "faq": [
    [
      "What does past due mean on an invoice?",
      "The due date has passed and the balance has not been paid in full."
    ],
    [
      "What do I say to a client with a past due invoice?",
      "State the invoice number, amount and due date, give a payment deadline and the payment details, and ask what is needed if it is on hold."
    ]
  ],
  "stage": 14
},
{
  "slug": "late-payment-email-to-client",
  "lang": "en",
  "alt": "email-por-pago-atrasado",
  "longtail": true,
  "name": "Late payment email",
  "title": "Late Payment Email to Client: Template With Late Fee",
  "description": "An email for a client who is paying late, including how to mention a contractual late fee, a deadline, and a variant that pauses work.",
  "intro": "When a client keeps paying late, a reminder is not enough; the email needs to connect the delay to its consequence. This template applies your contract's late fee, offers a way to have it waived, and stays professional.",
  "whenToSend": "Day 14 after the due date, or immediately on any invoice for a client who has paid late before. Only reference a fee if your contract or invoice terms include one.",
  "subject": "Invoice [INVOICE #]: late payment, fee applies from [DATE]",
  "body": "Hi [CLIENT NAME],\n\nInvoice [INVOICE #] for [AMOUNT] is [X] days late. I've written on [DATE 1] and [DATE 2] without a payment date.\n\nAs set out in section [X] of our agreement, a late fee of [RATE] applies to overdue balances from today. If the full [AMOUNT] arrives by [DATE, 5 DAYS FROM NOW], I'll waive it.\n\nPay to: [BANK DETAILS / PAYMENT LINK]\nReference: [INVOICE #]\n\n[YOUR NAME]",
  "tips": [
    "Quote the contract section by number.",
    "Make the waiver deadline short: five days.",
    "Put late fee terms on every future invoice."
  ],
  "variant": {
    "label": "Pausing work instead of a fee",
    "subject": "Invoice [INVOICE #]: work paused until payment",
    "body": "Hi [CLIENT NAME],\n\nInvoice [INVOICE #] ([AMOUNT]) is [X] days late. Under our agreement, I'm pausing new work on [PROJECT] from [DATE] until it's paid.\n\nAs soon as the payment is in, I'll pick up exactly where we left off.\n\nPayment: [LINK]\n\n[YOUR NAME]"
  },
  "mistakes": [
    "Charging a fee the contract does not mention.",
    "Waiving the fee before the client asks. The waiver is your leverage for a fast payment.",
    "Pausing work without telling the client in writing.",
    "Writing in anger after a frustrating call. Sleep on it and send in the morning."
  ],
  "faq": [
    [
      "Can I charge a late payment fee?",
      "If your contract or accepted invoice terms state one, generally yes, within your local legal limits. If not, agree it for future work."
    ],
    [
      "How do I tell a client their payment is late?",
      "State how many days late it is, reference previous reminders, apply the agreed consequence and give a short deadline."
    ]
  ],
  "stage": 14
},
{
  "slug": "payment-reminder-email-sample",
  "lang": "en",
  "alt": "recordatorio-de-pago-por-email",
  "longtail": true,
  "name": "Reminder samples",
  "title": "Payment Reminder Email Samples: 4 Examples by Stage",
  "description": "Four sample payment reminder emails for day 3, 7, 14 and 30 after the due date, with subjects, so you can see how the tone escalates.",
  "intro": "Seeing all four stages side by side makes the escalation clear: each email keeps the same facts and payment details but asks for something firmer. Use the full template for the first email and the samples below as models for the rest.",
  "whenToSend": "Day 3, 7, 14 and 30 after the due date, stopping as soon as the payment arrives.",
  "subject": "Invoice [INVOICE #]: payment reminder",
  "body": "DAY 3, subject: Invoice [INVOICE #]: payment reminder\n\nHi [CLIENT NAME], invoice [INVOICE #] for [AMOUNT] was due on [DUE DATE]. Details: [PAYMENT LINK]. If it's already been sent, just tell me the date. Thanks, [YOUR NAME]\n\nDAY 7, subject: Invoice [INVOICE #]: 7 days overdue\n\nHi [CLIENT NAME], following up on [DATE]. Invoice [INVOICE #] is now 7 days overdue. Could you reply with the payment date? [YOUR NAME]\n\nDAY 14, subject: Invoice [INVOICE #]: 14 days overdue, late fee applies\n\nHi [CLIENT NAME], under section [X] a late fee of [RATE] applies from today. If [AMOUNT] arrives by [DATE], I'll waive it. [YOUR NAME]\n\nDAY 30, subject: Final notice: invoice [INVOICE #]\n\n[CLIENT NAME], after reminders on [DATES], I need [AMOUNT] by [DATE]. Otherwise I will [NEXT STEP]. [YOUR NAME]",
  "tips": [
    "Use the generator below to get all four with real dates.",
    "Same thread, new subject line, so the history travels with each email.",
    "Stop the sequence the moment they pay, and send a thank you."
  ],
  "variant": {
    "label": "One-line SMS or chat sample",
    "subject": "Text message (not an email)",
    "body": "Hi [NAME], [YOUR NAME] here. Invoice [INVOICE #] for [AMOUNT] was due [DATE]. Payment link: [LINK]. When should I expect it?"
  },
  "mistakes": [
    "Using the same tone at day 30 as at day 3.",
    "Changing the amount or details between emails, which creates confusion.",
    "Skipping stages and jumping straight to a final notice.",
    "Continuing to send reminders after a promised date without referencing it."
  ],
  "faq": [
    [
      "What is a good payment reminder email example?",
      "One that names the invoice, amount and due date in the first line, includes payment details, and asks one clear question."
    ],
    [
      "How many payment reminders should I send?",
      "Usually four over 30 days. After that, a formal final notice letter."
    ]
  ]
},
{
  "slug": "friendly-reminder-invoice-email",
  "lang": "en",
  "alt": "recordatorio-amable-de-factura",
  "longtail": true,
  "name": "Friendly reminder",
  "title": "Friendly Reminder Invoice Email (Before or On the Due Date)",
  "description": "A friendly invoice reminder to send before or on the due date: short, warm, and designed to get paid on time without chasing later.",
  "intro": "The cheapest reminder is the one sent before the invoice is late. A friendly heads up two or three days before the due date catches most \"forgot to approve it\" delays while there is still time to fix them.",
  "whenToSend": "Two to three days before the due date, or on the due date itself. Skip it for clients who always pay on time.",
  "subject": "Friendly reminder: invoice [INVOICE #] due [DUE DATE]",
  "body": "Hi [CLIENT NAME],\n\nA friendly heads up that invoice [INVOICE #] for [AMOUNT] is due on [DUE DATE].\n\nIn case it's handy:\nPay to: [BANK DETAILS / PAYMENT LINK]\nReference: [INVOICE #]\n\nLet me know if you need anything from me to get it approved.\n\nThanks,\n[YOUR NAME]",
  "tips": [
    "Schedule it when you send the invoice, so you don't have to remember.",
    "Most invoicing tools can send this automatically; this text works there too.",
    "Mention approvals: that's where most delays happen."
  ],
  "variant": {
    "label": "On the due date",
    "subject": "Invoice [INVOICE #] is due today",
    "body": "Hi [CLIENT NAME],\n\nJust a note that invoice [INVOICE #] ([AMOUNT]) is due today. Payment link: [LINK].\n\nThanks, and have a good week!\n[YOUR NAME]"
  },
  "mistakes": [
    "Calling it a \"friendly reminder\" when it's already 30 days late. Match the label to the stage.",
    "Sending it to clients with automatic payment, which looks disorganised.",
    "Leaving out the payment link.",
    "Adding a late fee warning in a pre-due-date message."
  ],
  "faq": [
    [
      "How do you write a friendly invoice reminder?",
      "Keep it to three or four lines: invoice number, amount, due date, payment link, and an offer to help with approval."
    ],
    [
      "Is it OK to remind a client before the due date?",
      "Yes. A short heads up a few days before is common and helps the invoice get into the payment run."
    ]
  ]
},
{
  "slug": "client-not-paying-invoice-what-to-do",
  "lang": "en",
  "alt": "cliente-no-paga-que-hacer",
  "longtail": true,
  "name": "Client not paying",
  "title": "Client Not Paying an Invoice? What to Do, Step by Step",
  "description": "A step-by-step plan for when a client isn't paying: what to check, which emails to send on which day, when to stop work, and when to escalate.",
  "intro": "When a client isn't paying, the worst move is to wait and hope. Work through a fixed sequence: check the basics, ask for a date, apply your contract terms, then escalate formally. Here is the order, with the email for the step most people skip.",
  "whenToSend": "Start the day after the due date. Step 1 (check the invoice reached the right person) takes five minutes and solves a surprising number of cases.",
  "subject": "Invoice [INVOICE #]: who handles payment on your side?",
  "body": "Hi [CLIENT NAME],\n\nInvoice [INVOICE #] for [AMOUNT] was due on [DUE DATE] and hasn't been paid yet.\n\nBefore I follow up further, I want to make sure it reached the right place. Who handles supplier payments on your side, and do they need anything from me (PO number, tax form, a different format)?\n\nPayment details, for reference:\n[BANK DETAILS / PAYMENT LINK], reference [INVOICE #].\n\nThanks,\n[YOUR NAME]",
  "tips": [
    "Keep every reminder in one folder with dates.",
    "Decide in advance the amount below which you'll write it off.",
    "For future clients: deposit up front and late fee in the contract."
  ],
  "variant": {
    "label": "The full escalation plan",
    "subject": "Steps (not an email)",
    "body": "1. Day 1: confirm the invoice reached the payer (this email).\n2. Day 3: friendly reminder with payment details.\n3. Day 7: ask for a payment date in writing.\n4. Day 14: apply the late fee in your contract and pause new work.\n5. Day 30: final notice with a fixed deadline and next step.\n6. After the deadline: collections agency, small claims, or write it off, depending on the amount and cost."
  },
  "mistakes": [
    "Continuing to deliver new work while the old invoice is unpaid.",
    "Arguing in a long email thread. Move to a call, then confirm by email.",
    "Escalating to a lawyer for an amount smaller than the legal cost.",
    "Posting about the client publicly. It can expose you to defamation claims and rarely gets you paid."
  ],
  "faq": [
    [
      "What can I do if a client doesn't pay an invoice?",
      "Follow up on a fixed schedule, apply your contract terms (late fee, pausing work), send a final notice, and then use a collections agency or small claims court if the amount justifies it."
    ],
    [
      "How long should I wait before taking action?",
      "Begin reminders on day 1 to 3. Consider formal action after a final notice deadline, typically around 30 to 45 days past due."
    ],
    [
      "Can I keep the work if the client doesn't pay?",
      "It depends on your contract. Many freelance contracts transfer ownership only on full payment; check yours."
    ]
  ]
},
{
  "slug": "payment-plan-request-email",
  "lang": "en",
  "alt": "propuesta-de-plan-de-pagos",
  "longtail": true,
  "name": "Payment plan offer",
  "title": "Payment Plan Email: Offer Instalments on an Overdue Invoice",
  "description": "An email offering a client a payment plan on an overdue invoice: clear instalments, dates, and what happens if one is missed.",
  "intro": "If a client truly can't pay all at once, a written instalment plan gets you paid faster than a standoff. The key is to make the plan specific and to state, in the same email, what happens if a payment is missed.",
  "whenToSend": "When a client says cash flow is the problem, usually between day 7 and day 30. Don't offer it unprompted in the first reminder.",
  "subject": "Invoice [INVOICE #]: payment plan",
  "body": "Hi [CLIENT NAME],\n\nThanks for being upfront about cash flow. To settle invoice [INVOICE #] ([AMOUNT]), I can accept it in [2 / 3] payments:\n\n1. [AMOUNT 1] by [DATE 1]\n2. [AMOUNT 2] by [DATE 2]\n3. [AMOUNT 3] by [DATE 3]\n\nSame payment details: [BANK DETAILS / PAYMENT LINK], reference [INVOICE #].\n\nIf any instalment is more than [3] days late, the full remaining balance becomes due immediately.\n\nCould you reply \"agreed\" to confirm?\n\n[YOUR NAME]",
  "tips": [
    "Get a written \"agreed\" reply. That is your record.",
    "Make the first instalment the largest.",
    "Put each instalment date in your calendar."
  ],
  "variant": {
    "label": "Two-payment version",
    "subject": "Invoice [INVOICE #]: two payments",
    "body": "Hi [CLIENT NAME],\n\nHappy to split invoice [INVOICE #]: [HALF] by [DATE] and [HALF] by [DATE + 14 DAYS]. If either is missed, the balance is due at once.\n\nReply \"agreed\" and we're set.\n\n[YOUR NAME]"
  },
  "mistakes": [
    "Agreeing on a plan by phone and never putting it in writing.",
    "Open-ended plans (\"pay what you can\").",
    "Restarting work at full pace before the first instalment arrives.",
    "No consequence for a missed instalment."
  ],
  "faq": [
    [
      "Should I offer a payment plan to a late client?",
      "If the client has explained a genuine cash flow problem and the alternative is a long dispute, yes. Keep it short: two or three payments."
    ],
    [
      "How do I word a payment plan email?",
      "List each amount and date, repeat the payment details, state what happens if one is missed, and ask for written confirmation."
    ]
  ],
  "stage": 14
},
{
  "slug": "reply-when-client-says-payment-is-coming",
  "lang": "en",
  "alt": "respuesta-cliente-dice-que-ya-paga",
  "longtail": true,
  "name": "Reply to \"it's coming\"",
  "title": "What to Reply When a Client Says Payment Is Coming",
  "description": "How to answer \"the payment is on its way\" so it actually arrives: confirm a date in writing and set up the next follow-up politely.",
  "intro": "\"It's being processed\" and \"should be with you soon\" are the most common replies to a reminder, and the most common reason invoices drift another month. The right reply is short and friendly and turns the vague promise into a date.",
  "whenToSend": "The same day the client replies with a vague promise to pay.",
  "subject": "Re: invoice [INVOICE #]",
  "body": "Hi [CLIENT NAME],\n\nThanks for the update, much appreciated.\n\nSo I can mark it on my side, what date is the payment scheduled for? If you can share the transfer reference once it's sent, even better.\n\nI'll check on [DATE] and only follow up if I don't see it by then.\n\nThanks,\n[YOUR NAME]",
  "tips": [
    "Quote their own words and date back in the follow-up.",
    "Transfer references let you trace a payment with your bank.",
    "Add a calendar reminder for the day after their date."
  ],
  "variant": {
    "label": "When the promised date has passed",
    "subject": "Re: invoice [INVOICE #]",
    "body": "Hi [CLIENT NAME],\n\nYou mentioned the payment for invoice [INVOICE #] would go out on [THEIR DATE]. I don't see it yet.\n\nCould you check with your finance team and send me the transfer reference or the new date?\n\nThanks,\n[YOUR NAME]"
  },
  "mistakes": [
    "Replying \"no worries, whenever you can\". It removes all urgency.",
    "Not replying at all and waiting.",
    "Asking for proof aggressively. A transfer reference is a normal request.",
    "Forgetting to follow up on the promised date."
  ],
  "faq": [
    [
      "What do you say when a client says the payment is being processed?",
      "Thank them and ask for the scheduled date and, once sent, the transfer reference."
    ],
    [
      "How long should I wait after a client says they paid?",
      "International transfers can take 1 to 5 business days. Ask for the reference, then check with your bank after that window."
    ]
  ],
  "stage": 7
},
{
  "slug": "demand-letter-for-unpaid-invoice",
  "lang": "en",
  "alt": "carta-de-cobro",
  "longtail": true,
  "name": "Demand letter",
  "title": "Demand Letter for an Unpaid Invoice (Freelancer Template)",
  "description": "A formal demand letter for an unpaid invoice: the structure, the full wording, and what to include so it holds up if you go to small claims.",
  "intro": "A demand letter is the formal, signed version of your last email. It is often required, or at least expected, before small claims court. Its value is in the facts: dates, amounts and documents, set out so a third party can follow them.",
  "whenToSend": "After the final notice deadline has passed, typically 30 to 45 days past due. Send it as a signed PDF by email and, if possible, by tracked post.",
  "subject": "Formal demand for payment: invoice [INVOICE #]",
  "body": "[YOUR NAME / BUSINESS NAME]\n[ADDRESS]\n[DATE]\n\nTo: [CLIENT LEGAL NAME]\n[CLIENT ADDRESS]\n\nRe: Formal demand for payment of invoice [INVOICE #]\n\nOn [CONTRACT DATE], we agreed that I would provide [SERVICES] for [AMOUNT], payable by [DUE DATE] (agreement attached).\n\nThe services were delivered on [DELIVERY DATE]. Invoice [INVOICE #] was issued on [INVOICE DATE]. Reminders were sent on [DATES]. The amount of [AMOUNT] remains unpaid.\n\nI demand payment of [AMOUNT] [PLUS LATE FEES OF X UNDER SECTION Y] by [DATE, 14 DAYS FROM NOW], to:\n[BANK DETAILS]\n\nIf payment is not received by that date, I intend to file a claim at [COURT / SMALL CLAIMS] without further notice, and to seek costs where permitted.\n\nSincerely,\n[SIGNATURE]\n[YOUR NAME]",
  "tips": [
    "Attach the contract, the invoice and a list of reminders.",
    "Use the client's legal company name, not the brand name.",
    "Check the small claims limit and filing fee in your area first."
  ],
  "variant": {
    "label": "Cover email to send with the letter",
    "subject": "Formal demand: invoice [INVOICE #]",
    "body": "Hello,\n\nPlease find attached a formal demand for payment of invoice [INVOICE #] ([AMOUNT]). The deadline for payment is [DATE].\n\n[YOUR NAME]"
  },
  "mistakes": [
    "Leaving out the dates. A demand letter is a timeline; without one it's just an angry email.",
    "Claiming amounts not in the contract.",
    "Sending it without keeping proof of delivery.",
    "Threatening criminal action over a civil debt."
  ],
  "faq": [
    [
      "What is a demand letter for unpaid invoices?",
      "A formal, signed letter setting out what is owed, why, and a final deadline before legal action."
    ],
    [
      "Do I need a lawyer to send a demand letter?",
      "No, you can send it yourself. A lawyer's letterhead can add weight for large amounts. This template is not legal advice."
    ]
  ],
  "stage": 30
},
{
  "slug": "payment-reminder-before-due-date",
  "lang": "en",
  "alt": "recordatorio-antes-del-vencimiento",
  "longtail": true,
  "name": "Before the due date",
  "title": "Payment Reminder Before the Due Date (Courtesy Email)",
  "description": "A courtesy email to send a few days before an invoice is due, with a variant for new clients on their first invoice.",
  "intro": "New clients pay late most often on their first invoice, because nobody has set you up as a supplier yet. A courtesy email a week before the due date flushes out missing forms and approvals while there is still time.",
  "whenToSend": "Five to seven days before the due date on a client's first invoice; two to three days before for regular clients who sometimes slip.",
  "subject": "Invoice [INVOICE #] due on [DUE DATE]: anything needed?",
  "body": "Hi [CLIENT NAME],\n\nInvoice [INVOICE #] for [AMOUNT] is due on [DUE DATE].\n\nAs this is our first invoice together, is there anything your accounts team needs to set me up as a supplier? (Tax form, bank verification, a PO number?) I'd rather sort it now than have the payment held up.\n\nPayment details: [BANK DETAILS / PAYMENT LINK], reference [INVOICE #].\n\nThanks,\n[YOUR NAME]",
  "tips": [
    "Ask about supplier onboarding before the first invoice if you can.",
    "Save the AP contact for next time.",
    "Note the client's payment run day (many pay once or twice a month)."
  ],
  "variant": {
    "label": "Regular client",
    "subject": "Invoice [INVOICE #] due [DUE DATE]",
    "body": "Hi [CLIENT NAME],\n\nA quick note that invoice [INVOICE #] ([AMOUNT]) is due on [DUE DATE]. Link: [LINK].\n\nThanks!\n[YOUR NAME]"
  },
  "mistakes": [
    "Sending a pre-due reminder that sounds like a past-due one.",
    "Asking for payment early. You're confirming the process, not changing terms.",
    "Forgetting the invoice number in the subject.",
    "Using it for every client every month; reserve it for new clients and slow payers."
  ],
  "faq": [
    [
      "Is it professional to send a reminder before an invoice is due?",
      "Yes, especially for a first invoice. Framing it as \"anything needed?\" keeps it helpful."
    ],
    [
      "How many days before the due date should I send it?",
      "Five to seven days for new clients, two to three for regular ones."
    ]
  ]
},
{
  "slug": "plantilla-email-factura-vencida",
  "lang": "es",
  "alt": "overdue-invoice-email-template",
  "longtail": true,
  "name": "Mail de factura vencida",
  "title": "Plantilla de email para factura vencida (lista para mandar)",
  "description": "Un mail para factura vencida listo para copiar: asunto, cuerpo completo, una versión corta y los errores que hacen que el cliente lo ignore.",
  "intro": "Una factura está vencida desde el día después del vencimiento. Este es el mail para cuando ya está claramente atrasada y el recordatorio amable no alcanzó: corto, concreto y armado para que el cliente pueda pagar o contestar en un minuto.",
  "whenToSend": "Entre 5 y 10 días después del vencimiento, cuando un recordatorio no tuvo respuesta o todavía no mandaste ninguno. Antes alcanza con un aviso amable. Después del día 14, pasá a un pedido firme con fecha límite.",
  "subject": "Factura [N.º] vencida: [MONTO]",
  "body": "Hola [NOMBRE],\n\nLa factura [N.º] por [MONTO] venció el [FECHA DE VENCIMIENTO] y lleva [X] días vencida.\n\nPara que sea fácil, te dejo todo junto:\n\nMonto: [MONTO]\nReferencia: [N.º DE FACTURA]\nDatos de pago: [CBU / ALIAS / LINK DE PAGO]\n\n¿Me confirmás qué día sale el pago? Si hay algo en la factura que lo está trabando, decime qué es y lo corrijo hoy.\n\nGracias,\n[TU NOMBRE]",
  "tips": [
    "Hacé una sola pregunta: la fecha de pago.",
    "Mandalo de martes a jueves a la mañana.",
    "Anotá el día que lo mandaste. Lo vas a citar en el próximo mail."
  ],
  "variant": {
    "label": "Versión de tres líneas para clientes que pagan tarde pero pagan",
    "subject": "Vencida: factura [N.º]",
    "body": "Hola [NOMBRE],\n\nTe aviso que la factura [N.º] ([MONTO]) venció el [FECHA]. Alias: [ALIAS].\n\n¿Qué día la puedo esperar?\n\n[TU NOMBRE]"
  },
  "mistakes": [
    "Adjuntar la factura y escribir \"te paso adjunto\". Poné monto, referencia y datos de pago en el cuerpo del mail.",
    "Preguntar \"¿te llegó la factura?\". Invita a un \"no\" o al silencio. Preguntá por la fecha de pago.",
    "Mandárselo a quien trabajó con vos cuando paga otra persona. Copiá a administración o preguntá quién paga.",
    "Pedir disculpas por cobrar. Hiciste el trabajo; la factura es un documento normal."
  ],
  "faq": [
    [
      "¿Cuándo se considera vencida una factura?",
      "Técnicamente, desde el día siguiente al vencimiento. En la práctica, esperá 3 días para un recordatorio amable y usá este mail desde el día 7."
    ],
    [
      "¿Pongo recargo en el primer mail por factura vencida?",
      "Solo si tu contrato o la factura ya lo dicen. Inventar un recargo en un recordatorio es difícil de sostener."
    ],
    [
      "¿Y si el cliente me da una fecha y no cumple?",
      "Escribile al día siguiente, citá la fecha que te dio y pasá al mail firme."
    ]
  ],
  "stage": 7
},
{
  "slug": "recordatorio-de-pago-30-dias",
  "lang": "es",
  "alt": "payment-reminder-email-after-30-days",
  "longtail": true,
  "name": "Recordatorio a 30 días",
  "title": "Recordatorio de pago a los 30 días de vencida (plantilla)",
  "description": "Qué mandar cuando una factura lleva 30 días vencida: una plantilla con fecha límite fija, el historial de avisos y el próximo paso dicho sin vueltas.",
  "intro": "A los 30 días, otro recordatorio suave le enseña al cliente que esperar le sirve. Este mail cambia el tono: enumera lo que ya mandaste, pone una fecha fija y dice qué pasa si esa fecha pasa.",
  "whenToSend": "El día 30 después del vencimiento, con al menos dos avisos previos. Si no mandaste nada todavía, empezá por el mail de factura vencida; arrancar por este suena agresivo.",
  "subject": "Factura [N.º]: 30 días vencida, pago antes del [FECHA]",
  "body": "Hola [NOMBRE],\n\nLa factura [N.º] por [MONTO] lleva 30 días vencida (vencía el [FECHA DE VENCIMIENTO]).\n\nTe escribí el [FECHA 1], el [FECHA 2] y el [FECHA 3] y todavía no tengo el pago ni una fecha.\n\nNecesito el total de [MONTO] antes del [FECHA, 7 DÍAS DESDE HOY]. Datos de pago:\n\n[CBU / ALIAS / LINK DE PAGO]\nReferencia: [N.º DE FACTURA]\n\nSi no lo recibo para esa fecha, voy a [APLICAR EL RECARGO DE LA CLÁUSULA X / SUSPENDER EL TRABAJO / INICIAR UN RECLAMO FORMAL]. Prefiero no llegar a eso, así que si hay un problema llamame al [TELÉFONO] antes.\n\n[TU NOMBRE]",
  "tips": [
    "Listá las fechas de los avisos anteriores. Muestra el registro sin decirlo.",
    "Ofrecé una llamada. Hay clientes que atienden el teléfono y no el mail.",
    "Menos de 150 palabras."
  ],
  "variant": {
    "label": "Para un cliente que querés conservar",
    "subject": "Factura [N.º]: ¿la cerramos antes del [FECHA]?",
    "body": "Hola [NOMBRE],\n\nLa factura [N.º] ([MONTO]) lleva 30 días vencida y la quiero cerrar sin que afecte cómo trabajamos.\n\n¿Podés pagarla antes del [FECHA]? Si el total ahora es mucho, acepto dos pagos: [MITAD] antes del [FECHA] y el resto antes del [FECHA + 14].\n\nRespondeme con la opción que te sirva.\n\n[TU NOMBRE]"
  },
  "mistakes": [
    "Amenazar con algo que no vas a hacer. Nombrá solo el paso que realmente vas a dar.",
    "Dejar la fecha abierta (\"cuando puedas\"). La fecha concreta es lo que hace funcionar el mail.",
    "Mandarlo otra vez al mismo contacto que no contesta. Sumá a su jefe o a administración.",
    "Sacar los datos de pago porque \"ya los tiene\". Cada mail tiene que poder pagarse solo."
  ],
  "faq": [
    [
      "¿30 días de atraso es mucho?",
      "Sí. La mayoría de las facturas que se pagan tarde se pagan en las dos semanas siguientes al vencimiento. A los 30 días hace falta fecha límite y consecuencia."
    ],
    [
      "¿Puedo suspender el trabajo a los 30 días?",
      "Si tu contrato lo permite, sí, y decilo en este mail. Si no, revisá el contrato antes de anunciarlo."
    ],
    [
      "¿Mando una carta formal en vez del mail?",
      "Primero este mail. Si la fecha pasa, el siguiente paso es la carta de último aviso firmada."
    ]
  ],
  "stage": 30
},
{
  "slug": "ultimo-aviso-antes-de-accion-legal",
  "lang": "es",
  "alt": "final-notice-before-collections-email",
  "longtail": true,
  "name": "Aviso antes de derivar el cobro",
  "title": "Último aviso antes de derivar el cobro (plantilla de mail)",
  "description": "El último mail antes de pasar una factura impaga a un estudio de cobranzas o a un reclamo formal: texto completo, versión corta y qué no decir.",
  "intro": "Esto no es un recordatorio. Es el aviso que mandás cuando ya decidiste escalar, para que el cliente se entere por vos y tenga una última oportunidad clara. Mandalo solo si estás dispuesto a cumplirlo.",
  "whenToSend": "Después del día 30, cuando los avisos y una fecha firme pasaron sin pago ni respuesta. Ya tendrías que saber a qué estudio o instancia vas a ir y cuánto cuesta.",
  "subject": "Último aviso: la factura [N.º] se deriva el [FECHA]",
  "body": "Estimado/a [NOMBRE]:\n\nLe escribo por última vez respecto de la factura [N.º] por [MONTO], con vencimiento el [FECHA DE VENCIMIENTO].\n\nSe enviaron recordatorios el [FECHA 1], el [FECHA 2] y el [FECHA 3]. A la fecha no recibí el pago ni una propuesta de fecha.\n\nSi el total de [MONTO] no se acredita antes del [FECHA, 7 A 10 DÍAS DESDE HOY], la deuda será derivada a [ESTUDIO DE COBRANZAS / MEDIACIÓN / RECLAMO JUDICIAL] el día hábil siguiente. Los costos de cobranza que permita nuestro acuerdo se sumarán al saldo.\n\nDatos de pago:\n[CBU / ALIAS]\nReferencia: [N.º DE FACTURA]\n\nSi considera que este monto no se adeuda, respóndame por escrito antes de esa fecha indicando el motivo.\n\n[TU NOMBRE]\n[RAZÓN SOCIAL, CUIT, DOMICILIO]",
  "tips": [
    "Mandalo también como carta en PDF firmada.",
    "Juntá todos los avisos en una carpeta antes de mandarlo.",
    "Consultá las reglas locales sobre intereses y gastos de cobranza."
  ],
  "variant": {
    "label": "Versión corta, para montos chicos",
    "subject": "Último aviso: factura [N.º]",
    "body": "[NOMBRE]:\n\nLa factura [N.º] ([MONTO]) sigue impaga después de tres avisos. Si no se paga antes del [FECHA], inicio el reclamo por el monto más los costos que correspondan.\n\nPago: [ALIAS]\n\n[TU NOMBRE]"
  },
  "mistakes": [
    "Mandarlo como amenaza vacía. Si la fecha pasa y no hacés nada, todas tus facturas futuras se pagan más tarde.",
    "Sumar intereses o costos que el contrato no prevé.",
    "Lenguaje agresivo o emocional. Este mail puede terminar frente a un tercero; escribilo para que se lea bien ahí.",
    "Hablar de la deuda con gente de la empresa que no tiene nada que ver."
  ],
  "faq": [
    [
      "¿Qué diferencia hay entre último aviso y carta de cobranza?",
      "El último aviso lo mandás vos con una fecha final. La carta de cobranza la manda el estudio o abogado después de la derivación."
    ],
    [
      "¿Cuánto plazo doy en el último aviso?",
      "Entre 7 y 10 días es razonable. Menos parece presión; más le quita urgencia."
    ],
    [
      "¿Esto es asesoramiento legal?",
      "No. Es una plantilla. Para montos grandes, consultá con un abogado de tu jurisdicción."
    ]
  ],
  "stage": 30
},
{
  "slug": "recordatorio-de-pago-amable-freelancer",
  "lang": "es",
  "alt": "polite-payment-reminder-for-freelancers",
  "longtail": true,
  "name": "Recordatorio amable",
  "title": "Recordatorio de pago amable para freelancers (plantilla)",
  "description": "Un recordatorio de pago amable pensado para freelancers: cálido sin pedir perdón, con los datos de pago en el cuerpo y una versión para clientes con abono mensual.",
  "intro": "Los freelancers suelen tardar demasiado en mandar el primer recordatorio porque les da vergüenza con un cliente que les cae bien. Amable no es lo mismo que vago. Esta plantilla es cordial y aun así hace que pagar sea lo más fácil.",
  "whenToSend": "Tres días después del vencimiento. Si la relación es buena, también podés mandarlo el mismo día del vencimiento como aviso.",
  "subject": "Recordatorio: factura [N.º]",
  "body": "Hola [NOMBRE], ¿cómo va todo con [PROYECTO]?\n\nTe escribo cortito para recordarte que la factura [N.º] por [MONTO] venció el [FECHA DE VENCIMIENTO]. Seguro se pasó, así que te dejo los datos:\n\nMonto: [MONTO]\nDatos de pago: [CBU / ALIAS / LINK]\nReferencia: [N.º DE FACTURA]\n\nSi ya está en camino, decime la fecha y listo.\n\n¡Gracias!\n[TU NOMBRE]",
  "tips": [
    "Una línea personal al principio está bien; una sola.",
    "Respondé en el mismo hilo de la factura original.",
    "Cuando lo mandes, agendá el día 7."
  ],
  "variant": {
    "label": "Para clientes con abono mensual",
    "subject": "Abono de [MES]",
    "body": "Hola [NOMBRE],\n\nLa factura del abono de [MES] ([N.º], [MONTO]) venció el [FECHA] y todavía no la veo. Los datos son los de siempre: [ALIAS].\n\n¿Me confirmás si entra en los pagos de esta semana?\n\nGracias,\n[TU NOMBRE]"
  },
  "mistakes": [
    "\"Perdón que te moleste\". No molestás a nadie; sacalo.",
    "Esconder el monto en el tercer párrafo.",
    "Meter un informe largo del proyecto. El recordatorio es sobre la factura.",
    "Esperar un mes porque la relación es buena. Los buenos clientes agradecen el aviso temprano."
  ],
  "faq": [
    [
      "¿Es de mala educación mandar un recordatorio de pago?",
      "No. Es práctica normal, y la mayoría de los atrasos son administrativos, no mala intención."
    ],
    [
      "¿Cuándo puede mandar un freelancer el primer recordatorio?",
      "El día del vencimiento o hasta tres días después."
    ],
    [
      "¿Y si el cliente es amigo?",
      "Usá la plantilla igual. Mantenerlo profesional cuida la amistad."
    ]
  ],
  "stage": 3
},
{
  "slug": "como-cobrarle-a-un-cliente",
  "lang": "es",
  "alt": "how-to-ask-a-client-for-payment",
  "longtail": true,
  "name": "Cómo cobrarle a un cliente",
  "title": "Cómo cobrarle a un cliente sin que sea incómodo",
  "description": "Guía práctica para cobrarle a un cliente: qué decir, cuándo y por qué canal, con un mail listo para mandar y un guion para llamar.",
  "intro": "Cobrar es un proceso, no un mensaje. Lo hacés fácil antes de empezar, mandás una factura clara y hacés seguimiento en días fijos. Acá tenés las palabras para cada paso y un mail para mandar hoy.",
  "whenToSend": "Usá el mail de abajo apenas la factura vence o ya venció. Los pasos previos (condiciones por escrito, anticipo, factura clara) van al principio del proyecto.",
  "subject": "Pago de [PROYECTO]: factura [N.º]",
  "body": "Hola [NOMBRE],\n\nEl trabajo de [PROYECTO] está entregado y la factura [N.º] por [MONTO] venció el [FECHA DE VENCIMIENTO].\n\nPodés pagarla acá: [CBU / ALIAS / LINK], referencia [N.º DE FACTURA].\n\n¿Me decís para qué día está programada? Si administración necesita algo de mi parte (orden de compra, constancia de CUIT, otro formato de factura), avisame y lo mando hoy.\n\nSaludos,\n[TU NOMBRE]",
  "tips": [
    "Pedí un anticipo del 30 al 50% a clientes nuevos.",
    "Averiguá quién paga antes de mandar la primera factura.",
    "Confirmá por mail cualquier fecha que te prometan."
  ],
  "variant": {
    "label": "Guion para llamar",
    "subject": "Guion de llamada (no es un mail)",
    "body": "\"Hola [NOMBRE], soy [TU NOMBRE]. Te llamo por la factura [N.º] por [MONTO], que venció el [FECHA]. Quería ver si hay algo que la esté frenando.\"\n\n(Dejalo responder. Después:)\n\n\"Perfecto. ¿Qué día puedo esperar el pago? Lo anoto.\"\n\n(Para cerrar:) \"Gracias. Te mando un mail cortito confirmando la fecha.\""
  },
  "mistakes": [
    "Arrancar sin condiciones de pago por escrito. Acordá monto, vencimiento y recargo antes de la primera entrega.",
    "Mandar un \"¿cómo va todo?\" sin nombrar la factura.",
    "Renegociar el precio después. Si hay una discusión de alcance, separala de lo que ya se debe.",
    "Hacer seguimiento solo cuando te acordás. Elegí días fijos (3, 7, 14, 30)."
  ],
  "faq": [
    [
      "¿Cuál es la mejor forma de cobrarle a un cliente?",
      "Por escrito, con número de factura, monto, vencimiento y datos de pago en el mensaje, y una sola pregunta: cuándo se paga."
    ],
    [
      "¿Llamo o mando mail?",
      "Primero mail, para que quede registro. Si dos mails no tienen respuesta, llamá y confirmá por mail."
    ],
    [
      "¿Cómo pido un anticipo?",
      "Ponelo en el presupuesto: el anticipo se paga antes de empezar y la fecha de inicio se fija cuando se acredita."
    ]
  ]
},
{
  "slug": "segundo-recordatorio-de-pago",
  "lang": "es",
  "alt": "second-payment-reminder-email",
  "longtail": true,
  "name": "Segundo recordatorio",
  "title": "Segundo recordatorio de pago por email (plantilla)",
  "description": "El segundo recordatorio de pago: qué cambia respecto del primero, una plantilla que pide la fecha por escrito y una versión para cuando el primero no tuvo respuesta.",
  "intro": "El primer recordatorio supone un descuido. El segundo ya no puede suponerlo, pero tampoco tiene que acusar. Su objetivo es uno solo: conseguir una fecha de pago por escrito.",
  "whenToSend": "Siete días después del vencimiento, o cuatro días después del primer recordatorio si no hubo respuesta.",
  "subject": "Segundo aviso: factura [N.º], [X] días vencida",
  "body": "Hola [NOMBRE],\n\nTe escribo por mi mail del [FECHA DEL PRIMER AVISO]. La factura [N.º] por [MONTO] ya lleva [X] días vencida y no tuve respuesta.\n\n¿Me respondés con la fecha en que se va a hacer el pago? Por ahora es lo único que necesito.\n\nLos datos otra vez:\nMonto: [MONTO]\nDatos de pago: [CBU / ALIAS / LINK]\nReferencia: [N.º DE FACTURA]\n\nGracias,\n[TU NOMBRE]",
  "tips": [
    "Prometé no insistir antes de su fecha. Hace fácil que te la den.",
    "Si es una empresa, copiá a administración.",
    "Asunto concreto, para que se pueda buscar."
  ],
  "variant": {
    "label": "Cuando el primero tuvo una respuesta vaga",
    "subject": "Re: factura [N.º]",
    "body": "Hola [NOMBRE],\n\nGracias por decirme la semana pasada que lo ibas a revisar. Todavía no veo el pago de la factura [N.º] ([MONTO]).\n\n¿Me das una fecha concreta? La agendo y no te vuelvo a escribir antes.\n\n[TU NOMBRE]"
  },
  "mistakes": [
    "Copiar el primer recordatorio palabra por palabra. Citalo por fecha.",
    "Presionar demasiado pronto. Fechas límite y recargos quedan para el día 14.",
    "Escribir en un hilo nuevo y perder el historial.",
    "Aceptar \"en breve\" como respuesta. Pedí el día."
  ],
  "faq": [
    [
      "¿Cuánto espero entre recordatorios?",
      "Al principio, entre cuatro y siete días: días 3, 7, 14 y 30 después del vencimiento es un esquema común."
    ],
    [
      "¿Qué dice un segundo recordatorio?",
      "Cita el primero, dice cuántos días lleva vencida, repite los datos de pago y pide una fecha."
    ]
  ],
  "stage": 7
},
{
  "slug": "aviso-de-factura-vencida",
  "lang": "es",
  "alt": "invoice-past-due-email-to-client",
  "longtail": true,
  "name": "Aviso de factura vencida",
  "title": "Aviso de factura vencida al cliente (plantilla de mail)",
  "description": "Un aviso de factura vencida para clientes que dejaron de contestar: monto, días de atraso, datos de pago y una fecha límite, más una versión para pagos parciales.",
  "intro": "Este aviso está escrito para que administración lo procese y no lo archive: los datos clave en las dos primeras líneas, número de orden de compra si corresponde y una fecha límite concreta.",
  "whenToSend": "Alrededor del día 14 después del vencimiento, después de un recordatorio y un seguimiento. También sirve como primer mensaje al mail de pagos de una empresa grande.",
  "subject": "Factura vencida: [N.º] ([MONTO], venció el [FECHA])",
  "body": "Hola,\n\nLa factura [N.º] por [MONTO] está vencida desde el [FECHA DE VENCIMIENTO], hace [X] días.\n\nLes pido que gestionen el pago antes del [FECHA, 5 DÍAS HÁBILES]:\n\nDatos de pago: [CBU / ALIAS]\nReferencia: [N.º DE FACTURA]\nOrden de compra: [OC, SI HAY]\n\nSi la factura está retenida, díganme qué falta para liberarla. Adjunto copia.\n\nSaludos,\n[TU NOMBRE]\n[RAZÓN SOCIAL]",
  "tips": [
    "Pedí una vez el mail de administración y guardalo.",
    "Adjuntá el PDF de la factura de nuevo.",
    "Usá días hábiles para las fechas con empresas."
  ],
  "variant": {
    "label": "Cuando pagaron solo una parte",
    "subject": "Saldo vencido: factura [N.º]",
    "body": "Hola [NOMBRE],\n\nGracias por el pago de [MONTO RECIBIDO] del [FECHA]. Queda un saldo vencido de [RESTANTE] de la factura [N.º].\n\n¿Lo pueden pagar antes del [FECHA]? Mismos datos: [ALIAS].\n\n[TU NOMBRE]"
  },
  "mistakes": [
    "Dejar los datos clave al final. Administración lee asunto y primera línea.",
    "Olvidar la orden de compra cuando el cliente la usa.",
    "Asunto genérico tipo \"Seguimiento\".",
    "Mandarlo solo a tu contacto cuando la empresa tiene un mail de pagos."
  ],
  "faq": [
    [
      "¿Qué es una factura vencida?",
      "Una factura cuya fecha de vencimiento pasó sin que se pague el total."
    ],
    [
      "¿Qué le digo a un cliente con una factura vencida?",
      "Número, monto y vencimiento, una fecha límite de pago, los datos para pagar y qué falta si está retenida."
    ]
  ],
  "stage": 14
},
{
  "slug": "email-por-pago-atrasado",
  "lang": "es",
  "alt": "late-payment-email-to-client",
  "longtail": true,
  "name": "Mail por pago atrasado",
  "title": "Mail por pago atrasado al cliente, con recargo (plantilla)",
  "description": "Un mail para el cliente que paga tarde: cómo mencionar el recargo del contrato, una fecha límite y una versión que suspende el trabajo.",
  "intro": "Cuando un cliente paga tarde seguido, un recordatorio no alcanza: el mail tiene que conectar el atraso con su consecuencia. Esta plantilla aplica el recargo del contrato, ofrece perdonarlo si paga rápido y se mantiene profesional.",
  "whenToSend": "El día 14 después del vencimiento, o directamente en cualquier factura de un cliente que ya pagó tarde antes. Mencioná el recargo solo si está en el contrato o en la factura.",
  "subject": "Factura [N.º]: pago atrasado, recargo desde el [FECHA]",
  "body": "Hola [NOMBRE],\n\nLa factura [N.º] por [MONTO] lleva [X] días de atraso. Te escribí el [FECHA 1] y el [FECHA 2] sin una fecha de pago.\n\nComo dice la cláusula [X] de nuestro acuerdo, desde hoy corre un recargo de [TASA] sobre el saldo vencido. Si el total de [MONTO] se acredita antes del [FECHA, 5 DÍAS], no lo aplico.\n\nDatos de pago: [CBU / ALIAS]\nReferencia: [N.º DE FACTURA]\n\n[TU NOMBRE]",
  "tips": [
    "Citá la cláusula por número.",
    "Plazo corto para perdonar el recargo: cinco días.",
    "Poné el recargo en todas las facturas futuras."
  ],
  "variant": {
    "label": "Suspender el trabajo en vez de recargo",
    "subject": "Factura [N.º]: trabajo en pausa hasta el pago",
    "body": "Hola [NOMBRE],\n\nLa factura [N.º] ([MONTO]) lleva [X] días de atraso. Según nuestro acuerdo, desde el [FECHA] pauso el trabajo nuevo en [PROYECTO] hasta que se pague.\n\nApenas se acredite, retomo donde quedamos.\n\nPago: [ALIAS]\n\n[TU NOMBRE]"
  },
  "mistakes": [
    "Cobrar un recargo que el contrato no menciona.",
    "Perdonar el recargo antes de que lo pidan. Es tu palanca para un pago rápido.",
    "Pausar el trabajo sin avisar por escrito.",
    "Escribir enojado después de una llamada. Mandalo a la mañana siguiente."
  ],
  "faq": [
    [
      "¿Puedo cobrar recargo por pago atrasado?",
      "Si tu contrato o las condiciones aceptadas lo prevén, en general sí, dentro de los límites legales locales. Si no, acordalo para trabajos futuros."
    ],
    [
      "¿Cómo le digo a un cliente que está atrasado?",
      "Cuántos días lleva, qué avisos mandaste, la consecuencia acordada y una fecha corta."
    ]
  ],
  "stage": 14
},
{
  "slug": "recordatorio-de-pago-por-email",
  "lang": "es",
  "alt": "payment-reminder-email-sample",
  "longtail": true,
  "name": "Ejemplos de recordatorio",
  "title": "Recordatorio de pago por email: 4 ejemplos por etapa",
  "description": "Cuatro ejemplos de recordatorio de pago por email para los días 3, 7, 14 y 30 después del vencimiento, con asunto, para ver cómo sube el tono.",
  "intro": "Ver las cuatro etapas juntas deja clara la escalada: cada mail mantiene los mismos datos y datos de pago, pero pide algo más firme. Usá la plantilla completa para el primero y los ejemplos como modelo para el resto.",
  "whenToSend": "Días 3, 7, 14 y 30 después del vencimiento, cortando apenas llega el pago.",
  "subject": "Factura [N.º]: recordatorio de pago",
  "body": "DÍA 3, asunto: Factura [N.º]: recordatorio de pago\n\nHola [NOMBRE], la factura [N.º] por [MONTO] venció el [FECHA]. Datos: [ALIAS]. Si ya salió, decime la fecha. Gracias, [TU NOMBRE]\n\nDÍA 7, asunto: Factura [N.º]: 7 días vencida\n\nHola [NOMBRE], te escribo por mi mail del [FECHA]. La factura [N.º] lleva 7 días vencida. ¿Me respondés con la fecha de pago? [TU NOMBRE]\n\nDÍA 14, asunto: Factura [N.º]: 14 días vencida, corre recargo\n\nHola [NOMBRE], según la cláusula [X], desde hoy corre un recargo de [TASA]. Si [MONTO] se acredita antes del [FECHA], no lo aplico. [TU NOMBRE]\n\nDÍA 30, asunto: Último aviso: factura [N.º]\n\n[NOMBRE], después de los avisos del [FECHAS], necesito [MONTO] antes del [FECHA]. Si no, voy a [PRÓXIMO PASO]. [TU NOMBRE]",
  "tips": [
    "Usá el generador de abajo para tener los cuatro con fechas reales.",
    "Mismo hilo, asunto nuevo.",
    "Cortá la secuencia apenas pagan y mandá un gracias."
  ],
  "variant": {
    "label": "Ejemplo para WhatsApp",
    "subject": "Mensaje de WhatsApp (no es un mail)",
    "body": "Hola [NOMBRE], ¿cómo va? Te escribo por la factura [N.º] de [MONTO] que venció el [FECHA]. Te dejo el alias: [ALIAS]. ¿Para qué día la puedo esperar?"
  },
  "mistakes": [
    "Usar el mismo tono el día 30 que el día 3.",
    "Cambiar montos o datos entre un mail y otro.",
    "Saltear etapas e ir directo al último aviso.",
    "Seguir mandando recordatorios después de una fecha prometida sin citarla."
  ],
  "faq": [
    [
      "¿Cómo es un buen ejemplo de recordatorio de pago?",
      "Nombra factura, monto y vencimiento en la primera línea, incluye los datos de pago y hace una sola pregunta."
    ],
    [
      "¿Cuántos recordatorios mando?",
      "En general cuatro en 30 días. Después, una carta de último aviso formal."
    ]
  ]
},
{
  "slug": "recordatorio-amable-de-factura",
  "lang": "es",
  "alt": "friendly-reminder-invoice-email",
  "longtail": true,
  "name": "Aviso amable de factura",
  "title": "Recordatorio amable de factura (antes o el día del vencimiento)",
  "description": "Un aviso amable para mandar antes o el día del vencimiento: corto, cordial y pensado para cobrar a tiempo sin tener que perseguir después.",
  "intro": "El recordatorio más barato es el que mandás antes de que la factura se atrase. Un aviso dos o tres días antes del vencimiento frena la mayoría de los \"se nos pasó aprobarla\" cuando todavía hay tiempo de arreglarlo.",
  "whenToSend": "Dos o tres días antes del vencimiento, o el mismo día. Salteatelo con clientes que siempre pagan a tiempo.",
  "subject": "Aviso: la factura [N.º] vence el [FECHA]",
  "body": "Hola [NOMBRE],\n\nTe aviso que la factura [N.º] por [MONTO] vence el [FECHA DE VENCIMIENTO].\n\nPor si te sirve:\nDatos de pago: [CBU / ALIAS / LINK]\nReferencia: [N.º DE FACTURA]\n\nSi necesitás algo de mi parte para aprobarla, avisame.\n\nGracias,\n[TU NOMBRE]",
  "tips": [
    "Programalo cuando mandás la factura.",
    "Muchas herramientas de facturación lo mandan solas; este texto sirve ahí.",
    "Mencioná la aprobación: ahí se traban la mayoría."
  ],
  "variant": {
    "label": "El día del vencimiento",
    "subject": "La factura [N.º] vence hoy",
    "body": "Hola [NOMBRE],\n\nTe recuerdo que la factura [N.º] ([MONTO]) vence hoy. Alias: [ALIAS].\n\n¡Gracias y buena semana!\n[TU NOMBRE]"
  },
  "mistakes": [
    "Llamarlo \"recordatorio amable\" cuando ya lleva 30 días vencida.",
    "Mandarlo a clientes con débito automático.",
    "Olvidar los datos de pago.",
    "Avisar de recargos en un mensaje previo al vencimiento."
  ],
  "faq": [
    [
      "¿Cómo escribo un recordatorio amable de factura?",
      "Tres o cuatro líneas: número, monto, vencimiento, datos de pago y una oferta de ayuda con la aprobación."
    ],
    [
      "¿Puedo avisar antes del vencimiento?",
      "Sí. Un aviso corto unos días antes es común y ayuda a que entre en la tanda de pagos."
    ]
  ]
},
{
  "slug": "cliente-no-paga-que-hacer",
  "lang": "es",
  "alt": "client-not-paying-invoice-what-to-do",
  "longtail": true,
  "name": "El cliente no paga",
  "title": "Mi cliente no paga la factura: qué hacer, paso a paso",
  "description": "Un plan paso a paso para cuando un cliente no paga: qué revisar, qué mail mandar cada día, cuándo suspender el trabajo y cuándo escalar.",
  "intro": "Cuando un cliente no paga, lo peor es esperar. Seguí una secuencia fija: revisá lo básico, pedí una fecha, aplicá tu contrato y después escalá formalmente. Acá está el orden, con el mail del paso que casi todos se saltean.",
  "whenToSend": "Arrancá el día después del vencimiento. El paso 1 (confirmar que la factura llegó a quien paga) lleva cinco minutos y resuelve muchos casos.",
  "subject": "Factura [N.º]: ¿quién gestiona los pagos?",
  "body": "Hola [NOMBRE],\n\nLa factura [N.º] por [MONTO] venció el [FECHA DE VENCIMIENTO] y todavía no se pagó.\n\nAntes de seguir, quiero asegurarme de que llegó a quien corresponde. ¿Quién gestiona los pagos a proveedores y necesita algo de mi parte (orden de compra, constancia de inscripción, otro formato)?\n\nDatos de pago, por las dudas:\n[CBU / ALIAS], referencia [N.º DE FACTURA].\n\nGracias,\n[TU NOMBRE]",
  "tips": [
    "Guardá todos los avisos con fecha en una carpeta.",
    "Decidí de antemano debajo de qué monto lo das por perdido.",
    "Para el próximo cliente: anticipo y recargo en el contrato."
  ],
  "variant": {
    "label": "El plan completo",
    "subject": "Pasos (no es un mail)",
    "body": "1. Día 1: confirmar que la factura llegó a quien paga (este mail).\n2. Día 3: recordatorio amable con los datos de pago.\n3. Día 7: pedir la fecha de pago por escrito.\n4. Día 14: aplicar el recargo del contrato y pausar el trabajo nuevo.\n5. Día 30: último aviso con fecha fija y próximo paso.\n6. Después: estudio de cobranzas, mediación o reclamo, o darla por perdida, según monto y costo."
  },
  "mistakes": [
    "Seguir entregando trabajo nuevo con la factura vieja impaga.",
    "Discutir en un hilo de mails eterno. Pasá a una llamada y confirmá por mail.",
    "Ir a un abogado por un monto menor que el costo legal.",
    "Escracharlo en redes. Te puede traer problemas legales y casi nunca cobra."
  ],
  "faq": [
    [
      "¿Qué hago si un cliente no me paga?",
      "Seguimiento en días fijos, aplicar tu contrato (recargo, pausa), último aviso, y si el monto lo justifica, estudio de cobranzas o reclamo formal."
    ],
    [
      "¿Cuánto espero antes de actuar?",
      "Los recordatorios arrancan entre el día 1 y el 3. La acción formal, después del último aviso, alrededor de 30 a 45 días."
    ],
    [
      "¿Me puedo quedar con el trabajo si no paga?",
      "Depende del contrato. Muchos contratos freelance transfieren la propiedad solo con el pago total; revisá el tuyo."
    ]
  ]
},
{
  "slug": "propuesta-de-plan-de-pagos",
  "lang": "es",
  "alt": "payment-plan-request-email",
  "longtail": true,
  "name": "Plan de pagos",
  "title": "Mail para proponer un plan de pagos por una factura vencida",
  "description": "Un mail para ofrecer al cliente un plan de cuotas por una factura vencida: montos, fechas y qué pasa si se atrasa una cuota.",
  "intro": "Si el cliente de verdad no puede pagar todo junto, un plan por escrito te cobra antes que una pulseada. La clave es que sea concreto y que diga, en el mismo mail, qué pasa si se atrasa una cuota.",
  "whenToSend": "Cuando el cliente te dice que el problema es de caja, normalmente entre el día 7 y el 30. No lo ofrezcas de entrada en el primer recordatorio.",
  "subject": "Factura [N.º]: plan de pagos",
  "body": "Hola [NOMBRE],\n\nGracias por ser claro con el tema de caja. Para saldar la factura [N.º] ([MONTO]), te acepto [2 / 3] pagos:\n\n1. [MONTO 1] antes del [FECHA 1]\n2. [MONTO 2] antes del [FECHA 2]\n3. [MONTO 3] antes del [FECHA 3]\n\nMismos datos de pago: [CBU / ALIAS], referencia [N.º DE FACTURA].\n\nSi alguna cuota se atrasa más de [3] días, el saldo restante vence en el acto.\n\n¿Me respondés \"de acuerdo\" para confirmarlo?\n\n[TU NOMBRE]",
  "tips": [
    "Conseguí un \"de acuerdo\" por escrito. Es tu registro.",
    "Que la primera cuota sea la más grande.",
    "Agendá cada fecha."
  ],
  "variant": {
    "label": "Versión en dos pagos",
    "subject": "Factura [N.º]: dos pagos",
    "body": "Hola [NOMBRE],\n\nPodemos partir la factura [N.º]: [MITAD] antes del [FECHA] y [MITAD] antes del [FECHA + 14]. Si se atrasa alguno, el saldo vence en el acto.\n\nRespondeme \"de acuerdo\" y queda.\n\n[TU NOMBRE]"
  },
  "mistakes": [
    "Acordar por teléfono y no dejarlo por escrito.",
    "Planes abiertos (\"pagá lo que puedas\").",
    "Volver a trabajar a full antes de la primera cuota.",
    "No poner consecuencia por una cuota atrasada."
  ],
  "faq": [
    [
      "¿Le ofrezco un plan de pagos a un cliente atrasado?",
      "Si explicó un problema de caja real y la alternativa es una disputa larga, sí. Corto: dos o tres cuotas."
    ],
    [
      "¿Cómo redacto un plan de pagos?",
      "Montos y fechas, datos de pago, qué pasa si se atrasa una cuota y un pedido de confirmación por escrito."
    ]
  ],
  "stage": 14
},
{
  "slug": "respuesta-cliente-dice-que-ya-paga",
  "lang": "es",
  "alt": "reply-when-client-says-payment-is-coming",
  "longtail": true,
  "name": "Respuesta a \"ya sale\"",
  "title": "Qué responder cuando el cliente dice que ya te paga",
  "description": "Cómo responder al \"ya sale el pago\" para que el pago llegue de verdad: pedir la fecha por escrito y dejar armado el próximo seguimiento.",
  "intro": "\"Está en proceso\" y \"en estos días sale\" son las respuestas más comunes a un recordatorio, y la razón más común de que una factura se estire otro mes. La respuesta correcta es corta, amable y convierte la promesa en una fecha.",
  "whenToSend": "El mismo día que el cliente responde con una promesa vaga.",
  "subject": "Re: factura [N.º]",
  "body": "Hola [NOMBRE],\n\nGracias por avisar, te lo agradezco.\n\nPara anotarlo, ¿para qué día está programado el pago? Si me pasás el comprobante cuando salga, mejor todavía.\n\nLo reviso el [FECHA] y solo te escribo si no lo veo para entonces.\n\nGracias,\n[TU NOMBRE]",
  "tips": [
    "En el seguimiento citá su fecha y sus palabras.",
    "El comprobante te permite rastrear la transferencia.",
    "Agendá el día siguiente a su fecha."
  ],
  "variant": {
    "label": "Cuando la fecha prometida ya pasó",
    "subject": "Re: factura [N.º]",
    "body": "Hola [NOMBRE],\n\nMe dijiste que el pago de la factura [N.º] salía el [SU FECHA]. Todavía no lo veo.\n\n¿Lo podés chequear con administración y pasarme el comprobante o la fecha nueva?\n\nGracias,\n[TU NOMBRE]"
  },
  "mistakes": [
    "Responder \"tranqui, cuando puedas\". Le saca toda la urgencia.",
    "No responder y esperar.",
    "Pedir el comprobante de mala manera. Es un pedido normal.",
    "Olvidarte de revisar el día prometido."
  ],
  "faq": [
    [
      "¿Qué contesto cuando el cliente dice que el pago está en proceso?",
      "Agradecé y pedí la fecha programada y, cuando salga, el comprobante."
    ],
    [
      "¿Cuánto espero después de que dice que pagó?",
      "Una transferencia local suele ser inmediata o de 24 a 48 horas; una internacional, de 1 a 5 días hábiles. Pedí el comprobante y revisá después."
    ]
  ],
  "stage": 7
},
{
  "slug": "carta-de-cobro",
  "lang": "es",
  "alt": "demand-letter-for-unpaid-invoice",
  "longtail": true,
  "name": "Carta de cobro",
  "title": "Carta de cobro por factura impaga (modelo para freelancers)",
  "description": "Un modelo de carta de cobro formal por una factura impaga: estructura, texto completo y qué incluir para que sirva si hay que reclamar.",
  "intro": "La carta de cobro es la versión formal y firmada de tu último mail. Su valor está en los hechos: fechas, montos y documentos, ordenados para que un tercero los pueda seguir. En algunos países se usa también una carta documento; consultá cuál corresponde.",
  "whenToSend": "Después de que venció el plazo del último aviso, normalmente entre 30 y 45 días después del vencimiento. Mandala como PDF firmado por mail y, si podés, por un medio fehaciente.",
  "subject": "Intimación de pago: factura [N.º]",
  "body": "[TU NOMBRE / RAZÓN SOCIAL]\n[CUIT / DOMICILIO]\n[LUGAR Y FECHA]\n\nA: [RAZÓN SOCIAL DEL CLIENTE]\n[DOMICILIO DEL CLIENTE]\n\nRef.: Intimación de pago de la factura [N.º]\n\nEl [FECHA DEL ACUERDO] acordamos que yo prestaría [SERVICIOS] por [MONTO], con vencimiento el [FECHA DE VENCIMIENTO] (acuerdo adjunto).\n\nLos servicios se entregaron el [FECHA DE ENTREGA]. La factura [N.º] se emitió el [FECHA DE EMISIÓN]. Se enviaron recordatorios el [FECHAS]. El monto de [MONTO] sigue impago.\n\nIntimo al pago de [MONTO] [MÁS EL RECARGO DE X SEGÚN CLÁUSULA Y] antes del [FECHA, 14 DÍAS], a:\n[CBU / ALIAS]\n\nDe no recibir el pago en ese plazo, iniciaré las acciones que correspondan sin nuevo aviso, reclamando los costos que la ley permita.\n\nAtentamente,\n[FIRMA]\n[TU NOMBRE]",
  "tips": [
    "Adjuntá el acuerdo, la factura y la lista de avisos.",
    "Usá la razón social, no el nombre de fantasía.",
    "Averiguá el costo de mediación o reclamo en tu jurisdicción antes."
  ],
  "variant": {
    "label": "Mail para acompañar la carta",
    "subject": "Intimación de pago: factura [N.º]",
    "body": "Hola,\n\nAdjunto la intimación formal de pago de la factura [N.º] ([MONTO]). El plazo para el pago vence el [FECHA].\n\n[TU NOMBRE]"
  },
  "mistakes": [
    "Omitir las fechas. Una carta de cobro es una línea de tiempo; sin fechas es un mail enojado.",
    "Reclamar montos que no están en el acuerdo.",
    "Mandarla sin guardar constancia de la entrega del trabajo.",
    "Amenazar con acciones penales por una deuda comercial."
  ],
  "faq": [
    [
      "¿Qué es una carta de cobro?",
      "Una carta formal y firmada que dice qué se debe, por qué y un plazo final antes de acciones."
    ],
    [
      "¿Necesito un abogado para mandarla?",
      "No, la podés mandar vos. Para montos grandes, una carta de abogado o una carta documento suman peso. Esta plantilla no es asesoramiento legal."
    ]
  ],
  "stage": 30
},
{
  "slug": "recordatorio-antes-del-vencimiento",
  "lang": "es",
  "alt": "payment-reminder-before-due-date",
  "longtail": true,
  "name": "Antes del vencimiento",
  "title": "Recordatorio de pago antes del vencimiento (mail de cortesía)",
  "description": "Un mail de cortesía para mandar unos días antes de que venza la factura, con una versión para clientes nuevos en su primera factura.",
  "intro": "Los clientes nuevos se atrasan sobre todo en la primera factura, porque nadie te dio de alta como proveedor. Un mail de cortesía una semana antes saca a la luz formularios y aprobaciones que faltan mientras todavía hay tiempo.",
  "whenToSend": "Cinco a siete días antes del vencimiento en la primera factura de un cliente; dos o tres días antes para clientes habituales que a veces se atrasan.",
  "subject": "Factura [N.º] vence el [FECHA]: ¿necesitan algo?",
  "body": "Hola [NOMBRE],\n\nLa factura [N.º] por [MONTO] vence el [FECHA DE VENCIMIENTO].\n\nComo es la primera que trabajamos juntos, ¿administración necesita algo para darme de alta como proveedor? (Constancia de CUIT, datos bancarios, una orden de compra.) Prefiero resolverlo ahora y no que se trabe el pago.\n\nDatos de pago: [CBU / ALIAS], referencia [N.º DE FACTURA].\n\nGracias,\n[TU NOMBRE]",
  "tips": [
    "Si podés, preguntá por el alta de proveedor antes de la primera factura.",
    "Guardá el contacto de administración.",
    "Anotá qué día pagan (muchas empresas pagan una o dos veces por mes)."
  ],
  "variant": {
    "label": "Cliente habitual",
    "subject": "Factura [N.º] vence el [FECHA]",
    "body": "Hola [NOMBRE],\n\nTe recuerdo que la factura [N.º] ([MONTO]) vence el [FECHA]. Alias: [ALIAS].\n\n¡Gracias!\n[TU NOMBRE]"
  },
  "mistakes": [
    "Que suene a reclamo de factura vencida.",
    "Pedir que paguen antes. Estás confirmando el proceso, no cambiando condiciones.",
    "Olvidar el número de factura en el asunto.",
    "Mandarlo a todos los clientes todos los meses; guardalo para nuevos y lentos."
  ],
  "faq": [
    [
      "¿Es profesional avisar antes de que venza?",
      "Sí, sobre todo en la primera factura. Plantearlo como \"¿necesitan algo?\" lo hace útil."
    ],
    [
      "¿Cuántos días antes lo mando?",
      "Cinco a siete para clientes nuevos, dos o tres para habituales."
    ]
  ]
}
];
