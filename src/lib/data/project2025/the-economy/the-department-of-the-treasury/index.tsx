import { ChapterType } from '@/lib/data/project2025/types';

const departmentOfTheTreasury: ChapterType = {
  chapterIdx: 22,
  title: "Department of the Treasury",
  chapterId: "department-of-the-treasury",
  url: "/project2025/the-economy/department-of-the-treasury",
  emoji: "💵",
  description: "Recommends tax reforms favoring high-income earners and corporations.",
  metadata: {
    authors: [
      {
        name: "William L. Walton",
        avatar: "https://example.com/images/authors/jonathan-e-banks.jpg", // Placeholder avatar
      },
      {
        name: "Stephen Moore",
        avatar: "https://example.com/images/authors/linda-r-cohen.jpg", // Placeholder avatar
      },
      {
        name: "David R. Burton",
        avatar: "https://example.com/images/authors/michael-j-graetz.jpg", // Placeholder avatar
      }
    ],
    title: "Department of the Treasury",
    wordcount: 5980, // Example word count; update with actual value.
    keywords: ["Tax Reform", "Corporate Tax", "Economic Policy", "Deregulation"],
    status: "undone",
  },
  summary: () => (
    <p>
      This chapter focuses on proposed tax reforms within the Department of the Treasury, favoring corporations and
      high-income earners. It emphasizes deregulation to encourage investment but raises concerns about increasing wealth inequality.
    </p>
  ),
  endnotes: () => (
    <p>
      Endnotes highlight key legislative acts and historical trends in corporate tax policy.
    </p>
  ),
};

export default departmentOfTheTreasury;
