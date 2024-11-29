import { SectionType } from '@/lib/data/project2025/types';
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
  tagline: "Explores national security and defense policies with a focus on centralization and control.",
  logline: "This section delves into national defense and security policies, advocating for a centralized approach that emphasizes executive control over key agencies.",
  description: "This section outlines sweeping changes to the United States' defense and security infrastructure, prioritizing military expansion, alignment with the President’s agenda, and significant restructuring of media and international aid organizations to reflect administration priorities.",
};

export default theCommonDefense;
