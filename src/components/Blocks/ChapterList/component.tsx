import { useContent } from '@/hooks/use-content';
import { ChapterType, SectionType } from '@/content/project2025/types';
import { KeywordBadges } from '@/components/Blocks/KeywordBadges';
import { Link } from 'react-router-dom';
import {capitalCase} from 'change-case';
import { Badge } from '@/components/ThirdParty/ShadCn';

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
                              className="flex flex-col lg:justify-start justify-between"
                          >
                            <div>
                              <Link
                                to={chapter.chapterId}
                                className="font-semibold hover:underline"
                              >
                                {section.sectionIdx}.{chapter.chapterIdx}. {chapter.emoji} {chapter.title}
                              </Link>
                            </div>
                            <div>
                              <Badge size={'sm'} variant={'outline'} className={`border-${statusColors[chapter.metadata.status]}`}>
                                { statusIcons[chapter.metadata.status]} {capitalCase(chapter.metadata.status)}
                              </Badge>
                            </div>
                            <div className='lg:absolute pt-4 lg:pt-0 lg:self-end'>
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