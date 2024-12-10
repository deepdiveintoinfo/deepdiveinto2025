import { ReactElement } from "react";
import { RouteObject, RouteProps } from "react-router-dom";

/** 
 * Type definition for a React component used as a page with React-Router. 
 */
export type PageComponentType = React.FC & {
  /** Function signature that returns a React element. */
  (): Promise<ReactElement> | ReactElement;
  /** The route for this page component. */
  route?: RouteObject | RouteProps;
};

