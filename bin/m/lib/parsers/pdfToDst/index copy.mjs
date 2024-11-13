import { join } from 'path';
import fs from 'fs-extra';
import { getDocument } from "pdfjs-dist/legacy/build/pdf.mjs";
import { text } from 'stream/consumers';

export async function parsePDF(pdfPath) {
  const loadingTask = getDocument(pdfPath);
  const pdf = await loadingTask.promise;

  console.log('PDF loaded');
  console.log('Number of pages: ', pdf.numPages);
  const dst = await pdfToDst(pdf);
  return dst;
}


const pdfToDst = async (pdf) => {
    const dst = {
        sections: Array(6).fill({
            title: '',
            sectionNumber: 0,
            chapters: Array(3).fill({
                title: '',
                chapterNumber: 0,
                author: '',
                textContent: ''
            }),
        })
    }
    
  // Define page range (for now, limited to one page for testing)
  const begin = 56;
  const end = 56;
  let currentlySectionHeader = false;
  let currentlyChapterHeader = false;
  let sectionIndex = 0
  let chapterIndex = 0;
  let currentParagraph = '';

  for (let pageNumber = begin; pageNumber <= end; pageNumber++) {
    const page = await pdf.getPage(pageNumber);
    const structTree = await page.getStructTree();
    const textContent = await page.getTextContent();
    // const annotations = await page.getAnnotations();

    const parsePdfPage = (pdfNode, depth = 0) => {
        const { children } = pdfNode;
        if(pdfNode.type === 'content') {
            pdfNode.textContent = textContent.items.shift();
        }

        // Recursive call for children
        if (children) {
            children.forEach(child => {
                return parsePdfPage(child, depth + 1);
            });
        }

        return pdfNode;
    };

    const parsePdfNode = (pdfNode, depth = 0) => {
        const { children } = pdfNode;

        if(pdf.role)
            console.log('  '.repeat(depth) + pdfNode.role);
        
        else if(pdfNode.type === 'content' && pdfNode.textContent.str !== '') {

            const [
                scaleX,       // Horizontal scaling factor (affects width of text; font size on X-axis)
                skewX,        // Skewing along the X-axis (for italic or slanted text)
                skewY,        // Skewing along the Y-axis (usually zero for regular text)
                scaleY,       // Vertical scaling factor (affects height of text; font size on Y-axis)
                translateX,   // X-axis translation (horizontal position of the text start)
                translateY    // Y-axis translation (vertical position of the text baseline)
            ] = pdfNode.textContent.transform;
            // console.log('  '.repeat(depth) + pdfNode.textContent.str);
            if(scaleX == 30) {

                if(currentlySectionHeader == false) {
                    sectionIndex++;
                }
                dst.sections[sectionIndex].sectionNumber = sectionIndex;
                dst.sections[sectionIndex].title += pdfNode.textContent.str;

                currentlySectionHeader = true;
            } else if (scaleX == 16) {
                if(currentlyChapterHeader == false) {
                    chapterIndex++;
                }

                dst.sections[sectionIndex].chapters[chapterIndex].chapterNumber = sectionIndex;
                dst.sections[sectionIndex].chapters[chapterIndex].title += ' ' + pdfNode.textContent.str;

                currentlyChapterHeader = true;
            } else if(pdfNode.textContent.str.startsWith('Just two years')) {
                console.log('found it')
            }
            else {
                if(currentlyChapterHeader) currentlyChapterHeader = false;
                if(currentlySectionHeader) currentlySectionHeader = false;
                dst.sections[sectionIndex].chapters[chapterIndex].title = dst.sections[sectionIndex].chapters[chapterIndex].title.trim()
            }
        }
        // Recursive call for children
        else if (children) {
            children.forEach(child => {
                return parsePdfNode(child, depth + 1);
            });
        }
        return pdfNode;
    }



    const pdfTree = parsePdfPage(structTree);
    const dstTree = parsePdfNode(pdfTree);
    console.log(dst.sections[1]);
  }
  
  return dst;
};
