
import { SectionType } from '@/content/project2025/types';
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
    tagline: "Consolidating power from the top.",
    logline: "This section outlines restructuring efforts that emphasize centralized control, loyalty, and alignment with the President's agenda.",
    description: "This section advocates for restructuring the White House and executive offices, emphasizing centralized control and loyalty to the President's agenda.",
}

export default section;