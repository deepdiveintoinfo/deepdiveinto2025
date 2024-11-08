// import ts from 'typescript'
// export * from './jest.mjs'

// export const importJestDom = ts.factory.createImportDeclaration(
//     undefined,  // No decorators
//     undefined,  // No modifiers
//     undefined,  // No import clause (since it's a side-effect import)
//     ts.factory.createStringLiteral('@testing-library/jest-dom') // Import specifier
// )

// export const importTestingLibrary = ts.factory.createImportDeclaration(
//     undefined,  // No decorators
//     ts.factory.createImportClause(
//         false,  // No `default` import
//         ts.factory.createNamedImports([
//             ts.factory.createImportSpecifier(
//                 false,  // Not an alias
//                 undefined,  // No alias for `render`
//                 ts.factory.createIdentifier('render')  // The imported identifier `render`
//             ),
//             ts.factory.createImportSpecifier(
//                 false,  // Not an alias
//                 undefined,  // No alias for `screen`
//                 ts.factory.createIdentifier('screen')  // The imported identifier `screen`
//             ),
//         ])
//     ),
//     ts.factory.createStringLiteral('@testing-library/react')  // Import specifier (the module)
// );