import { SectionType } from '@/lib/data/project2025/types';
import financialRegulatoryAgencies from './financial-regulatory-agencies';
import federalCommunicationsCommission from './federal-communications-commission';
import federalElectionCommission from './federal-election-commission';
import federalTradeCommission from './federal-trade-commission';

const independentRegulatoryAgencies: SectionType = {
  title: "Independent Regulatory Agencies",
  sectionId: "independent-regulatory-agencies",
  sectionIdx: 5,
  chapters: [
    financialRegulatoryAgencies,
    federalCommunicationsCommission,
    federalElectionCommission,
    federalTradeCommission,
  ],
  emoji: "🏦",
  url: "/project2025/independent-regulatory-agencies",
  tagline: "Focuses on reducing regulatory agency independence and oversight.",
  logline:
    "This section examines proposals to reform independent regulatory agencies, reducing oversight and increasing market-driven approaches. The changes risk undermining consumer protections, media independence, and electoral fairness.",
  description:
    "The Independent Regulatory Agencies section critiques existing frameworks for financial, media, and electoral regulation. Key proposals include reducing the influence of independent oversight in favor of executive-driven or market-oriented reforms. Critics argue these changes could lead to reduced transparency, increased influence of money in politics, and monopolistic practices.",
};

export default independentRegulatoryAgencies;
