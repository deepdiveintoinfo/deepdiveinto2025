import { ReactNode } from 'react';

declare module '*.mdx' {
  let MDXComponent: (props: { children?: ReactNode }) => JSX.Element;
  export const someText: string; // Add other named exports as needed
  export default MDXComponent;
}
