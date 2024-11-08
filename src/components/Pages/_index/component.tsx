// import { useEffect } from 'react';
// import { gql, useQuery } from '@apollo/client'
import { PageComponentType } from '@/lib/types'
// import Content from './content/_index.mdx'
import { HeroSection } from '@/components/ThirdParty/UiBlocks';
import { Button } from "@/components/ThirdParty/ShadCn/Button";
import { ChevronRightIcon } from "lucide-react";
import { Caption } from '@/components/Comics/index';
import { IconSection } from '@/components/ThirdParty/UiBlocks/IconSection';

// import { Caption } from '@/components/Comics/index';

// const GET_PEOPLE = gql`
//       query Example{
//           getCharacters {
//             mangaName
//             race
//             team
//             mentors
//             students
//             dateOfBirth
//             dateOfDeath
//         }
//       }  
// `;



export const Content = () => <>
{/* Hero */}
  <div className="container relative py-24 lg:py-32">
    {/* Announcement Banner */}

    <div className="flex justify-center">
    <Caption gradiant className='absolute top-4 left-4'>{"Meanwhile"}...</Caption>

      <a
        className="inline-flex items-center gap-x-2 border text-sm p-1 ps-3 rounded-full transition"
        href="#"
      >
        PRO release - Join to waitlist
        <span className="py-1.5 px-2.5 inline-flex justify-center items-center gap-x-2 rounded-full bg-muted-foreground/15 font-semibold text-sm">
          <svg
            className="flex-shrink-0 w-4 h-4"
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </span>
      </a>
    </div>
    {/* End Announcement Banner */}
    {/* Title */}
    <div className="mt-5 max-w-2xl text-center mx-auto">
      <h1 className="scroll-m-20 text-4xl font-happy-monkey-regular tracking-tight lg:text-5xl">
        is index
      </h1>
    </div>
    {/* End Title */}
    <div className="mt-5 max-w-3xl text-center mx-auto">
      <p className="text-xl text-muted-foreground">
      Welcome to <b>Meanwhile</b> - the modular, scalable, and customizable front-end setup for building modern web applications. Whether you're starting a new project or looking to scale an existing one, Meanwhile provides the tools and components you need to create efficient, high-performance web applications.
      </p>
    </div>
    {/* Buttons */}
    <div className="mt-8 gap-3 flex justify-center">
      <Button size={"lg"}>Get started</Button>
      <Button size={"lg"} variant={"outline"}>
        Learn more
      </Button>
    </div>
    {/* End Buttons */}
    <div className="mt-5 flex justify-center items-center gap-x-1 sm:gap-x-3">
      <span className="text-sm text-muted-foreground">
        Package Manager:
      </span>
      <span className="text-sm font-bold">npm </span>
      <svg
        className="h-5 w-5 text-muted-foreground"
        width={16}
        height={16}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M6 13L10 3"
          stroke="currentColor"
          strokeLinecap="round"
        />
      </svg>
      <a
        className="inline-flex items-center gap-x-1 text-sm decoration-2 hover:underline font-medium"
        href="#"
      >
        Installation Guide
        <ChevronRightIcon className="flex-shrink-0 w-4 h-4" />
      </a>
    </div>
  </div>
{/* End Hero */}
</>


// Define the TypeScript interfaces
  export const IndexPage: PageComponentType = () => {
    // const { loading, error, data } = useQuery(GET_PEOPLE);
  
    // useEffect(() => {
    //   if (loading) return;
    //   if (error) return;
    //   console.log(data)
    // }, [loading, error, data]);
  
    // if (loading) return <p>Loading...</p>;
    // if (error) return <p>Error : {error.message}</p>;
    return (
      <>
      <div className='font-komika-text'>
        <HeroSection.SimpleCentered className='relative'>
          <Content />
        </HeroSection.SimpleCentered>
        <IconSection.CircleIconsCenterAligned />
      </div>
      </>
    );
  }

  IndexPage.path = "/"