"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, PROFILE } from "@/constants";
import { useActiveSection } from "@/hooks/useActiveSection";
import { ButtonLink } from "@/components/ui/Button";
import { ArrowIcon } from "@/components/ui/ExternalLink";
import { SocialIcons } from "@/components/shared/SocialIcons";
import { cn } from "@/lib/utils";

const SECTION_IDS = NAV_LINKS.map((link) => link.href.slice(1));
const MOBILE_LINKS = [...NAV_LINKS, { name: "Contact", href: "#contact" as const }];

function Logo() {
  return (
    <a href="#top" className="group flex items-center gap-3">
      <span
        aria-hidden
        className="grid size-9 place-items-center rounded-lg border border-line-strong bg-ink-800 font-display text-sm font-bold tracking-tight text-fg transition-colors group-hover:border-accent-2/70">
        {PROFILE.initials}
      </span>
      {/* Visible from sm; screen-reader-only below, so the link always has a name that matches its text. */}
      <span className="sr-only font-display text-[0.95rem] font-semibold tracking-tight text-fg sm:not-sr-only">
        {PROFILE.name}
      </span>
    </a>
  );
}

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

/**
 * Full-screen menu, always mounted and toggled with CSS (fade + staggered links).
 * When closed it is `invisible` + `inert`: out of the tab order and hidden from AT.
 */
function MobileMenu({ open, onClose }: MobileMenuProps) {
  const closeButton = useRef<HTMLButtonElement>(null);

  // While open: lock page scroll, close on Escape, move focus into the dialog.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    closeButton.current?.focus();
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <div
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Menu"
      inert={!open}
      data-open={open}
      className="group/menu invisible fixed inset-0 z-[60] flex h-dvh flex-col bg-ink-950 opacity-0 transition-[opacity,visibility] duration-300 data-[open=true]:visible data-[open=true]:opacity-100 md:hidden"
    >
      <div className="container-page flex h-20 items-center justify-between border-b border-line">
        <Logo />
        <button
          ref={closeButton}
          type="button"
          onClick={onClose}
          aria-label="Close menu"
          className="grid size-10 place-items-center rounded-full border border-line-strong bg-ink-800/60"
        >
          <X size={18} aria-hidden />
        </button>
      </div>

      <ul className="container-page mt-6 flex flex-col">
        {MOBILE_LINKS.map((link, i) => (
          <li
            key={link.href}
            style={{ transitionDelay: `${0.05 + i * 0.05}s` }}
            className="translate-y-3 border-b border-line opacity-0 transition-[opacity,transform] duration-500 ease-out-expo group-data-[open=true]/menu:translate-y-0 group-data-[open=true]/menu:opacity-100 motion-reduce:translate-y-0"
          >
            <a
              href={link.href}
              onClick={onClose}
              className="flex items-center justify-between py-5 font-display text-3xl font-semibold tracking-tight text-fg"
            >
              {link.name}
              <span className="font-mono text-xs text-subtle">0{i + 1}</span>
            </a>
          </li>
        ))}
      </ul>

      <div className="container-page mt-auto flex items-center justify-between gap-4 pb-8">
        <SocialIcons />
        <ButtonLink href={`mailto:${PROFILE.email}`} size="sm" variant="secondary">
          Email me
        </ButtonLink>
      </div>
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(SECTION_IDS);
  const menuButton = useRef<HTMLButtonElement>(null);
  const close = useCallback(() => {
    setOpen(false);
    menuButton.current?.focus(); // return focus to the trigger
  }, []);

  // Passive listener; React skips the render when the boolean doesn't change.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color] duration-500",
        scrolled ? "border-line/80 bg-ink-950/80 backdrop-blur-xl" : "border-transparent bg-transparent",
      )}
    >
      <nav
        aria-label="Primary"
        className={cn(
          "container-page flex items-center justify-between transition-[height] duration-500",
          scrolled ? "h-16" : "h-20",
        )}
      >
        <Logo />

        <div className="hidden items-center gap-8 md:flex">
          <ul className="flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = active === link.href.slice(1);
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    aria-current={isActive ? "location" : undefined}
                    className={cn(
                      "relative rounded-full px-4 py-2 text-sm transition-colors duration-300",
                      isActive ? "text-fg" : "text-muted hover:text-fg",
                    )}
                  >
                    {link.name}
                    <span
                      aria-hidden
                      className={cn(
                        "absolute inset-x-4 -bottom-0.5 h-px origin-left bg-accent-2 transition-transform duration-500 ease-out-expo",
                        isActive ? "scale-x-100" : "scale-x-0",
                      )}
                    />
                  </a>
                </li>
              );
            })}
          </ul>
          <ButtonLink href="#contact" size="sm">
            Let&apos;s Talk
            <ArrowIcon className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </ButtonLink>
        </div>

        <button
          ref={menuButton}
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="grid size-10 place-items-center rounded-full border border-line-strong bg-ink-800/60 text-fg md:hidden"
        >
          <Menu size={18} aria-hidden />
        </button>
      </nav>

      <MobileMenu open={open} onClose={close} />
    </header>
  );
}
