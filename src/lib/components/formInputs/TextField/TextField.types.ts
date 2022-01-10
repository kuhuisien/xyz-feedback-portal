export interface ITextFieldProps {
  // name of the state, used specifically by antd for data binding
  name: string;

  // whether the field is required
  required?: boolean;

  // customized validation message to be displayed when the field is required and value is falsy,
  // if not provided, display as : 'Required'
  requiredValMsg?: string;

  // regex string for pattern validation
  pattern?: string;

  // customized validation message to be displaed when the field does not match regex of pattern prop
  // if not provided, display as : 'Invalid'
  patternValMsg?: string;

  // label to be displayed on top of the textfield
  label?: string;

  // placeholder of the textfield
  placeholder?: string;

  // maximum number of charaters allowed to be entered
  maxLength?: number;

  // type of textfield
  type?: 'text' | 'email' | 'number';

  // width in rem unit or percentage
  width?: number | string;
}
