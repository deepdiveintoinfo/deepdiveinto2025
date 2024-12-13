import { PageComponentType } from '@/lib/types'
import * as changeCase from 'change-case'
import { ChapterList } from '@/components/Blocks/ChapterList';
import { useContent } from '@/hooks/use-content';
import Badge from '@/components/ThirdParty/ShadCn/Badge'; 
import { Link } from 'react-router-dom';
import { SegmentedProgressBar } from '@/components/Blocks/SegmentedProgressBar';

const SectionPage: PageComponentType = () => {
    const { section } = useContent();
    
    if (!section) return <>Loading</>;

    return (
      <article>
        <div className='mb-2'>
          <SegmentedProgressBar chapters={section.chapters}/>
        </div>
        <Link to={`/project2025`}>
          <Badge className='border-secondary text-secondary-dark hover:bg-secondary-lighter' variant={"outline"} size="sm">📜 Project 2025</Badge>
        </Link>
        <h1><span>{section.emoji}</span> {section.sectionIdx}. {changeCase.capitalCase(section.title)}</h1>
        <p>{section.description}</p>
        <ChapterList />
      </article>
    );
  }

SectionPage.route = {
  path: "/project2025/:sectionName"
}

export default SectionPage