import { ReactElement } from "react";

/** 
 * Type definition for a React component used as a page with React-Router. 
 */
export type PageComponentType = React.FC & {
  /** Function signature that returns a React element. */
  (): ReactElement;

  /** The path name associated with the route for this page component. */
  path?: string;
};

