import React from 'react';
import SimpleButton from 'lib/components/buttons/SimpleButton/SimpleButton';
import { IErrorFallbackProps } from './ErrorFallBack.type';
import { ErrorFallBackContainer, ErrorMsgDetail, ErrorMsgTitle } from './ErrorFallBack.style';

const ErrorFallback = ({ error, resetErrorBoundary }: IErrorFallbackProps) => {
  return (
    <ErrorFallBackContainer>
      <ErrorMsgTitle>Something went wrong:</ErrorMsgTitle>
      <ErrorMsgDetail>{error.message}</ErrorMsgDetail>
      <SimpleButton onClick={resetErrorBoundary}>Try again</SimpleButton>
    </ErrorFallBackContainer>
  );
};

export default ErrorFallback;
