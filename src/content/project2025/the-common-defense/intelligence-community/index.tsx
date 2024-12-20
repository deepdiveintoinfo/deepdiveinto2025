import { ChapterType } from '@/content/project2025/types';
import pdfPath from '@/assets/chapters/7_intelligence-community.pdf';

const intelligenceCommunity: ChapterType = {
  chapterIdx: 7,
  title: "Intelligence Community",
  chapterId: "intelligence-community",
  url: "/project2025/the-common-defense/intelligence-community",
  emoji: "🔍",
  description: "Advocates for centralized intelligence operations with reduced transparency.",
  metadata: {
    authors: [
      {
        name: "Dustin J. Carmack",
        avatar: "https://example.com/images/authors/allen-t-reeves.jpg", // Placeholder avatar
      },
    ],
    title: "Intelligence Community",
    keywords: ["Intelligence Operations", "Centralization", "National Security", "Transparency Concerns"],
    status: "undone", // Adjust based on the progress
  },
  versions: {
    pdfPath,
  },
  summary: () => (
    <p>
      This chapter proposes consolidating intelligence operations under stronger executive control to streamline decision-making 
      and prioritize national security. However, it raises concerns about reduced oversight and diminished transparency, 
      which could impact accountability within intelligence agencies.
    </p>
  ),
};

export default intelligenceCommunity;
