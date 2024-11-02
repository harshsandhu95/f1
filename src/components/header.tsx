import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SidebarTrigger } from "./ui/sidebar";

const Header = async () => {
  // const navItems: NavItems[] = [
  //   { title: "Home", url: "/", icon: HomeIcon },
  //   { title: "Standings", url: "/standings", icon: CrownIcon },
  //   { title: "Schedule", url: "/schedule", icon: CalendarIcon },
  // ];

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
        </div>
      </header>
    </div>
  );
};

export default Header;
