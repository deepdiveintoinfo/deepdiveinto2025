import { useParams } from 'react-router-dom';
import { useChapter } from '@/hooks/use-chapter';
import { PageComponentType } from '@/lib/types'
import * as changeCase from 'change-case'


// Define the TypeScript interfaces
export const ChapterPage: PageComponentType = () => {

    const { chapterName, sectionName } = useParams();

    // const { content } = useChapter(sectionName, chapterName);

    return (
      <div>
        <h1>{changeCase.capitalCase(sectionName || '')}</h1>
        <h2>{changeCase.capitalCase(chapterName || '')}</h2>
        {/* {ChapterContent && <ChapterContent />} */}
      </div>
    );
  }

  ChapterPage.path = "/project2025/:sectionName/:chapterName"
