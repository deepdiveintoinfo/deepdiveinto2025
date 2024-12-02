import { useContent } from '@/hooks/use-content';
import { ChapterType, SectionType } from '@/lib/data/project2025/types';
import { KeywordBadges } from '@/components/Blocks/KeywordBadges';
import { Link } from 'react-router-dom';

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
  verification: 'accent',
  complete: 'gray-500',
}

const ChapterList = () => {

    const { section }: { section?: SectionType } = useContent();
    if(!section) return <>Loading</>;

  return (
    <section className="pb-32">
      <div className="container">
        <div className="mx-auto">
          <div className="mx-auto mt-6 flex flex-col gap-16 md:mt-8">
            <div className="grid">
              <div>
                <h3 className="border-b text-xl font-bold pb-4 m-0">
                  Chapters
                </h3>
                {section.chapters.map((chapter: ChapterType) => (
                    <div className={`border-t pt-4`}>
                          <div
                              key={chapter.title}
                              className="flex flex-col lg:flex-row lg:items-center justify-between"
                          >
                            <div>
                              <Link
                                to={chapter.chapterId}
                                className="font-semibold hover:underline"
                              >
                                <span className={`text-${statusColors[chapter.metadata.status]}`}>{section.sectionIdx}.{chapter.chapterIdx}.</span> {chapter.emoji} {chapter.title}
                              </Link>
                              <span className='inline-block ml-2'>
                                {statusIcons[chapter.metadata.status]}
                              </span>
                            </div>
                            <div className='pt-4 md:pt-0'>
                              {chapter?.metadata?.keywords && <KeywordBadges size={"sm"} keywords={chapter.metadata.keywords} />}
                            </div>
                          </div>
                        <p className='mt-3'>{chapter.description}</p>
                    </div>  
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChapterList;