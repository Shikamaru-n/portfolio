import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/container";
import { Hero } from "@/components/hero";
import { Reveal } from "@/components/reveal";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { SkillCluster } from "@/components/skill-cluster";
import { Button } from "@/components/ui/button";
import { aboutPreview } from "@/content/profile";
import { projects } from "@/content/projects";
import { labels } from "@/content/site";
import { skillClusters } from "@/content/skills";
import { getStatsByRepo } from "@/lib/github";

export const metadata: Metadata = { alternates: { canonical: "/" } };

export default async function HomePage() {
  const featured = projects.filter((p) => p.featured);
  // Runs once at build time; falls back to static values if GitHub is unreachable
  const stats = await getStatsByRepo(featured);

  return (
    <>
      <Hero />

      <section
        aria-labelledby="about-heading"
        className="border-y border-border/60 bg-muted/30 py-16 sm:py-20"
      >
        <Container>
          <Reveal>
            <SectionHeading
              id="about-heading"
              eyebrow={aboutPreview.eyebrow}
              title={aboutPreview.headline}
            />
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {aboutPreview.body}
            </p>
          </Reveal>

          <h3 className="mt-12 text-xl font-semibold tracking-tight">{labels.techStack}</h3>
          <div className="mt-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {skillClusters
              .filter((c) => c.showOnHome)
              .map((cluster, i) => (
                <Reveal key={cluster.title} delay={(i % 3) * 0.06}>
                  <SkillCluster cluster={cluster} headingLevel="h4" />
                </Reveal>
              ))}
          </div>

          <Button asChild variant="outline" size="lg" className="mt-10 h-11 px-5">
            <Link href={aboutPreview.link.href}>
              {aboutPreview.link.label}
              <ArrowRight aria-hidden="true" />
            </Link>
          </Button>
        </Container>
      </section>

      <section aria-labelledby="featured-heading" className="py-16 sm:py-20">
        <Container>
          <Reveal>
            <SectionHeading
              id="featured-heading"
              title={labels.featuredProjects}
              description={labels.featuredProjectsIntro}
            />
          </Reveal>
          <ul className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((project, i) => (
              <li key={project.repo}>
                <Reveal className="h-full" delay={i * 0.08}>
                  <ProjectCard project={project} stats={stats[project.repo]} />
                </Reveal>
              </li>
            ))}
          </ul>
          <Button asChild variant="outline" size="lg" className="mt-10 h-11 px-5">
            <Link href="/projects">
              {labels.viewAllProjects}
              <ArrowRight aria-hidden="true" />
            </Link>
          </Button>
        </Container>
      </section>
    </>
  );
}
