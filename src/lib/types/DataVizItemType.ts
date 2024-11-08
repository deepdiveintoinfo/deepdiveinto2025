/**
 * Represents an item in a data visualization project.
 */
export type DataVizItemType = {
    /** The title of the data visualization item. */
    title: string;
  
    /** Optional URL to an image representing the data visualization item. */
    image?: string;
  
    /** Optional array of descriptions providing additional information about the item. */
    description?: string[];
  
    /** Optional array of strings categorizing the item into specific families. */
    family?: string[];
  
    /** Optional array of strings describing the functions that the item serves in data visualization. */
    function?: string[];
  
    /** Optional array of strings describing the shapes associated with the item. */
    shape?: string[];
  
    /** Optional object containing input references. */
    input?: {
      /** Array of href strings related to input sources. */
      href: string[];
  
      /** Array of SVG strings associated with the input sources. */
      svg: string[];
    };
  
    /** Optional array of example objects showcasing the item in use. */
    examples?: {
      /** The URL linking to an example. */
      href: string;
  
      /** A source reference for the example. */
      source: string;
    }[];
  };
  