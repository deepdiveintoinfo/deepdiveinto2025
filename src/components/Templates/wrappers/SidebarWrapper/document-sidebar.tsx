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
  FileText
} from "lucide-react";

import { ContentNav } from "./sections-menu";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
} from "@/components/ThirdParty/ShadCn/Sidebar";
import { SearchForm } from "./search-form";
import { VersionSwitcher } from "./version-switcher";

const data = {
  versions: Object.keys({thorough: "C1", clear: "B2", simple: "B1", basic: "A2", essential: "A1"}),
};

const sections = [
  {
    title: "Taking the Reins of Government",
    url: "/project2025/taking-the-reins-of-government",
    icon: Shield,
    chapters: [
      { title: "1. White House Office", url: "/project2025/taking-the-reins-of-government/white-house-office", icon: Home },
      { title: "2. Executive Office of the President", url: "/project2025/taking-the-reins-of-government/executive-office-of-the-president-of-the-united-states", icon: Briefcase },
      { title: "3. Central Personnel Agencies", url: "/project2025/taking-the-reins-of-government/central-personel-agencies-manageing-the-bureaucracy", icon: Building },
    ],
  },
  {
    title: "The Common Defense",
    url: "/project2025/the-common-defense",
    icon: Users,
    chapters: [
      { title: "4. Department of Defense", url: "/project2025/the-common-defense/department-of-defense", icon: Shield },
      { title: "5. Department of Homeland Security", url: "/project2025/the-common-defense/department-of-homeland-security", icon: Shield },
      { title: "6. Department of State", url: "/project2025/the-common-defense/department-of-state", icon: FileText },
      { title: "7. Intelligence Community", url: "/project2025/the-common-defense/intelligence-community", icon: FileText },
      { title: "8. Media Agencies", url: "/project2025/the-common-defense/media-agencies", icon: BookOpen },
      { title: "9. Agency for International Development", url: "/project2025/the-common-defense/agency-for-international-development", icon: Building },
    ],
  },
  {
    title: "The General Welfare",
    url: "/project2025/the-general-welfare",
    icon: List,
    chapters: [
      { title: "10. Department of Agriculture", url: "/project2025/the-general-welfare/department-of-agriculture", icon: BookOpen },
      { title: "11. Department of Education", url: "/project2025/the-general-welfare/department-of-education", icon: FileText },
      { title: "12. Department of Energy", url: "/project2025/the-general-welfare/department-of-energy", icon: Shield },
      { title: "13. Environmental Protection Agency", url: "/project2025/the-general-welfare/environmental-protection-agency", icon: Building },
      { title: "14. Department of Health and Human Services", url: "/project2025/the-general-welfare/department-of-health-and-human-services", icon: Briefcase },
      { title: "15. Department of Housing and Urban Development", url: "/project2025/the-general-welfare/department-of-housing-and-urban-development", icon: FileText },
      { title: "16. Department of the Interior", url: "/project2025/the-general-welfare/department-of-the-interior", icon: Shield },
      { title: "17. Department of Justice", url: "/project2025/the-general-welfare/department-of-justice", icon: Home },
      { title: "18. Department of Labor", url: "/project2025/the-general-welfare/department-of-labor", icon: Briefcase },
      { title: "19. Department of Transportation", url: "/project2025/the-general-welfare/department-of-transportation", icon: Building },
      { title: "20. Department of Veterans Affairs", url: "/project2025/the-general-welfare/department-of-veterans-affairs", icon: Shield },
    ],
  },
  {
    title: "The Economy",
    url: "/project2025/the-economy",
    icon: PieChart,
    chapters: [
      { title: "21. Department of Commerce", url: "/project2025/the-economy/department-of-commerce", icon: Building },
      { title: "22. Department of the Treasury", url: "/project2025/the-economy/department-of-the-treasury", icon: Briefcase },
      { title: "23. Export-Import Bank", url: "/project2025/the-economy/export-import-bank", icon: BookOpen },
      { title: "24. Federal Reserve", url: "/project2025/the-economy/federal-reserve", icon: FileText },
      { title: "25. Small Business Administration", url: "/project2025/the-economy/small-business-administration", icon: Building },
      { title: "26. Trade", url: "/project2025/the-economy/trade", icon: FileText },
    ],
  },
  {
    title: "Independent Regulatory Agencies",
    url: "/project2025/independent-regulatory-agencies",
    icon: Settings2,
    chapters: [
      { title: "27. Financial Regulatory Agencies", url: "/project2025/independent-regulatory-agencies/financial-regulatory-agencies", icon: PieChart },
      { title: "28. Federal Communications Commission", url: "/project2025/independent-regulatory-agencies/federal-communications-commission", icon: FileText },
      { title: "29. Federal Election Commission", url: "/project2025/independent-regulatory-agencies/federal-election-commission", icon: FileText },
      { title: "30. Federal Trade Commission", url: "/project2025/independent-regulatory-agencies/federal-trade-commission", icon: Briefcase },
    ],
  },
];
  

export function DocumentSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <VersionSwitcher
          versions={data.versions}
          defaultVersion={data.versions[0]}
        />
        <SearchForm />
      </SidebarHeader>

      <SidebarContent className="bg-primary-lighter">
        {/* Sections with Chapters */}
        <ContentNav
            title={"Sections"}
            key={"Sections"}
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
      </SidebarContent>
    </Sidebar>
  );
}
