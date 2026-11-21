import { SiGithub } from "react-icons/si";
import { MORE_PROJECTS, PROFILE, PROJECTS } from "@/constants";
import type { Project } from "@/types";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { ArrowIcon, ExternalLink } from "@/components/ui/ExternalLink";
import { Tag, TagList } from "@/components/ui/Tag";
import { cn } from "@/lib/utils";

const pad = (n: number) => String(n).padStart(2, "0");
const TOTAL = pad(PROJECTS.length);

/* ------------------------------------------------------------------ */
/* Building blocks                                                    */
/* ------------------------------------------------------------------ */

function ProjectMeta({ project, index }: { project: Project; index: number }) {
  return (
    <p className="flex items-center gap-3 font-mono text-xs tracking-[0.18em] uppercase">
      <span className="text-accent-2 tabular-nums">{pad(index + 1)}</span>
      <span className="text-subtle tabular-nums">/ {TOTAL}</span>
      <span aria-hidden className="h-px w-8 bg-line-strong" />
      <span className="text-accent-soft">{project.category}</span>
    </p>
  );
}

function Contribution({ text }: { text: string }) {
  return (
    <div className="border-l-2 border-accent pl-5">
      <p className="mb-2 font-mono text-[0.68rem] tracking-[0.18em] text-subtle uppercase">What I built</p>
      <p className="leading-relaxed text-fg/90">{text}</p>
    </div>
  );
}

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <ButtonLink href={project.liveLink} external size="sm" aria-label={`${project.title} — live demo`}>
        Live Demo
        <ArrowIcon className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </ButtonLink>
      {project.githubLink && (
        <ButtonLink
          href={project.githubLink}
          external
          size="sm"
          variant="secondary"
          aria-label={`${project.title} — source code on GitHub`}
        >
          <SiGithub size={14} aria-hidden />
          Source
        </ButtonLink>
      )}
    </div>
  );
}

/** Giant outlined numeral (decorative); lights up on hover. Caller sets position/size. */
function GhostNumber({ index, className }: { index: number; className?: string }) {
  return (
    <span
      aria-hidden
      className={cn(
        "pointer-events-none font-display leading-none font-semibold tracking-[-0.06em] text-outline select-none transition-[-webkit-text-stroke-color] duration-700 group-hover:[-webkit-text-stroke-color:rgb(59_130_246/0.55)]",
        className,
      )}
    >
      {pad(index + 1)}
    </span>
  );
}

/** Blue rule that draws across the top edge on hover. */
function HoverRule() {
  return (
    <span
      aria-hidden
      className="absolute inset-x-0 -top-px h-px origin-left scale-x-0 bg-accent-2 transition-transform duration-700 ease-out-expo group-hover:scale-x-100"
    />
  );
}

/** Small L-shaped corner marks — a subtle "spec sheet" frame. */
function CornerMarks() {
  const base = "pointer-events-none absolute size-4 border-accent/70";
  return (
    <>
      <span aria-hidden className={cn(base, "top-3 left-3 border-t border-l")} />
      <span aria-hidden className={cn(base, "top-3 right-3 border-t border-r")} />
      <span aria-hidden className={cn(base, "bottom-3 left-3 border-b border-l")} />
      <span aria-hidden className={cn(base, "right-3 bottom-3 border-r border-b")} />
    </>
  );
}

/* ------------------------------------------------------------------ */
/* Compositions                                                       */
/* ------------------------------------------------------------------ */

