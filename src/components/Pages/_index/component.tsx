import { PageComponentType } from '@/lib/types'

import { HeroSection, RetooledGoalsSection, HowYouCanHelpSection, WhyThisMattersSection, ExploreChaptersSection } from './sections'


export const IndexPage: PageComponentType = () => {
  return (
    <div className="font-sans grid justify-center">
      <HeroSection />
      <RetooledGoalsSection />
      <ExploreChaptersSection />
      <WhyThisMattersSection />
      <HowYouCanHelpSection />
    </div>
  );
};

IndexPage.path = "/";
