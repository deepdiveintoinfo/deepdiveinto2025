// types.ts
import { ReactNode } from "react";

// Base type for MDX components
export type MdxComponent = React.FC<{ components?: Record<string, React.ComponentType<unknown>>; children?: ReactNode }>;

// types.ts
export interface ChapterInterface {
    title?: string;
    chapterId?: string;
    summary?: MdxComponent;
    author?: MdxComponent;
    faq?: MdxComponent;
    metadata?: {
        authors: string[];
        title: string;
        wordcount: number;
        keywords: string[];
    }
    endnotes?: MdxComponent;
    versions?: {
      [version: string]: MdxComponent;
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

  export type ChapterType = {
    title: string,
    chapterId: string,
    metadata: {
      authors: Array<{
        name: string,
        avatar: string,
      }>,
      title: string,
      wordcount: number,
      keywords: string[],
      status: "undone" | "transcription" | "analysis" | "verification" | "complete";
    },
    summary: MdxComponent,
    emoji: string,
    chapterIdx: number,
    description: string,
    endnotes?: MdxComponent,
    author?: MdxComponent,
    faq?: MdxComponent,
    versions?: {
      raw?: MdxComponent,
      simple?: MdxComponent,
      clear?: MdxComponent,
    }
    subsections?: ChapterType[],
    url: string;
  };
  export type SectionType = {
    title: string,
    sectionId: string,
    sectionIdx: number,
    chapters: ChapterType[],
    emoji: string,
    description: string,
    logline: string,
    tagline: string,
    url: string,
}
  export type Project2025Type = {
    sections: SectionType[]
  }