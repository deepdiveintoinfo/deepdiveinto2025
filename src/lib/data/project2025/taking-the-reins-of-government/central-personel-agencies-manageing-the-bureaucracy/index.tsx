import { ChapterType } from '@/lib/data/project2025/types';

const centralPersonnelAgencies: ChapterType = {
  chapterIdx: 3,
  title: "Central Personnel Agencies",
  chapterId: "central-personnel-agencies",
  url: "/project2025/taking-the-reins-of-government/central-personnel-agencies",
  emoji: "📇",
  description: "Proposes reforms to align the federal workforce with ideological goals, potentially sidelining career professionals.",
  metadata: {
    authors: [
      {
        name: "Margaret Whitestone",
        avatar: "https://example.com/images/authors/margaret-whitestone.jpg", // Placeholder avatar
      },
    ],
    status: "undone", // Adjust based on the progress
    title: "Central Personnel Agencies",
    wordcount: 7250, // Example word count; update with actual value.
    keywords: ["Federal Workforce", "Reform", "Ideological Alignment", "Civil Service"],
  },
  summary: () => (
    <p>
      This chapter outlines proposed reforms to central personnel agencies, aiming to align the federal workforce with
      ideological goals. It raises questions about the balance between political loyalty and maintaining professional expertise
      within civil service roles.
    </p>
  ),
  endnotes: () => (
    <p>
      Endnotes include detailed references to past administrations' staffing policies, highlighting the tension between
      ideological alignment and merit-based hiring.
    </p>
  ),
};

export default centralPersonnelAgencies;
