// export default {
//     preset: 'ts-jest',
//     testEnvironment: 'node',
//     setupFilesAfterEnv: ['<rootDir>/setupTests.ts'],
//     transform: {
//       '^.+\\.tsx?$': 'ts-jest',
//     },
//     testMatch: [
//         '**/*.test.ts',
//         '**/*.test.tsx',
//         '**/test.ts',
//         '**/test.tsx',
//         ],
//   };
  
export default {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.(css|scss)$': 'identity-obj-proxy',
  },
  testMatch: [
    '**/__tests__/**/*.ts?(x)',
    '**/?(*.)+(spec|test).ts?(x)',
    '**/test.ts?(x)',
    '**/tests/unit.ts?(x)',
    '**/unit.ts?(x)'
  ],

}