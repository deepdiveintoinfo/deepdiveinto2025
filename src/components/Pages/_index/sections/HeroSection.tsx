import { Button } from "@/components/ThirdParty/ShadCn/Button";
import { Link } from "react-router-dom";

export const HeroSection = () => (
  <div className="container md:py-24 lg:py-32">
  {/* Grid */}
  <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
    {/* Text Section */}
    <div>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Help Unpack the Blueprint for America's Future
      </h1>
      <p className="mt-3 text-xl text-muted-foreground">
        Project 2025 outlines a vision for significant government restructuring and policy changes. Our mission is to critically analyze this document, uncovering its potential risks, impacts, and underlying motives. By collaborating on this analysis, we aim to create a transparent, accessible resource to inform and prepare communities for the possible implications of these proposals.
      </p>
      {/* Buttons */}
      <div className="mt-7 w-full flex justify-evenly">
        <Link to="/project2025">
          <Button size={"lg"}>Explore the Analysis</Button>
        </Link>
        <Link to="/about">
          <Button variant={"outline"} size={"lg"}>
            Learn More
          </Button>
        </Link>
      </div>
    </div>
    {/* End Text Section */}

    {/* Video Section */}
    <div className="relative ms-4">
      <div
        className="relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all"
        style={{ paddingTop: "56.25%" }}
      >
        <iframe
          className="absolute inset-0 w-full h-full rounded-md"
          src="https://www.youtube.com/embed/3h8C0QDEgsA?si=FJHzOwGIjcRrtexG"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
      <small className="text-muted-foreground text-sm mt-4 block text-center">
        Donald Trump endorses a 'mandate' from The Heritage Foundation. Following this endorsement, The Heritage Foundation released their Mandate for Leadership, also known as Project 2025.
      </small>
    </div>
    {/* End Video Section */}
  </div>
  {/* End Grid */}
</div>

)