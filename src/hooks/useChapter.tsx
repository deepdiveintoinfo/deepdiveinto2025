import { useEffect, useState } from "react";
import project2025 from '@/lib/data/project2025'

export const useChapter = (chapterNumber:string) => {
    const [content, setContent] = useState({});

    useEffect(() => {
        setContent(() => project2025[parseInt(chapterNumber)]);
        return () => {
            console.log("Chapter unmounted");
        };

    }, [chapterNumber]);

    return content;
}