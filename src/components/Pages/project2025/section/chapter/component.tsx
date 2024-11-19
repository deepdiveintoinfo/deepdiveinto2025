import { useChapter } from '@/hooks/use-chapter';
import { PageComponentType } from '@/lib/types'
import * as changeCase from 'change-case'
import { ChapterInterface } from '@/lib/data/project2025/types';


import * as React from "react";
import { Badge } from "@/components/ThirdParty/ShadCn/Badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ThirdParty/ShadCn/Tabs';
import { useSearchParams } from 'react-router-dom';

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

    const [searchParams, setSearchParams] = useSearchParams();


    const chapter: ChapterInterface | undefined = useChapter();
    const RawMdxContent = chapter?.versions?.raw;
    const SimpleMdxContent = chapter?.versions?.simple;
    const ClearMdxContent = chapter?.versions?.clear;  
    const Summary = chapter?.summary
    const EndNotes = chapter?.endnotes
    const Authors = chapter?.author

    return (
      <article>
        <h1 className='mb-0'>{changeCase.capitalCase(chapter?.title || '')}</h1>
        <p className='ml-3'>authored by <i>{chapter?.metadata?.authors?.join(', ')}</i></p>
        {chapter?.metadata?.keywords && <KeywordsBadges keywords={chapter.metadata.keywords} />}
        <Tabs defaultValue={searchParams.get('tabKey') || "summary"}>
          <TabsList>
            {Summary && <TabsTrigger className='active:bg-black' value="summary" onClick={() => setSearchParams({tabKey: "summary"})}>Summary</TabsTrigger>}
            {Authors && <TabsTrigger value="authors" onClick={() => setSearchParams({tabKey: "authors"})}>Authors</TabsTrigger>}
            {SimpleMdxContent && <TabsTrigger value="simple" onClick={() => setSearchParams({tabKey: "simple"})}>Simplified</TabsTrigger>}
            {ClearMdxContent && <TabsTrigger value="clear" onClick={() => setSearchParams({tabKey: "clear"})}>Made Clear</TabsTrigger>}
            {RawMdxContent && <TabsTrigger value="raw" onClick={() => setSearchParams({tabKey: "raw"})}>Chapter Source</TabsTrigger>}
            {EndNotes && <TabsTrigger value="endnotes" onClick={() => setSearchParams({tabKey: "endnotes"})}>Endnotes</TabsTrigger>}
          </TabsList>
            {Summary && <TabsContent value="summary"><Summary /></TabsContent>}
            {Authors && <TabsContent value="authors"><Authors /></TabsContent>}
            {RawMdxContent && <TabsContent defaultChecked value="raw"><RawMdxContent /></TabsContent>}
            {SimpleMdxContent && <TabsContent value="simple"><SimpleMdxContent /></TabsContent>}
            {ClearMdxContent && <TabsContent value="clear"><ClearMdxContent /></TabsContent>}
            {EndNotes && <TabsContent value="endnotes"><EndNotes /></TabsContent>}
        </Tabs>
      </article>
    );
  }

  ChapterPage.path = "/project2025/:sectionName/:chapterName";
