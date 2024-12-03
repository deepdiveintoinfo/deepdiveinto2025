  import { useContent } from '@/hooks/use-content';
  import { PageComponentType } from '@/lib/types'
  import * as changeCase from 'change-case'
  import { SectionType, ChapterType } from '@/lib/data/project2025/types';

  import { Badge } from "@/components/ThirdParty/ShadCn/Badge";
  import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ThirdParty/ShadCn/Tabs';
  import { Link, useParams, useSearchParams } from 'react-router-dom';
  import { Suspense } from 'react';
  import { KeywordBadges } from '@/components/Blocks/KeywordBadges/component';

  import { capitalCase } from 'change-case';

  const statusIcons: { [status: string]: string} = {
    undone: '📂',
    transcription: '🖋️',
    analysis: '🧠',
    verification: '🔍',
    complete: '✅',
  }
  
  const statusColors: { [status: string]: string} = {
    undone: 'red-500',
    transcription: 'green-500',
    analysis: 'blue-500',
    verification: 'yellow-500',
    complete: 'gray-500',
  }
  
  // Define the TypeScript interfaces
  export const ChapterPage: PageComponentType = () => {

      const [searchParams, setSearchParams] = useSearchParams();
      const { sectionName } = useParams()

      const { chapter, section }: { chapter?: ChapterType | undefined, section?: SectionType | undefined } = useContent();
      const RawMdxContent = chapter?.versions?.raw;
      const EndNotes = chapter?.endnotes
      const Authors = chapter?.author
      const Summary = chapter?.summary
      const FAQ = chapter?.faq

      return (
        <article className='mt-4'>
          <div className='flex gap-2 leading-normal'>
            <Link to={`/project2025`}>
              <Badge className='border-secondary text-secondary-dark hover:bg-secondary-lighter' variant={"outline"} size="sm">📜 Project 2025</Badge>
            </Link>
            &gt;
            <Link to={section?.url || ''}>
              <Badge size="sm" className='border-primary text-primary-dark hover:bg-primary-lighter' variant={"outline"}>{section?.emoji} {changeCase.capitalCase(sectionName || '')}</Badge>
            </Link>
          </div>
          <h1 className='m-0'>{chapter?.emoji} {section?.sectionIdx}.{chapter?.chapterIdx}. {changeCase.capitalCase(chapter?.title || '')}</h1>
          <p className='ml-3'>
            <Badge size={'sm'} variant={'outline'} className={`border-${statusColors[chapter?.metadata?.status || '']}`}>
                { statusIcons[chapter?.metadata?.status || '']} {capitalCase(chapter?.metadata?.status || '')}
            </Badge>
            &nbsp;
            authored by {chapter?.metadata?.authors?.map((author, idx) => {
              return (
                <i key={idx}>{author.name}</i>
              )
            })
           }</p>
          {chapter?.metadata?.keywords && <KeywordBadges size="sm" keywords={chapter.metadata.keywords} />}
          <Tabs defaultValue={searchParams.get('tabKey') || "summary"}>
            <TabsList className='mb-8 mt-4 flex flex-col md:flex-row md:justify-start'>
              <div>
                {Summary && <TabsTrigger className='active:bg-black' value="summary">Summary</TabsTrigger> }
                {Authors && <TabsTrigger value="authors" onClick={() => setSearchParams({tabKey: "authors"})}>Authors</TabsTrigger> }
                {FAQ && <TabsTrigger value="faq">FAQ</TabsTrigger>}
              </div>
              <div>
                {RawMdxContent && <TabsTrigger value="raw" onClick={() => setSearchParams({tabKey: "raw"})}>Chapter Source</TabsTrigger> }
                {EndNotes && <TabsTrigger value="endnotes" onClick={() => setSearchParams({tabKey: "endnotes"})}>Endnotes</TabsTrigger> }
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
