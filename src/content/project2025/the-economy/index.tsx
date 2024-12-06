import { SectionType } from '@/content/project2025/types';
import departmentOfCommerce from './department-of-commerce';
import departmentOfTheTreasury from './the-department-of-the-treasury';
import exportImportBank from './export-import-bank';
import federalReserve from './federal-reserve';
import smallBusinessAdministration from './small-business-administration';
import trade from './trade';

const theEconomy: SectionType = {
  title: "The Economy",
  sectionId: "the-economy",
  sectionIdx: 4,
  chapters: [
    departmentOfCommerce,
    departmentOfTheTreasury,
    exportImportBank,
    federalReserve,
    smallBusinessAdministration,
    trade,
  ],
  emoji: "💰",
  url: "/project2025/the-economy",
  tagline: "Restricting access to the free market.",
  logline:
    "This section advocates for economic policies that favor deregulation and tax restructuring, often benefiting wealthier entities while limiting broader participation.",
  description:
    "The Economy section details policy proposals aimed at streamlining commerce, reducing regulatory barriers, and enhancing free-market competitiveness. Key areas include tax reforms favoring corporations and high-income earners, debates over the future of institutions like the Export–Import Bank, and a reevaluation of monetary policy through Federal Reserve reforms. Small businesses are encouraged through deregulation, although limited focus is given to inclusivity. Trade policy emphasizes globalization and market liberalization, presenting both opportunities and risks for domestic industries.",
};

export default theEconomy;
