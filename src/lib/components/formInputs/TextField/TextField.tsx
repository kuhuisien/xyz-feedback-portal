import React, { useMemo } from 'react';
import Form, { Rule } from 'antd/lib/form';
import Input from 'antd/lib/input';
import { ITextFieldProps } from './TextField.types';
import { TextFieldContainer } from './TextField.styles';

const TextField = ({
  name,
  required = false,
  requiredValMsg = 'Required',
  pattern,
  patternValMsg = 'Invalid',
  label,
  placeholder,
  maxLength = 255,
  type = 'text',
  width = 17
}: ITextFieldProps) => {
  // create validation rules
  const createRules = () => {
    let rules: Rule[] = [];
    let message: string | undefined = undefined;
    if (required) {
      message = requiredValMsg;
      rules.push({
        required,
        message,
        whitespace: true
      });
    }

    if (pattern) {
      message = patternValMsg;
      rules.push({
        pattern: new RegExp(pattern),
        message
      });
    }

    if (type == 'email') {
      rules.push({
        type,
        message: 'Invalid'
      });
    }

    return rules;
  };

  const memoizedCreateRules = useMemo(
    () => createRules(),
    [required, requiredValMsg, pattern, patternValMsg, type]
  );

  return (
    <TextFieldContainer width={width}>
      <Form.Item name={name} label={label} rules={memoizedCreateRules}>
        <Input placeholder={placeholder} maxLength={maxLength} type={type} />
      </Form.Item>
    </TextFieldContainer>
  );
};

export default TextField;
