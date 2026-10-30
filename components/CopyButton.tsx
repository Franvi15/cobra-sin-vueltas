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
      {done ? (
        <svg aria-hidden width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3.5 8.5l3 3 6-7" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" /></svg>
      ) : (
        <svg aria-hidden width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="5.5" y="5.5" width="8" height="8" rx="1.75" stroke="currentColor" strokeWidth="1.4" /><path d="M10.5 3.5v-.25A1.25 1.25 0 009.25 2h-6A1.25 1.25 0 002 3.25v6c0 .69.56 1.25 1.25 1.25h.25" stroke="currentColor" strokeWidth="1.4" /></svg>
      )}
      <span aria-live="polite">{done ? copiedLabel : label}</span>
    </button>
  );
}
