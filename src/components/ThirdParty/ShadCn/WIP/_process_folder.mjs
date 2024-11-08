import fs from 'fs-extra';
import path from 'path';
import process from 'process'
import * as changeCase from "change-case";

// Function to find the project root directory
function findProjectRoot(currentDir) {
  const rootIndicator = 'package.json'; // Indicator file to identify project root
  if (fs.existsSync(path.join(currentDir, rootIndicator))) {
    return currentDir;
  }
  const parentDir = path.resolve(currentDir, '..');
  if (parentDir === currentDir) {
    throw new Error('Project root not found');
  }
  return findProjectRoot(parentDir);
}

const currentDir = process.cwd();
const projectRoot = findProjectRoot(currentDir);

const wipFolder = path.join(projectRoot, 'src/components/ThirdParty/ShadCn/WIP');
const atomsFolder = path.join(projectRoot, 'src/components/Atoms');

fs.readdir(wipFolder, (err, files) => {
  if (err) {
    console.error(`Error reading files in ${wipFolder}:`, err);
    return;
  }

  files.forEach(file => {
    const componentName = changeCase.pascalCase(path.basename(file, path.extname(file)));
    const componentDir = path.join(atomsFolder, componentName);
    const componentFilePath = path.join(componentDir, 'component.tsx');
    const indexFilePath = path.join(componentDir, 'index.ts');
    const storyFilePath = path.join(componentDir, 'story.tsx');

    // Create component directory
    fs.ensureDir(componentDir, err => {
      if (err) {
        console.error(`Error creating directory ${componentDir}:`, err);
        return;
      }

      // Move component file to its own folder
      fs.move(path.join(wipFolder, file), componentFilePath, { overwrite: true }, err => {
        if (err) {
          console.error(`Error moving ${file} to ${componentFilePath}:`, err);
          return;
        }

        // Create index.ts file
        const indexContent = `export * from './component';\n`;
        fs.writeFile(indexFilePath, indexContent, err => {
          if (err) {
            console.error(`Error writing ${indexFilePath}:`, err);
            return;
          }
        });

        // Create story.tsx file
        const storyContent = `import type { Meta, StoryObj } from '@storybook/react';\n` +
          `import { fn } from '@storybook/test';\n\n` +
          `import { ${componentName} } from '.';\n\n` +
          `const meta: Meta<typeof ${componentName}> = {\n` +
          `  component: ${componentName},\n` +
          `  parameters: {\n` +
          `    docs: {\n` +
          `      subtitle: 'Displays a ${componentName.toLowerCase()} or a component that looks like a ${componentName.toLowerCase()}.',\n` +
          `      description: {\n` +
          `        component: '[ShadCn Documentation](https://ui.shadcn.com/docs/components/${componentName.toLowerCase()})'\n` +
          `      },\n` +
          `    },\n` +
          `  },\n` +
          `  args: { onClick: fn() },\n` +
          `};\n\n` +
          `export default meta;\n` +
          `type Story = StoryObj<typeof ${componentName}>;\n\n` +
          `export const Default: Story = {\n` +
          `  args: {\n` +
          `    children: '${componentName}',\n` +
          `  },\n` +
          `};\n`;

        fs.writeFile(storyFilePath, storyContent, err => {
          if (err) {
            console.error(`Error writing ${storyFilePath}:`, err);
            return;
          }
        });
      });
    });
  });
});
