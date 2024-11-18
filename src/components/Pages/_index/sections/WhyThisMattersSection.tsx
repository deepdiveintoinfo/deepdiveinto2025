export const WhyThisMattersSection = () => (
    <section className="container bg-white rounded-lg shadow-lg p-8 mt-12">
      <h2 className="text-center text-3xl font-display font-bold tracking-tight text-secondary mb-8">
        Why This Matters
      </h2>
      <p className="text-lg text-center text-muted-foreground leading-relaxed">
        Project 2025 isn't just a set of policy recommendations—it's a detailed roadmap for reshaping government and society. By analyzing it critically, we aim to create a transparent, accessible record that informs and empowers communities.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        <WhyItem
          title="Who Could Be Affected?"
          description="Communities, institutions, and vulnerable populations may face significant changes in policies like healthcare, education, and civil rights."
        />
        <WhyItem
          title="What's at Stake?"
          description="Transparency in decision-making, representation for all voices, and preparation for potential societal changes."
        />
        <WhyItem
          title="A Public Record"
          description="A fully transparent, sentence-by-sentence analysis to hold decision-makers accountable and combat misinformation."
        />
      </div>
    </section>
  );
  
  const WhyItem = ({ title, description }: { title: string; description: string }) => (
    <div className="bg-gray-50 rounded-lg shadow p-6">
      <h3 className="text-lg font-semibold text-secondary">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
  