// import { useParams } from 'react-router-dom';
// import { useArticle } from '@/hooks/use-article';
import { PageComponentType } from '@/lib/types'
import ContentComponent from './content.mdx'
import { SectionOverview } from '@/components/Blocks/SectionOverview';

// Define the TypeScript interfaces
export const ProjectPage: PageComponentType = () => {
    return <article>
      <ContentComponent />
      <h3>Section Overview</h3>
      <SectionOverview />  
    </article>;
  }

  ProjectPage.path = "/project2025"
