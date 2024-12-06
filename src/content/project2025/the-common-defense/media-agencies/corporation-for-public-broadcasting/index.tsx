import { ChapterType } from '@/content/project2025/types';

const corporationForPublicBroadcasting: ChapterType = {
  chapterIdx: 8.1,
  title: "Corporation for Public Broadcasting",
  chapterId: "corporation-for-public-broadcasting",
  url: "/project2025/the-common-defense/media-agencies/corporation-for-public-broadcasting",
  emoji: "📻",
  description: "Focuses on reducing funding and shifting public broadcasting priorities towards alignment with government messaging.",
  metadata: {
    authors: [
      {
        name: "Mike Gonzalez",
        avatar: "https://example.com/images/authors/caroline-blake.jpg",
      },
    ],
    title: "Corporation for Public Broadcasting",
    wordcount: 3600,
    keywords: ["Public Broadcasting", "Government Messaging", "Funding Cuts"],
    status: "undone",
  },
  summary: () => (
    <p>
      This subsection examines proposed cuts to the Corporation for Public Broadcasting, emphasizing
      the need for alignment with government messaging. Critics suggest these changes risk undermining
      public trust and independence in media.
    </p>
  ),
  endnotes: () => (
    <p>
      Endnotes highlight historical debates around funding for public broadcasting and its role in
      fostering independent journalism.
    </p>
  ),
};

export default corporationForPublicBroadcasting;
