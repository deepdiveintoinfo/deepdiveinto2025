// types.ts
import { ReactNode } from "react";

// Base type for MDX components
export type MdxComponent = React.FC<{ components?: Record<string, React.ComponentType<unknown>>; children?: ReactNode }>;


// Types for the Project 2025 data
  export type ChapterType = {
    title: string,
    chapterId: string,
    metadata: {
      authors: Array<{
        name: string,
        avatar: string,
      }>,
      title: string,
      wordcount?: number,
      keywords: string[],
      status: "undone" | "transcribing" | "analyzing" | "clarifying" | "verifying" | "complete";
    },
    summary: MdxComponent,
    emoji: string,
    chapterIdx: number,
    description: string,
    endnotes?: MdxComponent,
    authors?: MdxComponent,
    faq?: MdxComponent,
    versions?: {
      original?: MdxComponent,
      simple?: MdxComponent,
      clear?: MdxComponent,
      basic?: MdxComponent,
      pdfPath?: string,
    }
    analysis?: {
      stakeholder?: MdxComponent,
      risk?: MdxComponent,
      policy?: MdxComponent,
      linguistic?: MdxComponent,
      critical?: MdxComponent,
      comparative?: MdxComponent,
      accessibility?: MdxComponent,
      impact?: MdxComponent,
      ethical?: MdxComponent
    }
    subsections?: ChapterType[],
    logline?: string,
    tagline?: string,
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
    pdfPath?: string,
}
  export type Project2025Type = {
    sections: SectionType[]
  }