import { useContent } from '@/hooks/use-content';
import { PageComponentType } from '@/lib/types'
import * as changeCase from 'change-case'
import { SectionType, ChapterType } from '@/content/project2025/types';

import Badge from "@/components/ThirdParty/ShadCn/Badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ThirdParty/ShadCn/Tabs';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import { Suspense } from 'react';
import { KeywordBadges } from '@/components/Blocks/KeywordBadges/component';

import { capitalCase } from 'change-case';
import ContentSources from './ContentSources';

import { PDFViewer } from '@/components/Blocks/PDFViewer';
import { Card } from '@/components/ThirdParty/ShadCn';

const statusIcons: { [status: string]: string} = {
  undone: '📂',
  transcribing: '🖋️',
  analyzing: '🧠',
  clarifying: '✨',
  verifying: '🔍',
  complete: '✅',
}

const statusColors: { [status: string]: string} = {
  undone: 'red-500',
  transcribing: 'green-500',
  analyzing: 'blue-500',
  clarifying: 'orange-500',
  verifying: 'yellow-500',
  complete: 'gray-500',
}

// Define the TypeScript interfaces
export const ChapterPage: PageComponentType = () => {

  const [searchParams, setSearchParams] = useSearchParams();
  const { sectionName } = useParams()

  const { chapter, section }: { chapter?: ChapterType | undefined, section?: SectionType | undefined } = useContent();
  const MarkdownVerion = chapter?.versions?.original;
  const EndNotes = chapter?.endnotes
  const Authors = chapter?.authors
  const Summary = chapter?.summary
  const FAQ = chapter?.faq
  const StakeholderAnalysis = chapter?.analysis?.stakeholder
  const RiskAnalysis = chapter?.analysis?.risk
  const PolicyAnalysis = chapter?.analysis?.policy
  const LinguisticAnalysis = chapter?.analysis?.linguistic
  const CriticalAnalysis = chapter?.analysis?.critical
  const ComparativeAnalysis = chapter?.analysis?.comparative
  const AccessibilityAnalysis = chapter?.analysis?.accessibility
  const ImpactAnalysis = chapter?.analysis?.impact
  const EthicalAnalysis = chapter?.analysis?.ethical

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
        authored by {chapter?.metadata?.authors?.map((author, idx) => <i key={idx}>{author.name}</i>)}
      </p>
      {chapter?.metadata?.keywords && <KeywordBadges size="sm" keywords={chapter.metadata.keywords} />}
      <Tabs defaultValue={searchParams.get('tabKey') || "versions"}>
        <TabsList className='mb-8 mt-8 md:mt-4 flex flex-col md:flex-row md:justify-start'>
          <div>
            {Summary && <TabsTrigger className='active:bg-black' value="summary" onClick={() => setSearchParams({tabKey: "summary"})}>Summary</TabsTrigger> }
            {Authors && <TabsTrigger value="authors">Authors</TabsTrigger> }
            {FAQ && <TabsTrigger value="faq">FAQ</TabsTrigger>}
          </div>
          <div>
            {MarkdownVerion && <TabsTrigger value="versions">Versions</TabsTrigger> }
            {EndNotes && <TabsTrigger value="endnotes" >Endnotes</TabsTrigger> }
            <TabsTrigger value="pdf">
              PDF
            </TabsTrigger>
            {chapter?.analysis && <TabsTrigger value="analysis">Analysis</TabsTrigger>}
          </div>
        </TabsList>
        <Suspense fallback={<p>loading</p>}>

          {Summary && <TabsContent value="summary"><Summary /></TabsContent>}
          {Authors && <TabsContent value="authors"><Authors /></TabsContent>}
          {chapter && <TabsContent value="versions">
            <ContentSources chapter={chapter} />
          </TabsContent>}
          {EndNotes && <TabsContent value="endnotes"><EndNotes /></TabsContent>}
          {FAQ && <TabsContent value="faq"><FAQ /></TabsContent>}
          <TabsContent value="pdf">
            <PDFViewer path={chapter?.versions?.pdfPath || ''} />
          </TabsContent>
          <TabsContent value="analysis">
            <Tabs defaultValue='ethical' orientation='vertical' className='flex flex-col md:flex-row'>
              <TabsList defaultValue={"stakeholder"} className='flex md:flex-col md:mt-32 mb-10 md:mb-0 items-start max-w-min'>
                <div className='max-w-content overflow-visible'>
                  {EthicalAnalysis && <TabsTrigger className='w-full justify-start' value="ethical" onClick={() => setSearchParams({tabKey: "analysis", analysisKey: "ethical"})}>Ethical Analysis</TabsTrigger>}
                  {ImpactAnalysis && <TabsTrigger className='w-full justify-start' value="impact" onClick={() => setSearchParams({tabKey: "analysis", analysisKey: "impact"})}>Impact Analysis</TabsTrigger>}
                  {RiskAnalysis && <TabsTrigger className='w-full justify-start' value="risk" onClick={() => setSearchParams({tabKey: "analysis", analysisKey: "risk"})}>Risk Analysis</TabsTrigger>}
                </div>
                <div className='max-w-content overflow-visible'>
                  {PolicyAnalysis && <TabsTrigger className='w-full justify-start' value="policy" onClick={() => setSearchParams({tabKey: "analysis", analysisKey: "policy"})}>Policy Analysis</TabsTrigger>}
                  {StakeholderAnalysis && <TabsTrigger className='w-full justify-start' value="stakeholder" onClick={() => setSearchParams({tabKey: "analysis", analysisKey: "stakeholder"})}>Stakeholder Analysis</TabsTrigger>}
                  {ComparativeAnalysis && <TabsTrigger className='w-full justify-start' value="comparative" onClick={() => setSearchParams({tabKey: "analysis", analysisKey: "comparative"})}>Comparative Analysis</TabsTrigger>}
                </div>
                <div className='max-w-content overflow-visible'>
                  {CriticalAnalysis && <TabsTrigger className='w-full justify-start' value="critical" onClick={() => setSearchParams({tabKey: "analysis", analysisKey: "critical"})}>Critical Analysis</TabsTrigger>}
                  {LinguisticAnalysis && <TabsTrigger className='w-full justify-start' value="linguistic" onClick={() => setSearchParams({tabKey: "analysis", analysisKey: "linguistic"})}>Linguistic Analysis</TabsTrigger>}
                  {AccessibilityAnalysis && <TabsTrigger className='w-full justify-start' value="accessibility" onClick={() => setSearchParams({tabKey: "analysis", analysisKey: "accessibility"})}>Accessibility Analysis</TabsTrigger>}
                </div>

              </TabsList>
              {StakeholderAnalysis && <TabsContent value="stakeholder">
                <Card className='p-4'>
                  <StakeholderAnalysis />
                </Card>
              </TabsContent>}
              {RiskAnalysis && <TabsContent value="risk">
                <Card className='p-4'>
                  <RiskAnalysis />
                </Card>
              </TabsContent>}
              {PolicyAnalysis && <TabsContent value="policy">
                <Card className='p-4'>
                  <PolicyAnalysis />
                </Card>
              </TabsContent>}
              {LinguisticAnalysis && <TabsContent value="linguistic">
                <Card className='p-4'>
                  <LinguisticAnalysis />
                </Card>
              </TabsContent>}
              {CriticalAnalysis && <TabsContent value="critical">
                <Card className='p-4'>
                  <CriticalAnalysis />
                </Card>
              </TabsContent>}
              {ComparativeAnalysis && <TabsContent value="comparative">
                <Card className='p-4'>
                  <ComparativeAnalysis />
                </Card>
              </TabsContent>}
              {AccessibilityAnalysis && <TabsContent value="accessibility">
                <Card className='p-4'>
                  <AccessibilityAnalysis />
                </Card>
              </TabsContent>}
              {ImpactAnalysis && <TabsContent value="impact">
                <Card className='p-4'>
                  <ImpactAnalysis />
                </Card>
              </TabsContent>}
              {EthicalAnalysis && <TabsContent value="ethical">
                <Card className='p-4'>
                  <EthicalAnalysis />
                </Card>
              </TabsContent>}
            </Tabs>

          </TabsContent>
        </Suspense>
      </Tabs>
    </article>

  );
}

ChapterPage.route = {
  path: "/project2025/:sectionName/:chapterName"
}

export default ChapterPage