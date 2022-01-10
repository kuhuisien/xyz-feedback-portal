export interface SubmitButtonProps {
  // button text
  children: React.ReactNode;

  // whether to display loading spinner inside the button
  loading?: boolean;

  // whether button is disabled
  disabled?: boolean;

  // event to trigger when button is clicked
  onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}
