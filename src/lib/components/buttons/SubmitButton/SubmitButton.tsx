import React from 'react';
import { SubmitButtonProps } from './SubmitButton.types';
import SimpleButton from '../SimpleButton/SimpleButton';
import { SubmitButtonContainer } from './SubmitButton.styles';

/**
 *
 * Submit button on any Form
 */
const SubmitButton = ({
  children,
  loading = false,
  disabled = false,
  onClick
}: SubmitButtonProps) => {
  return (
    <SubmitButtonContainer>
      <SimpleButton
        htmlType="submit"
        type="primary"
        loading={loading}
        disabled={disabled}
        onClick={onClick}>
        {children}
      </SimpleButton>
    </SubmitButtonContainer>
  );
};

export default SubmitButton;
