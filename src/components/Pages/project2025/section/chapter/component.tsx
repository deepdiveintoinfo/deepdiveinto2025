import { useChapter } from '@/hooks/use-chapter';
import { PageComponentType } from '@/lib/types'
import * as changeCase from 'change-case'
import { ChapterInterface } from '@/lib/data/project2025/types';


import * as React from "react";
import { Badge } from "@/components/ThirdParty/ShadCn/Badge";

interface KeywordsBadgesProps {
  keywords: string[];
}

const KeywordsBadges: React.FC<KeywordsBadgesProps> = ({ keywords }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {keywords.map((keyword) => (
        <Badge
          key={keyword}
          className="text-sm font-medium bg-accent text-accent-foreground hover:bg-accent/80"
        >
          {keyword}
        </Badge>
      ))}
    </div>
  );
};


// Define the TypeScript interfaces
export const ChapterPage: PageComponentType = () => {

    const chapter: ChapterInterface | undefined = useChapter();

    const Summary = chapter?.summary
    return (
      <article>
        <h1>{changeCase.capitalCase(chapter?.title || '')}</h1>
        {chapter?.metadata?.keywords && <KeywordsBadges keywords={chapter.metadata.keywords} />}
        {Summary && <Summary />}
        {/* {ChapterContent && <ChapterContent />} */}
      </article>
    );
  }

  ChapterPage.path = "/project2025/:sectionName/:chapterName"
