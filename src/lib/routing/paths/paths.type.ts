/**
 * The app & module path directories, used for routing with "react-router"
 *
 * === key:
 *     Represents the alias (a name) for the "react-router" library compatible path
 *
 * === value:
 *     A "react-router" library compatible path
 */

export interface AppPaths {
  [key: string]: Path;
}

export interface Path {
  // "react-router" compatible path
  path: string;

  // Static Displayable name for this path.
  // Used for displaying the title of the page
  displayTitle: string;
}
