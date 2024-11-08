import { Command } from 'commander';
// import { colors } from '../../lib/utils.mjs';
import { __projectroot, colors, extractPropsFromInterface } from '../../lib/utils.mjs'
import { join } from 'path';
import fs from 'fs-extra';
import * as changeCase from "change-case";
import { componentTemplate, indexTemplate, variantsTemplate, storyTemplate, documentationTemplate } from '../../templates/index.mjs'
import { log } from 'console'
import ts from 'typescript';

const program = new Command();

program
    .name('create')
    .description('CLI command to generate something for a madrox project.')
    .argument('type', 'type of component or w/e.')
    .argument('nameOfThing', 'Name of thing.')
    .option('-d, --docs', 'Whether to generate documentation.')
    .version('0.9.0')
    .action(createCommand);

export async function createTest(type, nameOfThing, typeFolder) {
    const componentFilePath = join(__projectroot, 'src', 'components', ...typeFolder, 'component.tsx')

        // Read and parse the TypeScript file
        const sourceCode = fs.readFileSync(componentFilePath, 'utf-8');
        const sourceFile = ts.createSourceFile(
          'component.tsx',
          sourceCode,
          ts.ScriptTarget.Latest,
          true
        );
    
        // Extract component name and props interface
        const componentName = changeCase.pascalCase(typeFolder[typeFolder.length - 1])
        const propsInterface = `${componentName}Props`;
    
        // Extract props from the props interface
        const props = extractPropsFromInterface(sourceFile, propsInterface);
    
        // // Generate unit tests based on extracted props
        // const unitTest = generateUnitTests(componentName, props);
    
        // // Output the unit test to the console (or save to a file)
        console.log({props});
    
}

export default program;

export async function createCommand(type, nameOfThing, options) {
    let typeFolder = type.split('/');
    switch (typeFolder[0]) {
        case "atom":
            typeFolder[0] = "Atoms"
            break;
        case "molecule":
            typeFolder[0] = "Molecules"
            break;
        case "organism":
            typeFolder[0] = "Organisms"
            break;
        case "template":
            typeFolder[0] = "Templates"
            break;
        case "page":
            typeFolder[0] = "Pages"
            break;
        default:
            typeFolder[0] = changeCase.pascalCase(typeFolder[0])
            break;
    }

    if(nameOfThing == 'unit') return createTest(type, nameOfThing, typeFolder, options)
    const targetPath = join(__projectroot, 'src', 'components', ...typeFolder, changeCase.pascalCase(nameOfThing))
    await fs.ensureDir(targetPath)

    
    const fileTuple = [
        ['component.tsx', componentTemplate(nameOfThing, options)],
        ['index.ts', indexTemplate(options)],
        ['story.tsx', storyTemplate(nameOfThing, options)],
        ['variants.tsx', variantsTemplate(nameOfThing, options)]
    ]

    if(options.docs) fileTuple.push(['docs.mdx', documentationTemplate(nameOfThing, typeFolder[0], options)])
    
    fileTuple.forEach(async ([fileName, fileContents]) => {
        await fs.writeFile(join(targetPath, fileName), fileContents, 'utf-8')
        log(colors.blue(`<${changeCase.pascalCase(nameOfThing)} /> -->`), colors.yellow(fileName), colors.green(`created!`))
    })

    console.log(typeFolder, nameOfThing)

}

program.parse();

createCommand.docs =  `# Init command documentation

The init command is used to initialize a new madrox project.

### Source Code

~~~javascript
${createCommand.toString()}
~~~
`;
