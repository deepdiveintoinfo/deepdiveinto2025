import { PageComponentType } from '@/lib/types'
import ContentComponent from './content.mdx'

// Define the TypeScript interfaces
const FaqPage: PageComponentType = () => {

    // const { faqId } = useParams()

    return <article><ContentComponent /></article>;
  }

FaqPage.route = {
  path: "/faq"
}

export default FaqPage