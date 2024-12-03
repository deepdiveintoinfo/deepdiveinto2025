import { ChapterType } from '@/lib/data/project2025/types';

const federalReserve: ChapterType = {
  chapterIdx: 24,
  title: "Federal Reserve",
  chapterId: "federal-reserve",
  url: "/project2025/the-economy/federal-reserve",
  emoji: "📉",
  description: "Proposes reforms to the Federal Reserve aimed at deregulation.",
  metadata: {
    authors: [
      {
        name: "Paul Winfree",
        avatar: "https://example.com/images/authors/michael-a-lang.jpg", // Placeholder avatar
      },
    ],
    title: "Federal Reserve",
    wordcount: 6870, // Example word count; update with actual value.
    keywords: ["Federal Reserve", "Monetary Policy", "Deregulation", "Economic Stability"],
    status: "undone",
  },
  summary: () => (
    <p>
      This chapter discusses proposed deregulation reforms for the Federal Reserve, with a focus on reducing its
      role in market interventions and monetary policy.
    </p>
  ),
};

export default federalReserve;
