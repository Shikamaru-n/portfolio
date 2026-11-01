import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  id: string; // used by the section's aria-labelledby
  title: string;
  eyebrow?: string;
  description?: string;
  as?: "h1" | "h2";
  className?: string;
};

export function SectionHeading({
  id,
  title,
  eyebrow,
  description,
  as: Heading = "h2",
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl space-y-3", className)}>
      {eyebrow && (
        <p className="font-mono text-xs font-medium tracking-widest text-primary uppercase">
          {eyebrow}
        </p>
      )}
      <Heading
        id={id}
        className="text-3xl font-bold tracking-tight text-balance sm:text-4xl"
      >
        {title}
      </Heading>
      {description && (
        <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
