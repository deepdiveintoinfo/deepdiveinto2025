import { PageComponentType } from '@/lib/types'
import ContentComponent from './content.mdx'

// Define the TypeScript interfaces
const ResourcesPage: PageComponentType = () => {

    // const { faqId } = useParams()

    return <article><ContentComponent /></article>;
  }

  ResourcesPage.route = {
  path: "/resources"
}

export default ResourcesPage