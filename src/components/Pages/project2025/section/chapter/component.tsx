import { useChapter } from '@/hooks/use-chapter';
import { PageComponentType } from '@/lib/types'
import * as changeCase from 'change-case'
import { ChapterInterface } from '@/lib/data/project2025/types';


import * as React from "react";
import { Badge } from "@/components/ThirdParty/ShadCn/Badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ThirdParty/ShadCn/Tabs';
import { useSearchParams } from 'react-router-dom';
import { ScrollArea, ScrollBar } from "@/components/ThirdParty/ShadCn/ScrollArea";

interface KeywordsBadgesProps {
  keywords: string[];
}

const KeywordsBadges: React.FC<KeywordsBadgesProps> = ({ keywords }) => {
  return (
    <ScrollArea className="whitespace-nowrap sm:whitespace-normal max-w-xs sm:max-w-full">
      <div className="flex gap-2">
        {keywords.map((keyword) => (
          <Badge
            key={keyword}
            className="text-sm font-medium bg-accent text-accent-foreground hover:bg-accent/80"
          >
            {keyword}
          </Badge>
        ))}
      </div>
      <ScrollBar orientation='horizontal'/>
    </ScrollArea>
  );
};


// Define the TypeScript interfaces
export const ChapterPage: PageComponentType = () => {

    const [searchParams, setSearchParams] = useSearchParams();


    const chapter: ChapterInterface | undefined = useChapter();
    const RawMdxContent = chapter?.versions?.raw;
    const Summary = chapter?.summary
    const EndNotes = chapter?.endnotes
    const Authors = chapter?.author
    const FAQ = chapter?.faq

    return (
      <article>
        <h1 className='mb-0'>{changeCase.capitalCase(chapter?.title || '')}</h1>
        <p className='ml-3'>authored by <i>{chapter?.metadata?.authors?.join(', ')}</i></p>
        {chapter?.metadata?.keywords && <KeywordsBadges keywords={chapter.metadata.keywords} />}
        <Tabs defaultValue={searchParams.get('tabKey') || "summary"}>
          <TabsList className='mb-8 mt-4 flex flex-col md:flex-row md:justify-start'>
            <div>
              {Summary && <TabsTrigger className='active:bg-black' value="summary" onClick={() => setSearchParams({tabKey: "summary"})}>Summary</TabsTrigger>}
              {Authors && <TabsTrigger value="authors" onClick={() => setSearchParams({tabKey: "authors"})}>Authors</TabsTrigger>}
              {FAQ && <TabsTrigger value="faq" onClick={() => setSearchParams({tabKey: "faq"})}>FAQ</TabsTrigger>}
            </div>
            <div>
              {RawMdxContent && <TabsTrigger value="raw" onClick={() => setSearchParams({tabKey: "raw"})}>Chapter Source</TabsTrigger>}
              {EndNotes && <TabsTrigger value="endnotes" onClick={() => setSearchParams({tabKey: "endnotes"})}>Endnotes</TabsTrigger>}
            </div>
          </TabsList>
            {Summary && <TabsContent value="summary"><Summary /></TabsContent>}
            {Authors && <TabsContent value="authors"><Authors /></TabsContent>}
            {RawMdxContent && <TabsContent value="raw"><RawMdxContent /></TabsContent>}
            {EndNotes && <TabsContent value="endnotes"><EndNotes /></TabsContent>}
            {FAQ && <TabsContent value="faq"><FAQ /></TabsContent>}
        </Tabs>
      </article>
    );
  }

  ChapterPage.path = "/project2025/:sectionName/:chapterName";
