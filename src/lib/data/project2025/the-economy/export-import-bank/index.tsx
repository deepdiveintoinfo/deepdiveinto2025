import { ChapterType } from '@/lib/data/project2025/types';

const exportImportBank: ChapterType = {
  chapterIdx: 23,
  title: "Export-Import Bank",
  chapterId: "export-import-bank",
  url: "/project2025/the-economy/export-import-bank",
  emoji: "✈️",
  description: "Debates the merits of abolishing or retaining the Export–Import Bank.",
  metadata: {
    authors: [
      {
        name: "Veronique de Rugy",
        avatar: "https://example.com/images/authors/laura-m-henderson.jpg", // Placeholder avatar
      },
      {
        name: "Jennifer Hazelton",
        avatar: "https://example.com/images/authors/jennifer-hazelton.jpg", // Placeholder avatar
      }
    ],
    title: "Export-Import Bank",
    wordcount: 4740, // Example word count; update with actual value.
    keywords: ["Trade Policy", "Export-Import Bank", "Economic Support", "Deregulation"],
    status: "undone", // Adjust based on the progress
  },
  summary: () => (
    <p>
      This chapter explores the ongoing debate over the role of the Export–Import Bank, weighing the benefits of supporting
      American exports against concerns of government overreach and market distortion.
    </p>
  ),
};

export default exportImportBank;
