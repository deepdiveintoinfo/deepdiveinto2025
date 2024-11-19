import * as tw from 'tailwindcss';
import tailwindConfig from '../../../../tailwind.config.mjs'; // Adjust path if necessary
import resolveConfig from 'tailwindcss/resolveConfig.js';


import { Command } from 'commander';
// import { colors } from '../../lib/utils.mjs';

const program = new Command();

program
    .name('validate')
    .description('CLI command to validate something for a deepdiveinto2025 project.')
    .argument('obj', 'type of component or w/e.')
    .argument('attribute', 'Name of thing.')
    .version('0.9.0')
    .action(validateCommand);

export async function validateCommand(obj, attribute, options) {
    console.log({obj, attribute, options})
    // Get the full Tailwind config
    const fullConfig = resolveConfig(tailwindConfig);

    // Access theme colors and generate bg-classes
    const colors = fullConfig.theme.colors;
    const bgClasses = [];

    function generateBgClasses(colors, prefix = '') {
        for (const [key, value] of Object.entries(colors)) {
            if (typeof value === 'string') {
                bgClasses.push(`bg-${prefix}${key}`);
            } else if (typeof value === 'object') {
                (value, `${prefix}${key}-`);
            }
        }
    }

    generateBgClasses(colors);
    console.log(bgClasses);

}


program.parse();

validateCommand.docs =  `# Init command documentation

The init command is used to initialize a new madrox project.

### Source Code

~~~javascript
${validateCommand.toString()}
~~~
`;
