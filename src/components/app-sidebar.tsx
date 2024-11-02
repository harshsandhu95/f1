import Link from "next/link";
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "./ui/sidebar";
import { CalendarCheckIcon, CalendarIcon, LucideProps, UserIcon, UsersIcon } from "lucide-react";

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
    </Sidebar>
  )
};

export default AppSidebar;
