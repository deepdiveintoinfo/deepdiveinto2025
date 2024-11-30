import { ChapterType } from '@/lib/data/project2025/types';

const SegmentedProgressBar = ({ chapters }: { chapters : ChapterType[]}) => {
  const totalChapters = chapters.length;

  // Count statuses
  const statusCounts = chapters.reduce(
    (counts: { [status: string]: number }, chapter) => {
      counts[chapter.metadata.status] = (counts[chapter.metadata.status] || 0) + 1;
      return counts;
    },
    { analysis: 0, transcription: 0, undone: 0, verification: 0 }
  );

  // Calculate percentages
  const percentages = Object.fromEntries(
    Object.entries(statusCounts).map(([status, count]) => [
      status,
      (count / totalChapters) * 100,
    ])
  );

  return (
    <div className="relative w-full h-6 bg-gray-200 rounded-full overflow-hidden">
      {/* Undone */}
      {percentages.undone > 0 && (
        <div
          className="absolute top-0 left-0 h-full bg-red-500 pl-2 font-bold text-white"
          style={{
            width: `${percentages.undone}%`,
          }}
          title={`Undone: ${statusCounts.undone} (${percentages.undone.toFixed(1)}%)`}
        >📂 {statusCounts.undone} Undone ({Math.round(percentages.undone)}%)</div>
      )}
      {/* Transcription */}
      {percentages.transcription > 0 && (
        <div
          className="absolute top-0 left-0 h-full bg-green-500 pl-2 font-bold text-white"
          style={{
            width: `${percentages.transcription}%`,
            marginLeft: `${percentages.undone}%`,
          }}
          title={`Transcription: ${statusCounts.transcription} (${percentages.transcription.toFixed(1)}%)`}
        >🖋️ {statusCounts.transcription} Transcription ({Math.round(percentages.transcription)}%)</div>
      )}
      {/* Analysis */}
      {percentages.analysis > 0 && (
        <div
          className="absolute top-0 left-0 h-full bg-blue-500 pl-2 font-bold text-white"
          style={{ 
            width: `${percentages.analysis}%`,
            marginLeft: `${percentages.undone + percentages.transcription}%`,
          }}
          title={`Analysis: ${statusCounts.analysis} (${percentages.analysis.toFixed(1)}%)`}
        >🧠 {statusCounts.analysis} Analysis ({Math.round(percentages.analysis)}%)</div>
      )}
      {/* Verification */}
      {percentages.verification > 0 && (
        <div
          className="absolute top-0 left-0 h-full bg-yellow-500 pl-2 font-bold"
          style={{
            width: `${percentages.verification}%`,
            marginLeft: `${
              percentages.undone + percentages.transcription + percentages.analysis
            }%`,
          }}
          title={`Verification: ${statusCounts.verification} (${percentages.verification.toFixed(1)}%)`}
        >🔍 {statusCounts.verification} Verification ({Math.round(percentages.verification)}%)</div>
      )}
      {percentages.complete > 0 && (
        <div
          className="absolute top-0 left-0 h-full white pl-2 font-bold"
          style={{
            width: `${percentages.complete}%`,
            marginLeft: `${
              percentages.undone + percentages.transcription + percentages.analysis + percentages.verification
            }%`,
          }}
          title={`Verification: ${statusCounts.verification} (${percentages.verification.toFixed(1)}%)`}
        >✅ {statusCounts.complete} Complete ({Math.round(percentages.complete)}%)</div>
      )}

    </div>
  );
};


export { SegmentedProgressBar };
