import { Mail, MapPin } from "lucide-react";

import { ContactForm } from "@/components/contact-form";
import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";
import { Card } from "@/components/ui/card";
import { profile, socialLinks, type SocialLink } from "@/content/profile";
import { contactPage, seo, ui } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Contact",
  description: seo.pages.contact,
  path: "/contact",
});

const icons: Record<SocialLink["kind"], React.ComponentType<{ className?: string }>> = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  email: Mail,
};

// Email first, then LinkedIn and GitHub
const order: SocialLink["kind"][] = ["email", "linkedin", "github"];

export default function ContactPage() {
  const links = order.map((kind) => socialLinks.find((l) => l.kind === kind)!);

  return (
    <section aria-labelledby="contact-heading" className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          id="contact-heading"
          as="h1"
          title={contactPage.title}
          description={contactPage.intro}
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <Card className="relative h-full p-6 sm:p-8">
              <ContactForm />
            </Card>
          </Reveal>

          <Reveal className="lg:col-span-2" delay={0.08}>
          <Card className="h-full gap-5 p-6 sm:p-8">
            <h2 className="text-lg font-semibold tracking-tight">{contactPage.asideTitle}</h2>
            <ul className="space-y-4">
              {links.map((link) => {
                const Icon = icons[link.kind];
                const external = link.kind !== "email";
                const shown =
                  link.kind === "email"
                    ? profile.email
                    : link.href.replace(/^https:\/\/(www\.)?/, "");
                return (
                  <li key={link.kind}>
                    <a
                      href={link.href}
                      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
                      className="group flex items-start gap-3 rounded-md outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
                    >
                      <span className="grid size-9 shrink-0 place-items-center rounded-full bg-secondary text-primary">
                        <Icon className="size-4" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-sm font-medium">{link.label}</span>
                        <span className="block text-sm break-all text-muted-foreground group-hover:text-foreground">
                          {shown}
                        </span>
                        {external && <span className="sr-only"> {ui.newTab}</span>}
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
            <p className="flex items-center gap-2 border-t border-border/60 pt-5 text-sm text-muted-foreground">
              <MapPin aria-hidden="true" className="size-4 shrink-0" />
              {profile.location} · {profile.availability}
            </p>
          </Card>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
