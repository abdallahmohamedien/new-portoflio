import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ExternalLinkProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "target" | "rel"> {
  href: string;
  /** Show the ↗ arrow after the label. */
  arrow?: boolean;
}

/** Plain text link that opens in a new tab, with an optional nudging arrow. */
export function ExternalLink({ href, arrow = true, className, children, ...rest }: ExternalLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group/link inline-flex items-center gap-1.5 text-muted transition-colors duration-300 hover:text-fg",
        className,
      )}
      {...rest}
    >
      {children}
      {arrow && <ArrowIcon className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />}
    </a>
  );
}

/** The ↗ icon with a shared nudge transition. */
export function ArrowIcon({ size = 15, className }: { size?: number; className?: string }) {
  return (
    <ArrowUpRight aria-hidden size={size} className={cn("shrink-0 transition-transform duration-300", className)} />
  );
}
