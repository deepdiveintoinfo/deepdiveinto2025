import original from './versions/original.md';
import simple from './versions/simple.md';
import clear from './versions/clear.md';
import basic from './versions/basic.md';
import endnotes from './endnotes.mdx';
import authors from './authors.mdx';
import summary from './summary.mdx';
import faq from './faq.mdx';

import analysis from './analysis';

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
      keywords: ["Centralization", "Executive Authority", "Oversight", "Accountability", "Loyalty"],
      status: "analyzing"
    },
    summary,
    endnotes,
    authors,
    faq,
    versions: {
      original,
      simple,
      clear,
      basic,
      pdfPath: chapterPDFPath,
    },
    analysis
}

export default whiteHouseOffice