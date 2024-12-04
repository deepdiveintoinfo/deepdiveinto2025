import { Button } from "@/components/ThirdParty/ShadCn/Button";
import { Link } from "react-router-dom";

export const AboveTheFold = () => (
  <div className="container md:py-24 lg:py-32">
  {/* Grid */}
  <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
    {/* Text Section */}
    <div>
      <h1 className="scroll-m-20 text-2xl lg:text-4xl font-extrabold tracking-tight">
        Help Unpack the Blueprint for America's Future
      </h1>
      <p className="mt-3 text-base lg:text-xl text-muted-foreground">
        Project 2025 presents a plan for major changes to government and policies. Our goal is to carefully review this document to find possible risks, impacts, and motives. By working together, we aim to build a clear, easy-to-understand resource that helps communities stay informed and ready for the effects of these ideas.
      </p>
      {/* Buttons */}
      <div className="mt-7 block lg:flex w-full gap-4">
        <Link className="block my-2 flex-grow" to="/project2025">
          <Button className="w-full" size={"lg"}>Explore the Analysis</Button>
        </Link>
        <Link className="block my-2 flex-grow" to="/about">
          <Button className="w-full" variant={"outline"} size={"lg"}>
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