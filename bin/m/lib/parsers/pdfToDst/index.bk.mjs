import { join } from 'path'
import fs from 'fs-extra';
import { __projectroot } from '../../lib/utils.mjs'
// import pdfParse from 'pdf-parse'
import { getDocument } from "pdfjs-dist/legacy/build/pdf.mjs";
import process from 'process';
import { doc } from 'prettier';


export async function parsePDF(pdfPath) {
    const loadingTask = getDocument(pdfPath);
    const pdf = await loadingTask.promise;
    
    console.log('PDF loaded');
    console.log('Number of pages: ', pdf.numPages);
    await pdfToDst(pdf);
}

const createSection = (title, number) => {
    return {
        title,
        number,
        subsections: []
    }
}

function mapTextContent(textItems) {
    const textMap = {};
    textItems.forEach(item => {
      textMap[item.id] = item;
    });
    return textMap;
  }
  

const pdfToDst = async (pdf) => {
    const dst = {
        document: {
          title: '2025 Mandate for Leadership',
          sections: []
        }
    }
    const begin = 52;
    const end = 52;
    let currentSection = 1;
    let currentSubsection = 1;
    let currentArticle = 1;
    let currentParagraph = 1;
    let currentNode = 1;
    for (let pageNumber = begin; pageNumber <= end; pageNumber++) {
    
        const page = await pdf.getPage(pageNumber);
        const tree = await page.getStructTree()
        const textContent = await page.getTextContent()
        const annotations = await page.getAnnotations()
        const pagePath = join(__projectroot, 'bin', 'm', 'lib', 'data', `page${pageNumber}`)
        const textMap = mapTextContent(textContent.items);
        // ;[
        //   [`annotations.json`, JSON.stringify(annotations, null, 2)],
        //   [`struct.json`, JSON.stringify(tree, null, 2)], 
        //   [`textContent.json`, JSON.stringify(textContent, null, 2)],
        //   [`commentary.json`, JSON.stringify({})],
        //   [`content.md`, '']
        // ].forEach(async ([fileName, content]) => {
        //   await fs.ensureFile(join(pagePath, fileName))
        //   fs.writeFileSync(join(pagePath, fileName), content)
        // })
      }
  
}