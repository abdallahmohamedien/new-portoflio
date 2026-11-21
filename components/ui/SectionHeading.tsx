import { Reveal } from "@/components/shared/Reveal";
import { Eyebrow } from "./Eyebrow";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  index: string;
  eyebrow: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  className?: string;
}

/** Editorial section header: numbered eyebrow, display title, optional lede. */
export function SectionHeading({ index, eyebrow, title, description, className }: SectionHeadingProps) {
  return (
    <Reveal className={cn("mb-14 grid gap-6 md:mb-20 lg:grid-cols-12 lg:items-end", className)}>
      <div className="lg:col-span-7">
        <Eyebrow index={index} className="mb-5">
          {eyebrow}
        </Eyebrow>
        <h2 className="font-display text-[2.1rem] leading-[1.1] font-semibold tracking-[-0.03em] text-balance text-fg sm:text-5xl lg:text-[3.5rem]">
          {title}
        </h2>
      </div>
      {description && (
        <p className="max-w-md text-base leading-relaxed text-muted lg:col-span-5 lg:justify-self-end">
          {description}
        </p>
      )}
    </Reveal>
  );
}
