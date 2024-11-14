import { useParams } from 'react-router-dom';
import { useChapter } from '@/hooks/useChapter';
import { PageComponentType } from '@/lib/types'
import './style.css'

// Define the TypeScript interfaces
export const FAQPage: PageComponentType = () => {

    const { chapterNumber } = useParams()
    const ChapterContent = useChapter();

    return (
      <>
        <h1>Chapter {chapterNumber}</h1>
        {ChapterContent && <ChapterContent />}
      </>
    );
  }

  FAQPage.path = "/analysis/chapter/:chapterNumber"
  // ChapterPage.path = "/document/section/:sectionNumber/chapter/:chapterNumber/subsection/:subsectionNumber/paragraph/:paragraphNumber/line/:lineNumber"