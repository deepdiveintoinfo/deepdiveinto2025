import { ChapterType } from '@/content/project2025/types';
import pdfPath from '@/assets/chapters/18_department_of_labor.pdf';

const departmentOfLabor: ChapterType = {
  chapterIdx: 18,
  title: "Department of Labor",
  chapterId: "department-of-labor",
  url: "/project2025/the-general-welfare/department-of-labor",
  emoji: "🛠️",
  description: "Proposes reforms that may weaken worker protections in favor of business interests.",
  metadata: {
    authors: [
      {
        name: "Jonathan Berry",
        avatar: "https://example.com/images/authors/emma-j-turner.jpg", // Placeholder avatar
      },
    ],
    title: "Department of Labor",
    keywords: ["Labor Policy", "Worker Protections", "Business Interests", "Union Rights"],
    status: "undone",
  },
  versions: {
    pdfPath,
  },
  summary: () => (
    <p>
      This chapter highlights reforms intended to boost economic growth but risks undermining worker protections and 
      union rights, sparking debates on fairness and equity in the labor market.
    </p>
  ),
};

export default departmentOfLabor;
