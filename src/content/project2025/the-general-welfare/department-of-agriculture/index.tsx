import { ChapterType } from '@/content/project2025/types';
import pdfPath from '@/assets/chapters/10_department-of-agriculture.pdf';

const departmentOfAgriculture: ChapterType = {
  chapterIdx: 10,
  title: "Department of Agriculture",
  chapterId: "department-of-agriculture",
  url: "/project2025/the-general-welfare/department-of-agriculture",
  emoji: "🌾",
  description: "Promotes deregulation in agriculture, raising concerns about environmental and safety standards.",
  metadata: {
    authors: [
      {
        name: "Daren Bakst",
        avatar: "https://example.com/images/authors/eleanor-b-thatcher.jpg", // Placeholder avatar
      },
    ],
    title: "Department of Agriculture",
    keywords: ["Agriculture", "Deregulation", "Environmental Standards", "Food Safety"],
    status: "undone", // "undone" | "transcribing" | "analyzing" | "verification" | "complete"
  },
  versions: {
    pdfPath,
  },
  summary: () => (
    <p>
      This chapter advocates for deregulation in agricultural practices to enhance productivity and market flexibility. 
      Critics raise concerns about potential risks to environmental sustainability and food safety.
    </p>
  ),
};

export default departmentOfAgriculture;
