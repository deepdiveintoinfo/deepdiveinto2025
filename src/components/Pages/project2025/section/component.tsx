// import { useEffect } from 'react';
// import { gql, useQuery } from '@apollo/client'
import { PageComponentType } from '@/lib/types'
import { useParams } from 'react-router-dom';
import * as changeCase from 'change-case'
// import Content from './content/_index.mdx'
// import { HeroSection } from '@/components/ThirdParty/UiBlocks';
// import { Button } from "@/components/ThirdParty/ShadCn/Button";
// import { ChevronRightIcon } from "lucide-react";
// import { Caption } from '@/components/Comics/index';
// import { IconSection } from '@/components/ThirdParty/UiBlocks/IconSection';

// import { Caption } from '@/components/Comics/index';

// const GET_PEOPLE = gql`
//       query Example{
//           getCharacters {
//             mangaName
//             race
//             team
//             mentors
//             students
//             dateOfBirth
//             dateOfDeath
//         }
//       }  
// `;

// Define the TypeScript interfaces
export const SectionPage: PageComponentType = () => {
    // const { loading, error, data } = useQuery(GET_PEOPLE);
    const { sectionName } = useParams();

    // const { content } = useChapter(sectionName, chapterName);

    return (
      <div>
        <h1>{changeCase.capitalCase(sectionName || '')}</h1>
        {/* {ChapterContent && <ChapterContent />} */}
      </div>
    );
  }

SectionPage.path = "/project2025/:sectionName"