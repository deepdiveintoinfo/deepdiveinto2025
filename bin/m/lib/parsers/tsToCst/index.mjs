import ts from 'typescript';
import { join, extname, basename } from 'path';
import {  checkForImports } from './typescript.mjs'
import { isClassComponent, isFunctionComponent, parseFunctionComponent, extractDirectProps } from './react.mjs'


export async function generateCST(componentFolderPath) {
  const componentsFilePath = join(componentFolderPath, 'component.tsx');
  
  // Check if file is TypeScript or JavaScript based on file extension
  const fileExtension = extname(componentsFilePath);
  
  if (fileExtension.startsWith('.ts')) {
    // Handle TypeScript/TSX files
    return generateCstFromTs(componentFolderPath);
  } else if (fileExtension.startsWith('.js')) {
    // Handle JavaScript/JSX files with PropTypes
    // return generateCstFromJs(componentFolderPath);
    return 'TODO'
  } else {
    throw new Error(`Unsupported file extension: ${fileExtension}`);
  }
}

const parser = {
  
  StringLiteral(node) {
    return {
      type: 'string',
      value: node.text
    }
  },
  InterfaceDeclaration(node) {
    // Extract direct members (ignoring inherited properties)
    const r =  extractDirectProps(node);
    // console.log(r)
  }
}



export const traverseComponentsFile = ({componentSourceFile, componentName, cst}) => {
  function traverseAST(node) {
    checkForImports(node, cst)
  
    // Capture function components
    if (isFunctionComponent(node)) {
      // console.log("Found Function Component:", node.name.text || node.parent.name.text);
      parseFunctionComponent(node, cst)
    }

    // Capture class components
    if (isClassComponent(node)) {
      // console.log("Found Class Component:", node.name.text);
    }

    const parsed = Object.fromEntries(Object.entries(ts.SyntaxKind).map(([name]) => {
      const isMethod = `is${name}`
      const parserMethod = `${name}`
      if(ts[isMethod] && ts[isMethod](node) && parser[parserMethod]) {
        return [name, parser[parserMethod](node) ]
      }
      return [name, false];
    }).filter(([_, b]) => !!b)) //.map(([a,b]) => [b,a]))

    if(parsed) console.log(parsed)

    // // 3. Extract JSX elements
    // if (ts.isJsxElement(node) || ts.isJsxSelfClosingElement(node)) {
    //   const jsxElement = node?.tagName?.text;

    //   if(cst.components[componentName].jsx) {
    //     cst.components[componentName].jsx.push(jsxElement)
    //   } else{
    //     cst.components[componentName].jsx = [ jsxElement ]
    //   }
    // }

    ts.forEachChild(node, traverseAST);
  }
  
  traverseAST(componentSourceFile)
  
  return cst
}

export async function generateCstFromTs(componentFolderPath) {
  const componentsFilePath = join(componentFolderPath, 'component.tsx');
  const variantsFilePath = join(componentFolderPath, 'variants.tsx');
  const componentName = basename(componentFolderPath);
  const program = ts.createProgram([componentsFilePath, variantsFilePath], {});
  // const checker = program.getTypeChecker();


  const componentSourceFile = program.getSourceFile(componentsFilePath);

  if (!componentSourceFile) {
    throw new Error("One of the source files was not found.", { componentSourceFile });
  }
  // Adjusted structure: components with individual props and variants per component
  const cst = {
    imports: {},  // Imports at root level
    exports: {},  // Exports at root level
    components: {}, // Top-level object for components
  };

  // Single AST traversal function to gather all information


  // Start the traversal for both files
  traverseComponentsFile({componentSourceFile, componentName, cst});
  // traverseVariantsFile({componentName, variantsSourceFile, cst});
  // console.log(componentsSourceFile)
  // console.log(cst.components.Atom.props)
  return cst;
}

// Helper function to extract the actual value from an initializer node
function extractValueFromNode(node) {
    let rawValue;
    if (ts.isStringLiteral(node)) {
      // If the node is a string literal, return the text value
      rawValue = node.text;
    } else if (ts.isNumericLiteral(node)) {
      // If the node is a numeric literal, return the numeric value
      rawValue =  Number(node.text);
    } else if (ts.isObjectLiteralExpression(node)) {
      // If the node is an object, recursively extract its properties
      const obj = {};
      node.properties.forEach(prop => {
        if (ts.isPropertyAssignment(prop)) {
          const propName = prop.name.text;
          obj[propName] = {
            ...obj[propName],
            rawValue: extractValueFromNode(prop.initializer)
          }
        }
      });
      rawValue = obj;
    } else if (ts.isArrayLiteralExpression(node)) {
      // If the node is an array, recursively extract its elements
      rawValue = node.elements.map(element => ({
        rawValue: extractValueFromNode(element)
      }));
    } else {
      // Fallback: return the raw text for other node types (like boolean literals, etc.)
      rawValue = node.getText();
    }
  
    return rawValue
  }
  