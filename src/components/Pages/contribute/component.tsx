import { PageComponentType } from '@/lib/types'
import ContentComponent from './content.mdx'

// Define the TypeScript interfaces
export const ContributePage: PageComponentType = () => {

    // const { contributeId } = useParams()

    return <article><ContentComponent /></article>;
  }

  ContributePage.path = "/contribute"
