import { useContent } from '@/hooks/use-content';
import { ChapterType, SectionType } from '@/lib/data/project2025/types';
import { KeywordBadges } from '@/components/Blocks/KeywordBadges';
import { Link } from 'react-router-dom';

const ChapterList = () => {

    const { section }: { section: SectionType | undefined } = useContent();
    if(!section) return <>Loading</>;

  return (
    <section className="pb-32">
      <div className="container">
        <div className="mx-auto">
          <div className="mx-auto mt-6 flex flex-col gap-16 md:mt-8">
              <div className="grid">
                <h3 className="border-b pb-4 text-xl font-bold">
                  Chapters
                </h3>
                {section.chapters.map((chapter: ChapterType) => (
                    <div className='border-b'>
                          <div
                              key={chapter.title}
                              className="flex flex-col lg:flex-row lg:items-center justify-between"
                          >
                              <Link
                                to={chapter.chapterId}
                                className="font-semibold hover:underline"
                              >
                                {section.sectionIdx}.{chapter.chapterIdx}. {chapter.emoji} {chapter.title}
                              </Link>
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
    </section>
  );
};

export default ChapterList;