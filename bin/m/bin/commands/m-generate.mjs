#!/usr/bin/env node

import { Command } from 'commander';
import { join } from 'path'
import fs from 'fs-extra';
import * as path from 'path';
import { __projectroot } from '../../lib/utils.mjs'
// import { generateUnitTestAST } from '../../templates/unitTest/ast.mjs'
// import { getComponentPropsAndVariants } from '../../lib/helpers/parsing/react/tsx/index.mjs'

import { generateCST } from '../../lib/parsers/tsToCst/index.mjs'
import { generateUnitTestFromCst } from '../../lib/generators/tests/unit.mjs'


const program = new Command();

const generateUnitTestCommand = async (type, relativeComponentPath) => {
  const pascalComponentPath = relativeComponentPath
  const componentPath = join(__projectroot, 'src', 'components', pascalComponentPath)
  await fs.ensureDir(path.resolve(`${componentPath}/tests`))

  const fullUnitTestPath = join(componentPath, 'tests', 'unit.tsx')
  
  const cst = await generateCST(componentPath)
  // console.log(cst.components.Atom.props)
  // .catch(e => {
  //   console.error('CST generation failed:', e.message)
  // })
  // const testsSlashUnitTestDotTsxSourceCode  = await generateUnitTestFromCst(cst).catch(e => {
  //   console.error('unit.tsx source code generation failed:', e.message)
  // })




  // console.log(testsSlashUnitTestDotTsxSourceCode)


  // const components = await getComponentPropsAndVariants(componentFolderPath);
  // const filteredComponents = Object.fromEntries(
  //   // eslint-disable-next-line @typescript-eslint/no-unused-vars
  //   Object.entries(components).filter(([_, value]) => Object.keys(value.props).length || Object.keys(value.variants).length)
  // );

  // // const components = await getComponentPropsAndVariants(componentFolderPath)
  // const sourceCodeForUnitTest = generateUnitTestAST(filteredComponents)
  // await fs.writeFile(fullUnitTestPath, sourceCodeForUnitTest, 'utf-8')
  // console.log(`Wrote ${fullUnitTestPath}`)
};



// Main command
program
  .name('generate')
  .argument('type', 'type of thing to generate.')
  .argument('componentPath', 'Path to the component folder from src/components/.')
  .description('Generate unit tests for component props and variants')
  .action(generateUnitTestCommand);

program.parse();
