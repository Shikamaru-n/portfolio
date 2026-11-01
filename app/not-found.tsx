import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { notFoundPage } from "@/content/site";

export const metadata: Metadata = {
  title: notFoundPage.title,
  robots: { index: false },
};

export default function NotFound() {
  return (
    <Container className="py-24 sm:py-32">
      <p className="font-mono text-sm font-medium text-primary">404</p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">{notFoundPage.title}</h1>
      <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">
        {notFoundPage.body}
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Button asChild size="lg" className="h-11 px-5">
          <Link href="/">
            {notFoundPage.home}
            <ArrowRight aria-hidden="true" />
          </Link>
        </Button>
        <Button asChild size="lg" variant="outline" className="h-11 px-5">
          <Link href="/projects">{notFoundPage.projects}</Link>
        </Button>
      </div>
    </Container>
  );
}
