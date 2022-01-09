export interface ITextFieldProps {
  // name of the state, used specifically by antd for data binding
  name: string;

  // whether the field is required, default value is false
  required?: boolean;

  // customized validation message to be displayed when the field is required and value is falsy, if not provided, display as "Required"
  requiredValMsg?: string;

  // regex string for pattern validation
  pattern?: string;

  // customized validation message to be displaed when the field does not match regex of pattern prop
  // if not provided, display as : 'Invalid'
  patternValMsg?: string;

  // label to be displayed on top of the textfield, default value is 255
  label?: string;

  // placeholder of the textfield
  placeholder?: string;

  // maximum number of charaters allowed to be entered
  maxLength?: number;

  // type of textfield, default value is 'text'
  type?: 'text' | 'email' | 'number';

  // width of dropdown in rem unit or percentage, default is 17rem
  width?: number | string;
}
