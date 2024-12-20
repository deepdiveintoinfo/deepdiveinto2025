import { ChapterType } from '@/content/project2025/types';
import pdfPath from '@/assets/chapters/27_financial-regulatory-agencies.pdf';

const financialRegulatoryAgencies: ChapterType = {
  chapterIdx: 27,
  title: "Financial Regulatory Agencies",
  chapterId: "financial-regulatory-agencies",
  url: "/project2025/independent-regulatory-agencies/financial-regulatory-agencies",
  emoji: "💳",
  description: "Proposes reforms to reduce consumer protections in financial systems.",
  metadata: {
    authors: [
      {
        name: "David R. Burton",
        avatar: "https://example.com/images/authors/sarah-millstone.jpg",
      },
      {
        name: "Robert Bowes",
        avatar: "https://example.com/images/authors/robert-bowes.jpg",
      }
    ],
    title: "Financial Regulatory Agencies",
    keywords: ["Deregulation", "Financial Oversight", "Consumer Protections"],
    status: "undone",
  },
  versions: {
    pdfPath,
  },
  summary: () => (
    <p>
      This chapter outlines proposed reforms to financial regulatory agencies, emphasizing deregulation
      and reducing consumer protections. The recommendations aim to streamline processes but risk
      exposing consumers to financial vulnerabilities.
    </p>
  ),
};

export default financialRegulatoryAgencies;
