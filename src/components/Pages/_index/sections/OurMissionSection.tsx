import { CheckIcon } from "lucide-react";

export const OurMissionSection = () => {
  return (
    <>
    <div className="grid gap-6 md:grid-cols-2 py-24">
      <div className="flex flex-col justify-center items-start  rounded-2xl border border-primary-light bg-white/50 p-5 shrink">
        <p className="text-sm text-secondary uppercase mb-2">Our Mission</p>
        <p className="text-base">
          We aim to provide clear and easy-to-understand analysis. 
          Our goal is to highlight risks, simplify complex ideas, and help communities prepare for how policies might affect them.
        </p>
      </div>
      <div className="border flex flex-col justify-between gap-10 rounded-2xl border-primary-light bg-white/50 p-5 lg:p-5">
      <ul>
          <li className="my-2">
            <h3 className="text-secondary flex gap-2 text-base sm:text-lg font-semibold">
              <CheckIcon className="stroke-secondary" /> Identify Risks and Implications
            </h3>
            <p className="text-muted-foreground pl-8">
              Each chapter is reviewed to find possible dangers, biases, and impacts on communities. 
              By pointing out these risks, we give people the tools to take action.
            </p>
          </li>
          <li className="my-2">
            <h3 className="text-secondary flex gap-2 text-base sm:text-lg font-semibold">
              <CheckIcon className="stroke-secondary" /> Simplify and Clarify Content
            </h3>
            <p className="text-muted-foreground pl-8">
              We aim to make complex language and detailed policies easier to understand, so everyone can engage with the material.
            </p>
          </li>
          <li className="my-2">
            <h3 className="text-secondary flex gap-2 text-base sm:text-lg font-semibold">
              <CheckIcon className="stroke-secondary" /> Encourage Collaborative Analysis
            </h3>
            <p className="text-muted-foreground pl-8">
              Open discussion is important to our work. We aim to include many perspectives to create a more complete and fair analysis.
            </p>
          </li>
        </ul>
      </div>
    </div>
    </>
  );
}

