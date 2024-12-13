import { PageComponentType } from '@/lib/types'
import ContentComponent from './content.mdx'

// Define the TypeScript interfaces
const AboutPage: PageComponentType = () => {
  return <article><ContentComponent /></article>;
}

AboutPage.route = {
  path: "/about",
}

export default AboutPage