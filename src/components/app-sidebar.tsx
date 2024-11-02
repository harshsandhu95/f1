import Link from "next/link";
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarTrigger } from "./ui/sidebar";
import { CalendarCheckIcon, CalendarIcon, LucideProps, UserIcon, UsersIcon } from "lucide-react";
import Image from "next/image";

type TSidebarGroup = {
  title: string;
  children: {
    title: string;
    url: string;
    icon?: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
  }[];
};

const AppSidebar = () => {
  const navbar: TSidebarGroup[] = [
    {
      title: "Standings",
      children: [
        { title: "Drivers", url: "/standings/drivers", icon: UserIcon },
        { title: "Constructors", url: "/standings/constructors", icon: UsersIcon },
      ]
    },
    {
      title: "Schedule",
      children: [
        { title: "Calendar", url: "/schedule", icon: CalendarIcon },
        { title: "Sessions", url: "/schedule/sessions", icon: CalendarCheckIcon },
      ]
    }
  ];

  return (
    <Sidebar variant="inset" collapsible="icon">
      <SidebarHeader>
        <Link href="/" className="h-16 flex items-center justify-center">
          <Image src="/images/logo.png" alt="F1 Stats" width={60} height={48} />
        </Link>
      </SidebarHeader>

      <SidebarContent>
        {navbar.map(({ title, children }) => (
          <SidebarGroup key={title}>
            <SidebarGroupLabel>{title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {children.map((child) => (
                  <SidebarMenuItem key={child.title}>
                    <SidebarMenuButton asChild>
                      <Link href={child.url}>
                        {child.icon && <child.icon size={16} />}
                        <span>{child.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>

      <SidebarFooter>
        <SidebarTrigger />
      </SidebarFooter>
    </Sidebar>
  )
};

export default AppSidebar;
