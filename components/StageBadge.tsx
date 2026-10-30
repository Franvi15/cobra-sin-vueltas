export default function StageBadge({ day, label, tone = "auto" }: { day?: number; label: string; tone?: "auto" | "neutral" }) {
  const final = day === 30;
  const cls = tone === "neutral" || day === undefined
    ? "border-line-strong bg-well text-ink-2"
    : final
      ? "border-coral/40 bg-coral-soft text-coral-ink"
      : "border-brand/20 bg-brand-soft text-brand-dark";
  return <span className={`badge ${cls}`}>{label}</span>;
}
