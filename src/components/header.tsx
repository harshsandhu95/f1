"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { SidebarTrigger } from "./ui/sidebar";
import { Button } from "./ui/button";
import { LaptopMinimalIcon, MoonIcon, SunIcon } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";

const Header = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex flex-col">
      <header className="py-4 bg-primary text-primary-foreground">
        <div className="container min-h-16 flex items-center justify-between gap-4">
          <SidebarTrigger />

          <Link href="/">
            <Image
              priority
              src="/images/logo-white.png"
              alt="Formula 1"
              width={96}
              height={24}
            />
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
              >
                <MoonIcon size={16} className={theme === "dark" ? "visible" : "hidden"} suppressHydrationWarning />
                <SunIcon size={16} className={theme === "light" ? "visible" : "hidden"} suppressHydrationWarning />
                <LaptopMinimalIcon size={16} className={theme === "system" ? "visible" : "hidden"} suppressHydrationWarning />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
    </div>
  );
};

export default Header;
