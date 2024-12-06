import { SectionType } from '@/content/project2025/types';
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
  tagline: "Removing independence, dismantling protections.",
  logline:
    "This section focuses on reducing the autonomy of regulatory agencies, weakening consumer protections and oversight mechanisms.",
  description:
    "The Independent Regulatory Agencies section critiques existing frameworks for financial, media, and electoral regulation. Key proposals include reducing the influence of independent oversight in favor of executive-driven or market-oriented reforms. Critics argue these changes could lead to reduced transparency, increased influence of money in politics, and monopolistic practices.",
};

export default independentRegulatoryAgencies;
