'use client';

import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

import { Button } from '@/components/ThirdParty/ShadCn/Button';
import type { CarouselApi } from '@/components/ThirdParty/ShadCn/Carousel';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ThirdParty/ShadCn/Carousel';
import { Link } from 'react-router-dom';
import { useContent } from '@/hooks/use-content';
import { ChapterType } from '@/lib/data/project2025/types';

const chapterImages: { [chapterIdx: number]: string} = {
  1: 'https://images.pexels.com/photos/129112/pexels-photo-129112.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1', // White House
  2: 'https://images.pexels.com/photos/1146358/pexels-photo-1146358.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1', // Capitol Building
  3: 'https://images.pexels.com/photos/5668430/pexels-photo-5668430.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1', // Government meeting
  4: 'https://images.pexels.com/photos/3743542/pexels-photo-3743542.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1', // Military vehicles
  5: 'https://images.pexels.com/photo/american-flag-on-top-of-white-house-1055400/', // Homeland Security
  6: 'https://images.pexels.com/photo/flags-of-different-countries-704772/', // Department of State
  7: 'https://images.pexels.com/photo/silhouette-of-man-standing-in-front-of-monitor-218717/', // Intelligence Community
  8: 'https://images.pexels.com/photo/people-having-business-meeting-1181406/', // Media Agencies
  9: 'https://images.pexels.com/photo/person-holding-aid-kit-1169754/', // International Aid
  10: 'https://images.pexels.com/photo/green-corn-field-under-blue-sky-158827/', // Agriculture
  11: 'https://images.pexels.com/photo/people-sitting-in-a-classroom-1181395/', // Education
  12: 'https://images.pexels.com/photo/solar-panel-array-356036/', // Energy
  13: 'https://images.pexels.com/photo/forest-trees-158607/', // Environment
  14: 'https://images.pexels.com/photo/doctor-holding-stethoscope-218297/', // Health
  15: 'https://images.pexels.com/photo/white-and-brown-concrete-building-106399/', // Housing
  16: 'https://images.pexels.com/photo/mountain-during-sunset-167699/', // Interior
  17: 'https://images.pexels.com/photo/scales-of-justice-607712/', // Justice
  18: 'https://images.pexels.com/photo/person-holding-black-pen-1109541/', // Labor
  19: 'https://images.pexels.com/photo/road-traffic-155144/', // Transportation
  20: 'https://images.pexels.com/photo/soldier-in-uniform-1053764/', // Veterans
  21: 'https://images.pexels.com/photo/people-working-in-office-1181400/', // Commerce
  22: 'https://images.pexels.com/photo/close-up-photo-of-u-s-dollar-banknotes-545064/', // Treasury
  23: 'https://images.pexels.com/photo/airplane-flying-above-city-buildings-210182/', // Export-Import
  24: 'https://images.pexels.com/photo/low-angle-photo-of-high-rise-building-210598/', // Federal Reserve
  25: 'https://images.pexels.com/photo/person-holding-open-signage-3345876/', // Small Business
  26: 'https://images.pexels.com/photo/container-van-in-terminal-1427541/', // Trade
  27: 'https://images.pexels.com/photo/close-up-photo-of-pen-1109543/', // Financial Regulation
  28: 'https://images.pexels.com/photo/satellite-dish-under-blue-sky-159451/', // Communications
  29: 'https://images.pexels.com/photo/person-holding-voting-signage-1550337/', // Election Commission
  30: 'https://images.pexels.com/photo/people-shopping-in-a-mall-264507/', // Trade Commission
};

export const ExploreChaptersSection = () => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const { project2025 } = useContent();
  const chapters = project2025?.sections.map((section) => section.chapters).flat(Infinity).splice(0, 5) as ChapterType[];
  
  console.log(chapters.length)
  useEffect(() => {
    if (!carouselApi) {
      return;
    }
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
    };
    updateSelection();
    carouselApi.on('select', updateSelection);
    return () => {
      carouselApi.off('select', updateSelection);
    };
  }, [carouselApi]);
  return (
    <section className="py-32">
      <div className="container">
        <div className="mb-8 flex flex-col justify-between md:mb-14 md:flex-row md:items-end lg:mb-16">
          <div>
            <p className="mb-6 text-xs font-medium uppercase tracking-wider">
              Quick Links
            </p>
            <h2 className="mb-3 text-xl font-semibold md:mb-4 md:text-4xl lg:mb-6">
              Chapters
            </h2>
            <Link
              to="/contribute"
              className="group flex items-center text-xs font-medium md:text-base lg:text-lg"
            >
              Contribute to the Analysis{' '}
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="mt-8 flex shrink-0 items-center justify-center gap-2">
            <Button
              size="icon"
              variant="outline"
              onClick={() => {
                carouselApi?.scrollPrev();
              }}
              disabled={!canScrollPrev}
              className="disabled:pointer-events-auto"
            >
              <ArrowLeft className="size-5" />
            </Button>
            <Button
              size="icon"
              variant="outline"
              onClick={() => {
                carouselApi?.scrollNext();
              }}
              disabled={!canScrollNext}
              className="disabled:pointer-events-auto"
            >
              <ArrowRight className="size-5" />
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full overflow-hidden">
        <Carousel
          setApi={setCarouselApi}
          opts={{
            breakpoints: {
              '(max-width: 768px)': {
                dragFree: true,
              },
            },
          }}
        >
          <CarouselContent className="ml-[calc(1rem-20px)] mr-[calc(1rem)] 2xl:ml-[calc(50vw-700px+1rem-20px)] 2xl:mr-[calc(50vw-700px+1rem)]">
            {chapters.map((chapter) => {
              return (
              <CarouselItem
                key={chapter.chapterId}
                className="pl-[20px] md:max-w-[452px]"
              >
                <Link
                  to={chapter.url}
                  className="group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex aspect-[3/2] text-clip rounded-xl">
                      <div className="flex-1">
                        <div className="relative size-full origin-bottom transition duration-300 group-hover:scale-105">
                          <img
                            src={chapterImages[chapter.chapterIdx]}
                            alt={chapter.title}
                            className="size-full object-cover object-center"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-2 line-clamp-3 break-words pt-4 text-lg font-medium md:mb-3 md:pt-4 md:text-xl lg:pt-4 lg:text-2xl">
                    {chapter.title}
                  </div>
                  <div className="mb-8 line-clamp-2 text-sm text-muted-foreground md:mb-12 md:text-base lg:mb-9">
                    {chapter.description}
                  </div>
                  <div className="flex items-center text-sm">
                    Read more{' '}
                    <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              </CarouselItem>
            )
          })}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};
