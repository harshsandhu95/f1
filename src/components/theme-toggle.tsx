"use client";

import { useTheme } from "next-themes";
import { LaptopMinimalIcon, MoonIcon, SunIcon } from "lucide-react";
import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="size-7"
        >
          <MoonIcon
            size={16}
            className={theme === "dark" ? "visible" : "hidden"}
            suppressHydrationWarning
          />
          <SunIcon
            size={16}
            className={theme === "light" ? "visible" : "hidden"}
            suppressHydrationWarning
          />
          <LaptopMinimalIcon
            size={16}
            className={theme === "system" ? "visible" : "hidden"}
            suppressHydrationWarning
          />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ThemeToggle;
