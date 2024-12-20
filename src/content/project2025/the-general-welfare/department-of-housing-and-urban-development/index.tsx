import { ChapterType } from '@/content/project2025/types';
import pdfPath from '@/assets/chapters/15_department-of-housing-and-urban-development.pdf';

const departmentOfHousingAndUrbanDevelopment: ChapterType = {
  chapterIdx: 15,
  title: "Department of Housing and Urban Development",
  chapterId: "department-of-housing-and-urban-development",
  url: "/project2025/the-general-welfare/department-of-housing-and-urban-development",
  emoji: "🏘️",
  description: "Advocates for decentralizing housing programs, raising concerns about equity.",
  metadata: {
    authors: [
      {
        name: "Benjamin S. Carson, Sr., MD",
        avatar: "https://example.com/images/authors/sophia-r-carter.jpg", // Placeholder avatar
      },
    ],
    title: "Department of Housing and Urban Development",
    keywords: ["Housing Policy", "Decentralization", "Equity", "Federal Programs"],
    status: "undone",
  },
  versions: {
    pdfPath,
  },
  summary: () => (
    <p>
      This chapter promotes decentralization of federal housing programs to increase efficiency, but critics argue it could 
      exacerbate disparities in housing access and quality.
    </p>
  ),
};

export default departmentOfHousingAndUrbanDevelopment;
