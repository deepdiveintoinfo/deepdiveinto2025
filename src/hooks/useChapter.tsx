import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

export const useChapter = () => {
    const [ChapterComponent, setChapterComponent] = useState<React.ComponentType | null>(null);
    const { chapterNumber } = useParams();
    useEffect(() => {
        import(`@/lib/document/chapters/${chapterNumber}/content.mdx`).then((module) => {
            setChapterComponent(() => module.default);
        });
        return () => {
            console.log("Chapter unmounted");
        };
    });

    return ChapterComponent;
}