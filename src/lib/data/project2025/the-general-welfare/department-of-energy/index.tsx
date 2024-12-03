import { ChapterType } from '@/lib/data/project2025/types';

const departmentOfEnergy: ChapterType = {
  chapterIdx: 12,
  title: "Department of Energy",
  chapterId: "department-of-energy",
  url: "/project2025/the-general-welfare/department-of-energy",
  emoji: "⚡",
  description: "Focuses on energy independence, potentially at the cost of environmental protections.",
  metadata: {
    authors: [
      {
        name: "Bernard L. McNamee",
        avatar: "https://example.com/images/authors/melissa-j-carter.jpg", // Placeholder avatar
      },
    ],
    title: "Department of Energy",
    wordcount: 5200, // Example word count; update with actual value.
    keywords: ["Energy Policy", "Energy Independence", "Environmental Protections", "Fossil Fuels"],
    status: "undone",
  },
  summary: () => (
    <p>
      This chapter focuses on energy independence through deregulation and increased fossil fuel production. 
      Environmental advocates warn that this approach risks undermining sustainability efforts and climate goals.
    </p>
  ),
};

export default departmentOfEnergy;
