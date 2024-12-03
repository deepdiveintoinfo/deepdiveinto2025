import { PageComponentType } from '@/lib/types'

import { HeroSection, GoalsSection, HowYouCanHelpSection, WhyThisMattersSection, ExploreChaptersSection } from './sections'


export const IndexPage: PageComponentType = () => {
  return (
    <div className="font-sans grid justify-center">
      <HeroSection />
      <GoalsSection />
      <ExploreChaptersSection />
      <WhyThisMattersSection />
      <HowYouCanHelpSection />
    </div>
  );
};

IndexPage.path = "/";
