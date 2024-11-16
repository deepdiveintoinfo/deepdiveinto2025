import { Edit3Icon, ListIcon, MessageCircleIcon, Users2Icon } from "lucide-react";

export function HowYouCanHelpSection() {
  return (
    <section className="container py-24 lg:py-32">
      <div className="max-w-2xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold lg:text-4xl">How You Can Help</h2>
          <p className="mt-3 text-muted-foreground">
            Join our efforts to analyze Project 2025. Whether you’re a researcher, writer, or concerned citizen, there’s a way for you to contribute.
          </p>
        </div>
        {/* Icon Blocks */}
        <div className="space-y-6 lg:space-y-10">
          {/* Icon Block 1 */}
          <div className="flex">
            <Edit3Icon className="flex-shrink-0 mt-2 h-6 w-6 text-primary" />
            <div className="ms-5 sm:ms-8">
              <h3 className="text-base sm:text-lg font-semibold">
                Validate Content
              </h3>
              <p className="mt-1 text-muted-foreground">
                Review and refine transcriptions of the document for accuracy and clarity.
              </p>
            </div>
          </div>
          {/* Icon Block 2 */}
          <div className="flex">
            <ListIcon className="flex-shrink-0 mt-2 h-6 w-6 text-primary" />
            <div className="ms-5 sm:ms-8">
              <h3 className="text-base sm:text-lg font-semibold">
                Transcribe Chapters
              </h3>
              <p className="mt-1 text-muted-foreground">
                Use our guidelines to create draft versions of untranscribed sections.
              </p>
            </div>
          </div>
          {/* Icon Block 3 */}
          <div className="flex">
            <MessageCircleIcon className="flex-shrink-0 mt-2 h-6 w-6 text-primary" />
            <div className="ms-5 sm:ms-8">
              <h3 className="text-base sm:text-lg font-semibold">
                Collaborate on Analysis
              </h3>
              <p className="mt-1 text-muted-foreground">
                Help break down and analyze every sentence, paragraph, and section for better understanding.
              </p>
            </div>
          </div>
          {/* Icon Block 4 */}
          <div className="flex">
            <Users2Icon className="flex-shrink-0 mt-2 h-6 w-6 text-primary" />
            <div className="ms-5 sm:ms-8">
              <h3 className="text-base sm:text-lg font-semibold">
                Join Discussions
              </h3>
              <p className="mt-1 text-muted-foreground">
                Engage in public conversations on GitHub to share insights and feedback with other contributors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
