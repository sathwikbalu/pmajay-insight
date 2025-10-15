import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  UserPlus,
  FolderKanban,
  DollarSign,
  GraduationCap,
  MessageSquare,
  ThumbsUp,
  BarChart3,
  Home,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { useTranslation } from "react-i18next";

export function AppSidebar() {
  const { open } = useSidebar();
  const { t } = useTranslation();

  const menuItems = [
    { title: t('sidebar.home'), url: "/", icon: Home },
    { title: t('sidebar.dashboard'), url: "/dashboard/beneficiary", icon: LayoutDashboard },
  ];

  const moduleItems = [
    { title: t('sidebar.beneficiaryForm'), url: "/modules/beneficiary-form", icon: UserPlus },
    { title: t('sidebar.projectTracking'), url: "/modules/project-tracking", icon: FolderKanban },
    { title: t('sidebar.fundUtilization'), url: "/modules/fund-utilization", icon: DollarSign },
    { title: t('sidebar.skillTraining'), url: "/modules/skill-training", icon: GraduationCap },
    { title: t('sidebar.grievance'), url: "/modules/grievance", icon: MessageSquare },
    { title: t('sidebar.feedback'), url: "/modules/feedback", icon: ThumbsUp },
    { title: t('sidebar.analytics'), url: "/analytics", icon: BarChart3 },
  ];

  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>{t('sidebar.main')}</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      end={item.url === "/"}
                      className={({ isActive }) =>
                        isActive ? "bg-sidebar-accent font-medium" : ""
                      }
                    >
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel>{t('sidebar.modules')}</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {moduleItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      className={({ isActive }) =>
                        isActive ? "bg-sidebar-accent font-medium" : ""
                      }
                    >
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
