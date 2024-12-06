import { SectionType } from '@/content/project2025/types';
import departmentOfDefense from './department-of-defense';
import departmentOfHomelandSecurity from './department-of-homeland-security';
import departmentOfState from './department-of-state';
import intelligenceCommunity from './intelligence-community';
import mediaAgencies from './media-agencies';
import agencyForInternationalDevelopment from './agency-for-international-development';

export const theCommonDefense: SectionType = {
  title: "The Common Defense",
  sectionId: "the-common-defense",
  sectionIdx: 2,
  chapters: [
    departmentOfDefense,
    departmentOfHomelandSecurity,
    departmentOfState,
    intelligenceCommunity,
    mediaAgencies,
    agencyForInternationalDevelopment,
  ],
  emoji: "⚔️",
  url: "/project2025/the-common-defense",
  tagline: "Security at any cost.",
  logline: "This section prioritizes aggressive national security and defense policies, often with limited regard for checks, balances, or humanitarian considerations.",
  description: "This section outlines sweeping changes to the United States' defense and security infrastructure, prioritizing military expansion, alignment with the President’s agenda, and significant restructuring of media and international aid organizations to reflect administration priorities.",
};

export default theCommonDefense;
