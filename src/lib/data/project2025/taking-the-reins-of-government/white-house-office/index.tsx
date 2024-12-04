import WhiteHouseOfficeRaw from '@/lib/data/project2025/taking-the-reins-of-government/white-house-office/versions/raw.mdx';
import WhiteHouseOfficeSimple from '@/lib/data/project2025/taking-the-reins-of-government/white-house-office/versions/simple.mdx';
import WhiteHouseOfficeClear from '@/lib/data/project2025/taking-the-reins-of-government/white-house-office/versions/clear.mdx';
import WhiteHouseOfficeEndNotes from '@/lib/data/project2025/taking-the-reins-of-government/white-house-office/endnotes.mdx';
import WhiteHouseAuthor from '@/lib/data/project2025/taking-the-reins-of-government/white-house-office/authors.mdx';
import ChapterOneSummary from '@/lib/data/project2025/taking-the-reins-of-government/white-house-office/summary.mdx';
import ChapterOneFAQ from '@/lib/data/project2025/taking-the-reins-of-government/white-house-office/faq.mdx';
import { ChapterType } from '@/lib/data/project2025/types';


const whiteHouseOffice : ChapterType = {
    chapterIdx: 1,
    title: "The White House Office",
    chapterId: "white-house-office",
    url: "/project2025/taking-the-reins-of-government/white-house-office",
    emoji: "🏛️",
    description: "Focuses on consolidating power within the executive branch, emphasizing loyalty over diversity of perspectives.",
    tagline: "Power begins at the top.",
    logline: "",
    metadata: {
      authors: [{
          name: "Richard Dearborn",
          avatar: "https://littlesis.org/images/profile/c6/c6879a39a790aaa1dbca33bd03c59d25.jpg"
      }],
      title: "White House Office",
      wordcount: 7_650,
      keywords: ["Centralization", "Executive Authority", "Oversight", "Accountability", "Loyalty"],
      status: "analysis"
    },
    summary: ChapterOneSummary,
    endnotes: WhiteHouseOfficeEndNotes,
    author: WhiteHouseAuthor,
    faq: ChapterOneFAQ,
    versions: {
      raw: WhiteHouseOfficeRaw,
      simple: WhiteHouseOfficeSimple,
      clear: WhiteHouseOfficeClear,
    },
}

export default whiteHouseOffice