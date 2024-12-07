import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import { Button } from '@/components/ThirdParty/ShadCn';
import { Document, Page } from 'react-pdf';
import { useState } from 'react';

export function PDFViewer({ path } : { path: string }) {
    const [numPages, setNumPages] = useState<number>();
    const [pageNumber, setPageNumber] = useState<number>(1);
   
    function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
      setNumPages(numPages);
    }
  
    return (
      <div className='flex flex-col items-center'>
        <div className='flex gap-8 justify-between items-center'>
          <p><Button size={"sm"} disabled={pageNumber == 1} onClick={() => pageNumber > 1 && setPageNumber(pageNumber-1)}>Previous</Button></p>
          <p>
            Page {pageNumber} of {numPages}
          </p>
          <p><Button size={"sm"} disabled={pageNumber == numPages} onClick={() => pageNumber < (numPages || 0) && setPageNumber(pageNumber+1)}>Next</Button></p>
        </div>
        <Document file={path} onLoadSuccess={onDocumentLoadSuccess}>
          <Page className={"max-w-min"} pageNumber={pageNumber} />
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
  