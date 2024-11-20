"use client";

import * as React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ThirdParty/ShadCn/Sidebar";
import { Link, useLocation } from "react-router-dom";
import { PagesMenu } from "../menus/pages-menu";    
import { Home } from "lucide-react";

export function SiteSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const location = useLocation()
  return (
    <Sidebar collapsible="icon" {...props}>
        <SidebarHeader>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={(location.pathname === '/')}>
                      <Link to={"/"}>{<Home size={16} />} <span className="font-semibold">Deep Dive Into Project 2025</span></Link>
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
