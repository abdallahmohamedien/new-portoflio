import { cn } from "@/lib/utils";

type TagVariant = "tech" | "skill" | "badge";

const variants: Record<TagVariant, string> = {
  /** Small mono chip — project technologies. */
  tech: "rounded-full border border-line bg-ink-800/60 px-3 py-1 font-mono text-[0.7rem] text-muted",
  /** Larger chip — skill and stack lists. */
  skill:
    "rounded-lg border border-line bg-ink-900/80 px-3 py-1.5 text-[0.85rem] text-fg/90 transition-colors duration-300 hover:border-accent/50 hover:text-fg",
  /** Accent status label — "Current", "Degree"… */
  badge:
    "rounded-full border border-accent/40 bg-accent/10 px-2.5 py-0.5 font-mono text-[0.62rem] tracking-[0.15em] text-accent-soft uppercase",
};

interface TagProps {
  children: React.ReactNode;
  variant?: TagVariant;
  className?: string;
}

export function Tag({ children, variant = "tech", className }: TagProps) {
  return <span className={cn("inline-block", variants[variant], className)}>{children}</span>;
}

interface TagListProps {
  items: readonly string[];
  variant?: Exclude<TagVariant, "badge">;
  label: string;
  className?: string;
}

/** Semantic list of tags (a `<ul>` with an accessible label). */
export function TagList({ items, variant = "tech", label, className }: TagListProps) {
  return (
    <ul aria-label={label} className={cn("flex flex-wrap gap-2", className)}>
      {items.map((item) => (
        <li key={item}>
          <Tag variant={variant}>{item}</Tag>
        </li>
      ))}
    </ul>
  );
}
