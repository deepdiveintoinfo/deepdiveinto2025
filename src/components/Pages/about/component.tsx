import { PageComponentType } from '@/lib/types'
import ContentComponent from './content.mdx'

// Define the TypeScript interfaces
export const AboutPage: PageComponentType = () => {

    // const { aboutId } = useParams()

    return <article><ContentComponent /></article>;
  }

  AboutPage.path = "/about"
