import WhiteHouseOfficeRaw from '@/lib/data/project2025/taking-the-reins-of-government/white-house-office/versions/raw.mdx';

// types.ts
export interface Chapter {
    title: string;
    chapterId: string;
    versions: {
      raw: typeof WhiteHouseOfficeRaw;
    };
  }
  
  export interface Section {
    chapters: {
      [chapterName: string]: Chapter;
    };
  }
  
  export interface Project2025 {
    sections: {
      [sectionName: string]: Section;
    };
  }

export const sections = [{},
    {
        title: "Taking the reins of government",
        sectionId: "taking-the-reins-of-government",
        chapters: [
            {
                title: "The White House Office",
                chapterId: "white-house-office",
                versions: {
                  raw: WhiteHouseOfficeRaw
                }
            }
        ],
        MdxContent: null
    }
]

export default { sections };