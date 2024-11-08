import ts from 'typescript';
import { arrowFunction } from '..'


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

// export const mockExpression = ``