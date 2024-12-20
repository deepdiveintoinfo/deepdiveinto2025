import { ChapterType } from '@/content/project2025/types';
import pdfPath from '@/assets/chapters/29_federal-election-commission.pdf';

const federalElectionCommission: ChapterType = {
  chapterIdx: 29,
  title: "Federal Election Commission",
  chapterId: "federal-election-commission",
  url: "/project2025/independent-regulatory-agencies/federal-election-commission",
  emoji: "🗳️",
  description: "Suggests reforms that could increase the role of money in politics.",
  metadata: {
    authors: [
      {
        name: "Hans A. Von Spakovsky",
        avatar: "https://example.com/images/authors/thomas-grant.jpg",
      },
    ],
    title: "Federal Election Commission",
    keywords: ["Campaign Finance", "FEC Reform", "Political Contributions"],
    status: "undone",
  },
  versions: {
    pdfPath,
  },
  summary: () => (
    <p>
      This chapter critiques the Federal Election Commission’s current structure and advocates
      for reforms that may increase the influence of political contributions on elections, raising
      concerns about fairness and transparency.
    </p>
  ),
};

export default federalElectionCommission;
