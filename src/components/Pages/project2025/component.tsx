// import { useParams } from 'react-router-dom';
// import { useArticle } from '@/hooks/use-article';
import { PageComponentType } from '@/lib/types'
import ContentComponent from './content.mdx'

// Define the TypeScript interfaces
export const ProjectPage: PageComponentType = () => {
    return <article><ContentComponent /></article>;
  }

  ProjectPage.path = "/project2025"
