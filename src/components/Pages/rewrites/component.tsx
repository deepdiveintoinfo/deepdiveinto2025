import { useParams } from 'react-router-dom';
import { PageComponentType } from '@/lib/types'
const nth = (d: number) => {
  if (d > 3 && d < 21) return 'th';
  switch (d % 10) {
    case 1:  return "st";
    case 2:  return "nd";
    case 3:  return "rd";
    default: return "th";
  }
};

// Define the TypeScript interfaces
export const RewritesPage: PageComponentType = () => {

    const { chapterId, readingLevel } = useParams()

    return (
      <>
        <h1>Rewritting Chapter {chapterId} Reading Level {(readingLevel && (parseInt(readingLevel) > 0) && (parseInt(readingLevel) <= 12)) && `${readingLevel}${nth(parseInt(readingLevel))} Grade`}</h1>
      </>
    );
  }

  RewritesPage.path = "/analysis/chapter/:chapterId/rewrites/:readingLevel"
