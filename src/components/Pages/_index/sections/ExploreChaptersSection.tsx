export const ExploreChaptersSection = () => (
  <section className="container bg-white rounded-lg shadow-lg p-8 mt-12">
    <h2 className="text-center text-3xl font-display font-bold tracking-tight text-primary mb-8">
      Explore the Chapters
    </h2>
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        { id: 1, title: "Introduction to the Mandate" },
        { id: 2, title: "Reshaping Bureaucracy" },
        { id: 3, title: "Policies for the Future" },
      ].map((chapter) => (
        <ChapterItem key={chapter.id} id={chapter.id} title={chapter.title} />
      ))}
    </ul>
  </section>
);

const ChapterItem = ({ id, title }: { id: number; title: string }) => (
  <li className="bg-gray-50 rounded-lg shadow p-6">
    <h3 className="text-lg font-semibold text-foreground">{`Chapter ${id}`}</h3>
    <p className="mt-2 text-sm text-muted-foreground">{title}</p>
    <a
      href={`/project2025/chapter/${id}/read`}
      className="inline-block mt-4 text-sm text-primary hover:underline"
    >
      Read More →
    </a>
  </li>
);
