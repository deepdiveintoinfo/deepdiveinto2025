import { ChapterType } from '@/lib/data/project2025/types';

const federalElectionCommission: ChapterType = {
  chapterIdx: 27,
  title: "Federal Election Commission",
  chapterId: "federal-election-commission",
  url: "/project2025/independent-regulatory-agencies/federal-election-commission",
  emoji: "🗳️",
  description: "Suggests reforms that could increase the role of money in politics.",
  metadata: {
    authors: [
      {
        name: "Thomas Grant",
        avatar: "https://example.com/images/authors/thomas-grant.jpg",
      },
    ],
    title: "Federal Election Commission",
    wordcount: 5500,
    keywords: ["Campaign Finance", "FEC Reform", "Political Contributions"],
    status: "verification",
  },
  summary: () => (
    <p>
      This chapter critiques the Federal Election Commission’s current structure and advocates
      for reforms that may increase the influence of political contributions on elections, raising
      concerns about fairness and transparency.
    </p>
  ),
  endnotes: () => (
    <p>
      Endnotes discuss historical changes to campaign finance laws and their implications for electoral integrity.
    </p>
  ),
};

export default federalElectionCommission;
