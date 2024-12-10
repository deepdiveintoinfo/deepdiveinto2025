import { PageComponentType } from '@/lib/types'
import ContentComponent from './content.mdx'

// Define the TypeScript interfaces
const PrivacyPolicyPage: PageComponentType = () => {
    return <article><ContentComponent /></article>;
}

PrivacyPolicyPage.route = {
  path: "/privacy-policy"
}

export default PrivacyPolicyPage