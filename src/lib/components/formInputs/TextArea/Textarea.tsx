import React, { useMemo } from 'react';
import { Form, Input } from 'antd';
import { Rule } from 'antd/lib/form';
import { TextareaProps } from './Textarea.types';
import { TextAreaContainer } from './TextArea.styles';

const { TextArea } = Input;

const Textarea = ({
  name,
  label,
  placeholder,
  rows,
  width = 17,
  maxLength = 255,
  required = false,
  requiredValMsg = 'Required'
}: TextareaProps) => {
  // create validation rules
  const createRules = () => {
    // eslint-disable-next-line prefer-const
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
    return rules;
  };

  const memoizedCreateRules = useMemo(() => createRules(), [required, requiredValMsg]);

  return (
    <TextAreaContainer width={width}>
      <Form.Item name={name} rules={memoizedCreateRules} label={label}>
        <TextArea
          showCount
          rows={rows}
          placeholder={placeholder}
          maxLength={maxLength}
          allowClear
        />
      </Form.Item>
    </TextAreaContainer>
  );
};

export default Textarea;
