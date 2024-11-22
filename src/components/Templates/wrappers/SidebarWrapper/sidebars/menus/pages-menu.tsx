"use client";

import * as React from "react";

import {  SearchIcon, InfoIcon, ShareIcon, CircleHelpIcon } from "lucide-react";

import {
  Sidebar,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ThirdParty/ShadCn/Sidebar";
import { Link, useLocation } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

const pages = [
  {
    title: "Explore Project 2025",
    icon: SearchIcon, // Assuming a search or explore icon fits the context
    url: "/project2025",
  },
  {
    title: "About Deep Dive",
    icon: InfoIcon, // Info or document-style icon works here
    url: "/about",
  },
  {
    title: "Contribute",
    icon: ShareIcon, // Share or collaboration-related icon fits here
    url: "/contribute",
  },
  {
    title: "Frequently Asked Questions",
    icon: CircleHelpIcon, // Question mark icon aligns with FAQs
    url: "/faq",
  },
];
    

export function PagesMenu({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const isMobile = useIsMobile();
  const { setOpenMobile } = useSidebar()
  const location = useLocation()
  return (
      <SidebarGroup key={"Pages"} {...props}>
        <SidebarGroupLabel>Pages</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {pages.map((item) => (
                <SidebarMenuItem key={item.title} onClick={() => isMobile ? setOpenMobile(false) : null}>
                  <SidebarMenuButton asChild isActive={(item.url != '/' && location.pathname.startsWith(item.url.replace('#', ''))) || location.pathname == item.url}>
                    <Link to={item.url}>{item.icon && <item.icon size={16} />} <span>{item.title}</span></Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
  );
}
