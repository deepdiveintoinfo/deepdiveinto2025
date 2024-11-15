import { useParams } from 'react-router-dom';
import { PageComponentType } from '@/lib/types'

// import { useMdxContent } from '@/hooks/useMdxContent';

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
export const ReadPage: PageComponentType = () => {

    const { chapterId, readingLevel } = useParams()
    // const Content = useMdxContent("project2025/chapter/" + chapterId + "/reading-level/" + readingLevel + ".mdx");

    return (
      <>
        <h1>Rewritting Chapter {chapterId} Reading Level {(readingLevel && (parseInt(readingLevel) > 0) && (parseInt(readingLevel) <= 12)) && `${readingLevel}${nth(parseInt(readingLevel))} Grade`}</h1>
      </>
    );
  }

  ReadPage.path = "/project2025/chapter/:chapterId/read/:level"
