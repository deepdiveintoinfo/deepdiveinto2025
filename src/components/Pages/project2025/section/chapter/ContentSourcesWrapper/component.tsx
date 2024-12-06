import { useState } from 'react';

import { Ticker } from "@/components/ThirdParty/Animata/Ticker";
import { Card, CardHeader, CardFooter, DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ThirdParty/ShadCn";
import { ChapterType } from "@/content/project2025/types";

type ContentSourcesWrapperProps = {
    chapter: ChapterType,
    children: React.ReactNode
};

export const ContentSourcesWrapper = ({ chapter, children }: ContentSourcesWrapperProps) => {
    const [dropdowLabelValue, setDropdowLabelValue] = useState("Readability");
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
            <div className="absolute top-4 right-4">
                <DropdownMenu>
                    <DropdownMenuTrigger>{dropdowLabelValue}</DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuItem onClick={() => setDropdowLabelValue('Basic')}>Basic</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setDropdowLabelValue('Simple')}>Simple</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setDropdowLabelValue('Clear')}>Clear</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => setDropdowLabelValue('Source')}>Source</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            {children}
        </div>
        </>
    );
}

