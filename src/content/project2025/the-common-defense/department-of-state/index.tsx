import { ChapterType } from '@/content/project2025/types';
import pdfPath from '@/assets/chapters/6_department-of-state.pdf';
import original from './versions/original.md'

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
    keywords: ["Diplomacy", "Foreign Policy", "Streamlined Operations", "Ideological Alignment"],
    status: "transcribing", // Adjust based on the progress
  },
  versions: {
    original,
    pdfPath,
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
