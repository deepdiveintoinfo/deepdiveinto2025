import { PageComponentType } from '@/lib/types'
import { HeroSection } from '@/components/ThirdParty/UiBlocks';
import { Button } from "@/components/ThirdParty/ShadCn/Button";
import { ChevronRightIcon } from "lucide-react";
import { IconSection } from '@/components/ThirdParty/UiBlocks/IconSection';


export const Content = () => <>
{/* Hero */}
  <div className="container relative py-0 lg:py-0">
    {/* Announcement Banner */}

    {/* End Announcement Banner */}
    {/* Title */}
    <div className="mt-12 mb-5 max-w-2xl text-center mx-auto">
      <h1 className="scroll-m-20 text-4xl font-happy-monkey-regular tracking-tight lg:text-5xl">
        Deep Dive Into 2025
      </h1>
    </div>
    {/* End Title */}
    <div className="mt-0 max-w-5xl text-center mx-auto">
    <iframe className='inline-block' width="560" height="315" src="https://www.youtube.com/embed/3h8C0QDEgsA?si=FJHzOwGIjcRrtexG" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
      <p className="text-xl text-muted-foreground">
      Donald Trump's connection to Project 2025's Mandate for Leadership is clear in his speeches, even if he doesn't say he's fully behind it. The project is a plan to reshape the government in a conservative way by placing loyal supporters in important positions and making federal agencies smaller. In a recent speech at The Heritage Foundation, <a href="https://www.snopes.com/fact-check/trump-video-project-2025-colossal-mandate/">Trump spoke excitedly about the need for a strong “mandate,”</a> fitting with the goals of Project 2025's <i>Mandate</i> for Leadership.
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