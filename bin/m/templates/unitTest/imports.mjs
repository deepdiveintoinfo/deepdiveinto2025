import ts, { SyntaxKind } from 'typescript'

export const createImport = (identifiers, moduleName) => {
    return ts.factory.createImportDeclaration(
        undefined, // No decorators
        ts.factory.createImportClause(
            false, // No default import
            ts.factory.createNamedImports(
                identifiers.map(id => 
                    ts.factory.createImportSpecifier(
                        false, // Not an alias
                        undefined, // No alias
                        ts.factory.createIdentifier(id) // Identifier name
                    )
                )
            )
        ),
        ts.factory.createStringLiteral(moduleName)
    );
};

// Create an empty arrow function: `() => { }`
export const arrowFunction = ({ modifiers, typeParamters, parameters = [], returnType, arrowToken, functionBody} = {}) => {
    return ts.factory.createArrowFunction(
        modifiers, // Modifiers
        typeParamters, // Type parameters
        parameters,        // Parameters (empty)
        returnType, // Return type
        arrowToken || ts.factory.createToken(SyntaxKind.EqualsGreaterThanToken), // Arrow token
        ts.factory.createBlock(functionBody || [], true) // Function body (empty block)
    );
}

// export const describeExpression = (description, customArrowFunction, childDescribes = []) => {
//     const arrowBody = childDescribes; // Add child describes to the body of the arrow function
//     const arrowFunc = customArrowFunction || arrowFunction({ functionBody: arrowBody });

//     return ts.factory.createExpressionStatement(
//         ts.factory.createCallExpression(
//             ts.factory.createIdentifier('describe'), // Call `describe`
//             undefined, // Type arguments
//             [description, arrowFunc] // Arguments: the string and the arrow function with child describes
//         )
//     );
// };



// Create the named import statement: `import { faker } from '@faker-js/faker';`
export const importFaker = ts.factory.createImportDeclaration(
    undefined,  // No decorators
    ts.factory.createImportClause(
        false,  // No `default` import
        ts.factory.createNamedImports([
            ts.factory.createImportSpecifier(
                false,  // Not an alias (just import `faker`)
                undefined,  // No alias for `faker`
                ts.factory.createIdentifier('faker')  // The imported identifier
            )
        ])
    ),
    ts.factory.createStringLiteral('@faker-js/faker')  // Import specifier (the module)
);

export const importJestDom = ts.factory.createImportDeclaration(
    undefined,  // No decorators
    undefined,  // No modifiers
    undefined,  // No import clause (since it's a side-effect import)
    ts.factory.createStringLiteral('@testing-library/jest-dom') // Import specifier
)

export const importTestingLibrary = ts.factory.createImportDeclaration(
    undefined,  // No decorators
    ts.factory.createImportClause(
        false,  // No `default` import
        ts.factory.createNamedImports([
            ts.factory.createImportSpecifier(
                false,  // Not an alias
                undefined,  // No alias for `render`
                ts.factory.createIdentifier('render')  // The imported identifier `render`
            ),
            ts.factory.createImportSpecifier(
                false,  // Not an alias
                undefined,  // No alias for `screen`
                ts.factory.createIdentifier('screen')  // The imported identifier `screen`
            ),
        ])
    ),
    ts.factory.createStringLiteral('@testing-library/react')  // Import specifier (the module)
);

// Create the variable declaration: `const answer = 2 + 3`
export const variableDeclaration = (name, expression) => ts.factory.createVariableStatement(
    undefined,  // No modifiers
    ts.factory.createVariableDeclarationList(
        [ts.factory.createVariableDeclaration(
            ts.factory.createIdentifier(name),  // The variable name
            undefined,                          // No type annotation
            undefined,                          // No initializer
            expression                          // The initializer 
        )],
        ts.NodeFlags.Const  // Use `NodeFlags.Const` to specify this is a `const` declaration
    )
);


// Utility to create a test case: `test("value", () => {})`
export const createTestCase = (testName) => {
    return ts.factory.createExpressionStatement(
        ts.factory.createCallExpression(
            ts.factory.createIdentifier('test'),
            undefined,
            [
                ts.factory.createStringLiteral(testName),
                ts.factory.createArrowFunction(
                    undefined,
                    undefined,
                    [],
                    undefined,
                    ts.factory.createToken(SyntaxKind.EqualsGreaterThanToken),
                    ts.factory.createBlock([], true) // Empty test body
                )
            ]
        )
    );
};

// Create a nested describe block
export const createNestedDescribeOrTest = (componentName, nestedDescribeNames = [], componentData) => {
    const nestedDescribeBlocks = nestedDescribeNames.map(({ name, arrowFunctionDefinition, isTest = false }) => {
        if (name === 'Variants' && componentData?.variants) {
            const variantBlocks = Object.keys(componentData.variants).map((variantName) => {
                const variantTests = Object.keys(componentData.variants[variantName].options).map((variantValue) => {
                    return createTestCase(variantValue)
                });

                return describeExpression(
                    ts.factory.createStringLiteral(variantName),
                    arrowFunction({
                        functionBody: ts.factory.createBlock(variantTests, true),
                    })
                );
            });

            return describeExpression(
                ts.factory.createStringLiteral(name),
                arrowFunction({
                    functionBody: ts.factory.createBlock(variantBlocks, true),
                })
            );
        }

        // Handle other `describe` blocks like 'Props' or 'Behaviors' without variants.
        return isTest ? createTestCase(name) : describeExpression(
            ts.factory.createStringLiteral(name),
            arrowFunction(arrowFunctionDefinition)
        );
    });

    return describeExpression(
        ts.factory.createStringLiteral(`<${componentName} />`),
        arrowFunction({
            functionBody: ts.factory.createBlock(nestedDescribeBlocks, true), // Add nested describe blocks
        })
    );
};
