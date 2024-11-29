import { ChapterType } from '@/lib/data/project2025/types';

const financialRegulatoryAgencies: ChapterType = {
  chapterIdx: 25,
  title: "Financial Regulatory Agencies",
  chapterId: "financial-regulatory-agencies",
  url: "/project2025/independent-regulatory-agencies/financial-regulatory-agencies",
  emoji: "🏦",
  description: "Proposes reforms to reduce consumer protections in financial systems.",
  metadata: {
    authors: [
      {
        name: "Sarah Millstone",
        avatar: "https://example.com/images/authors/sarah-millstone.jpg",
      },
    ],
    title: "Financial Regulatory Agencies",
    wordcount: 7200,
    keywords: ["Deregulation", "Financial Oversight", "Consumer Protections"],
    status: "transcription",
  },
  summary: () => (
    <p>
      This chapter outlines proposed reforms to financial regulatory agencies, emphasizing deregulation
      and reducing consumer protections. The recommendations aim to streamline processes but risk
      exposing consumers to financial vulnerabilities.
    </p>
  ),
  endnotes: () => (
    <p>
      Endnotes include references to prior regulatory changes and the impact of financial oversight
      in previous administrations.
    </p>
  ),
};

export default financialRegulatoryAgencies;
