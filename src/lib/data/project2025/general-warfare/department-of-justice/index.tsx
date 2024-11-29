import { ChapterType } from '@/lib/data/project2025/types';

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
        name: "Michael B. Lawson",
        avatar: "https://example.com/images/authors/michael-b-lawson.jpg", // Placeholder avatar
      },
    ],
    title: "Department of Justice",
    wordcount: 5800, // Example word count; update with actual value.
    keywords: ["Justice Department", "Executive Control", "Independence", "Oversight"],
    status: "transcription",
  },
  summary: () => (
    <p>
      This chapter discusses reforms in the DOJ aimed at aligning it more closely with executive priorities, raising concerns 
      about the erosion of judicial independence and oversight.
    </p>
  ),
  endnotes: () => (
    <p>
      Endnotes include historical examples of executive-judicial conflicts and their implications.
    </p>
  ),
};

export default departmentOfJustice;
