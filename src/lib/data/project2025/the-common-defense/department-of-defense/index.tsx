import { ChapterType } from '@/lib/data/project2025/types';
import DepartmentOfDefenseRaw from './versions/raw.mdx';

const departmentOfDefense: ChapterType = {
  chapterIdx: 4,
  title: "Department of Defense",
  chapterId: "department-of-defense",
  url: "/project2025/the-common-defense/department-of-defense",
  emoji: "🛡️",
  description: "Prioritizes military expansion and executive control over defense policies.",
  metadata: {
    authors: [
      {
        name: "Christopher Miller",
        avatar: "https://example.com/images/authors/james-h-prescott.jpg", // Placeholder avatar
      },
    ],
    title: "Department of Defense",
    wordcount: 10_942,
    keywords: ["Military Expansion", "Defense Policy", "Executive Control", "National Security"],
    status: "transcription", // Adjust based on the progress
  },
  versions: {
    raw: DepartmentOfDefenseRaw,
  },
  summary: () => (
    <p>
      This chapter emphasizes strengthening the Department of Defense through military expansion and tighter executive control.
      It proposes reforms to align defense policies with the President's priorities, potentially sidelining Congressional oversight
      and independent advisory roles.
    </p>
  ),
};

export default departmentOfDefense;
