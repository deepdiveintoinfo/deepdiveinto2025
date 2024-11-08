import ts from 'typescript'

export const checkForComponents = (typeNode) => {  // 1. Extract types (now at root level)
    let props = {};    

    // console.log(typeNode.members)
    // console.log(typeNode.typeParameters)

    typeNode?.members?.forEach(member => {
        if (ts.isPropertySignature(member) && member.name) {
            const propName = member?.type?.text;
            props[propName] = ""
        }
    });

    // console.log(props)
}

const parseProps = (node) => {

    if (node.initializer.parameters.length > 0) {
        const firstParam = node.initializer.parameters[0];
        
        if (firstParam.type && ts.isTypeReferenceNode(firstParam.type)) {
            const typeName = firstParam.type.typeName?.escapedText;
            // console.log(typeName);  // This will log the type of the props, if present
        }
    }
    
    return {
        props: node
    }

}

export const parseFunctionComponent = (node, cst) => {
  cst.components[node.name.escapedText] = {
    props: parseProps(node)
  }

  // console.log(node.initializer.parameters[0]?.type.typeName.escapedText)
}

// Check if the node is a function component (either a function declaration or a variable declaration)
export function isFunctionComponent(node) {
    // Case 1: Function Declaration
    if (ts.isFunctionDeclaration(node) && node.name) {
      return true;
    }
  
    // Case 2: Variable Declaration assigned to a function
    if (ts.isVariableDeclaration(node) && node.initializer) {
      // Check if the initializer is an arrow function or function expression
      if (ts.isArrowFunction(node.initializer) || ts.isFunctionExpression(node.initializer)) {
        return true;
      }
    }    
  
    return false;
}
  
  // Check if the node is a class component (extends React.Component)
export function isClassComponent(node) {
    if (ts.isClassDeclaration(node) && node.heritageClauses) {
      for (const clause of node.heritageClauses) {
        for (const type of clause.types) {

          const typeName = type.expression.name.escapedText;
          if (typeName === 'React.Component' || typeName === 'Component') {
            return true;
          }
        }
      }
    }
    return false;
}

// Helper function to get the type name
const getTypeName = (typeNode) => {
    if (ts.isLiteralTypeNode(typeNode)) {
      return typeNode.literal.text; // Handles literal types like 's-block'
    } else if (ts.isTypeReferenceNode(typeNode)) {
      return typeNode.typeName.text; // Handles type references (like string, number, custom types)
    } else if (ts.isUnionTypeNode(typeNode)) {
      return typeNode.types.map(t => getTypeName(t)); // Handles union types
    } else if (typeNode.kind === ts.SyntaxKind.StringKeyword) {
      return 'string';
    } else if (typeNode.kind === ts.SyntaxKind.NumberKeyword) {
      return 'number';
    } else if (typeNode.kind === ts.SyntaxKind.BooleanKeyword) {
      return 'boolean';
    } else {
      return null; // Handle cases where no .text exists
    }
}

// Function to extract only the direct members of the interface
export const extractDirectProps = (interfaceNode) => {
    let props = {};
  
    // Loop through all members of the interface
    interfaceNode.members.forEach(member => {
      if (ts.isPropertySignature(member) && member.name) {
        const propName = member.name.text;
        props[propName] = {
            type: getTypeName(member.type),
            isRequired: !member?.questionToken
        }
      }
    });
  
    return props;
  };
  