import { ChapterType } from '@/content/project2025/types';

const usAgencyForGlobalMedia: ChapterType = {
  chapterIdx: 8.2,
  title: "U.S. Agency for Global Media",
  chapterId: "us-agency-for-global-media",
  url: "/project2025/the-common-defense/media-agencies/us-agency-for-global-media",
  emoji: "🌍",
  description: "Advocates restructuring international broadcasting agencies to serve as direct tools of U.S. foreign policy.",
  metadata: {
    authors: [
      {
        name: "Mora Namdar",
        avatar: "https://example.com/images/authors/edward-thompson.jpg",
      },
    ],
    title: "U.S. Agency for Global Media",
    wordcount: 4300,
    keywords: ["International Broadcasting", "Foreign Policy", "Media Control"],
    status: "undone",
  },
  summary: () => (
    <p>
      This subsection discusses proposals to reform the U.S. Agency for Global Media by emphasizing
      alignment with foreign policy objectives. The recommendations raise concerns about the agency's
      independence and credibility in international journalism.
    </p>
  ),
  endnotes: () => (
    <p>
      Endnotes reference prior uses of international media as soft power tools and their implications
      for journalistic integrity.
    </p>
  ),
};

export default usAgencyForGlobalMedia;
