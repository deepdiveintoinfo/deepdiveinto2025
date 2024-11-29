import { ChapterType } from '@/lib/data/project2025/types';

const trade: ChapterType = {
  chapterIdx: 24,
  title: "Trade",
  chapterId: "trade",
  url: "/project2025/the-economy/trade",
  emoji: "🌐",
  description: "Presents conflicting approaches to trade, favoring free-market solutions.",
  metadata: {
    authors: [
      {
        name: "Henry J. Collins",
        avatar: "https://example.com/images/authors/henry-j-collins.jpg", // Placeholder avatar
      },
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
  endnotes: () => (
    <p>
      Key references include trade agreements and economic analyses of globalization impacts.
    </p>
  ),
};

export default trade;
