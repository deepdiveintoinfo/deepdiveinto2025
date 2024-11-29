import { ChapterType } from '@/lib/data/project2025/types';

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
    wordcount: 5500, // Example word count; update with actual value.
    keywords: ["Agriculture", "Deregulation", "Environmental Standards", "Food Safety"],
    status: "transcription",
  },
  summary: () => (
    <p>
      This chapter advocates for deregulation in agricultural practices to enhance productivity and market flexibility. 
      Critics raise concerns about potential risks to environmental sustainability and food safety.
    </p>
  ),
  endnotes: () => (
    <p>
      Endnotes include references to historical agricultural policies and their impact on small farmers and environmental health.
    </p>
  ),
};

export default departmentOfAgriculture;
