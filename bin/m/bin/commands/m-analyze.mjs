#!/usr/bin/env node

import { Command } from 'commander';
import { parsePDF } from '../../lib/parsers/pdfToDst/index.mjs';
// Project 2025 url: https://static.project2025.org/2025_MandateForLeadership_FULL.pdf
const program = new Command();

const alanyzeCommand = async () => {
  const dst = await parsePDF('https://static.project2025.org/2025_MandateForLeadership_FULL.pdf');
  // console.log(dst);

}

// function pageToMarkdown(textContent, pageNumber) {
//   let markdownContent = `# Page ${pageNumber}\n\n`;
//   let currentParagraph = '';
//   let author, article, subsection;

//   textContent.items.forEach((item, index) => {
//     const text = item.str.trim();
//     const [
//       scaleX,       // Horizontal scaling factor (affects width of text; font size on X-axis)
//       skewX,        // Skewing along the X-axis (for italic or slanted text)
//       skewY,        // Skewing along the Y-axis (usually zero for regular text)
//       scaleY,       // Vertical scaling factor (affects height of text; font size on Y-axis)
//       translateX,   // X-axis translation (horizontal position of the text start)
//       translateY    // Y-axis translation (vertical position of the text baseline)
//     ] = item.transform;
    
//     const fontSize = scaleX;
//     const lineHeight = translateY;
//     const horizontalOffset = translateX;
//     if(!/[a-zA-Z]{1,}/.test(text) && text != '') return;

//     if(text.trim() == 'Veronique de Rugy') {
//       console.log(fontSize, lineHeight, fontSize == "9.5" && lineHeight == 366, fontSize == 9.5 && lineHeight == 336);
//     }

//     if(fontSize > 30 && fontSize < 31 && lineHeight == 338) {
//       currentParagraph += text.trim();
//     } else if(fontSize == "9.5" && lineHeight == 366) {
//       author = text.trim();
//     } else if(fontSize == 12 && lineHeight == 380) {
//       article = text.trim();
//     } else if(fontSize == 16 && lineHeight == 436.2) {
//       subsection += text.trim() + ' ';
//     } else if (text.trim() == '') {
//       currentParagraph += '\n\n';
//     } else {
//       currentParagraph += text.trim();
//     }
//   });

//   return {currentParagraph, author, article};


//   // return markdownContent;

// }


// Main command
program
  .name('analyze')
  .description('Analyze a pdf and generate a json db from it.')
  .action(alanyzeCommand);

program.parse();
