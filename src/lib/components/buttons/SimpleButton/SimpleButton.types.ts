import { ButtonType } from 'antd/lib/button';

export interface SimpleButtonProps {
  // button text
  children: React.ReactNode;

  // original html type of button
  htmlType?: 'button' | 'submit';

  // styling type
  type?: ButtonType;

  // whether to display loading spinner inside the button
  loading?: boolean;

  // whether button is disabled
  disabled?: boolean;

  // action to trigger when button is clicked
  onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}
