import { CheckIcon } from "lucide-react";

export const RetooledGoalsSection = () => {
  return (
    <>
    <div className="grid gap-6 md:grid-cols-2 py-24">
      <div className="flex flex-col justify-start gap-10 rounded-2xl border border-secondary-lighter p-5 lg:p-10">
        <p className="text-sm text-muted-foreground">OUR MISSION</p>
        <p className="text-lg font-medium">
          To provide a clear and accessible analysis that identifies risks, simplifies
          complexity, and empowers communities to respond to potential impacts of policy.
        </p>
      </div>
      <div className="border flex flex-col justify-between bg-transparent gap-10 rounded-2xl border-secondary-lighter p-5 lg:p-10">
      <ul>
          <li className="my-2">
            <h3 className="flex gap-2 text-base sm:text-lg font-semibold">
              <CheckIcon className="stroke-primary-dark" /> Identify Risks and Implications
            </h3>
            <p className="text-muted-foreground text-sm pl-8">
              Each chapter is carefully analyzed to uncover potential dangers,
              biases, and impacts on different communities. By identifying risks,
              we aim to empower stakeholders with actionable insights.
            </p>
          </li>
          <li className="my-2">
            <h3 className="flex gap-2 text-base sm:text-lg font-semibold">
              <CheckIcon className="stroke-primary-dark" /> Simplify and Clarify Content
            </h3>
            <p className="text-muted-foreground text-sm pl-8">
              Complex language and dense policy details are broken down into
              clear, accessible explanations, ensuring everyone can engage
              with the material.
            </p>
          </li>
          <li className="my-2">
            <h3 className="flex gap-2 text-base sm:text-lg font-semibold">
              <CheckIcon className="stroke-primary-dark" /> Encourage Collaborative Analysis
            </h3>
            <p className="text-muted-foreground text-sm pl-8">
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

