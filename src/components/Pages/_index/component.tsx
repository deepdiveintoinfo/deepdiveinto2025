import { PageComponentType } from '@/lib/types'

import { AboveTheFold, OurMissionSection, HowYouCanHelpSection, WhyThisMattersSection, ExploreChaptersSection } from './sections'

import { ReactNode } from 'react';

const BelowTheFold = ({ children }: { children: ReactNode }) => <>{children}</>

const IndexPage: PageComponentType = () => {
  return (
    <div className="font-sans grid justify-center">
      <AboveTheFold />
      <BelowTheFold>
        <OurMissionSection />
        <ExploreChaptersSection />
        <WhyThisMattersSection />
        <HowYouCanHelpSection />
      </BelowTheFold>
    </div>
  );
};

IndexPage.route = {
  path: "/"
}

export default IndexPage;