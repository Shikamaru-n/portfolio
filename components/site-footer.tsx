import Link from "next/link";
import { Mail } from "lucide-react";

import { Container } from "@/components/container";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import { profile, socialLinks, type SocialLink } from "@/content/profile";
import { nav, ui } from "@/content/site";

const icons: Record<SocialLink["kind"], React.ComponentType<{ className?: string }>> = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  email: Mail,
};

const linkClass =
  "inline-flex items-center gap-2 rounded-sm text-sm text-muted-foreground transition-colors outline-none hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/50";

export function SiteFooter() {
  // Static export: the year is set when the site is built.
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-border/60">
      <Container className="grid gap-10 py-12 sm:grid-cols-3">
        <div className="space-y-2">
          <p className="font-semibold tracking-tight">{profile.name}</p>
          <p className="text-sm text-muted-foreground">
            © {year} {profile.name}
          </p>
        </div>

        <nav aria-labelledby="footer-quick-links">
          <h2 id="footer-quick-links" className="mb-3 text-sm font-semibold">
            {ui.footerQuickLinks}
          </h2>
          <ul className="space-y-2">
            {nav
              .filter((item) => item.href !== "/")
              .map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={linkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
          </ul>
        </nav>

        <div>
          <h2 className="mb-3 text-sm font-semibold">{ui.footerConnect}</h2>
          <ul className="space-y-2">
            {socialLinks.map((link) => {
              const Icon = icons[link.kind];
              const external = link.kind !== "email";
              return (
                <li key={link.kind}>
                  <a
                    href={link.href}
                    className={linkClass}
                    {...(external && { target: "_blank", rel: "noopener noreferrer" })}
                  >
                    <Icon className="size-4" />
                    {link.label}
                    {external && <span className="sr-only"> {ui.newTab}</span>}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
