import { ChapterType } from '@/content/project2025/types';

const departmentOfTransportation: ChapterType = {
  chapterIdx: 19,
  title: "Department of Transportation",
  chapterId: "department-of-transportation",
  url: "/project2025/the-general-welfare/department-of-transportation",
  emoji: "🚦",
  description: "Focuses on deregulating transportation industries, prioritizing infrastructure projects aligned with administration goals.",
  metadata: {
    authors: [
      {
        name: "Diana Furchtgott-Roth",
        avatar: "https://example.com/images/authors/diana-furchtgott-roth.jpg", // Placeholder avatar
      },
    ],
    title: "Department of Transportation",
    wordcount: 5230, // Example word count; update as needed.
    keywords: ["Transportation", "Deregulation", "Infrastructure", "Policy Reform"],
    status: "undone",
  },
  summary: () => (
    <p>
      This chapter advocates for the deregulation of transportation industries and a focus on infrastructure development that
      aligns with administration priorities. It highlights strategies to streamline regulatory frameworks while raising concerns
      about the potential for environmental and safety oversights.
    </p>
  ),
};

export default departmentOfTransportation;
