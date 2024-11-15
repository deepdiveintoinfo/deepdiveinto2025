import { PageComponentType } from '@/lib/types'
import { HeroSection as UiBlocksHeroSection } from '@/components/ThirdParty/UiBlocks';
import { Button } from "@/components/ThirdParty/ShadCn/Button";
import { ChevronRightIcon } from "lucide-react";
import { IconSection } from '@/components/ThirdParty/UiBlocks/IconSection';
import { Link } from 'react-router-dom';
import {
  AlertTriangleIcon, BookOpenIcon, UsersIcon, CompassIcon,
} from "lucide-react";

export const HeroSection = () => <>
{/* Hero */}
  <div className="container relative py-0 lg:py-0">
    {/* Announcement Banner */}

    {/* End Announcement Banner */}
    {/* Title */}
    <div className="mt-8 mb-5 max-w-2xl text-center mx-auto">
      {/* <h1 className="scroll-m-20 text-4xl font-happy-monkey-regular tracking-tight lg:text-5xl">
        Deep Dive Into 2025
      </h1> */}
    </div>
    {/* End Title */}
    <div className="mt-0 max-w-md lg:max-w-[550px] mx-auto text-center">
      <div className="relative overflow-hidden" style={{ paddingTop: '56.25%' }}>
        <iframe
          className="absolute inset-0 w-full h-full max-w-[550px] max-h-[315px]"
          src="https://www.youtube.com/embed/3h8C0QDEgsA?si=FJHzOwGIjcRrtexG"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
        <small>Donald Trump endorses a 'mandate' from The Heritage Foundation. Following this endorsement, The Heritage Foundation released their Mandate for Leadership, also known as Project 2025.</small>
      </div>
    </div>
    <p className="text-lg xs:text-sm xs:max-w-md text-center text-muted-foreground mt-4">
      Project 2025, or the Mandate for Leadership, outlines a vision for significant government restructuring and policy changes. Our mission is to critically analyze this document, uncovering its potential risks, impacts, and underlying motives. By collaborating on this analysis, we aim to create a transparent, accessible resource to inform and prepare communities for the possible implications of these proposals.
    </p>
    {/* Buttons */}
    <div className="mt-8 gap-3 flex justify-center">
      <Link to="/analysis/document">
        <Button size={"lg"}>Explore the Document</Button>
      </Link>
      
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
      <div className='font-komika-text grid justify-center'>
          <HeroSection />
          <GoalsSection />
      </div>
      </>
    );
  }

  IndexPage.path = "/"

  export function GoalsSection() {
    return (
      <>
        {/* Icon Blocks */}
        <div className="container py-24 lg:py-32">
          <h2 className='text-center md:text-left'>Goals</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 items-top gap-12">
            {/* Icon Block */}
            <div className="text-center">
              <div className="flex justify-center items-center w-12 h-12 bg-primary border rounded-full mx-auto">
                <AlertTriangleIcon className="flex-shrink-0 w-5 h-5 text-primary-foreground" />
              </div>
              <div className="mt-3">
                <h3 className="text-lg font-semibold ">Identify Risks and Implications</h3>
                <p className="mt-1 text-muted-foreground">
                  Analyze each chapter to uncover potential dangers, biases, and impacts on various communities.
                </p>
              </div>
            </div>
            {/* End Icon Block */}
            {/* Icon Block */}
            <div className="text-center">
              <div className="flex justify-center items-center w-12 h-12 bg-primary border rounded-full mx-auto">
                <BookOpenIcon className="flex-shrink-0 w-5 h-5 text-primary-foreground" />
              </div>
              <div className="mt-3">
                <h3 className="text-lg font-semibold ">Simplify and Clarify Content</h3>
                <p className="mt-1 text-muted-foreground">
                  Break down complex language and concepts to make the document accessible and understandable for everyone.
                </p>
              </div>
            </div>
            {/* End Icon Block */}
            {/* Icon Block */}
            <div className="text-center">
              <div className="flex justify-center items-center w-12 h-12 bg-primary border rounded-full mx-auto">
                <UsersIcon className="flex-shrink-0 w-5 h-5 text-primary-foreground" />
              </div>
              <div className="mt-3">
                <h3 className="text-lg font-semibold ">Encourage Collaborative Analysis</h3>
                <p className="mt-1 text-muted-foreground">
                  Foster open, public discussions to gather diverse perspectives and critical insights into the document’s proposals.
                </p>
              </div>
            </div>
            {/* End Icon Block */}
            {/* Icon Block */}
            <div className="text-center">
              <div className="flex justify-center items-center w-12 h-12 bg-primary border rounded-full mx-auto">
                <CompassIcon className="flex-shrink-0 w-5 h-5 text-primary-foreground" />
              </div>
              <div className="mt-3">
                <h3 className="text-lg font-semibold ">Prepare for Real-World Outcomes</h3>
                <p className="mt-1 text-muted-foreground">
                Equip readers and communities with knowledge to anticipate and respond to the possible effects of these policies.
                </p>
              </div>
            </div>
            {/* End Icon Block */}
          </div>
        </div>
        {/* End Icon Blocks */}
      </>
    );
  }
  