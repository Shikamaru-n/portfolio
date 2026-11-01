import Image from "next/image";
import { ChessKnight, Footprints, GraduationCap, Grid3x3, Heart, MapPin } from "lucide-react";

import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { SkillCluster } from "@/components/skill-cluster";
import { Timeline } from "@/components/timeline";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { experience } from "@/content/experience";
import { bio, education, interests, photo, profile } from "@/content/profile";
import { labels, seo } from "@/content/site";
import { skillClusters } from "@/content/skills";
import { pageMetadata } from "@/lib/metadata";

const interestIcons = { chess: ChessKnight, running: Footprints, sudoku: Grid3x3 };

export const metadata = pageMetadata({
  title: "About",
  description: seo.pages.about,
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      {/* Intro */}
      <section aria-labelledby="about-name" className="py-16 sm:py-20">
        <Container className="flex flex-col gap-8 sm:flex-row sm:items-center">
          <Image
            src={photo.src}
            alt={photo.alt}
            width={photo.width}
            height={photo.height}
            loading="eager"
            fetchPriority="high"
            className="size-32 shrink-0 rounded-full object-cover shadow-xl ring-4 ring-primary/30 sm:size-40"
          />
          <div>
            <h1 id="about-name" className="text-4xl font-bold tracking-tight sm:text-5xl">
              {profile.name}
            </h1>
            <ul className="mt-4 flex flex-wrap gap-2">
              {profile.roles.map((role) => (
                <li key={role}>
                  <Badge variant="secondary" className="h-auto px-2.5 py-1 font-mono">
                    {role}
                  </Badge>
                </li>
              ))}
            </ul>
            <p className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin aria-hidden="true" className="size-4 shrink-0" />
              {profile.location} · {profile.availability}
            </p>
          </div>
        </Container>
      </section>

      {/* Background */}
      <section aria-labelledby="background-heading" className="pb-16 sm:pb-20">
        <Container>
          <Reveal>
            <SectionHeading id="background-heading" title={labels.background} />
            <div className="mt-6 max-w-3xl space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {bio.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Tech stack: all clusters */}
      <section
        aria-labelledby="stack-heading"
        className="border-y border-border/60 bg-muted/30 py-16 sm:py-20"
      >
        <Container>
          <Reveal>
            <SectionHeading id="stack-heading" title={labels.techStack} />
          </Reveal>
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {skillClusters.map((cluster, i) => (
              <Reveal key={cluster.title} delay={(i % 3) * 0.06}>
                <SkillCluster cluster={cluster} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Experience & training */}
      <section aria-labelledby="experience-heading" className="py-16 sm:py-20">
        <Container>
          <Reveal>
            <SectionHeading id="experience-heading" title={labels.experience} />
          </Reveal>
          <Reveal className="mt-8 max-w-3xl">
            <Timeline entries={experience} />
          </Reveal>
        </Container>
      </section>

      {/* Education and interests */}
      <div className="pb-4">
        <Container className="grid gap-6 md:grid-cols-3">
          <Reveal className="h-full md:col-span-2">
            <Card className="h-full gap-4 p-6">
              <h2 className="flex items-center gap-2 text-xl font-semibold tracking-tight">
                <GraduationCap aria-hidden="true" className="size-5 text-primary" />
                {labels.education}
              </h2>
              <div>
                {/* Class of degree sits inline on wider screens, on its own line on phones */}
                <p className="font-medium">
                  {education.degree}
                  <span className="hidden sm:inline"> ({education.degreeClass})</span>
                </p>
                <p className="text-sm font-medium sm:hidden">{education.degreeClassShort}</p>
                <p className="text-sm text-muted-foreground">
                  {education.school} · {education.years}
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-sm font-semibold">{labels.coursework}</h3>
                <ul className="flex flex-wrap gap-2">
                  {education.coursework.map((course) => (
                    <li key={course}>
                      <Badge
                        variant="outline"
                        className="h-auto font-normal whitespace-normal text-muted-foreground"
                      >
                        {course}
                      </Badge>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          </Reveal>

          <Reveal className="h-full" delay={0.08}>
            <Card className="h-full gap-4 p-6">
              <h2 className="flex items-center gap-2 text-xl font-semibold tracking-tight">
                <Heart aria-hidden="true" className="size-5 text-primary" />
                {labels.interests}
              </h2>
              <ul className="space-y-4">
                {interests.map((interest) => {
                  const Icon = interestIcons[interest.icon];
                  return (
                    <li key={interest.label} className="flex gap-3">
                      <Icon
                        aria-hidden="true"
                        className="mt-0.5 size-4 shrink-0 text-muted-foreground"
                      />
                      <div>
                        <p className="font-medium">{interest.label}</p>
                        <p className="text-sm leading-relaxed text-muted-foreground">
                          {interest.description}
                        </p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </Card>
          </Reveal>
        </Container>
      </div>
    </>
  );
}
