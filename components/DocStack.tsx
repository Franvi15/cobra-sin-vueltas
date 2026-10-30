import type { Lang } from "@/lib/site";

/** Visual of the pack: three stacked documents. Pure CSS, no images. */
export default function DocStack({ lang }: { lang: Lang }) {
  const es = lang === "es";
  const docs = [
    { kind: "CSV", name: es ? "Planilla de seguimiento" : "Payment tracker", rot: "rotate-[7deg] translate-x-16 translate-y-6", tracker: true },
    { kind: "DOCX", name: es ? "Contrato freelance" : "Freelance contract", rot: "-rotate-[5deg] -translate-x-12 translate-y-3" },
    { kind: "PDF", name: es ? "Guía para cobrar a tiempo" : "Guide: get paid on time", rot: "", top: true },
  ];
  return (
    <div className="relative mx-auto h-[360px] w-full max-w-[420px]" aria-hidden>
      {docs.map((doc, i) => (
        <div key={i} className={`absolute left-1/2 top-4 h-[300px] w-[230px] -ml-[115px] rounded-xl bg-white p-5 text-ink shadow-mock transition-transform duration-500 ${doc.rot}`}>
          <div className="flex items-center justify-between">
            <span className={`rounded px-1.5 py-0.5 text-[10px] font-bold ${doc.kind === "PDF" ? "bg-coral text-night" : doc.kind === "DOCX" ? "bg-[#2B5DCC] text-white" : "bg-brand text-white"}`}>{doc.kind}</span>
            <span className="text-[10px] text-ink-3">EN + ES</span>
          </div>
          <p className="mt-4 text-[15px] font-semibold leading-tight tracking-heading">{doc.name}</p>
          {doc.tracker ? (
            <div className="mt-4 grid grid-cols-3 gap-1">
              {Array.from({ length: 18 }).map((_, j) => <div key={j} className={`h-3 rounded-sm ${j < 3 ? "bg-ink/15" : j % 3 === 2 && j % 2 ? "bg-coral/40" : "bg-well"}`} />)}
            </div>
          ) : (
            <div className="mt-4 space-y-2">
              {[100, 92, 96, 70, 0, 88, 94, 60].map((w, j) => w ? <div key={j} className="h-1.5 rounded-full bg-well" style={{ width: `${w}%` }} /> : <div key={j} className="h-2" />)}
            </div>
          )}
          {doc.top && (
            <div className="absolute inset-x-5 bottom-5 rounded-lg bg-brand-soft p-3">
              <p className="text-[10px] font-semibold uppercase tracking-[0.08em] text-brand">{es ? "Calendario" : "Schedule"}</p>
              <div className="mt-1.5 flex justify-between text-[11px] font-medium tabular-nums text-ink">
                <span>+3</span><span>+7</span><span>+14</span><span className="text-coral-ink">+30</span>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
