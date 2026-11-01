"use client";

import { useMemo, useState } from "react";
import { ChevronDown, ExternalLink } from "lucide-react";

import { ProjectCard } from "@/components/project-card";
import { Button } from "@/components/ui/button";
import {
  projectCategories,
  type Project,
  type ProjectCategory,
} from "@/content/projects";
import { projectsPage, ui } from "@/content/site";
import type { RepoStats } from "@/lib/github";

type SortKey = keyof typeof projectsPage.sortOptions;
type Filter = ProjectCategory | "all";

type ProjectsExplorerProps = {
  projects: Project[];
  stats: Record<string, RepoStats>;
};

export function ProjectsExplorer({ projects, stats }: ProjectsExplorerProps) {
  const [filter, setFilter] = useState<Filter>("all");
  const [sort, setSort] = useState<SortKey>("updated");

  const visible = useMemo(() => {
    const byUpdated = (a: Project, b: Project) =>
      stats[b.repo].updated.localeCompare(stats[a.repo].updated);

    const filtered =
      filter === "all" ? projects : projects.filter((p) => p.filters.includes(filter));

    return [...filtered].sort((a, b) => {
      if (sort === "name") {
        return a.repo.localeCompare(b.repo, "en", { sensitivity: "base" });
      }
      if (sort === "stars") {
        return stats[b.repo].stars - stats[a.repo].stars || byUpdated(a, b);
      }
      return byUpdated(a, b);
    });
  }, [projects, stats, filter, sort]);

  // "Most stars" only appears once at least one repo has a star (same rule as the card stats)
  const hasStars = Object.values(stats).some((s) => s.stars > 0);
  const sortOptions = Object.entries(projectsPage.sortOptions).filter(
    ([value]) => value !== "stars" || hasStars,
  );

  const filters: { value: Filter; label: string }[] = [
    { value: "all", label: projectsPage.allFilter },
    ...projectCategories.map((c) => ({ value: c, label: c })),
  ];

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div role="group" aria-label={projectsPage.filterLabel} className="flex flex-wrap gap-2">
          {filters.map((f) => (
            <Button
              key={f.value}
              type="button"
              size="sm"
              variant={filter === f.value ? "default" : "outline"}
              aria-pressed={filter === f.value}
              onClick={() => setFilter(f.value)}
              className="h-9 rounded-full px-4"
            >
              {f.label}
            </Button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <label htmlFor="project-sort" className="text-sm text-muted-foreground">
            {projectsPage.sortLabel}
          </label>
          <select
            id="project-sort"
            value={sort}
            onChange={(e) => setSort(e.target.value as SortKey)}
            className="h-9 rounded-lg border border-input bg-background px-3 text-sm outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
          >
            {sortOptions.map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <p aria-live="polite" className="mt-4 text-sm text-muted-foreground">
        {projectsPage.resultCount(visible.length)}
      </p>

      {visible.length === 0 ? (
        <p className="mt-10 text-muted-foreground">{projectsPage.empty}</p>
      ) : (
        <ul className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((project) => (
            <li key={project.repo}>
              <ProjectCard project={project} stats={stats[project.repo]} headingLevel="h2">
                {project.subProjects && <SubProjectList project={project} />}
              </ProjectCard>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// Expandable list of the projects inside a collection repo (ds-projects).
// Uses <details>, so it opens and closes with the keyboard and works without JavaScript.
function SubProjectList({ project }: { project: Project }) {
  const items = project.subProjects ?? [];
  return (
    <details className="group rounded-lg border border-border/60">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-2 rounded-lg px-3 py-2 text-sm font-medium outline-none hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/50 [&::-webkit-details-marker]:hidden">
        <span className="group-open:hidden">{projectsPage.showSubProjects(items.length)}</span>
        <span className="hidden group-open:inline">
          {projectsPage.hideSubProjects(items.length)}
        </span>
        <ChevronDown
          aria-hidden="true"
          className="size-4 transition-transform group-open:rotate-180"
        />
      </summary>
      <ul className="space-y-3 border-t border-border/60 px-3 py-3">
        {items.map((sub) => (
          <li key={sub.url}>
            <a
              href={sub.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-sm text-sm font-medium text-primary underline-offset-4 outline-none hover:underline focus-visible:ring-3 focus-visible:ring-ring/50"
            >
              {sub.title}
              <ExternalLink aria-hidden="true" className="size-3.5" />
              <span className="sr-only"> {ui.newTab}</span>
            </a>
            <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">
              {sub.summary}
            </p>
          </li>
        ))}
      </ul>
    </details>
  );
}
