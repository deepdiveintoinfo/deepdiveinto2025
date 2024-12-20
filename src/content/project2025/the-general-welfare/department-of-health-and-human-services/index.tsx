import { ChapterType } from '@/content/project2025/types';
import pdfPath from '@/assets/chapters/14_department-of-health-and-human-services.pdf';

const departmentOfHealthAndHumanServices: ChapterType = {
  chapterIdx: 14,
  title: "Department of Health and Human Services",
  chapterId: "department-of-health-and-human-services",
  url: "/project2025/the-general-welfare/department-of-health-and-human-services",
  emoji: "🏥",
  description: "Emphasizes cost-cutting measures that may limit healthcare accessibility.",
  metadata: {
    authors: [
      {
        name: "Roger Severino",
        avatar: "https://example.com/images/authors/ethan-k-marshall.jpg", // Placeholder avatar
      },
    ],
    title: "Department of Health and Human Services",
    keywords: ["Healthcare Policy", "Cost Cutting", "Accessibility", "Public Health"],
    status: "undone",
  },
  versions: {
    pdfPath,
  },
  summary: () => (
    <p>
      This chapter details cost-cutting reforms in HHS aimed at reducing federal spending, which may compromise healthcare 
      access for vulnerable populations. It emphasizes efficiency over equity.
    </p>
  ),
};

export default departmentOfHealthAndHumanServices;
