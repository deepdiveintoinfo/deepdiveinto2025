import { ChapterType } from '@/lib/data/project2025/types';

const departmentOfEducation: ChapterType = {
  chapterIdx: 11,
  title: "Department of Education",
  chapterId: "department-of-education",
  url: "/project2025/the-general-welfare/department-of-education",
  emoji: "📚",
  description: "Advocates for reduced federal oversight, risking equity in educational access.",
  metadata: {
    authors: [
      {
        name: "Lindsey M. Burke",
        avatar: "https://example.com/images/authors/andrew-l-hayes.jpg", // Placeholder avatar
      },
    ],
    title: "Department of Education",
    wordcount: 6000, // Example word count; update with actual value.
    keywords: ["Education Policy", "Federal Oversight", "Equity", "Local Control"],
    status: "undone",
  },
  summary: () => (
    <p>
      This chapter emphasizes reducing federal oversight in education, shifting authority to local entities. 
      Critics argue that this could exacerbate inequities in educational access and outcomes.
    </p>
  ),
  endnotes: () => (
    <p>
      Endnotes include references to past education reforms and their implications for underserved communities.
    </p>
  ),
};

export default departmentOfEducation;
