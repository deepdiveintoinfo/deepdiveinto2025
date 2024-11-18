import WhiteHouseOfficeRaw from '@/lib/data/project2025/taking-the-reins-of-government/white-house-office/versions/raw.mdx';

// types.ts
export interface ChapterInterface {
    title: string;
    chapterId: string;
    summary: typeof WhiteHouseOfficeRaw;
    metadata: {
        authors: string[];
        title: string;
        wordcount: number;
        keywords: string[];
    }
    versions: {
      [version: string]: typeof WhiteHouseOfficeRaw;
    };
  }
  
  export interface SectionInterface {
    chapters: {
      [chapterName: string]: ChapterInterface;
    };
  }
  
  export interface Project2025Interface {
    sections: {
      [sectionName: string]: SectionInterface;
    };
  }