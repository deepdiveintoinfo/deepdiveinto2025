import { SectionType } from '@/content/project2025/types';
import departmentOfAgriculture from './department-of-agriculture';
import departmentOfEducation from './department-of-education';
import departmentOfEnergy from './department-of-energy';
import environmentalProtectionAgency from './environmental-protection-agency';
import departmentOfHealthAndHumanServices from './department-of-health-and-human-services';
import departmentOfHousingAndUrbanDevelopment from './department-of-housing-and-urban-development';
import departmentOfTheInterior from './department-of-the-interior';
import departmentOfJustice from './department-of-justice';
import departmentOfLabor from './department-of-labor';
import departmentOfTransportation from './department-of-transportation';
import departmentOfVeteransAffairs from './department-of-veterans-affairs';

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
    departmentOfTransportation,
    departmentOfVeteransAffairs,
  ],
  emoji: "🌱",
  url: "/project2025/the-general-welfare",
  tagline: "Deregulation at the public's expense.",
  logline:
    "This section emphasizes deregulation across key domestic agencies, raising concerns about reduced oversight and potential negative impacts on equity, safety, and environmental protections.",
  description:
    "This section explores federal domestic policies, including agriculture, education, labor, and environmental protection. It advocates for reduced federal intervention and increased efficiency, often prioritizing economic growth over public welfare, equity, and sustainability.",
};

export default theGeneralWelfare;
