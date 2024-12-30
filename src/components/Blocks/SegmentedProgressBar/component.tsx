import { ChapterType } from '@/content/project2025/types';
import React from 'react';

const SegmentedProgressBar = ({ chapters }: { chapters : ChapterType[]}) => {
  const totalChapters = chapters.length;

  // Count statuses
  const statusCounts = chapters.reduce(
    (counts: { [status: string]: number }, chapter) => {
      counts[chapter.metadata.status] = (counts[chapter.metadata.status] || 0) + 1;
      return counts;
    },
    { analyzing: 0, transcribing: 0, undone: 0, verifying: 0, clarifying: 0, complete: 0 }
  );

  // Calculate percentages
  const percentages = Object.fromEntries(
    Object.entries(statusCounts).map(([status, count]) => [
      status,
      (count / totalChapters) * 100,
    ])
  );

  return (
    <div className="relative w-full h-6 md:mt-0 text-xs">
      {/* Undone */}
      {percentages.undone > 0 && (
        <div
          className="absolute top-0 left-0 h-6 border-red-500 border-b-8 border-t-0 lg:border-b-0 lg:border-t-2"
          style={{
            width: `${percentages.undone}%`,
          }}
          title={`Undone: ${statusCounts.undone} (${percentages.undone.toFixed(1)}%)`}
        >📂 {statusCounts.undone} <span className='hidden lg:inline'>Undone ({Math.round(percentages.undone)}%)</span></div>
      )}
      {/* Transcription */}
      {percentages.transcribing > 0 && (
        <div
          className="absolute top-0 left-0 h-full border-green-500 border-b-8 border-t-0 lg:border-b-0 lg:border-t-2"
          style={{
            width: `${percentages.transcribing}%`,
            marginLeft: `${percentages.undone}%`,
          }}
          title={`Transcribing: ${statusCounts.transcribing} (${percentages.transcribing.toFixed(1)}%)`}
        >🖋️ {statusCounts.transcribing} <span className='hidden lg:inline'>Transcribing ({Math.round(percentages.transcribing)}%)</span></div>
      )}
      {/* Clarifying */}
      {percentages.clarifying > 0 && (
        <div
          className="absolute top-0 left-0 h-full border-orange-500 border-b-8 border-t-0 lg:border-b-0 lg:border-t-2"
          style={{
            width: `${percentages.clarifying}%`,
            marginLeft: `${percentages.undone + percentages.transcribing}%`,
          }}
          title={`Transcribing: ${statusCounts.clarifying} (${percentages.clarifying.toFixed(1)}%)`}
        >✨ {statusCounts.clarifying} <span className='hidden lg:inline'>Clarifying ({Math.round(percentages.clarifying)}%)</span></div>
      )}
      {/* Analysis */}
      {percentages.analyzing > 0 && (
        <div
          className="absolute top-0 left-0 h-full border-blue-500 border-b-8 border-t-0 lg:border-b-0 lg:border-t-2"
          style={{ 
            width: `${percentages.analyzing}%`,
            marginLeft: `${percentages.undone + percentages.transcribing + percentages.clarifying}%`,
          }}
          title={`Analyzing: ${statusCounts.analyzing} (${percentages.analyzing.toFixed(1)}%)`}
        >🧠 {statusCounts.analyzing} <span className='hidden lg:inline'>Analyzing ({Math.round(percentages.analyzing)}%)</span></div>
      )}
      {/* Verification */}
      {percentages.verifying > 0 && (
        <div
          className="absolute top-0 left-0 h-full border-yellow-500 border-b-8 border-t-0 lg:border-b-0 lg:border-t-2"
          style={{
            width: `${percentages.verifying}%`,
            marginLeft: `${
              percentages.undone + percentages.transcribing + percentages.clarifying + percentages.analyzing
            }%`,
          }}
          title={`Verification: ${statusCounts.verifying} (${percentages.verifying.toFixed(1)}%)`}
        >🔍 {statusCounts.verifying} <span className='hidden lg:inline'>Verifying ({Math.round(percentages.verifying)}%)</span></div>
      )}
      {percentages.complete > 0 && (
        <div
          className="absolute top-0 left-0 h-full border-gray-500 border-b-8 border-t-0 lg:border-b-0 lg:border-t-2"
          style={{
            width: `${percentages.complete}%`,
            marginLeft: `${
              percentages.undone + percentages.transcribing + percentages.clarifying + percentages.analyzing + percentages.verifying
            }%`,
          }}
          title={`Verifying: ${statusCounts.verifying} (${percentages.verifying.toFixed(1)}%)`}
        >✅ {statusCounts.complete} <span className='hidden lg:inline'>Complete ({Math.round(percentages.complete)}%)</span></div>
      )}
    </div>
  );
};


export { SegmentedProgressBar };
