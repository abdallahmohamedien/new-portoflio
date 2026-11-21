"use client";

import { cn } from "@/lib/utils";

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Card with a soft blue spotlight that follows the cursor.
 * Pointer position is written to CSS variables — no React state, no re-renders.
 */
export function SpotlightCard({ children, className }: SpotlightCardProps) {
  function onPointerMove(e: React.PointerEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
  }

  return (
    <div
      onPointerMove={onPointerMove}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-line bg-ink-800/70 transition-colors duration-500 hover:border-line-strong",
        className,
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: "radial-gradient(420px circle at var(--x) var(--y), rgb(37 99 235 / 0.12), transparent 70%)",
        }}
      />
      <div className="relative flex h-full flex-col">{children}</div>
    </div>
  );
}
