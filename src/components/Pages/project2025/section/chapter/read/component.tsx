import { PageComponentType } from '@/lib/types'
import { useChapter } from '@/hooks/use-chapter';
import { ChapterInterface } from '@/lib/data/project2025/types';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ThirdParty/ShadCn/Tabs';

// Define the TypeScript interfaces
export const ReadPage: PageComponentType = () => {
  const chapter: ChapterInterface | undefined = useChapter();
  const RawMdxContent = chapter?.versions?.raw;
  const SimpleMdxContent = chapter?.versions?.simple;
  const ClearMdxContent = chapter?.versions?.clear;
    return (
      <article>
      <h1>{chapter?.title}</h1>
      <Tabs defaultValue="account" className="">
        <TabsList>
          {RawMdxContent && <TabsTrigger defaultChecked value="raw">Raw</TabsTrigger>}
          {ClearMdxContent && <TabsTrigger value="clear">Clear</TabsTrigger>}
          {SimpleMdxContent && <TabsTrigger value="simple">Simple</TabsTrigger>}
        </TabsList>
        {RawMdxContent && <TabsContent defaultChecked value="raw"><RawMdxContent /></TabsContent>}
        {SimpleMdxContent && <TabsContent value="simple"><SimpleMdxContent /></TabsContent>}
        {ClearMdxContent && <TabsContent value="clear"><ClearMdxContent /></TabsContent>}
      </Tabs>
      </article>
    );
  }

  ReadPage.path = "/project2025/:sectionName/:chapterName/read"
