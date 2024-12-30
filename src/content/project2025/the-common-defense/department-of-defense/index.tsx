import { ChapterType } from '@/content/project2025/types';
import original from './versions/original.md';
import pdfPath from '@/assets/chapters/4_department-of-defense.pdf';

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
    keywords: ["Military Expansion", "Defense Policy", "Executive Control", "National Security"],
    status: "transcribing", // Adjust based on the progress
  },
  versions: {
    original,
    pdfPath,
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
