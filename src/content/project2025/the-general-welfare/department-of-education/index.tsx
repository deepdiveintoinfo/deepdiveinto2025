import { ChapterType } from '@/content/project2025/types';
import pdfPath from '@/assets/chapters/11_department-of-education.pdf';

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
    keywords: ["Education Policy", "Federal Oversight", "Equity", "Local Control"],
    status: "undone",
  },
  versions: {
    pdfPath,
  },
  summary: () => (
    <p>
      This chapter emphasizes reducing federal oversight in education, shifting authority to local entities. 
      Critics argue that this could exacerbate inequities in educational access and outcomes.
    </p>
  ),
};

export default departmentOfEducation;
