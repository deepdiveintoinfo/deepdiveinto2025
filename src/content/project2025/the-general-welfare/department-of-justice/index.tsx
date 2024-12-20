import { ChapterType } from '@/content/project2025/types';
import pdfPath from '@/assets/chapters/17_department-of-justice.pdf';

const departmentOfJustice: ChapterType = {
  chapterIdx: 17,
  title: "Department of Justice",
  chapterId: "department-of-justice",
  url: "/project2025/the-general-welfare/department-of-justice",
  emoji: "⚖️",
  description: "Focuses on aligning the DOJ with executive priorities, potentially reducing independence.",
  metadata: {
    authors: [
      {
        name: "Gene Hamilton",
        avatar: "https://example.com/images/authors/michael-b-lawson.jpg", // Placeholder avatar
      },
    ],
    title: "Department of Justice",
    keywords: ["Justice Department", "Executive Control", "Independence", "Oversight"],
    status: "undone",
  },
  versions: {
    pdfPath,
  },
  summary: () => (
    <p>
      This chapter discusses reforms in the DOJ aimed at aligning it more closely with executive priorities, raising concerns 
      about the erosion of judicial independence and oversight.
    </p>
  ),
};

export default departmentOfJustice;
