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
