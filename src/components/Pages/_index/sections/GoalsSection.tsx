import { Check } from "lucide-react";

export const RetooledGoalsSection = () => {
  return (
    <>
    <div className="grid gap-6 md:grid-cols-2 py-24">
      <div className="flex flex-col justify-between gap-10 rounded-2xl bg-muted p-10">
        <p className="text-sm text-muted-foreground">OUR MISSION</p>
        <p className="text-lg font-medium">
        To provide a clear and accessible analysis that identifies risks, simplifies
        complexity, and empowers communities to respond to potential impacts of policy.
        </p>
      </div>
      <div className="flex flex-col justify-between gap-10 rounded-2xl bg-muted p-10">
        <ul className="space-y-2 text-sm font-medium sm:text-base lg:text-lg">
          <li className="flex flex-col items-center">
            <Check className="mr-4" />
            <h3 className="text-base sm:text-lg font-semibold">
              Identify Risks and Implications
            </h3>
            <p className="mt-1 text-muted-foreground">
              Each chapter is carefully analyzed to uncover potential dangers,
              biases, and impacts on different communities. By identifying risks,
              we aim to empower stakeholders with actionable insights.
            </p>
          </li>
          <li className="flex flex-col items-center">
            <Check className="mr-4 size-5" />
            <h3 className="text-base sm:text-lg font-semibold">
              Simplify and Clarify Content
            </h3>
            <p className="mt-1 text-muted-foreground">
              Complex language and dense policy details are broken down into
              clear, accessible explanations, ensuring everyone can engage
              with the material.
            </p>
          </li>
          <li className="flex flex-col items-center">
            <Check className="mr-4 size-5" />
            <h3 className="text-base sm:text-lg font-semibold">
            Encourage Collaborative Analysis
            </h3>
            <p className="mt-1 text-muted-foreground">
              Fostering a space for open discussion is key to this effort. We
              aim to gather diverse perspectives to create a more inclusive and
              informed analysis.
            </p>
          </li>
        </ul>
      </div>
    </div>
    </>
  );
}

