import { ChapterType } from '@/content/project2025/types';
import pdfPath from '@/assets/chapters/28_federal-communications-commission.pdf';

const federalCommunicationsCommission: ChapterType = {
  chapterIdx: 28,
  title: "Federal Communications Commission",
  chapterId: "federal-communications-commission",
  url: "/project2025/independent-regulatory-agencies/federal-communications-commission",
  emoji: "📡",
  description: "Focuses on deregulating media and telecommunications industries.",
  metadata: {
    authors: [
      {
        name: "Brendan Carr",
        avatar: "https://example.com/images/authors/martin-wheeler.jpg",
      },
    ],
    title: "Federal Communications Commission",
    keywords: ["Media Deregulation", "Telecommunications Policy", "FCC Reform"],
    status: "undone",
  },
  versions: {
    pdfPath,
  },
  summary: () => (
    <p>
      This chapter examines proposals to deregulate media and telecommunications, potentially
      increasing industry consolidation and reducing public accountability. It suggests a reimagining
      of FCC’s role to align more closely with market-driven principles.
    </p>
  ),
};

export default federalCommunicationsCommission;
