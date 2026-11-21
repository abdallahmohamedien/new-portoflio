"use client";

import { useEffect, useState } from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

interface CopyButtonProps {
  value: string;
  label: string;
  className?: string;
}

/** Copies `value` to the clipboard and confirms inline for 2s. */
export function CopyButton({ value, label, className }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const id = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(id);
  }, [copied]);

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
    } catch {
      /* Clipboard unavailable (permissions / insecure context) — fail silently. */
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className={cn(
        "inline-flex h-12 items-center gap-2 rounded-full border border-line-strong bg-ink-800/60 px-5 text-[0.95rem] text-muted transition-colors duration-300 hover:border-accent-2/60 hover:text-fg",
        className,
      )}
    >
      {copied ? <Check size={16} className="text-accent-2" /> : <Copy size={16} />}
      <span aria-live="polite">{copied ? "Copied!" : label}</span>
    </button>
  );
}
