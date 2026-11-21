"use client";

import { useEffect, useRef } from "react";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  /** Seconds before the transition starts — use for light staggering. */
  delay?: number;
  as?: "div" | "li" | "article";
}

/**
 * One-shot fade-and-rise when the element scrolls into view.
 * The transition lives in CSS (`[data-reveal]` in globals.css); this component
 * only flips `data-revealed` once, then disconnects its observer.
 * Content stays visible without JS and under prefers-reduced-motion.
 */
export function Reveal({ children, className, delay = 0, as = "div" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  // div/li/article share every API used here (dataset); narrow the tag for JSX ref typing.
  const Tag = as as "div";

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        el.dataset.revealed = "";
        observer.disconnect();
      },
      { rootMargin: "0px 0px -80px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={className}
      data-reveal=""
      style={delay ? { transitionDelay: `${delay}s` } : undefined}
    >
      {children}
    </Tag>
  );
}
