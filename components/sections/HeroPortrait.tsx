"use client";

import { useRef } from "react";
import Image from "next/image";
import { MapPin } from "lucide-react";
import { PROFILE } from "@/constants";

const MAX_TILT = 6; // degrees

/**
 * Framed portrait with a subtle pointer tilt.
 * Tilt is plain CSS (custom properties + transition) — mouse only, and
 * disabled entirely under prefers-reduced-motion via `motion-safe:`.
 */
export function HeroPortrait() {
  const frame = useRef<HTMLDivElement>(null);

  function setTilt(x: number, y: number) {
    frame.current?.style.setProperty("--rx", `${-y * MAX_TILT}deg`);
    frame.current?.style.setProperty("--ry", `${x * MAX_TILT}deg`);
  }

  function onPointerMove(e: React.PointerEvent<HTMLDivElement>) {
    if (e.pointerType !== "mouse") return;
    const r = e.currentTarget.getBoundingClientRect();
    setTilt((e.clientX - r.left) / r.width - 0.5, (e.clientY - r.top) / r.height - 0.5);
  }

  return (
    <div
      className="relative mx-auto w-full max-w-[22rem] animate-rise [perspective:1200px] sm:max-w-sm lg:max-w-none"
      style={{ animationDelay: "0.25s" }}
      onPointerMove={onPointerMove}
      onPointerLeave={() => setTilt(0, 0)}
    >
      <div
        ref={frame}
        className="relative transition-transform duration-500 ease-out motion-safe:[transform:rotateX(var(--rx,0))_rotateY(var(--ry,0))]"
      >
        {/* Offset outline frame */}
        <div aria-hidden className="absolute inset-0 translate-x-3 translate-y-3 rounded-[2rem] border border-accent/40" />

        {/* Photo — light studio backdrop, blended so the white cut-out reads as a lit wall */}
        <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-line-strong bg-gradient-to-b from-slate-200 via-slate-300 to-blue-300">
          <Image
            src="/profile.webp"
            alt={`Portrait of ${PROFILE.name}`}
            fill
            priority
            sizes="(min-width: 1024px) 34vw, (min-width: 640px) 24rem, 22rem"
            className="object-cover object-top mix-blend-multiply"
          />
          <div aria-hidden className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink-950/70 to-transparent" />
        </div>

        {/* Context chips */}
        <div className="absolute bottom-6 -left-3 rounded-2xl border border-line-strong bg-ink-900/90 px-4 py-3 shadow-2xl shadow-black/50 sm:-left-8">
          <p className="mb-1 flex items-center gap-2 font-mono text-[0.65rem] tracking-[0.18em] text-muted uppercase">
            <span className="relative flex size-1.5">
              <span className="absolute inline-flex size-full rounded-full bg-accent-2 opacity-60 motion-safe:animate-ping" />
              <span className="relative inline-flex size-1.5 rounded-full bg-accent-2" />
            </span>
            Currently
          </p>
          <p className="font-display text-sm font-semibold text-fg">
            {PROFILE.role} <span className="text-accent-soft">@ {PROFILE.company}</span>
          </p>
        </div>

        <div className="absolute top-6 -right-2 flex items-center gap-1.5 rounded-full border border-line-strong bg-ink-900/90 px-3 py-1.5 text-xs text-fg shadow-xl shadow-black/40 sm:-right-5">
          <MapPin size={13} aria-hidden className="text-accent-2" />
          {PROFILE.location}
        </div>
      </div>
    </div>
  );
}
