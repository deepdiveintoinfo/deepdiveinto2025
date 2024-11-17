import { useParams } from 'react-router-dom';
import { PageComponentType } from '@/lib/types'
import * as changeCase from 'change-case'
import { useChapter } from '@/hooks/use-chapter';
import { MDXProps } from 'mdx/types';

// Define the TypeScript interfaces
export const ReadPage: PageComponentType = () => {
    const { chapterName, sectionName, version } = useParams();
  const chapter = useChapter() as { versions: { [key: string]: (props: MDXProps) => JSX.Element } };
  const versionNum = version ?? 'raw';
  const MdxContent = chapter?.versions[versionNum];

    return (
      <div>
        <h1>{changeCase.capitalCase(sectionName || '')}</h1>
        {MdxContent && <MdxContent />}
      </div>
    );
  }

  ReadPage.path = "/project2025/:sectionName/:chapterName/read/:version?"
