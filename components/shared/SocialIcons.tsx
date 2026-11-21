import { SOCIAL_LINKS } from "@/constants";
import { cn } from "@/lib/utils";

interface SocialIconsProps {
  className?: string;
  size?: "sm" | "md";
}

/** Verified social profiles as round icon buttons. */
export function SocialIcons({ className, size = "md" }: SocialIconsProps) {
  const box = size === "sm" ? "size-9" : "size-11";
  const icon = size === "sm" ? 15 : 17;

  return (
    <ul className={cn("flex items-center gap-2.5", className)}>
      {SOCIAL_LINKS.map(({ name, href, icon: Icon }) => (
        <li key={name}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={name}
            title={name}
            className={cn(
              box,
              "grid place-items-center rounded-full border border-line bg-ink-800/50 text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-2/60 hover:text-fg",
            )}
          >
            <Icon size={icon} />
          </a>
        </li>
      ))}
    </ul>
  );
}
