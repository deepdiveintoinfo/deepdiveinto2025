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
      {percentages.transcription > 0 && (
        <div
          className="absolute top-0 left-0 h-full border-green-500 border-b-8 border-t-0 lg:border-b-0 lg:border-t-2"
          style={{
            width: `${percentages.transcription}%`,
            marginLeft: `${percentages.undone}%`,
          }}
          title={`Transcription: ${statusCounts.transcription} (${percentages.transcription.toFixed(1)}%)`}
        >🖋️ {statusCounts.transcription} <span className='hidden lg:inline'>Transcription ({Math.round(percentages.transcription)}%)</span></div>
      )}
      {/* Analysis */}
      {percentages.analysis > 0 && (
        <div
          className="absolute top-0 left-0 h-full border-blue-500 border-b-8 border-t-0 lg:border-b-0 lg:border-t-2"
          style={{ 
            width: `${percentages.analysis}%`,
            marginLeft: `${percentages.undone + percentages.transcription}%`,
          }}
          title={`Analysis: ${statusCounts.analysis} (${percentages.analysis.toFixed(1)}%)`}
        >🧠 {statusCounts.analysis} <span className='hidden lg:inline'>Analysis ({Math.round(percentages.analysis)}%)</span></div>
      )}
      {/* Verification */}
      {percentages.verification > 0 && (
        <div
          className="absolute top-0 left-0 h-full border-yellow-500 border-b-8 border-t-0 lg:border-b-0 lg:border-t-2"
          style={{
            width: `${percentages.verification}%`,
            marginLeft: `${
              percentages.undone + percentages.transcription + percentages.analysis
            }%`,
          }}
          title={`Verification: ${statusCounts.verification} (${percentages.verification.toFixed(1)}%)`}
        >🔍 {statusCounts.verification} <span className='hidden lg:inline'>Verification ({Math.round(percentages.verification)}%)</span></div>
      )}
      {percentages.complete > 0 && (
        <div
          className="absolute top-0 left-0 h-full border-gray-500 border-b-8 border-t-0 lg:border-b-0 lg:border-t-2"
          style={{
            width: `${percentages.complete}%`,
            marginLeft: `${
              percentages.undone + percentages.transcription + percentages.analysis + percentages.verification
            }%`,
          }}
          title={`Verification: ${statusCounts.verification} (${percentages.verification.toFixed(1)}%)`}
        >✅ {statusCounts.complete} <span className='hidden lg:inline'>Complete ({Math.round(percentages.complete)}%)</span></div>
      )}
    </div>
  );
};


export { SegmentedProgressBar };
