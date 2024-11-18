import WhiteHouseOfficeRaw from '@/lib/data/project2025/taking-the-reins-of-government/white-house-office/versions/raw.mdx';
import WhiteHouseOfficeSimple from '@/lib/data/project2025/taking-the-reins-of-government/white-house-office/versions/simple.mdx';
import WhiteHouseOfficeClear from '@/lib/data/project2025/taking-the-reins-of-government/white-house-office/versions/clear.mdx';
import ChapterOneMetadata from '@/lib/data/project2025/taking-the-reins-of-government/white-house-office/metadata.json'; 
import ChapterOneSummary from '@/lib/data/project2025/taking-the-reins-of-government/white-house-office/summary.mdx';

export const sections = [{},
    {
        title: "Taking the reins of government",
        sectionId: "taking-the-reins-of-government",
        chapters: [
            {
                title: "The White House Office",
                chapterId: "white-house-office",
                metadata: ChapterOneMetadata,
                summary: ChapterOneSummary,
                versions: {
                  raw: WhiteHouseOfficeRaw,
                  simple: WhiteHouseOfficeSimple,
                  clear: WhiteHouseOfficeClear,
                }
            }
        ],
        MdxContent: null
    }
]

export default { sections };