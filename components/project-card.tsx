import { Check, Clock, ExternalLink, GitFork, Sparkles, Star } from "lucide-react";

import { GitHubIcon } from "@/components/icons";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import type { Project } from "@/content/projects";
import { labels, ui } from "@/content/site";
import { formatDate } from "@/lib/format";
import type { RepoStats } from "@/lib/github";
import { cn } from "@/lib/utils";

const MAX_TAGS = 4;

type ProjectCardProps = {
  project: Project;
  stats: RepoStats;
  className?: string;
  headingLevel?: "h2" | "h3"; // h2 on the Projects page (no section heading above the grid)
  children?: React.ReactNode; // extra content, e.g. the ds-projects sub-project list
};

export function ProjectCard({
  project,
  stats,
  className,
  headingLevel: Heading = "h3",
  children,
}: ProjectCardProps) {
  const visibleTags = project.tags.slice(0, MAX_TAGS);
  const hiddenCount = project.tags.length - visibleTags.length;

  return (
    <Card
      className={cn(
        "h-full gap-0 py-0 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:ring-primary/40 motion-reduce:hover:translate-y-0",
        className,
      )}
    >
      <div className="flex flex-1 flex-col gap-4 p-5">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="secondary">{project.category}</Badge>
          <Badge variant="outline" className="font-mono">
            {project.language}
          </Badge>
          {project.featured && (
            <Badge className="ml-auto">
              <Sparkles aria-hidden="true" />
              {labels.featured}
            </Badge>
          )}
        </div>

        <Heading className="font-mono text-lg font-semibold break-words">{project.repo}</Heading>

        <p className="leading-relaxed text-muted-foreground">{project.description}</p>

        <ul className="space-y-2">
          {project.bullets.map((bullet) => (
            <li key={bullet} className="flex gap-2">
              <Check aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-primary" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>

        {children}

        <ul className="mt-auto flex flex-wrap gap-1.5 pt-1">
          {visibleTags.map((tag) => (
            <li key={tag}>
              <Badge variant="outline" className="font-normal text-muted-foreground">
                {tag}
              </Badge>
            </li>
          ))}
          {hiddenCount > 0 && (
            <li>
              <Badge variant="outline" className="font-normal text-muted-foreground">
                <span aria-hidden="true">+{hiddenCount}</span>
                <span className="sr-only">{labels.moreTags(hiddenCount)}</span>
              </Badge>
            </li>
          )}
        </ul>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border/60 px-5 py-3">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
          {stats.stars > 0 && (
            <span className="inline-flex items-center gap-1">
              <Star aria-hidden="true" className="size-3.5" />
              <span aria-hidden="true">{stats.stars}</span>
              <span className="sr-only">{labels.stars(stats.stars)}</span>
            </span>
          )}
          {stats.forks > 0 && (
            <span className="inline-flex items-center gap-1">
              <GitFork aria-hidden="true" className="size-3.5" />
              <span aria-hidden="true">{stats.forks}</span>
              <span className="sr-only">{labels.forks(stats.forks)}</span>
            </span>
          )}
          <span className="inline-flex items-center gap-1">
            <Clock aria-hidden="true" className="size-3.5" />
            {labels.updated}{" "}
            <time dateTime={stats.updated}>{formatDate(stats.updated)}</time>
          </span>
        </div>

        <div className="flex gap-2">
          <Button asChild variant="outline" size="sm">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${labels.openOnGitHub(project.repo)} ${ui.newTab}`}
            >
              <GitHubIcon />
              {labels.open}
            </a>
          </Button>
          {project.liveUrl && (
            <Button asChild size="sm">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${labels.tryLive(project.repo)} ${ui.newTab}`}
              >
                <ExternalLink />
                {labels.live}
              </a>
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
}
