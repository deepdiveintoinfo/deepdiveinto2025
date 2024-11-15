import { useParams } from 'react-router-dom';
import { useChapter } from '@/hooks/useChapter';
import { PageComponentType } from '@/lib/types'


// Define the TypeScript interfaces
export const ChapterPage: PageComponentType = () => {

    const { chapterNumber } = useParams()
    const { 
      ChapterContent, 
    }: { ChapterContent?: string } = useChapter(chapterNumber ?? '');
    // const chapterContent = import('' + chapterNumber + '.mdx')
  
    // if (loading) return <p>Loading...</p>;
    // if (error) return <p>Error : {error.message}</p>;
    return (
      <div>
        <h1>Chapter {chapterNumber}</h1>
        {ChapterContent && <ChapterContent />}
      </div>
    );
  }

  ChapterPage.path = "/project2025/chapter/:chapterNumber"
  // ChapterPage.path = "/document/section/:sectionNumber/chapter/:chapterNumber/subsection/:subsectionNumber/paragraph/:paragraphNumber/line/:lineNumber"