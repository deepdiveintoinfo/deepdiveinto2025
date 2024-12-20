import { ChapterType } from '@/content/project2025/types';
import pdfPath from '@/assets/chapters/13_environmental-protection-agency.pdf';

const environmentalProtectionAgency: ChapterType = {
  chapterIdx: 13,
  title: "Environmental Protection Agency",
  chapterId: "environmental-protection-agency",
  url: "/project2025/the-general-welfare/environmental-protection-agency",
  emoji: "🌳",
  description: "Proposes scaling back environmental regulations, prioritizing industry needs.",
  metadata: {
    authors: [
      {
        name: "Laura D. Harrington",
        avatar: "https://example.com/images/authors/laura-d-harrington.jpg", // Placeholder avatar
      },
    ],
    title: "Environmental Protection Agency",
    keywords: ["Deregulation", "Environmental Policy", "Industrial Interests", "Climate Change"],
    status: "undone",
  },
  versions: {
    pdfPath,
  },
  summary: () => (
    <p>
      This chapter advocates for significant deregulation within the EPA, prioritizing economic growth and industry needs 
      over environmental protections. Critics warn of potential long-term damage to ecosystems and public health.
    </p>
  ),
};

export default environmentalProtectionAgency;
