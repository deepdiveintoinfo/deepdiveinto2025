import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import { Button } from '@/components/ThirdParty/ShadCn';
import { Document, Page } from 'react-pdf';
import { useState } from 'react';
import { Skeleton } from '@/components/ThirdParty/ShadCn/Skeleton';
import { DownloadIcon } from 'lucide-react';
export function PDFViewer({ path } : { path: string }) {
    const [numPages, setNumPages] = useState<number>();
    const [pageNumber, setPageNumber] = useState<number>(1);
   
    function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
      setNumPages(numPages);
    }
  
    return (
      <div className='flex flex-col items-center'>
        <p className='flex items-center gap-2'><DownloadIcon className='flex items-center' /> <a href={path} target="_blank">Download Chapter</a></p>
        <div className='flex gap-8 justify-between items-center'>
          <p><Button size={"sm"} disabled={pageNumber == 1} onClick={() => pageNumber > 1 && setPageNumber(pageNumber-1)}>Previous</Button></p>
          <p>
            Page {pageNumber} of {numPages}
          </p>
          <p><Button size={"sm"} disabled={pageNumber == numPages} onClick={() => pageNumber < (numPages || 0) && setPageNumber(pageNumber+1)}>Next</Button></p>
        </div>
        <Document 
          file={path} 
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page loading={
            <div className='relative bg-white rounded-lg'
              style={{
                width: '504px', 
                height: '720px'
              }} 
            >
            <Skeleton
                  className='react-pdf__Page__textContent textLayer' 
                  style={{
                    width: 'round(var(--scale-factor) * 504px, 1px)', 
                    height: 'round(var(--scale-factor) * 720px, 1px)'
                  }} 
                />
            </div>
        } 
 className={"max-w-min"} pageNumber={pageNumber} />
        </Document>
        <div className='flex gap-8 justify-between items-center mt-4'>
          <p><Button size={"sm"} disabled={pageNumber == 1} onClick={() => pageNumber > 1 && setPageNumber(pageNumber-1)}>Previous</Button></p>
          <p>
            Page {pageNumber} of {numPages}
          </p>
          <p><Button size={"sm"} disabled={pageNumber == numPages} onClick={() => pageNumber < (numPages || 0) && setPageNumber(pageNumber+1)}>Next</Button></p>
        </div>
      </div>
    );
  }
  