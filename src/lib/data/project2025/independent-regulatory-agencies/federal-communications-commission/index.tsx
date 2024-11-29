import { ChapterType } from '@/lib/data/project2025/types';

const federalCommunicationsCommission: ChapterType = {
  chapterIdx: 26,
  title: "Federal Communications Commission",
  chapterId: "federal-communications-commission",
  url: "/project2025/independent-regulatory-agencies/federal-communications-commission",
  emoji: "📡",
  description: "Focuses on deregulating media and telecommunications industries.",
  metadata: {
    authors: [
      {
        name: "Martin Wheeler",
        avatar: "https://example.com/images/authors/martin-wheeler.jpg",
      },
    ],
    title: "Federal Communications Commission",
    wordcount: 6800,
    keywords: ["Media Deregulation", "Telecommunications Policy", "FCC Reform"],
    status: "analysis",
  },
  summary: () => (
    <p>
      This chapter examines proposals to deregulate media and telecommunications, potentially
      increasing industry consolidation and reducing public accountability. It suggests a reimagining
      of FCC’s role to align more closely with market-driven principles.
    </p>
  ),
  endnotes: () => (
    <p>
      Endnotes include citations on historical FCC rulings and industry impacts of past deregulation.
    </p>
  ),
};

export default federalCommunicationsCommission;
