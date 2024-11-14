import { useParams } from 'react-router-dom';
import { useChapter } from '@/hooks/useChapter';
import { PageComponentType } from '@/lib/types'


// Define the TypeScript interfaces
export const ChapterPage: PageComponentType = () => {

    const { chapterNumber } = useParams()
    const ChapterComponent = useChapter();

    // const chapterContent = import('' + chapterNumber + '.mdx')
  
    // useEffect(() => {
    //   if (loading) return;
    //   if (error) return;
    //   console.log(data)
    // }, [loading, error, data]);
  
    // if (loading) return <p>Loading...</p>;
    // if (error) return <p>Error : {error.message}</p>;
    return (
      <div>
        <h1>Chapter {chapterNumber}</h1>
        {ChapterComponent && <ChapterComponent />}
      </div>
    );
  }

  ChapterPage.path = "/analysis/chapter/:chapterNumber"
  // ChapterPage.path = "/document/section/:sectionNumber/chapter/:chapterNumber/subsection/:subsectionNumber/paragraph/:paragraphNumber/line/:lineNumber"