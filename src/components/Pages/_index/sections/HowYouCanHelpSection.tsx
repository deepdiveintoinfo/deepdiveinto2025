export const HowYouCanHelpSection = () => (
    <section className="container bg-white rounded-lg shadow-lg p-8 mt-12">
      <h2 className="text-center text-3xl font-display font-bold tracking-tight text-primary mb-8">
        How You Can Help
      </h2>
      <p className="text-center text-muted-foreground text-lg mb-6 leading-relaxed">
        Join our efforts to analyze Project 2025. Whether you’re a researcher, writer, or concerned citizen, there’s a way for you to contribute.
      </p>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <HelpItem
          title="Validate Content"
          description="Review and refine transcriptions of the document for accuracy and clarity."
        />
        <HelpItem
          title="Transcribe Chapters"
          description="Use our guidelines to create draft versions of untranscribed sections."
        />
        <HelpItem
          title="Collaborate on Analysis"
          description="Help break down and analyze every sentence, paragraph, and section."
        />
        <HelpItem
          title="Engage in Discussions"
          description="Join public conversations on GitHub to provide insights and feedback."
        />
      </ul>
      <div className="text-center mt-8">
        <a
          href="https://github.com"
          className="inline-block px-6 py-3 bg-primary text-white font-semibold rounded-lg shadow hover:bg-primary-darker transition"
        >
          Get Started on GitHub
        </a>
      </div>
    </section>
  );
  
  const HelpItem = ({ title, description }: { title: string; description: string }) => (
    <li className="bg-gray-50 rounded-lg shadow p-6 text-center">
      <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{description}</p>
    </li>
  );
  