import { ChapterType } from '@/content/project2025/types';
import corporationForPublicBroadcasting from './corporation-for-public-broadcasting';
import usAgencyForGlobalMedia from './us-agency-for-global-media';
import pdfPath from '@/assets/chapters/8_media-agencies.pdf';

const mediaAgencies: ChapterType = {
  chapterIdx: 8,
  title: "Media Agencies",
  chapterId: "media-agencies",
  url: "/project2025/the-common-defense/media-agencies",
  emoji: "📺",
  description: "Suggests restructuring media agencies to align with government messaging goals.",
  metadata: {
    authors: [
      {
        name: "Mora Namdar",
        avatar: "https://example.com/images/authors/margaret-kane.jpg",
      },
      {
        name: "Mike Gonzalez",
        avatar: "https://example.com/images/authors/margaret-kane.jpg",
      },
    ],
    title: "Media Agencies",
    keywords: ["Media Alignment", "Government Messaging", "Broadcasting Reform"],
    status: "undone",
  },
  versions: {
    pdfPath,
  },
  summary: () => (
    <p>
      This chapter reviews proposals to restructure media agencies to better align with
      government priorities. It includes detailed plans for the Corporation for Public Broadcasting and
      the U.S. Agency for Global Media, raising concerns about reduced independence and increased
      centralization of messaging.
    </p>
  ),
  subsections: [corporationForPublicBroadcasting, usAgencyForGlobalMedia],
};

export default mediaAgencies;
