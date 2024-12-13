import { PageComponentType } from '@/lib/types'
import ContentComponent from './content.mdx'

// Define the TypeScript interfaces
const ContributePage: PageComponentType = () => {

  // const { contributeId } = useParams()

  return <article><ContentComponent /></article>;
}

ContributePage.route = {
  path: "/contribute"
}

export default ContributePage