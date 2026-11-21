import { Code2, Database, FileCheck2, Layers, Palette, Wrench, type LucideIcon } from "lucide-react";
import { SKILL_GROUPS } from "@/constants";
import type { SkillGroup } from "@/types";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { TagList } from "@/components/ui/Tag";
import { cn } from "@/lib/utils";

const ICONS: Record<SkillGroup["id"], LucideIcon> = {
  languages: Code2,
  ui: Palette,
  state: Layers,
  forms: FileCheck2,
  backend: Database,
  tools: Wrench,
};

/** Bento placement: wide → narrow → three equal → full width. */
const LAYOUT: Record<SkillGroup["id"], string> = {
  languages: "md:col-span-2 lg:col-span-7",
  ui: "lg:col-span-5",
  state: "lg:col-span-4",
  forms: "lg:col-span-4",
  backend: "lg:col-span-4",
  tools: "md:col-span-2 lg:col-span-12",
};

function SkillCard({ group }: { group: SkillGroup }) {
  const Icon = ICONS[group.id];

  return (
    <SpotlightCard className="h-full p-6 sm:p-8">
      <div className="flex items-start justify-between gap-4">
        <span className="grid size-11 place-items-center rounded-xl border border-line-strong bg-ink-900 text-accent-2">
          <Icon size={20} aria-hidden />
        </span>
        <span className="font-mono text-xs text-subtle tabular-nums">
          {String(group.items.length).padStart(2, "0")} {group.items.length === 1 ? "item" : "items"}
        </span>
      </div>

      <h3 className="mt-8 font-display text-xl leading-snug font-semibold tracking-[-0.02em] text-fg sm:text-[1.4rem]">
        {group.title}
      </h3>
      <p className="mt-2 text-[0.95rem] text-muted">{group.summary}</p>

      <TagList items={group.items} variant="skill" label={group.title} className="mt-6" />
    </SpotlightCard>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative border-y border-line bg-ink-900 py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading
          index="02"
          eyebrow="Technical skills"
          title={
            <>
              The toolkit behind <span className="text-muted">the work.</span>
            </>
          }
          description="Grouped by where each tool fits in the stack — from the interface layer down to data, integration and delivery."
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-12 lg:gap-5">
          {SKILL_GROUPS.map((group, i) => (
            <Reveal key={group.id} delay={i * 0.05} className={cn("h-full", LAYOUT[group.id])}>
              <SkillCard group={group} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
