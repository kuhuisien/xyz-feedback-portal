export interface SubmitButtonProps {
  // button text
  children: React.ReactNode;

  // whether to display loading spinner inside the button
  loading?: boolean;

  // whether button is disabled
  disabled?: boolean;

  onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}
