  import { useContent } from '@/hooks/use-content';
  import { PageComponentType } from '@/lib/types'
  import * as changeCase from 'change-case'
  import { SectionType, ChapterType } from '@/lib/data/project2025/types';


  import * as React from "react";
  import { Badge } from "@/components/ThirdParty/ShadCn/Badge";
  import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ThirdParty/ShadCn/Tabs';
  import { Link, useParams, useSearchParams } from 'react-router-dom';
  import { Suspense } from 'react';
  import { KeywordBadges } from '@/components/Blocks/KeywordBadges/component';
import { Avatar, AvatarFallback, AvatarImage, Tooltip, TooltipContent, TooltipTrigger } from '@/components/ThirdParty/ShadCn';

  const AuthorAvatar = ({ src, fallback, name }: { src: string; fallback: string; name: string }) => {
    return (
<Tooltip>
  <TooltipTrigger>
    <Avatar className='max-w-8 max-h-8'>
      <AvatarImage src={src} />
      <AvatarFallback>{fallback}</AvatarFallback>
    </Avatar>
  </TooltipTrigger> 
  <TooltipContent>
      {name}
  </TooltipContent> 
</Tooltip>
    )
  } 


  // Define the TypeScript interfaces
  export const ChapterPage: PageComponentType = () => {

      const [searchParams, setSearchParams] = useSearchParams();
      const { chapterName, sectionName } = useParams()

      const { chapter, section }: { chapter: ChapterType | undefined, section: SectionType | undefined } = useContent();
      const RawMdxContent = chapter?.versions?.raw;
      const EndNotes = chapter?.endnotes
      const Authors = chapter?.author
      // const FAQ = chapter?.faq
      const Summary = React.lazy(() => import(`@/lib/data/project2025/${sectionName}/${chapterName}/summary.mdx`));
      const FAQ = React.lazy(() => import(`@/lib/data/project2025/${sectionName}/${chapterName}/faq.mdx`));

      return (
        <article className='mt-4'>
          <Link to={`/project2025/${sectionName}`}>
            <Badge size="sm" className='border-primary text-primary-dark hover:bg-primary-lighter' variant={"outline"}>{section?.emoji} {changeCase.capitalCase(sectionName || '')}</Badge>
          </Link>
          <h1 className='m-0'>{chapter?.emoji} {section?.sectionIdx}.{chapter?.chapterIdx}. {changeCase.capitalCase(chapter?.title || '')}</h1>
          <p className='ml-3'>authored by {
            chapter?.metadata?.authors?.map((author, idx) => {
              return (
                <AuthorAvatar key={idx} src={author.avatar} fallback={author.name.split(' ').map(n => n[0]).join('')} name={author.name} />
              )
            })
           } </p>
          {chapter?.metadata?.keywords && <KeywordBadges size="sm" keywords={chapter.metadata.keywords} />}
          <Tabs defaultValue={searchParams.get('tabKey') || "summary"}>
            <TabsList className='mb-8 mt-4 flex flex-col md:flex-row md:justify-start'>
              <div>
                <TabsTrigger className='active:bg-black' value="summary">Summary</TabsTrigger>
                <TabsTrigger value="authors" onClick={() => setSearchParams({tabKey: "authors"})}>Authors</TabsTrigger>
                <TabsTrigger value="faq">FAQ</TabsTrigger>
              </div>
              <div>
                <TabsTrigger value="raw" onClick={() => setSearchParams({tabKey: "raw"})}>Chapter Source</TabsTrigger>
                <TabsTrigger value="endnotes" onClick={() => setSearchParams({tabKey: "endnotes"})}>Endnotes</TabsTrigger>
              </div>
            </TabsList>
            <Suspense fallback={<p>loading</p>}>

              {Summary && <TabsContent value="summary"><Summary /></TabsContent>}
              {Authors && <TabsContent value="authors"><Authors /></TabsContent>}
              {RawMdxContent && <TabsContent value="raw"><RawMdxContent /></TabsContent>}
              {EndNotes && <TabsContent value="endnotes"><EndNotes /></TabsContent>}
              {FAQ && <TabsContent value="faq"><FAQ /></TabsContent>}
            </Suspense>
            
          </Tabs>
        </article>

      );
    }

    ChapterPage.path = "/project2025/:sectionName/:chapterName";
