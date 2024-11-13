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

const textNumberToNumber = (textNumber) => {
    textNumber = textNumber.replace(/Section /g, '');
    switch(textNumber) {
        case 'One': return 1;
        case 'Two': return 2;
        case 'Three': return 3;
        case 'Four': return 4;
        case 'Five': return 5;
    }
}

class Doc {
    constructor() {
        this.sections = [];
    }

    addSection(section) {
        this.sections.push(section);
    }
}

class Section {
    constructor(title, index) {
        this.sectionNumber = index;
        this.title = title;
        this.chapters = [];
    }

    addChapter(chapter) {
        this.chapters.push(chapter);
    }
}

class Chapter {
    constructor(index) {
        this.chapterNumber = index;
        this.subsections = [];
    }

    addTitle(title) {
        this.title = title;
    }
}

const pdfToDst = async (pdf) => {    
  // Define page range (for now, limited to one page for testing)
  const begin = 124;
  const end = 124;
  
  let currentlySectionHeader = false;
  let currentlyChapterHeader = false;
  let currentSection = new Section("Introduction", 0);
  let currentChapter = new Chapter(0);
  const sections = [];
  const doc = new Doc();
  

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
        if(children) children.forEach(child => parsePdfPage(child, depth + 1));

        return pdfNode;
    };

    const parsePdfNode = (pdfNode, depth = 0) => {
        const { role, children, textContent } = pdfNode;

        if(role) console.log('  '.repeat(depth) + pdfNode.role);
        if(textContent) console.log('  '.repeat(depth) + textContent.str);
        if(children) children.forEach(child => parsePdfNode(child, depth + 1));
        return pdfNode;
    }


    const pdfTree = parsePdfPage(structTree);
    const dstTree = parsePdfNode(pdfTree);
    // console.log(dst.sections[1]);
  }
  
  return doc;
};

        //     const [
        //         scaleX,       // Horizontal scaling factor (affects width of text; font size on X-axis)
        //         skewX,        // Skewing along the X-axis (for italic or slanted text)
        //         skewY,        // Skewing along the Y-axis (usually zero for regular text)
        //         scaleY,       // Vertical scaling factor (affects height of text; font size on Y-axis)
        //         translateX,   // X-axis translation (horizontal position of the text start)
        //         translateY    // Y-axis translation (vertical position of the text baseline)
        //     ] = pdfNode.textContent.transform;
