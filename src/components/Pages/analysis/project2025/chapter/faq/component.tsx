import { useParams } from 'react-router-dom';
import { PageComponentType } from '@/lib/types'
import './style.css'

// Define the TypeScript interfaces
export const FAQPage: PageComponentType = () => {

    const { chapterNumber } = useParams()
    // const MdxContent = useMdxContent(`@/lib/document/chapters/${chapterNumber}/content.mdx`);

    return (
      <>
        <h1>Chapter {chapterNumber}</h1>
      </>
    );
  }

  FAQPage.path = "/analysis/chapter/:chapterNumber"
  // ChapterPage.path = "/document/section/:sectionNumber/chapter/:chapterNumber/subsection/:subsectionNumber/paragraph/:paragraphNumber/line/:lineNumber"