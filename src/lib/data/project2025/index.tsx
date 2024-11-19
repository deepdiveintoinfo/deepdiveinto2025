import WhiteHouseOfficeRaw from '@/lib/data/project2025/taking-the-reins-of-government/white-house-office/versions/raw.mdx';
import WhiteHouseOfficeSimple from '@/lib/data/project2025/taking-the-reins-of-government/white-house-office/versions/simple.mdx';
import WhiteHouseOfficeClear from '@/lib/data/project2025/taking-the-reins-of-government/white-house-office/versions/clear.mdx';
import WhiteHouseOfficeEndNotes from '@/lib/data/project2025/taking-the-reins-of-government/white-house-office/endnotes.mdx';
import WhiteHouseAuthor from '@/lib/data/project2025/taking-the-reins-of-government/white-house-office/authors.mdx';
import ChapterOneMetadata from '@/lib/data/project2025/taking-the-reins-of-government/white-house-office/metadata.json'; 
import ChapterOneSummary from '@/lib/data/project2025/taking-the-reins-of-government/white-house-office/summary.mdx';
import ChapterOneFAQ from '@/lib/data/project2025/taking-the-reins-of-government/white-house-office/faq.mdx';

const whiteHouseOffice = {
    title: "The White House Office",
    chapterId: "white-house-office",
    metadata: ChapterOneMetadata,
    summary: ChapterOneSummary,
    endnotes: WhiteHouseOfficeEndNotes,
    author: WhiteHouseAuthor,
    faq: ChapterOneFAQ,
    versions: {
      raw: WhiteHouseOfficeRaw,
      simple: WhiteHouseOfficeSimple,
      clear: WhiteHouseOfficeClear,
    }
}

export const sections = [{},
    {
        title: "Taking the reins of government",
        sectionId: "taking-the-reins-of-government",
        chapters: [
          whiteHouseOffice
        ],
        MdxContent: null
    }
]

export default { sections };