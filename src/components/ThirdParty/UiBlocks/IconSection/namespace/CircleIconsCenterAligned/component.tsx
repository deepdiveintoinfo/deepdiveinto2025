import {
  AlertTriangleIcon, BookOpenIcon, UsersIcon, CompassIcon,
} from "lucide-react";

export function CircleIconsCenterAligned() {
  return (
    <>
      {/* Icon Blocks */}
      <div className="container py-24 lg:py-32">
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
                Foster open, public discussions to gather diverse perspectives and critical insights into the document's proposals.
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
