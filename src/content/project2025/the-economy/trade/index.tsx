import { ChapterType } from '@/content/project2025/types';

const trade: ChapterType = {
  chapterIdx: 26,
  title: "Trade",
  chapterId: "trade",
  url: "/project2025/the-economy/trade",
  emoji: "🌐",
  description: "Presents conflicting approaches to trade, favoring free-market solutions.",
  metadata: {
    authors: [
      {
        name: "Peter Navarro",
        avatar: "https://example.com/images/authors/henry-j-collins.jpg", // Placeholder avatar
      },
      {
        name: "Kent Lassman",
        avatar: "https://example.com/images/authors/kent-lassman.jpg", // Placeholder avatar
      }
    ],
    title: "Trade",
    wordcount: 6150, // Example word count; update with actual value.
    keywords: ["Trade Policy", "Free Market", "Economic Globalization", "Deregulation"],
    status: "undone", // Adjust based on the progress
  },
  summary: () => (
    <p>
      This chapter explores varying approaches to trade policy, emphasizing free-market solutions while acknowledging
      potential risks to domestic industries and global economic relationships.
    </p>
  ),
};

export default trade;
