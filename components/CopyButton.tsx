"use client";
import { useState } from "react";

export default function CopyButton({ text, label, copiedLabel, className = "" }: { text: string; label: string; copiedLabel: string; className?: string }) {
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
    <button type="button" onClick={copy} aria-live="polite"
      className={`inline-flex items-center gap-2 border border-ink bg-ink px-4 py-2 font-mono text-xs uppercase tracking-widest text-paper transition hover:bg-accent hover:border-accent ${className}`}>
      {done ? `✓ ${copiedLabel}` : label}
    </button>
  );
}
