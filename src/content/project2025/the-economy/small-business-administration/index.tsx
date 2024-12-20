import { ChapterType } from '@/content/project2025/types';
import pdfPath from '@/assets/chapters/25_small-business-administration.pdf';
const smallBusinessAdministration: ChapterType = {
  chapterIdx: 25,
  title: "Small Business Administration",
  chapterId: "small-business-administration",
  url: "/project2025/the-economy/small-business-administration",
  emoji: "🛍️",
  description: "Focuses on empowering entrepreneurs, with limited support for marginalized groups.",
  metadata: {
    authors: [
      {
        name: "Karen Kerrigan",
        avatar: "https://example.com/images/authors/angela-d-knight.jpg", // Placeholder avatar
      },
    ],
    title: "Small Business Administration",
    keywords: ["Small Business", "Entrepreneurship", "Deregulation", "Economic Growth"],
    status: "undone",
  },
  versions: {
    pdfPath,
  },
  summary: () => (
    <p>
      This chapter outlines reforms aimed at empowering entrepreneurs through deregulation and streamlined support,
      with limited attention to inclusivity or marginalized communities.
    </p>
  ),
};

export default smallBusinessAdministration;
