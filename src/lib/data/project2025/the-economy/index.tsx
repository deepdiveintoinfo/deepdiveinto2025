import { SectionType } from '@/lib/data/project2025/types';
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
  tagline: "Outlines economic policies favoring deregulation and free-market principles.",
  logline:
    "This section advocates for significant economic reforms, prioritizing deregulation, tax restructuring, and free-market principles, often at the expense of oversight and equity.",
  description:
    "The Economy section details policy proposals aimed at streamlining commerce, reducing regulatory barriers, and enhancing free-market competitiveness. Key areas include tax reforms favoring corporations and high-income earners, debates over the future of institutions like the Export–Import Bank, and a reevaluation of monetary policy through Federal Reserve reforms. Small businesses are encouraged through deregulation, although limited focus is given to inclusivity. Trade policy emphasizes globalization and market liberalization, presenting both opportunities and risks for domestic industries.",
};

export default theEconomy;
