import markdown from './versions/markdown.md';
import simple from './versions/simple.mdx';
import clear from './versions/clear.mdx';
import endnotes from './endnotes.mdx';
import authors from './authors.mdx';
import summary from './summary.mdx';
import faq from './faq.mdx';

import chapterPDFPath from '@/assets/chapters/1_white-house-office.pdf'

import { ChapterType } from '@/content/project2025/types';



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
    summary,
    endnotes,
    authors,
    faq,
    versions: {
      markdown,
      simple,
      clear,
      pdfPath: chapterPDFPath,
    },
}

export default whiteHouseOffice