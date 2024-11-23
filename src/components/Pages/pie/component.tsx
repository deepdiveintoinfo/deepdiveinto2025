import { useParams } from 'react-router-dom';
import { PageComponentType } from '@/lib/types'
import { PieChart2 } from './chart'

// Define the TypeScript interfaces
export const PiePage: PageComponentType = () => {

    // const { pieId } = useParams()

    return (
      <>
        <h1>Pie</h1>
        <PieChart2 />
      </>
    );
  }

  PiePage.path = "/pie"
