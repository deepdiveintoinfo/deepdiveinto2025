import project2025Data from '@/content/project2025'
import { SectionType, ChapterType } from '@/content/project2025/types';
import { useParams } from "react-router-dom";


export const useContent = () => {
    const { chapterName, sectionName } = useParams()

    const output: {
        project2025?: typeof project2025Data,
        section?: SectionType | undefined,
        chapter?: ChapterType | undefined,
        chapters?: ChapterType[] | undefined,
    } = {
        project2025: project2025Data,
        chapters: project2025Data?.sections.map((section) => section.chapters).flat(Infinity) as ChapterType[]
    }

    if(sectionName) {
        output.section = project2025Data?.sections.find(section => section.sectionId === sectionName) as SectionType | undefined;
    }
    if(chapterName && output.section) {
        output.chapter = output.section.chapters.find(chapter => chapter.chapterId === chapterName);
    }
    return output;
}