import React from 'react';
import { SimpleButtonProps } from './SimpleButton.types';
import { Button } from 'antd';

const SimpleButton = ({
  children,
  htmlType = 'button',
  type,
  loading = false,
  disabled = false,
  onClick
}: SimpleButtonProps) => {
  return (
    <Button htmlType={htmlType} type={type} loading={loading} disabled={disabled} onClick={onClick}>
      {children}
    </Button>
  );
};

export default SimpleButton;
