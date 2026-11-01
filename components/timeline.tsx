import { Badge } from "@/components/ui/badge";
import type { TimelineEntry } from "@/content/experience";

export function Timeline({ entries }: { entries: TimelineEntry[] }) {
  return (
    <ol className="relative space-y-8 border-l border-border pl-6 sm:pl-8">
      {entries.map((entry) => (
        <li key={`${entry.role}-${entry.organization}`} className="relative">
          {/* Dot on the timeline line */}
          <span
            aria-hidden="true"
            className="absolute top-1.5 -left-[calc(1.5rem+5px)] size-2.5 rounded-full bg-primary ring-4 ring-background sm:-left-[calc(2rem+5px)]"
          />
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
            <h3 className="text-lg font-semibold tracking-tight">{entry.role}</h3>
            <Badge variant="secondary">{entry.type}</Badge>
          </div>
          <p className="mt-1 text-sm text-muted-foreground">
            {entry.organization}
            {entry.dates && (
              <>
                <span aria-hidden="true"> · </span>
                <span className="sr-only">, </span>
                {entry.dates}
              </>
            )}
          </p>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 marker:text-primary">
            {entry.bullets.map((bullet) => (
              <li key={bullet} className="leading-relaxed">
                {bullet}
              </li>
            ))}
          </ul>
          {entry.tags && (
            <ul className="mt-3 flex flex-wrap gap-1.5">
              {entry.tags.map((tag) => (
                <li key={tag}>
                  <Badge variant="outline" className="font-normal text-muted-foreground">
                    {tag}
                  </Badge>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ol>
  );
}
