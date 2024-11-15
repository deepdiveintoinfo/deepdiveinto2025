import { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { useChapter } from '@/hooks/useChapter';
import { PageComponentType } from '@/lib/types'


// Define the TypeScript interfaces
export const ChapterPage: PageComponentType = () => {

    const { chapterNumber } = useParams()
    const ChapterData: { ChapterContent?: string } = useChapter(chapterNumber ?? '');
    // const chapterContent = import('' + chapterNumber + '.mdx')
  
    // if (loading) return <p>Loading...</p>;
    // if (error) return <p>Error : {error.message}</p>;
    return (
      <div>
        <h1>Chapter {chapterNumber}</h1>
        {ChapterData.ChapterContent && <ChapterData.ChapterContent />}
      </div>
    );
  }

  ChapterPage.path = "/project2025/chapter/:chapterNumber/content"
  // ChapterPage.path = "/document/section/:sectionNumber/chapter/:chapterNumber/subsection/:subsectionNumber/paragraph/:paragraphNumber/line/:lineNumber"