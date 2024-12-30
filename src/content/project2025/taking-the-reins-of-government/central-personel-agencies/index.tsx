import { ChapterType } from '@/content/project2025/types';
import original from './versions/original.md';
import pdfPath from '@/assets/chapters/3_central-personnel-agencies.pdf';

const centralPersonnelAgencies: ChapterType = {
  chapterIdx: 3,
  title: "Central Personnel Agencies",
  chapterId: "central-personnel-agencies",
  url: "/project2025/taking-the-reins-of-government/central-personnel-agencies",
  emoji: "📇",
  tagline: "Shaping civil service to fit an agenda.",
  description: "Proposes reforms to align the federal workforce with ideological goals, potentially sidelining career professionals.",
  metadata: {
    authors: [
      {
        name: "Donald Devine",
        avatar: "https://example.com/images/authors/margaret-whitestone.jpg", // Placeholder avatar
      },
      {
        name: "Dennis Dean Kirk",
        avatar: "https://example.com/images/authors/margaret-whitestone.jpg", // Placeholder avatar
      },
      {
        name: "Paul Dans",
        avatar: "https://example.com/images/authors/margaret-whitestone.jpg", // Placeholder avatar
      },
    ],
    status: "clarifying",
    title: "Central Personnel Agencies",
    keywords: ["Federal Workforce", "Reform", "Ideological Alignment", "Civil Service"],
  },
  versions: {
    original,
    pdfPath,
  },
  summary: () => (
    <p>
      This chapter outlines proposed reforms to central personnel agencies, aiming to align the federal workforce with
      ideological goals. It raises questions about the balance between political loyalty and maintaining professional expertise
      within civil service roles.
    </p>
  ),
};

export default centralPersonnelAgencies;
