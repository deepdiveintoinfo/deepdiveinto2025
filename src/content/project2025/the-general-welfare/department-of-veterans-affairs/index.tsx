import { ChapterType } from '@/content/project2025/types';
import pdfPath from '@/assets/chapters/20_department-of-veterans-affairs.pdf';

const departmentOfVeteransAffairs: ChapterType = {
  chapterIdx: 20,
  title: "Department of Veterans Affairs",
  chapterId: "department-of-veterans-affairs",
  url: "/project2025/the-general-welfare/department-of-veterans-affairs",
  emoji: "🎖️",
  description: "Proposes reforms focused on privatization and cost-cutting, raising concerns about the quality of care for veterans.",
  metadata: {
    authors: [
      {
        name: "Brooks D. Tucker",
        avatar: "https://example.com/images/authors/brooks-d-tucker.jpg", // Placeholder avatar
      },
    ],
    title: "Department of Veterans Affairs",
    keywords: ["Veterans Affairs", "Privatization", "Healthcare Reform", "Cost-Cutting"],
    status: "undone",
  },
  versions: {
    pdfPath,
  },
  summary: () => (
    <p>
      This chapter emphasizes privatization and cost-cutting within the Department of Veterans Affairs, proposing reforms
      that could significantly alter how veterans access and receive healthcare services. While aiming to streamline operations,
      the proposals raise concerns about reduced quality of care and accessibility for those who served.
    </p>
  ),
};

export default departmentOfVeteransAffairs;
