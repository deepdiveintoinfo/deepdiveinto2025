import { Shield, Book, Search, Users } from "lucide-react";

export const RetooledGoalsSection = () => {
  return (
    <>
      {/* Mission Statement Section */}
      <div className="container py-24 lg:py-32">
        <div className="max-w-3xl mx-auto text-center">
          {/* Header */}
          <h2 className="text-3xl font-bold lg:text-4xl">Our Mission Statement</h2>
          <p className="mt-3 text-muted-foreground">
            To provide a clear and accessible analysis that identifies risks, simplifies
            complexity, and empowers communities to respond to potential impacts of policy.
          </p>
        </div>
        <div className="space-y-6 lg:space-y-8 mt-8 md:mt-12 max-w-3xl mx-auto">
            {/* Goal Block */}
            <div className="flex">
              <Shield className="flex-shrink-0 mt-2 h-6 w-6 text-primary" />
              <div className="ms-5 sm:ms-8">
                <h3 className="text-base sm:text-lg font-semibold">
                  Identify Risks and Implications
                </h3>
                <p className="mt-1 text-muted-foreground">
                  Each chapter is carefully analyzed to uncover potential dangers,
                  biases, and impacts on different communities. By identifying risks,
                  we aim to empower stakeholders with actionable insights.
                </p>
              </div>
            </div>
            {/* End Goal Block */}
            {/* Goal Block */}
            <div className="flex">
              <Book className="flex-shrink-0 mt-2 h-6 w-6 text-primary" />
              <div className="ms-5 sm:ms-8">
                <h3 className="text-base sm:text-lg font-semibold">
                  Simplify and Clarify Content
                </h3>
                <p className="mt-1 text-muted-foreground">
                  Complex language and dense policy details are broken down into
                  clear, accessible explanations, ensuring everyone can engage
                  with the material.
                </p>
              </div>
            </div>
            {/* End Goal Block */}
            {/* Goal Block */}
            <div className="flex">
              <Users className="flex-shrink-0 mt-2 h-6 w-6 text-primary" />
              <div className="ms-5 sm:ms-8">
                <h3 className="text-base sm:text-lg font-semibold">
                  Encourage Collaborative Analysis
                </h3>
                <p className="mt-1 text-muted-foreground">
                  Fostering a space for open discussion is key to this effort. We
                  aim to gather diverse perspectives to create a more inclusive and
                  informed analysis.
                </p>
              </div>
            </div>
            {/* End Goal Block */}
            {/* Goal Block */}
            <div className="flex">
              <Search className="flex-shrink-0 mt-2 h-6 w-6 text-primary" />
              <div className="ms-5 sm:ms-8">
                <h3 className="text-base sm:text-lg font-semibold">
                  Prepare for Real-World Outcomes
                </h3>
                <p className="mt-1 text-muted-foreground">
                  By anticipating the possible effects of policies, we aim to
                  equip readers with knowledge and strategies for proactive
                  community engagement.
                </p>
              </div>
            </div>
            {/* End Goal Block */}
          </div>
      </div>
      {/* End Mission Statement Section */}
    </>
  );
}

