import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";

interface ButtonLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: Variant;
  size?: "sm" | "md";
  external?: boolean;
}

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-white shadow-[0_8px_30px_-10px_rgb(37_99_235/0.7)] hover:bg-accent-2 hover:shadow-[0_10px_36px_-8px_rgb(59_130_246/0.75)]",
  secondary:
    "border border-line-strong bg-ink-800/60 text-fg hover:border-accent-2/60 hover:bg-ink-700",
  ghost: "text-muted hover:text-fg",
};

const sizes = {
  sm: "h-9 px-4 text-sm",
  md: "h-12 px-6 text-[0.95rem]",
};

/** Anchor styled as a button. External links open safely in a new tab. */
export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  external,
  className,
  children,
  ...rest
}: ButtonLinkProps) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(
        "group inline-flex items-center justify-center gap-2 rounded-full font-medium whitespace-nowrap transition-all duration-300 ease-out-expo active:scale-[0.97]",
        variants[variant],
        sizes[size],
        className,
      )}
      {...rest}
    >
      {children}
    </a>
  );
}
