import ts from 'typescript'

export const checkForImports = (node, cst) => {  // 1. Extract imports (now at root level)
    if (ts.isImportDeclaration(node)) {
        const importPath = node.moduleSpecifier.text.replace(/['"]/g, '');
        cst.imports[importPath] = [];
        node.importClause?.namedBindings?.elements?.forEach(el => {
          cst.imports[importPath].push(el?.name?.text);
        });
    }
    return cst
}