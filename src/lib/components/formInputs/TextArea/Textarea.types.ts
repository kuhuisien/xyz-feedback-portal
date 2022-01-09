export interface TextareaProps {
  // name of the state, used specifically by antd for data binding
  name: string;

  // label to be displayed on top of the text area
  label?: string;

  // placeholder text displayed in text area, when no text has been entered
  placeholder?: string;

  // number of rows for text area
  rows: number;

  // width of text area in rem unit or percentage, default value is 17rem
  width?: number | string;

  // maximum number of characters that can be entered, default value is 255
  maxLength?: number;

  // whether the field is required, default value is false
  required?: boolean;

  // customized validation message to be displayed when the field is required and value is falsy
  // if not provided, display as : 'Required'
  requiredValMsg?: string;
}
