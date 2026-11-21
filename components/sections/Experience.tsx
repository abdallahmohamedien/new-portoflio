import { Trophy } from "lucide-react";
import { EDUCATION, EXPERIENCE } from "@/constants";
import type { Credential, Experience as ExperienceEntry, Role } from "@/types";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tag, TagList } from "@/components/ui/Tag";
import { cn } from "@/lib/utils";

function RoleItem({ role, isLast }: { role: Role; isLast: boolean }) {
  return (
    <li className={cn("relative pl-8", !isLast && "pb-8")}>
      {/* Progression rail */}
      {!isLast && <span aria-hidden className="absolute top-3 bottom-0 left-[5px] w-px bg-line-strong" />}
      <span
        aria-hidden
        className={cn(
          "absolute top-1.5 left-0 size-[11px] rounded-full border-2",
          role.current ? "border-accent-2 bg-accent shadow-[0_0_0_4px_rgb(37_99_235/0.18)]" : "border-line-strong bg-ink-950",
        )}
      />

      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <p className="flex flex-wrap items-center gap-2.5 text-lg font-medium text-fg">
          {role.title}
          {role.current && <Tag variant="badge">Current</Tag>}
        </p>
        <p className="font-mono text-xs text-subtle tabular-nums">{role.period}</p>
      </div>
      {role.description && <p className="mt-3 max-w-2xl leading-relaxed text-muted">{role.description}</p>}
    </li>
  );
}

function CompanyBlock({ entry }: { entry: ExperienceEntry }) {
  const hasProgression = entry.roles.length > 1;

  return (
    <div className="grid gap-6 py-10 first:pt-0 md:grid-cols-12 md:gap-10">
      <div className="md:col-span-4">
        <h3 className="font-display text-2xl font-semibold tracking-[-0.02em] text-fg">{entry.company}</h3>
        {hasProgression && (
          <p className="mt-2 font-mono text-[0.7rem] tracking-[0.15em] text-accent-soft uppercase">
            Intern → Junior Developer
          </p>
        )}
      </div>

      <div className="md:col-span-8">
        <ol>
          {entry.roles.map((role, i) => (
            <RoleItem key={role.title} role={role} isLast={i === entry.roles.length - 1} />
          ))}
        </ol>

        {entry.stack && (
          <div className="mt-8 pl-8">
            <p className="mb-3 font-mono text-[0.68rem] tracking-[0.18em] text-subtle uppercase">Worked with</p>
            <TagList items={entry.stack} variant="skill" label={`Technologies used at ${entry.company}`} />
          </div>
        )}

        {entry.achievement && (
          <p className="mt-5 ml-8 inline-flex items-start gap-2.5 rounded-xl border border-line bg-ink-800/60 px-4 py-3 text-sm text-fg/90">
            <Trophy size={16} aria-hidden className="mt-0.5 shrink-0 text-accent-2" />
            {entry.achievement}
          </p>
        )}
      </div>
    </div>
  );
}

function CredentialCard({ item }: { item: Credential }) {
  return (
    <li className="flex flex-col rounded-2xl border border-line bg-ink-800/60 p-6">
      <div className="mb-5 flex items-center justify-between gap-3">
        <Tag variant="badge">{item.kind}</Tag>
        {item.period && <span className="font-mono text-xs text-subtle">{item.period}</span>}
      </div>
      <p className="font-display text-lg leading-snug font-semibold text-fg">{item.title}</p>
      <p className="mt-1.5 text-sm text-muted">{item.issuer}</p>
      {item.detail && <p className="mt-4 text-sm leading-relaxed text-subtle">{item.detail}</p>}
    </li>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="relative border-t border-line bg-ink-900 py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading
          index="04"
          eyebrow="Experience & education"
          title={
            <>
              The road <span className="text-muted">so far.</span>
            </>
          }
        />

        <Reveal className="divide-y divide-line">
          {EXPERIENCE.map((entry) => (
            <CompanyBlock key={entry.company} entry={entry} />
          ))}
        </Reveal>

        <Reveal className="mt-16 border-t border-line pt-14">
          <h3 className="mb-8 font-mono text-xs tracking-[0.2em] text-subtle uppercase">Education & certifications</h3>
          <ul className="grid gap-4 md:grid-cols-3">
            {EDUCATION.map((item) => (
              <CredentialCard key={item.title} item={item} />
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
