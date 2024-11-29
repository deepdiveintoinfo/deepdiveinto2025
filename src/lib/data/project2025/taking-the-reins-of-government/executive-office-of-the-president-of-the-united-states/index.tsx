import { ChapterType } from '@/lib/data/project2025/types';

const executiveOfficeOfThePresident: ChapterType = {
  chapterIdx: 2,
  title: "Executive Office of the President",
  chapterId: "executive-office-of-the-president",
  url: "/project2025/taking-the-reins-of-government/executive-office-of-the-president",
  emoji: "🗃️",
  description: "Outlines a strict hierarchical structure for managing the President's agenda, emphasizing centralized control and streamlined operations.",
  metadata: {
    authors: [
      {
        name: "John Springfield",
        avatar: "https://example.com/images/authors/john-springfield.jpg", // Placeholder avatar
      },
    ],
    title: "Executive Office of the President",
    wordcount: 6724, // Example word count; update with actual value.
    keywords: ["Hierarchy", "Centralization", "Executive Power", "Streamlined Operations"],
    status: "transcription", // Adjust as per current status
  },
  summary: () => (
    <p>
      This chapter details the structural framework and goals for the Executive Office of the President, prioritizing efficiency
      through centralized decision-making. It explores the trade-offs of tightly controlled hierarchical management systems.
    </p>
  ),
  endnotes: () => (
    <p>
      Endnotes and citations are available to support this chapter's references. Detailed documentation highlights historical precedents and policy recommendations.
    </p>
  ),
};

export default executiveOfficeOfThePresident;
