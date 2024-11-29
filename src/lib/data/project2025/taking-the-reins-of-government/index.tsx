
import { SectionType } from '@/lib/data/project2025/types';
import whiteHouseOffice from './white-house-office';
import executiveOfficeOfThePresident from './executive-office-of-the-president-of-the-united-states';
import centralPersonnelAgencies from './central-personel-agencies';

export const section: SectionType = {
    title: "Taking the Reins of Government",
    sectionId: "taking-the-reins-of-government",
    sectionIdx: 1,
    chapters: [
        whiteHouseOffice,
        executiveOfficeOfThePresident,
        centralPersonnelAgencies
    ],
    emoji: "👑",
    url: "/project2025/taking-the-reins-of-government",
    tagline: "Consolidating power within the executive branch",
    logline: "Focuses on consolidating power within the executive branch, emphasizing loyalty over diversity of perspectives.",
    description: "This section advocates for restructuring the White House and executive offices, emphasizing centralized control and loyalty to the President's agenda.",
}

export default section;