/** 01 — framed spec-sheet panel with the largest title. */
function FeaturedProject({ project }: { project: Project }) {
  return (
    <Reveal as="article" className="group relative isolate overflow-hidden rounded-3xl border border-line bg-ink-900">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 [background-image:linear-gradient(to_right,rgb(148_163_184/0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgb(148_163_184/0.05)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:linear-gradient(to_bottom,#000,transparent_85%)]"
      />
      <div aria-hidden className="absolute -top-60 -right-52 -z-10 size-[38rem] bg-[radial-gradient(closest-side,rgb(37_99_235/0.11),transparent)]" />
      <CornerMarks />
      <GhostNumber index={0} className="absolute top-20 right-12 -z-10 hidden text-[15rem] lg:block xl:text-[17rem]" />

      <div className="px-6 py-10 sm:px-12 sm:py-14 lg:px-16 lg:py-16">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <ProjectMeta project={project} index={0} />
          <Tag variant="badge">Featured</Tag>
        </div>

        <h3 className="mt-8 max-w-4xl font-display text-[2.1rem] leading-[1.08] font-semibold tracking-[-0.035em] text-balance text-fg sm:text-5xl lg:text-[4rem]">
          {project.title}
        </h3>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">{project.description}</p>

        <div className="mt-12 grid gap-10 border-t border-line pt-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-6">{project.contribution && <Contribution text={project.contribution} />}</div>
          <div className="flex flex-col gap-8 lg:col-span-6">
            <TagList items={project.tags} label={`${project.title} technologies`} />
            <ProjectLinks project={project} />
          </div>
        </div>
      </div>
    </Reveal>
  );
}

/** 02+ — open editorial rows that mirror left/right. */
function ProjectRow({ project, index }: { project: Project; index: number }) {
  const mirrored = index % 2 === 0; // 03, 05 → title right; 02, 04 → title left

  return (
    <Reveal as="article" className="group relative isolate border-t border-line py-14 sm:py-20">
      <HoverRule />

      <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
        {/* Title block */}
        <div className={cn("lg:col-span-7", mirrored && "lg:order-2 lg:col-start-6")}>
          <ProjectMeta project={project} index={index} />
          <h3 className="mt-6 font-display text-3xl leading-[1.1] font-semibold tracking-[-0.03em] text-balance text-fg sm:text-[2.75rem]">
            {project.title}
          </h3>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted">{project.description}</p>
          <GhostNumber index={index} className="mt-8 hidden text-[7rem] lg:block" />
        </div>

        {/* Detail block */}
        <div
          className={cn(
            "flex flex-col gap-8 lg:col-span-5 lg:pt-12",
            mirrored ? "lg:order-1 lg:col-start-1 lg:row-start-1" : "lg:col-start-8",
          )}
        >
          {project.contribution && <Contribution text={project.contribution} />}
          <TagList items={project.tags} label={`${project.title} technologies`} />
          <ProjectLinks project={project} />
        </div>
      </div>
    </Reveal>
  );
}

function MoreProjects() {
  return (
    <Reveal className="mt-20 sm:mt-28">
      <div className="mb-6 flex items-end justify-between gap-4">
        <h3 className="font-display text-xl font-semibold tracking-tight text-fg">More projects</h3>
        <ExternalLink href={PROFILE.github} className="text-sm">
          All on GitHub
        </ExternalLink>
      </div>
      <ul className="divide-y divide-line border-y border-line">
        {MORE_PROJECTS.map((p) => (
          <li key={p.id} className="flex flex-col gap-3 py-5 sm:flex-row sm:items-center sm:gap-6">
            <p className="flex flex-1 flex-wrap items-baseline gap-x-4 gap-y-1">
              <span className="font-display text-lg font-medium text-fg sm:text-xl">{p.title}</span>
              <span className="font-mono text-[0.7rem] tracking-[0.15em] text-subtle uppercase">{p.category}</span>
            </p>
            <div className="flex items-center gap-5 text-sm">
              <ExternalLink href={p.liveLink} aria-label={`${p.title} — live demo`}>
                Live
              </ExternalLink>
              {p.githubLink && (
                <ExternalLink href={p.githubLink} arrow={false} aria-label={`${p.title} — source code`}>
                  <SiGithub size={13} aria-hidden /> Code
                </ExternalLink>
              )}
            </div>
          </li>
        ))}
      </ul>
    </Reveal>
  );
}

/* ------------------------------------------------------------------ */

export default function Projects() {
  const [featured, ...rest] = PROJECTS;

  return (
    <section id="work" className="relative py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading
          index="01"
          eyebrow="Selected work"
          title={
            <>
              Projects built <span className="text-muted">end to end.</span>
            </>
          }
          description="Dashboards, booking flows, AI tooling and data-driven interfaces — built with real APIs, live data and production deployments."
        />

        <FeaturedProject project={featured} />

        <div className="mt-16 border-b border-line sm:mt-20">
          {rest.map((project, i) => (
            <ProjectRow key={project.id} project={project} index={i + 1} />
          ))}
        </div>

        <MoreProjects />
      </div>
    </section>
  );
}
