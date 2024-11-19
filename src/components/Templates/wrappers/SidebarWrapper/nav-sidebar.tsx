"use client";

import * as React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ThirdParty/ShadCn/Sidebar";
import { Link, useLocation } from "react-router-dom";

// This is sample data.
const data = {
    versions: ["1.0.1", "1.1.0-alpha", "2.0.0-beta1"],
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
            title: "About the Project",
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
    <Sidebar collapsible="icon" {...props}>
      {/* <SidebarHeader className="bg-primary-lighter">
        
        <p className="ml-2 text-lg font-bold"><GiSniffingDog className="inline-block ml-2" size={32} />Deep Dive Into 2025</p>
      </SidebarHeader> */}
      <SidebarContent>
        {/* We create a SidebarGroup for each parent. */}
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={location.pathname == item.url.replace('#', '')}>
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
