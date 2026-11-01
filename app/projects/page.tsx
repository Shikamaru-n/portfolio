import { Container } from "@/components/container";
import { ProjectsExplorer } from "@/components/projects-explorer";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/content/projects";
import { projectsPage, seo } from "@/content/site";
import { getStatsByRepo } from "@/lib/github";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Projects",
  description: seo.pages.projects,
  path: "/projects",
});

export default async function ProjectsPage() {
  // Fetched once at build time; falls back to static values if GitHub is unreachable
  const stats = await getStatsByRepo(projects);

  return (
    <section aria-labelledby="projects-heading" className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          id="projects-heading"
          as="h1"
          title={projectsPage.title}
          description={projectsPage.intro}
        />
        <div className="mt-10">
          <ProjectsExplorer projects={projects} stats={stats} />
        </div>
      </Container>
    </section>
  );
}
