// import { Timer, Zap, ZoomIn } from 'lucide-react';

export const WhyThisMattersSection = () => {
  return (
    <section className="py-32">
      <div className="container">
        <h2 className="mb-4 text-sm lg:text-lg uppercase">
          Why This Matters
        </h2>
        <p className='mt-8 mb-8'>
          Project 2025 is more than policy goals — it's a detailed plan to change how government and society work. By examining it closely, we aim to provide a clear and accessible record that helps communities stay informed and prepared.
        </p>
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-lg border border-primary-light text-muted-foreground bg-white/50 p-5">
            <h3 className="mb-2 text-xl font-medium text-secondary">Who Could Be Affected?</h3>
            <p className="leading-7 text-muted-foreground">
              Policies in areas like healthcare, education, and civil rights could create big changes for communities, organizations, and vulnerable groups.
            </p>
          </div>
          <div className="rounded-lg  border border-primary-light text-muted-foreground bg-white/50 p-5">
            <h3 className="mb-2 text-xl font-medium text-secondary">What's at Stake?</h3>
            <p className="leading-7 text-muted-foreground">
              Fair decision-making, equal representation, and readiness for major societal shifts are all on the line.
            </p>
          </div>
          <div className="rounded-lg border border-primary-light bg-white/50 p-5">
            <h3 className="mb-2 text-xl font-medium text-secondary">A Public Record</h3>
            <p className="leading-7 text-muted-foreground">
              We're creating a clear, detailed analysis of every part of the document to ensure accountability and fight misinformation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};