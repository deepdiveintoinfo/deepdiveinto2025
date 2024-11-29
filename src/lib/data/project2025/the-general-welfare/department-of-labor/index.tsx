import { ChapterType } from '@/lib/data/project2025/types';

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
    wordcount: 5600, // Example word count; update with actual value.
    keywords: ["Labor Policy", "Worker Protections", "Business Interests", "Union Rights"],
    status: "transcription",
  },
  summary: () => (
    <p>
      This chapter highlights reforms intended to boost economic growth but risks undermining worker protections and 
      union rights, sparking debates on fairness and equity in the labor market.
    </p>
  ),
  endnotes: () => (
    <p>
      Endnotes cite studies on labor reforms and their impacts on workforce stability and rights.
    </p>
  ),
};

export default departmentOfLabor;
