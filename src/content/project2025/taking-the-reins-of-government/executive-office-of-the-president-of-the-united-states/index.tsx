import { ChapterType } from '@/content/project2025/types';
import original from './versions/original.md';
import pdfPath from '@/assets/chapters/2_executive-office-of-the-pesident.pdf'


const executiveOfficeOfThePresident: ChapterType = {
  chapterIdx: 2,
  title: "Executive Office of the President",
  chapterId: "executive-office-of-the-president",
  url: "/project2025/taking-the-reins-of-government/executive-office-of-the-president",
  emoji: "🗃️",
  tagline: "Streamlining loyalty over accountability.",
  description: "Outlines a strict hierarchical structure for managing the President's agenda, emphasizing centralized control and streamlined operations.",
  metadata: {
    authors: [
      {
        name: "Russ Vought",
        avatar: "https://example.com/images/authors/john-springfield.jpg", // Placeholder avatar
      },
    ],
    title: "Executive Office of the President",
    keywords: ["Hierarchy", "Centralization", "Executive Power", "Streamlined Operations"],
    status: "clarifying", // Adjust as per current status
  },
  versions: {
    original,
    pdfPath,
  },
  summary: () => (
    <p>
      This chapter details the structural framework and goals for the Executive Office of the President, prioritizing efficiency
      through centralized decision-making. It explores the trade-offs of tightly controlled hierarchical management systems.
    </p>
  )
};

export default executiveOfficeOfThePresident;
