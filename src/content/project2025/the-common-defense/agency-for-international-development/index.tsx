import { ChapterType } from '@/content/project2025/types';
import pdfPath from '@/assets/chapters/9_agency-for-international-development.pdf';

const agencyForInternationalDevelopment: ChapterType = {
  chapterIdx: 9,
  title: "Agency for International Development",
  chapterId: "agency-for-international-development",
  url: "/project2025/the-common-defense/agency-for-international-development",
  emoji: "📦",
  description: "Focuses on reforming aid distribution to reflect administration priorities, potentially sidelining global needs.",
  metadata: {
    authors: [
      {
        name: "Max Primorac",
        avatar: "https://example.com/images/authors/howard-v-grant.jpg", // Placeholder avatar
      },
    ],
    title: "Agency for International Development",
    wordcount: 6850, // Example word count; update with actual value.
    keywords: ["Foreign Aid", "International Development", "National Interests", "Global Needs"],
    status: "undone", // Adjust based on the progress
  },
  versions: {
    pdfPath,
  },
  summary: () => (
    <p>
      This chapter proposes reforms to foreign aid distribution, prioritizing alignment with national interests over global humanitarian needs. 
      Critics warn of reduced global trust and effectiveness in addressing international crises.
    </p>
  ),
};

export default agencyForInternationalDevelopment;
