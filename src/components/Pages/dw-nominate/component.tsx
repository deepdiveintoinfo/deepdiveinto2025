// import { useEffect } from 'react';
// import { gql, useQuery } from '@apollo/client'
import { PageComponentType } from '@/lib/types'
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
export const DWNominatePage: PageComponentType = () => {
    // const { loading, error, data } = useQuery(GET_PEOPLE);
  
    // useEffect(() => {
    //   if (loading) return;
    //   if (error) return;
    //   console.log(data)
    // }, [loading, error, data]);
  
    // if (loading) return <p>Loading...</p>;
    // if (error) return <p>Error : {error.message}</p>;
    return (
      <>
      <h1>dm-nominate page</h1>

      </>
    );
  }

  DWNominatePage.path = "/dw-nominate"