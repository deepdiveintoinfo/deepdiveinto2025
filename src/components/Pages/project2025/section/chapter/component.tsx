import { useParams } from 'react-router-dom';
import { useChapter } from '@/hooks/use-chapter';
import { PageComponentType } from '@/lib/types'
import * as changeCase from 'change-case'
import { ChapterInterface } from '@/lib/data/project2025/types';


// Define the TypeScript interfaces
export const ChapterPage: PageComponentType = () => {

    const { chapterName, sectionName } = useParams();

    const chapter: ChapterInterface | undefined = useChapter();

    const Summary = chapter?.summary

    return (
      <article>
        <h1>{changeCase.capitalCase(chapter?.title || '')}</h1>
        {Summary && <Summary />}
        {/* {ChapterContent && <ChapterContent />} */}
      </article>
    );
  }

  ChapterPage.path = "/project2025/:sectionName/:chapterName"
