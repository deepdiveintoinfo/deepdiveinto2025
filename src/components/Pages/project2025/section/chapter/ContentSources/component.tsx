import { useState, useEffect } from 'react';

import { Ticker } from "@/components/ThirdParty/Animata/Ticker";
import { Card, CardHeader, CardFooter, DropdownMenu } from "@/components/ThirdParty/ShadCn";
import { DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ThirdParty/ShadCn/DropdownMenu";
import { ChapterType, MdxComponent } from "@/content/project2025/types";
import { ChevronDownIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import readingTime from 'reading-time';

type ContentSourcesProps = {
    chapter: ChapterType,
    children?: React.ReactNode
};

const ContentSources = ({ chapter }: ContentSourcesProps) => {
    
    const [dropdowLabelValue, setDropdowLabelValue] = useState("Basic");
    const [CurrentVersion, setCurrentVersion] = useState<MdxComponent | undefined>(chapter?.versions?.original);
    const [timeToRead, setTimeToRead] = useState(0);
    const [wordCount, setWordCount] = useState(0)

    useEffect(() => {
        const versions = chapter?.versions;
        const v = versions && Object.keys(versions).includes(dropdowLabelValue.toLowerCase());

        setDropdowLabelValue(v ? dropdowLabelValue : 'Basic');
        setCurrentVersion(v ? (versions[dropdowLabelValue.toLowerCase() as keyof typeof versions] as MdxComponent) : versions?.original || undefined);
        setTimeout(() => {
            const text = document.querySelector('section')?.textContent || '';
            const { words, minutes} = readingTime(text);
            setWordCount(words);
            setTimeToRead(minutes);
        }, 50)

    }, [ chapter, dropdowLabelValue ])

    if(!CurrentVersion) return <p>Loading...</p>
    
    return (
        <>
        <div className="flex flex-col lg:flex-row gap-4 my-4">
            <Card>
                <CardHeader className="flex justify-center mb-0 pb-0 gap-3">
                    <p className="flex justify-center text-4xl bold m-0 p-0"><Ticker value={wordCount.toLocaleString()} /></p>
                </CardHeader>
                <CardFooter className="py-0 mt-3 justify-center font-bold">
                    Words
                </CardFooter>
            </Card>
            <Card>
                <CardHeader className="flex justify-center mb-0 pb-0 gap-3">
                    <p className="flex justify-center gap-2 text-4xl bold m-0 p-0"><Ticker value={Math.round(timeToRead).toLocaleString()} />  mins</p>
                </CardHeader>
                <CardFooter className="py-0 mt-3 justify-center font-bold">
                    To Read
                </CardFooter>
            </Card>
        </div>
        <div className="relative bg-white border border-gray-500/10 p-4">
            <div className="md:absolute top-4 right-4 flex gap-2">
                <p className='p-0 m-0 flex items-center gap-2'><Link to="https://github.com/deepdiveintoinfo/deepdiveinto2025/wiki/%F0%9F%91%80-CEFR-Levels-and-Readability#cefr-levels-and-their-descriptions">Readability</Link>: </p>
                <DropdownMenu>
                    <DropdownMenuTrigger className='flex items-center gap-1'>{dropdowLabelValue} <ChevronDownIcon className='w-4 h-4' /></DropdownMenuTrigger>
                    <DropdownMenuContent>
                        { chapter?.versions?.basic && <DropdownMenuItem onClick={() => {setDropdowLabelValue('Basic'); setCurrentVersion(chapter?.versions?.basic) }}>Basic</DropdownMenuItem> }
                        { chapter?.versions?.simple && <DropdownMenuItem onClick={() => {setDropdowLabelValue('Simple'); setCurrentVersion(chapter?.versions?.simple) }}>Simple</DropdownMenuItem> }
                        { chapter?.versions?.clear && <DropdownMenuItem onClick={() => {setDropdowLabelValue('Clear'); setCurrentVersion(chapter?.versions?.clear) }}>Clear</DropdownMenuItem> }
                        { chapter?.versions?.original && <DropdownMenuItem onClick={() => {setDropdowLabelValue('Original'); setCurrentVersion(chapter?.versions?.original) }}>Original</DropdownMenuItem> }
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <h1>{chapter.title}</h1>
            <p><i>{dropdowLabelValue !== "Original" ? "Adapted from the work of" : ""} {chapter.metadata.authors.map(a => a.name).join(', ')}</i></p>
            <section>
                {CurrentVersion && CurrentVersion as unknown as React.ReactNode}
            </section>
        </div>
        </>
    );
}

export default ContentSources;