import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { hero, photo, profile } from "@/content/profile";

export function Hero() {
  return (
    <section aria-labelledby="hero-heading" className="py-16 sm:py-24">
      <Container className="grid grid-cols-1 items-center gap-10 md:grid-cols-[1fr_auto] md:gap-16">
        <div className="order-2 min-w-0 md:order-1">
          <h1
            id="hero-heading"
            className="text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl"
          >
            {hero.greeting}
          </h1>

          <p className="mt-4 font-mono text-sm leading-relaxed text-primary sm:text-base">
            {/* Real spaces around each "|" give the line places to wrap on narrow phones */}
            {profile.roles.map((role, i) => (
              <span key={role}>
                {i > 0 && (
                  <>
                    {" "}
                    <span aria-hidden="true" className="mx-1 text-muted-foreground">
                      |
                    </span>{" "}
                  </>
                )}
                <span className="whitespace-nowrap">{role}</span>
                {i < profile.roles.length - 1 && <span className="sr-only">,</span>}
              </span>
            ))}
          </p>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            {hero.intro}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="h-11 px-5 text-base">
              <Link href={hero.primaryCta.href}>
                {hero.primaryCta.label}
                <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-11 px-5 text-base">
              <Link href={hero.secondaryCta.href}>{hero.secondaryCta.label}</Link>
            </Button>
          </div>

          <p className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin aria-hidden="true" className="size-4 shrink-0" />
            {profile.location} · {profile.availability}
          </p>
        </div>

        <div className="order-1 md:order-2">
          <Image
            src={photo.src}
            alt={photo.alt}
            width={photo.width}
            height={photo.height}
            loading="eager"
            fetchPriority="high"
            className="size-36 rounded-full object-cover shadow-xl ring-4 ring-primary/30 sm:size-44 md:size-64"
          />
        </div>
      </Container>
    </section>
  );
}
