// types.ts
import { ReactNode } from "react";

// Base type for MDX components
export type MdxComponent = React.FC<{ components?: Record<string, React.ComponentType<any>>; children?: ReactNode }>;

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