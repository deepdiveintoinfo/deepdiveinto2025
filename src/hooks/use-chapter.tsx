import project2025Data from '@/lib/data/project2025'
import { useParams } from "react-router-dom";


export const useChapter = () => {
    const { chapterName, sectionName } = useParams();

    const section = project2025Data?.sections.find(section => section.sectionId === sectionName);
    if (!section || !section.chapters) return undefined;
    const chapter = section.chapters.find(chapter => chapter.chapterId === chapterName);
    return chapter;
}