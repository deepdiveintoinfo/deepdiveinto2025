import { ChapterType } from '@/lib/data/project2025/types';

const departmentOfState: ChapterType = {
  chapterIdx: 6,
  title: "Department of State",
  chapterId: "department-of-state",
  url: "/project2025/the-common-defense/department-of-state",
  emoji: "🌍",
  description: "Proposes a streamlined diplomatic approach that may prioritize ideology over international relationships.",
  metadata: {
    authors: [
      {
        name: "Kiron K. Skinner",
        avatar: "https://example.com/images/authors/margaret-l-edwards.jpg", // Placeholder avatar
      },
    ],
    title: "Department of State",
    wordcount: 6_890, // Example word count; update with actual value.
    keywords: ["Diplomacy", "Foreign Policy", "Streamlined Operations", "Ideological Alignment"],
    status: "undone", // Adjust based on the progress
  },
  summary: () => (
    <p>
      This chapter discusses proposed reforms to the Department of State aimed at streamlining diplomacy and centralizing decision-making. 
      The reforms emphasize alignment with executive priorities, potentially limiting the autonomy of diplomats and reshaping 
      international relations to reflect ideological goals.
    </p>
  ),
};

export default departmentOfState;
