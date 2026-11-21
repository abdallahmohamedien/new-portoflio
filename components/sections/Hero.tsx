import { ArrowDown } from "lucide-react";
import { SiNextdotjs, SiReact, SiSupabase, SiTailwindcss, SiTypescript, SiVuedotjs } from "react-icons/si";
import { PROFILE } from "@/constants";
import { ButtonLink } from "@/components/ui/Button";
import { ArrowIcon } from "@/components/ui/ExternalLink";
import { SocialIcons } from "@/components/shared/SocialIcons";
import { HeroPortrait } from "./HeroPortrait";

const CORE_STACK = [
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Vue.js", icon: SiVuedotjs },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Supabase", icon: SiSupabase },
];

/** Staggered CSS entrance (see `animate-rise` in globals.css). */
const delay = (s: number) => ({ animationDelay: `${s}s` });

export default function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden pt-28 pb-16 sm:pt-32 lg:pt-36 lg:pb-24">
      {/* Background: faint grid + a single restrained glow */}
      <div aria-hidden className="bg-grid absolute inset-0 -z-10" />
      <div aria-hidden className="absolute top-[-7.5rem] right-[calc(-10%-10rem)] -z-10 size-[56rem] bg-[radial-gradient(closest-side,rgb(37_99_235/0.16),transparent)]" />

      <div className="container-page grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <div className="mb-8 flex animate-rise flex-wrap items-center gap-x-4 gap-y-2">
            <span className="font-display text-lg font-semibold tracking-tight text-fg">{PROFILE.name}</span>
            <span aria-hidden className="hidden h-4 w-px bg-line-strong sm:block" />
            <span className="text-sm text-muted">
              {PROFILE.role} <span className="text-accent-soft">@ {PROFILE.company}</span>
            </span>
          </div>

          <h1
            style={delay(0.08)}
            className="animate-rise font-display text-[2.4rem] leading-[1.08] font-semibold tracking-[-0.04em] text-balance text-fg sm:text-[3.4rem] lg:text-[4rem] xl:text-[4.5rem]"
          >
            Building Digital Experiences That Make an{" "}
            <span className="relative whitespace-nowrap text-accent-2">
              Impact.
              <span
                aria-hidden
                className="absolute -bottom-1 left-0 h-[3px] w-full animate-draw rounded-full bg-accent/70 sm:-bottom-1.5 sm:h-1"
              />
            </span>
          </h1>

          <p style={delay(0.16)} className="mt-8 max-w-xl animate-rise text-lg leading-relaxed text-muted sm:text-xl">
            {PROFILE.intro}
          </p>

          <div style={delay(0.24)} className="mt-10 flex animate-rise flex-wrap items-center gap-3 sm:gap-4">
            <ButtonLink href="#work">
              View My Work
              <ArrowDown size={17} aria-hidden className="transition-transform duration-300 group-hover:translate-y-0.5" />
            </ButtonLink>
            <ButtonLink href="#contact" variant="secondary">
              Let&apos;s Talk
              <ArrowIcon size={17} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </ButtonLink>
            <span aria-hidden className="mx-1 hidden h-8 w-px bg-line sm:block" />
            <SocialIcons />
          </div>
        </div>

        <div className="lg:col-span-5 lg:pl-6">
          <HeroPortrait />
        </div>
      </div>

      {/* Core stack strip */}
      <div style={delay(0.4)} className="container-page mt-20 animate-rise lg:mt-24">
        <div className="flex flex-col gap-5 border-t border-line pt-8 sm:flex-row sm:items-center sm:gap-10">
          <p className="shrink-0 font-mono text-xs tracking-[0.2em] text-subtle uppercase">Core stack</p>
          <ul className="flex flex-wrap gap-x-7 gap-y-4">
            {CORE_STACK.map(({ name, icon: Icon }) => (
              <li key={name} className="flex items-center gap-2 text-sm text-muted transition-colors hover:text-fg">
                <Icon size={16} aria-hidden />
                {name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
