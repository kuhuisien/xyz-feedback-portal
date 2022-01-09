// interface defining Homepage's Action Card Item
// If the action card item list is to be changed to configured via backend
// This can be easily switched according to its response structure
export interface IHomeCardProps {
  // title text to be displayed in bold in the card
  title: string;

  // information text under title
  info: string;

  // path to redirect when clicking on card
  path: string;

  // unique string to be used as React key props
  code: string;
}
