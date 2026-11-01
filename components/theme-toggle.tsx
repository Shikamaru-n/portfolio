"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ui } from "@/content/site";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon-lg" aria-label={ui.themeMenuLabel}>
          {/* CSS picks the icon, so the server and browser render the same HTML */}
          <Sun className="size-[1.1rem] dark:hidden" />
          <Moon className="hidden size-[1.1rem] dark:block" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-36">
        <DropdownMenuRadioGroup value={theme ?? "dark"} onValueChange={setTheme}>
          <DropdownMenuRadioItem value="light">
            <Sun /> {ui.themeOptions.light}
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="dark">
            <Moon /> {ui.themeOptions.dark}
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="system">
            <Monitor /> {ui.themeOptions.system}
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
