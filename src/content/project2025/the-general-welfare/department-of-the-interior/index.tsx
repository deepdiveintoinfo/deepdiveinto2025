import { ChapterType } from '@/content/project2025/types';
import pdfPath from '@/assets/chapters/16_department_of_the_interior.pdf';

const departmentOfTheInterior: ChapterType = {
  chapterIdx: 16,
  title: "Department of the Interior",
  chapterId: "department-of-the-interior",
  url: "/project2025/the-general-welfare/department-of-the-interior",
  emoji: "🏜️",
  description: "Promotes deregulation of land management, prioritizing resource extraction.",
  metadata: {
    authors: [
      {
        name: "William Perry Pendley",
        avatar: "https://example.com/images/authors/benjamin-l-collins.jpg", // Placeholder avatar
      },
    ],
    title: "Department of the Interior",
    keywords: ["Land Management", "Deregulation", "Resource Extraction", "Environmental Concerns"],
    status: "undone",
  },
  versions: {
    pdfPath,
  },
  summary: () => (
    <p>
      This chapter emphasizes deregulating federal land management to facilitate resource extraction, potentially compromising 
      conservation efforts and indigenous rights.
    </p>
  ),
};

export default departmentOfTheInterior;
