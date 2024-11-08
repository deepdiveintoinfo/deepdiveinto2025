#!/usr/bin/env node

import { Command } from 'commander';
import { join } from 'path'
import fs from 'fs-extra';
import * as path from 'path';
import { __projectroot } from '../../lib/utils.mjs'
// import pdfParse from 'pdf-parse'
import { getDocument } from "pdfjs-dist/legacy/build/pdf.mjs";


const program = new Command();

const alanyzeCommand = async (source) => {
  const pdfPath = join(__projectroot, 'src', 'assets', source)
  const pageNumber = 34
  const pagePath = join(__projectroot, 'src', 'lib', 'data', `page${pageNumber}`)
  const loadingTask = getDocument(pdfPath);
  const pdf = await loadingTask.promise;
  const page = await pdf.getPage(pageNumber);
  console.log('PDF loaded');
  // console.log({page})
  const tree = await page.getStructTree();
  const textContent = await page.getTextContent();
  // p33R_mc254
  [
    [`struct.json`, JSON.stringify(tree, null, 2)], 
    [`textContent.mdx`, textContent.items.map(i => i.str).join('\n')]
  ].forEach(async ([fileName, content]) => {
    await fs.ensureFile(join(pagePath, fileName))
    fs.writeFileSync(join(pagePath, fileName), content)
  })
}


// Main command
program
  .name('analyze')
  .argument('source', 'source to analyze.')
  .description('Analyze a pdf and generate a json db from it.')
  .action(alanyzeCommand);

program.parse();
