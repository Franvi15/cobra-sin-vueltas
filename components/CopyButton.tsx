"use client";
import { useState } from "react";

export default function CopyButton({ text, label, copiedLabel, className = "btn-primary" }: { text: string; label: string; copiedLabel: string; className?: string }) {
  const [done, setDone] = useState(false);
  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = text; document.body.appendChild(ta); ta.select();
      document.execCommand("copy"); ta.remove();
    }
    setDone(true);
    setTimeout(() => setDone(false), 1800);
  }
  return (
    <button type="button" onClick={copy} className={className}>
      <span aria-live="polite" className="tabular-nums">{done ? copiedLabel : label}</span>
    </button>
  );
}
