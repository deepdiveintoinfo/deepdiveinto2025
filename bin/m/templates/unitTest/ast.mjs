import ts, { SyntaxKind } from 'typescript';
import {
    importFaker,
    importJestDom,
    importTestingLibrary,
    createImport,
    createNestedDescribeOrTest,
    arrowFunction,
} from './imports.mjs'

// Post-process the generated code to add an empty line before the import
function addEmptyLineBeforeImport(code) {
    // Use a regular expression to find the position of the first import statement
    return code.replace(/(import)/, '\n$1');
}

// Post-process the generated code to add an empty line before the import
function addEmptyLineAfterImport(code) {
    // Use a regular expression to find the position of the first import statement
    return code.replace(/(describe)/, '\n$1');
}


export const generateUnitTestAST = (components) => {
    const ast = constructUnitTestAST(components);
    let code = generateSourceCode(ast);
    code = addEmptyLineBeforeImport(code)
    code = addEmptyLineAfterImport(code)
    return code; // Return the generated source code
}

  // Create the `render(<Alert />)` expression inside the default render test
  const renderExpression = ts.factory.createExpressionStatement(
    ts.factory.createCallExpression(
      ts.factory.createIdentifier("render"),
      undefined,
      [
        ts.factory.createJsxSelfClosingElement(
          ts.factory.createIdentifier("Alert"),
          undefined,
          []
        )
      ]
    )
  );


// Step 1: Create an AST for the code `const answer = 2 + 3`
function constructUnitTestAST(components) {

    const componentImports = Object.keys(components).map(n => createImport([n], '..'))

    const importStatements = [importJestDom, importTestingLibrary, importFaker, ...componentImports];


    // Create describe blocks for each component
    const componentLevelDescribes = Object.keys(components).map((componentName) => {
        const componentData = components[componentName]; // Get the component data (props, variants, etc.)
        
        return createNestedDescribeOrTest(
            componentName,
            [
                {
                    name: 'Default Render',
                    isTest: true,
                    arrowFunctionDefinition: arrowFunction({
                        functionBody: ts.factory.createBlock([
                            renderExpression
                        ], true)
                    }) 
                
                },
                { name: 'Props', arrowFunctionDefinition: arrowFunction() },
                { name: 'Variants', arrowFunctionDefinition: arrowFunction() },
                { name: 'Behaviors', arrowFunctionDefinition: arrowFunction() },
            ],
            componentData // Pass the component data (props, variants, etc.)
        );
    });


    // Create a source file with the variable declaration
    const sourceFile = ts.factory.createSourceFile(
        [...importStatements, ...componentLevelDescribes],                         // Statements (just the variable declaration)
        ts.factory.createToken(SyntaxKind.EndOfFileToken),  // End of file
        ts.NodeFlags.None                              // No additional flags
    );

    // Attach a synthetic JSDoc comment
    ts.addSyntheticLeadingComment(
        // Add the comment to the source file
        importStatements[0],
        // Multi-line comment (/* ... */)
        SyntaxKind.MultiLineCommentTrivia,
        //Content of the comment
        `*\n * @jest-environment jsdom\n `,
        // True means it's a JSDoc comment (/** ... */) */
        true
    );
    
    return sourceFile;
}

// Step 2: Use TypeScript's printer to generate the source code
function generateSourceCode(ast) {
  const printer = ts.createPrinter();
  const result = printer.printFile(ast);  // Convert AST to string
  return result;
}
