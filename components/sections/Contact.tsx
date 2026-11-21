import { Mail } from "lucide-react";
import { PROFILE, SOCIAL_LINKS } from "@/constants";
import { Reveal } from "@/components/shared/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { CopyButton } from "@/components/ui/CopyButton";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ArrowIcon } from "@/components/ui/ExternalLink";

export default function Contact() {
  return (
    <section id="contact" className="relative isolate overflow-hidden py-24 sm:py-32">
      <div aria-hidden className="bg-grid absolute inset-0 -z-10 rotate-180" />
      <div
        aria-hidden
        className="absolute bottom-[calc(-30%-9rem)] left-1/2 -z-10 h-[46rem] w-[66rem] -translate-x-1/2 bg-[radial-gradient(closest-side,rgb(37_99_235/0.16),transparent)]"
      />

      <div className="container-page">
        <Reveal className="mx-auto max-w-4xl text-center">
          <Eyebrow index="05" className="mb-6 justify-center">
            Contact
          </Eyebrow>
          <h2 className="font-display text-[2.2rem] leading-[1.08] font-semibold tracking-[-0.04em] text-balance text-fg sm:text-6xl lg:text-[4.25rem]">
            Have an idea worth building? <span className="text-accent-2">Let&apos;s talk.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted">
            Whether it&apos;s a role, a collaboration, or a conversation about frontend craft — my inbox is open.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <ButtonLink href={`mailto:${PROFILE.email}`}>
              <Mail size={17} aria-hidden />
              {PROFILE.email}
            </ButtonLink>
            <CopyButton value={PROFILE.email} label="Copy email" />
          </div>
        </Reveal>

        <Reveal delay={0.1} className="mx-auto mt-16 max-w-4xl">
          <ul className="grid gap-3 sm:grid-cols-3">
            {SOCIAL_LINKS.map(({ name, handle, href, icon: Icon }) => (
              <li key={name}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-2xl border border-line bg-ink-800/60 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/50"
                >
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl border border-line-strong bg-ink-900 text-muted transition-colors group-hover:text-fg">
                    <Icon size={17} aria-hidden />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-medium text-fg">{name}</span>
                    <span className="block truncate text-xs text-subtle">{handle}</span>
                  </span>
                  <ArrowIcon
                    size={16}
                    className="text-subtle group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent-2"
                  />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
