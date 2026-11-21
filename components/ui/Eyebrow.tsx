import { cn } from "@/lib/utils";

interface EyebrowProps {
  /** Section number, e.g. "01". */
  index?: string;
  children: React.ReactNode;
  className?: string;
}

/** Small mono label above a heading: `01 —— Selected work`. */
export function Eyebrow({ index, children, className }: EyebrowProps) {
  return (
    <p
      className={cn(
        "flex items-center gap-3 font-mono text-xs tracking-[0.2em] text-accent-soft uppercase",
        className,
      )}
    >
      {index && <span className="text-subtle">{index}</span>}
      <span aria-hidden className="h-px w-8 bg-accent/60" />
      {children}
    </p>
  );
}
