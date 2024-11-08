import ts, { SyntaxKind } from 'typescript';

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
