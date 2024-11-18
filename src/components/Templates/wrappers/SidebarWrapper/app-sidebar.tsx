"use client";

import * as React from "react";
import {
  BookOpen,
  Shield,
  Home,
  Users,
  List,
  PieChart,
  Settings2,
  Briefcase,
  Building,
  FileText,
} from "lucide-react";

import { NavMain } from "./nav-main";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarRail,
} from "@/components/ThirdParty/ShadCn/Sidebar";

const sections = [
    {
      title: "Taking the Reins of Government",
      url: "/#/project2025/taking-the-reins-of-government",
      icon: Shield,
      chapters: [
        { title: "1. White House Office", url: "/#/project2025/taking-the-reins-of-government/white-house-office", icon: Home },
        { title: "2. Executive Office of the President", url: "/#/project2025/taking-the-reins-of-government/executive-office-of-the-president-of-the-united-states/", icon: Briefcase },
        { title: "3. Central Personnel Agencies", url: "/#/project2025/taking-the-reins-of-government/central-personel-agencies-manageing-the-bureaucracy/", icon: Building },
      ],
    },
    {
      title: "The Common Defense",
      url: "/#/project2025/the-common-defense",
      icon: Users,
      chapters: [
        { title: "4. Department of Defense", url: "/#/project2025/the-common-defense/department-of-defense/", icon: Shield },
        { title: "5. Department of Homeland Security", url: "/#/project2025/the-common-defense/department-of-homeland-security/", icon: Shield },
        { title: "6. Department of State", url: "/#/project2025/the-common-defense/department-of-state/", icon: FileText },
        { title: "7. Intelligence Community", url: "/#/project2025/the-common-defense/intelligence-community/", icon: FileText },
        { title: "8. Media Agencies", url: "/#/project2025/the-common-defense/media-agencies/", icon: BookOpen },
        { title: "9. Agency for International Development", url: "/#/project2025/the-common-defense/agency-for-international-development/", icon: Building },
      ],
    },
    {
      title: "The General Welfare",
      url: "/#/project2025/section/3",
      icon: List,
      chapters: [
        { title: "Department of Agriculture", url: "/#/project2025/chapter/10/", icon: BookOpen },
        { title: "Department of Education", url: "/#/project2025/chapter/11/", icon: FileText },
        { title: "Department of Energy", url: "/#/project2025/chapter/12/", icon: Shield },
        { title: "Environmental Protection Agency", url: "/#/project2025/chapter/13/", icon: Building },
        { title: "Department of Health and Human Services", url: "/#/project2025/chapter/14/", icon: Briefcase },
        { title: "Department of Housing and Urban Development", url: "/#/project2025/chapter/15/", icon: FileText },
        { title: "Department of the Interior", url: "/#/project2025/chapter/16/", icon: Shield },
        { title: "Department of Justice", url: "/#/project2025/chapter/17/", icon: Home },
        { title: "Department of Labor", url: "/#/project2025/chapter/18/", icon: Briefcase },
        { title: "Department of Transportation", url: "/#/project2025/chapter/19/", icon: Building },
        { title: "Department of Veterans Affairs", url: "/#/project2025/chapter/20/", icon: Shield },
      ],
    },
    {
      title: "The Economy",
      url: "/#/project2025/section/4",
      icon: PieChart,
      chapters: [
        { title: "Department of Commerce", url: "/#/project2025/chapter/21/", icon: Building },
        { title: "Department of the Treasury", url: "/#/project2025/chapter/22/", icon: Briefcase },
        { title: "Export-Import Bank", url: "/#/project2025/chapter/23/", icon: BookOpen },
        { title: "Federal Reserve", url: "/#/project2025/chapter/24/", icon: FileText },
        { title: "Small Business Administration", url: "/#/project2025/chapter/25/", icon: Building },
        { title: "Trade", url: "/#/project2025/chapter/26/", icon: FileText },
      ],
    },
    {
      title: "Independent Regulatory Agencies",
      url: "/#/project2025/independant-regulatory-agencies",
      icon: Settings2,
      chapters: [
        { title: "Financial Regulatory Agencies", url: "/#/project2025/chapter/27/", icon: PieChart },
        { title: "Federal Communications Commission", url: "/#/project2025/chapter/28/", icon: Building },
        { title: "Federal Election Commission", url: "/#/project2025/chapter/29/", icon: FileText },
        { title: "Federal Trade Commission", url: "/#/project2025/chapter/30/", icon: Briefcase },
      ],
    },
  ];
  

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarContent>
      </SidebarContent>
      <SidebarRail />
      <SidebarFooter>
        {/* Sections with Chapters */}
        <NavMain
            title={"Project 2025"}
            key={"Project 2025"}
            items={sections.map((section) => ({
                title: section.title,
                url: section.url,
                icon: section.icon,
                items: section.chapters.map((chapter) => ({
                  title: chapter.title,
                  url: chapter.url,
                  icon: chapter.icon, // Include the chapter icon here.
                }))
            }))
            }
          />
      </SidebarFooter>
    </Sidebar>
  );
}
