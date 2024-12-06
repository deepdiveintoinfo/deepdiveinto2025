import { ChapterType } from '@/content/project2025/types';

const departmentOfCommerce: ChapterType = {
  chapterIdx: 21,
  title: "Department of Commerce",
  chapterId: "department-of-commerce",
  url: "/project2025/the-economy/department-of-commerce",
  emoji: "🏢",
  description: "Aims to streamline commerce policies with a focus on deregulation.",
  metadata: {
    authors: [
      {
        name: "Thomas F. Gilman",
        avatar: "https://example.com/images/authors/thomas-j-caldwell.jpg", // Placeholder avatar
      },
    ],
    title: "Department of Commerce",
    wordcount: 4800, // Example word count; update with actual value.
    keywords: ["Commerce Policy", "Deregulation", "Business Growth", "Market Freedom"],
    status: "undone", // "undone" | "transcription" | "analysis" | "verification" | "complete"
  },
  summary: () => (
    <p>
      This chapter advocates for streamlining commerce regulations to foster market efficiency and business growth. 
      Critics worry about reduced consumer protections and oversight in vital sectors.
    </p>
  ),
};

export default departmentOfCommerce;
