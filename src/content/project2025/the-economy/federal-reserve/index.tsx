import { ChapterType } from '@/content/project2025/types';
import pdfPath from '@/assets/chapters/24_federal-reserve.pdf';

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
    keywords: ["Federal Reserve", "Monetary Policy", "Deregulation", "Economic Stability"],
    status: "undone",
  },
  versions: {
    pdfPath,
  },
  summary: () => (
    <p>
      This chapter discusses proposed deregulation reforms for the Federal Reserve, with a focus on reducing its
      role in market interventions and monetary policy.
    </p>
  ),
};

export default federalReserve;
