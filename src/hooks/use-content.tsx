import project2025Data from '@/lib/data/project2025'
import { SectionType, ChapterType } from '@/lib/data/project2025/types';
import { useParams } from "react-router-dom";


export const useContent = () => {
    const { chapterName, sectionName } = useParams()
    ;
    const section = project2025Data?.sections.find(section => section.sectionId === sectionName) as SectionType | undefined;
    if (!section || !section.chapters) return { chapter: undefined, section: undefined };
    const chapter: ChapterType | undefined = section.chapters.find(chapter => chapter.chapterId === chapterName);
    return { chapter, section };
}