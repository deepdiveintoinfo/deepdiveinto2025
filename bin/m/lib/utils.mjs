import { marked } from 'marked';
import TerminalRenderer from 'marked-terminal';
import chalk from 'chalk'
import { dirname, join } from 'path';
import { existsSync } from 'fs';
import { fileURLToPath } from 'url';
import path from 'node:path';
import ts from 'typescript';

export const colors = chalk
export const __filename = fileURLToPath(import.meta.url);
export const __dirname = path.dirname(__filename);
export const __projectroot = findGitRoot()


export function findGitRoot(dir = __dirname) {
    if (existsSync(join(dir, '.git'))) {
        return dir;
    }
    const parentDir = dirname(dir);
    if (parentDir === dir) {
        throw new Error('No .git directory found');
    }
    return findGitRoot(parentDir);
}


marked.setOptions({
    // Define custom renderer
    renderer: new TerminalRenderer()
});

const overrideConsole = (method) => {
    const originalMethod = console[method];
    console[method] = function(...args) {
        args = args.map(arg => typeof arg === 'string' ? marked(arg) : arg);
        if (method === 'error') {
            args = args.map(arg => colors.red`${arg}`);
        }
        originalMethod.apply(console, args);
    };
};

['log', 'error', 'info', 'warn'].forEach(method => overrideConsole(method));


// export const md = (strings, ...values) => {
//     let markdown;
    
//     if (typeof strings === 'string') {
//         // Called with regular function arguments
//         markdown = strings;
//     } else {
//         // Called with template literals
//         markdown = strings.reduce((acc, str, i) => acc + str + (values[i] || ''), '');
//     }

//     // Check if the function is being invoked by console.log
//     const isInvokedByConsoleLog = new Error().stack.includes('console.log');

//     if (isInvokedByConsoleLog) {
//         return log(markedTerminal(markdown));
//     } else {
//         return markedTerminal(markdown);
//     }
// };

// marked.use(markedTerminal());

// Helper function to extract props from a TypeScript interface
export const extractPropsFromInterface = (sourceFile, interfaceName) => {
    const result = {};
    
    const visit = (node) => {
        if(ts.isInterfaceDeclaration(node)) console.log(node.name.text, interfaceName)
      if (
        ts.isInterfaceDeclaration(node) &&
        node.name.text === interfaceName
      ) {
        node.members.forEach((member) => {
          if (ts.isPropertySignature(member) && member.name) {
            const propName = member.name.getText();
            const propType = member.type?.getText();
            result[propName] = propType;
          }
        });
      }
      ts.forEachChild(node, visit);
    };
    
    ts.forEachChild(sourceFile, visit);
    return result;
  };
  