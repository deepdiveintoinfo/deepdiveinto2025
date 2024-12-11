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
import { ChapterType } from '@/content/project2025/types';

const chapterImages: { [chapterIdx: number]: string} = {
  1: 'https://images.pexels.com/photos/129112/pexels-photo-129112.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1', // White House
  2: 'https://images.pexels.com/photos/1146358/pexels-photo-1146358.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1', // Capitol Building
  3: 'https://images.pexels.com/photos/5668430/pexels-photo-5668430.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1', // Government meeting
  4: 'https://images.pexels.com/photos/3743542/pexels-photo-3743542.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1', // Military vehicles
  5: 'https://images.pexels.com/photos/97509/pexels-photo-97509.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1', // Homeland Security // https://images.pexels.com/photos/97509/pexels-photo-97509.jpeg
  6: 'https://images.pexels.com/photos/7841425/pexels-photo-7841425.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1', // Department of State
  7: 'https://images.pexels.com/photos/12220471/pexels-photo-12220471.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1', // Intelligence Community
  8: 'https://images.pexels.com/photos/1722177/pexels-photo-1722177.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1', // Media Agencies
  9: 'https://images.pexels.com/photos/9493595/pexels-photo-9493595.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1', // International Aid
  10: 'https://images.pexels.com/photos/1112080/pexels-photo-1112080.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1', // Agriculture
  11: 'https://images.pexels.com/photos/1181395/pexels-photo-1181395.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1', // Education
  12: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1', // Energy
  13: 'https://images.pexels.com/photos/414798/pexels-photo-414798.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1', // Environment
  14: 'https://images.pexels.com/photos/218297/pexels-photo-218297.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1', // Health
  15: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1', // Housing
  16: 'https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1', // Interior
  17: 'https://images.pexels.com/photos/6069606/pexels-photo-6069606.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1', // Justice
  18: 'https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1', // Labor
  19: 'https://images.pexels.com/photos/155144/pexels-photo-155144.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1', // Transportation
  20: 'https://images.pexels.com/photos/1053764/pexels-photo-1053764.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1', // Veterans
  21: 'https://images.pexels.com/photos/1181400/pexels-photo-1181400.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1', // Commerce
  22: 'https://images.pexels.com/photos/545064/pexels-photo-545064.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1', // Treasury
  23: 'https://images.pexels.com/photos/210182/pexels-photo-210182.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1', // Export-Import
  24: 'https://images.pexels.com/photos/210598/pexels-photo-210598.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1', // Federal Reserve
  25: 'https://images.pexels.com/photos/3345876/pexels-photo-3345876.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1', // Small Business
  26: 'https://images.pexels.com/photos/1427541/pexels-photo-1427541.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1', // Trade
  27: 'https://images.pexels.com/photos/1109543/pexels-photo-1109543.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1', // Financial Regulation
  28: 'https://images.pexels.com/photos/270288/pexels-photo-270288.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1', // Communications
  29: 'https://images.pexels.com/photos/1550337/pexels-photo-1550337.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1', // Election Commission
  30: 'https://images.pexels.com/photos/264507/pexels-photo-264507.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=1', // Trade Commission
};

export const ExploreChaptersSection = () => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const { project2025 } = useContent();
  const chapters = project2025?.sections.map((section) => section.chapters).flat(Infinity) as ChapterType[];
  
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
    <section className="py-0">
      <div className="container">
        <div className="mb-8 flex flex-col justify-between md:mb-14 md:flex-row md:items-end lg:mb-16">
          <h2 className="mb-4 text-sm text-muted-foreground lg:text-lg uppercase">
            Explore The Chapters of Project 2025
          </h2>
          <div className="mt-8 flex shrink-0 items-center justify-start gap-2">
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
      <div className="w-full max-w-screen-xs sm:max-w-screen-sm md:max-w-full overflow-hidden flex justify-center md:justify-start">
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
          <CarouselContent className="max-w-xs max-h-full ml-[calc(1rem-20px)] mr-[calc(1rem)] 2xl:ml-[calc(50vw-700px+1rem-20px)] 2xl:mr-[calc(50vw-700px+1rem)]">
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
                  <div className="mb-2 line-clamp-1 ellipsis pt-4 text-md font-medium md:mb-3 md:pt-4 md:text-lg lg:pt-4 lg:text-xl">
                    {chapter.chapterIdx}. {chapter.title}
                  </div>
                  <div className="mb-8 line-clamp-2 text-sm text-muted-foreground md:mb-12 md:text-base lg:mb-9">
                    {chapter.description}
                  </div>
                  <div className="flex items-center text-sm self-end">
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
