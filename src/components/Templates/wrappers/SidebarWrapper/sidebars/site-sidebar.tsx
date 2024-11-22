"use client";

import * as React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ThirdParty/ShadCn/Sidebar";
import { Link, useLocation } from "react-router-dom";
import { PagesMenu } from "./menus/pages-menu";    
import { ScrollTextIcon } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

export function SiteSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const location = useLocation()
  const isMobile = useIsMobile()
  const { setOpenMobile, setOpen } = useSidebar()

  return (
    <Sidebar collapsible="icon" {...props}>
        <SidebarHeader>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={(location.pathname === '/')} onClick={() => {
                  if(isMobile) {
                    setOpenMobile(false)
                    setOpen(false)
                  }
                }}>
                      <Link to={"/"}>{<ScrollTextIcon size={16} />} <span className="font-semibold">Deep Dive Into Project 2025</span></Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
        </SidebarHeader>
      <SidebarContent>
        <PagesMenu />
      </SidebarContent>
    </Sidebar>
  );
}
