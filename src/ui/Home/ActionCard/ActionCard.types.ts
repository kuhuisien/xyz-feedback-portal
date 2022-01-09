export interface IActionCardProps {
  // title text being displayed in the card
  title: string;

  // information text
  info: string;

  // event fired when the card is clicked on
  onClick: () => void;
}
