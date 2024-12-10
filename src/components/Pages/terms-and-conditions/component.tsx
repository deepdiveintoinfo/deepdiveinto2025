import { PageComponentType } from '@/lib/types'
import ContentComponent from './content.mdx'

// Define the TypeScript interfaces
const TermsAndConditionPage: PageComponentType = () => {
    return <article><ContentComponent /></article>;
}

TermsAndConditionPage.route = {
  path: "/terms-and-conditions"
}

export default TermsAndConditionPage