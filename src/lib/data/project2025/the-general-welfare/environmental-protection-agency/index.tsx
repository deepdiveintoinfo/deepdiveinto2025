import { ChapterType } from '@/lib/data/project2025/types';

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
    wordcount: 5900, // Example word count; update with actual value.
    keywords: ["Deregulation", "Environmental Policy", "Industrial Interests", "Climate Change"],
    status: "transcription",
  },
  summary: () => (
    <p>
      This chapter advocates for significant deregulation within the EPA, prioritizing economic growth and industry needs 
      over environmental protections. Critics warn of potential long-term damage to ecosystems and public health.
    </p>
  ),
  endnotes: () => (
    <p>
      Endnotes include analyses of past environmental policies and their economic impacts.
    </p>
  ),
};

export default environmentalProtectionAgency;
