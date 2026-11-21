import { Award, Briefcase, GraduationCap, MapPin } from "lucide-react";
import { PROFILE } from "@/constants";
import { Reveal } from "@/components/shared/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const FACTS = [
  { icon: Briefcase, label: "Currently", value: `${PROFILE.role} @ ${PROFILE.company}` },
  { icon: MapPin, label: "Based in", value: PROFILE.location },
  { icon: GraduationCap, label: "Education", value: "B.Sc. Computer Science" },
  { icon: Award, label: "Recognition", value: "2nd place — Roqay company hackathon" },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading
          index="03"
          eyebrow="About"
          title={
            <>
              Engineering-minded, <span className="text-muted">design-obsessed.</span>
            </>
          }
        />

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="space-y-6 text-lg leading-relaxed text-muted lg:col-span-7">
            <p className="text-xl leading-relaxed text-fg sm:text-2xl sm:leading-relaxed">
              I&apos;m Abdallah — a frontend developer in Cairo who enjoys turning ideas into fast, polished web
              applications.
            </p>
            <p>
              I work as a {PROFILE.role} at {PROFILE.company}, a role I grew into from an internship. Before that I
              built landing pages, authentication flows and product modules at Velents AI, and helped my team take
              second place at a company hackathon with a hotel booking platform.
            </p>
            <p>
              What I enjoy most is the space where engineering meets design: solving tricky UI problems, building
              reusable component architecture, and steadily improving code quality — so interfaces stay fast,
              accessible and easy to maintain. Most days that means React, Next.js or Vue.js, wired to real data
              through Supabase, Firebase and REST APIs.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-5">
            <dl className="divide-y divide-line overflow-hidden rounded-2xl border border-line bg-ink-800/60">
              {FACTS.map(({ icon: Icon, label, value }) => (
                // Valid <dl>: each <div> holds only a <dt>/<dd> pair; the icon lives inside <dt>.
                <div key={label} className="relative py-5 pr-5 pl-[4.75rem] sm:pr-6 sm:pl-[5.25rem]">
                  <dt className="font-mono text-[0.68rem] tracking-[0.18em] text-subtle uppercase">
                    <span
                      aria-hidden
                      className="absolute top-1/2 left-5 grid size-10 -translate-y-1/2 place-items-center rounded-xl border border-line-strong bg-ink-900 text-accent-2 sm:left-6"
                    >
                      <Icon size={18} />
                    </span>
                    {label}
                  </dt>
                  <dd className="mt-0.5 font-medium text-fg">{value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
