import { SectionType } from '@/lib/data/project2025/types';
import departmentOfAgriculture from './department-of-agriculture';
import departmentOfEducation from './department-of-education';
import departmentOfEnergy from './department-of-energy';
import environmentalProtectionAgency from './environmental-protection-agency';
import departmentOfHealthAndHumanServices from './department-of-health-and-human-services';
import departmentOfHousingAndUrbanDevelopment from './department-of-housing-and-urban-development';
import departmentOfTheInterior from './department-of-the-interior';
import departmentOfJustice from './department-of-justice';
import departmentOfLabor from './department-of-labor';

export const theGeneralWelfare: SectionType = {
  title: "The General Welfare",
  sectionId: "the-general-welfare",
  sectionIdx: 3,
  chapters: [
    departmentOfAgriculture,
    departmentOfEducation,
    departmentOfEnergy,
    environmentalProtectionAgency,
    departmentOfHealthAndHumanServices,
    departmentOfHousingAndUrbanDevelopment,
    departmentOfTheInterior,
    departmentOfJustice,
    departmentOfLabor,
  ],
  emoji: "🌱",
  url: "/project2025/the-general-welfare",
  tagline: "Covers domestic policy with an emphasis on deregulation and reduced federal oversight.",
  logline:
    "This section outlines reforms to federal agencies tasked with domestic welfare, emphasizing deregulation and reduced oversight. It raises concerns about the balance between efficiency, equity, and public welfare.",
  description:
    "This section explores federal domestic policies, including agriculture, education, labor, and environmental protection. It advocates for reduced federal intervention and increased efficiency, often prioritizing economic growth over public welfare, equity, and sustainability.",
};

export default theGeneralWelfare;
