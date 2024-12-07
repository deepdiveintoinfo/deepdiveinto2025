import { useState } from 'react';

import { Ticker } from "@/components/ThirdParty/Animata/Ticker";
import { Card, CardHeader, CardFooter, DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ThirdParty/ShadCn";
import { ChapterType, MdxComponent } from "@/content/project2025/types";
import { ChevronDownIcon } from 'lucide-react';

type ContentSourcesProps = {
    chapter: ChapterType,
    children?: React.ReactNode
};

export const ContentSources = ({ chapter }: ContentSourcesProps) => {
    
    const [dropdowLabelValue, setDropdowLabelValue] = useState("Original");
    const [CurrentVersion, setCurrentVersion] = useState<MdxComponent | undefined>(chapter?.versions?.original);

    if(!CurrentVersion) return <p>Loading...</p>


    return (
        <>
        <div className="flex flex-col lg:flex-row gap-4 my-4">
            <Card>
                <CardHeader className="flex justify-center mb-0 pb-0 gap-3">
                    <p className="flex justify-center text-4xl bold m-0 p-0"><Ticker value={chapter.metadata.wordcount.toLocaleString()} /></p>
                </CardHeader>
                <CardFooter className="py-0 mt-3 justify-center font-bold">
                    Words
                </CardFooter>
            </Card>
        </div>
        <div className="relative bg-white border border-gray-500/10 p-4">
            <div className="absolute top-4 right-4 flex flex-col md:flex-row gap-2">
                <p className='p-0 m-0'>Readability: </p>
                <DropdownMenu>
                    <DropdownMenuTrigger className='flex items-center gap-1'>{dropdowLabelValue} <ChevronDownIcon className='w-4 h-4' /></DropdownMenuTrigger>
                    <DropdownMenuContent>
                        { chapter?.versions?.basic && <DropdownMenuItem onClick={() => {setDropdowLabelValue('Basic'); setCurrentVersion(chapter?.versions?.basic) }}>Basic</DropdownMenuItem> }
                        { chapter?.versions?.simple && <DropdownMenuItem onClick={() => {setDropdowLabelValue('Simple'); setCurrentVersion(chapter?.versions?.simple) }}>Simple</DropdownMenuItem> }
                        { chapter?.versions?.clear && <DropdownMenuItem onClick={() => {setDropdowLabelValue('Clear'); setCurrentVersion(chapter?.versions?.clear) }}>Clear</DropdownMenuItem> }
                        { chapter?.versions?.original && <DropdownMenuItem onClick={() => {setDropdowLabelValue('Source'); setCurrentVersion(chapter?.versions?.original) }}>Original</DropdownMenuItem> }
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <h1>{chapter.title}</h1>
            <p><i>{chapter.metadata.authors.map(a => a.name).join(', ')}</i></p>
            {CurrentVersion && CurrentVersion as unknown as React.ReactNode}
        </div>
        </>
    );
}

