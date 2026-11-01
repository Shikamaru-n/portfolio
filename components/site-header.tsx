"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu } from "lucide-react";

import { Container } from "@/components/container";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { profile } from "@/content/profile";
import { nav, ui } from "@/content/site";
import { cn } from "@/lib/utils";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/80 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link
          href="/"
          className="flex items-center gap-2.5 rounded-md font-semibold tracking-tight outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
        >
          <span
            aria-hidden="true"
            className="grid size-8 place-items-center rounded-full bg-primary text-[0.7rem] font-bold text-primary-foreground"
          >
            MU
          </span>
          <span>{profile.name}</span>
        </Link>

        <div className="flex items-center gap-1">
          <nav aria-label={ui.mainNavLabel} className="hidden md:block">
            <ul className="flex items-center gap-1">
              {nav.map((item) => {
                const active = isActive(pathname, item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors outline-none hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/50",
                        active && "text-foreground",
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <ThemeToggle />

          <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon-lg"
                className="md:hidden"
                aria-label={ui.openMenu}
              >
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetHeader>
                <SheetTitle>{ui.menuTitle}</SheetTitle>
              </SheetHeader>
              <nav aria-label={ui.mainNavLabel} className="px-4">
                <ul className="flex flex-col gap-1">
                  {nav.map((item) => {
                    const active = isActive(pathname, item.href);
                    return (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          aria-current={active ? "page" : undefined}
                          onClick={() => setMenuOpen(false)}
                          className={cn(
                            "block rounded-md px-3 py-2.5 text-base font-medium text-muted-foreground transition-colors outline-none hover:bg-muted hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/50",
                            active && "bg-muted text-foreground",
                          )}
                        >
                          {item.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </header>
  );
}
