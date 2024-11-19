"use client";

import * as React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ThirdParty/ShadCn/Sidebar";
import { Link, useLocation } from "react-router-dom";

// This is sample data.
const data = {
    navMain: [
      {
        title: "Pages",
        url: "#",
        items: [
          {
            title: "Home",
            url: "/",
          },
          {
            title: "Explore Project 2025",
            url: "/project2025",
          },
          {
            title: "About Deep Dive",
            url: "/about",
          },
          {
            title: "Contribute",
            url: "/contribute",
          },
          {
            title: "Frequently Asked Questions",
            url: "/faq",
          },
        ],
      },
    ],
  }
    

export function NavSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const location = useLocation()
  return (
    <Sidebar {...props}>
        <SidebarHeader>
            <SidebarMenu>
            <SidebarMenuItem>
                    <div className="flex flex-col gap-0.5 leading-none h-9 justify-center align-middle">
                        <span className="font-semibold">Deep Dive Into Project 2025</span>
                    </div>
            </SidebarMenuItem>
            </SidebarMenu>
        </SidebarHeader>
      <SidebarContent>
        {/* We create a SidebarGroup for each parent. */}
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={(item.url != '/' && location.pathname.startsWith(item.url.replace('#', ''))) || location.pathname == item.url}>
                      <Link to={item.url}>{item.title}</Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  );
}
