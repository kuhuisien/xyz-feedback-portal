import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import ErrorFallback from '../ErrorFallBack';
import { IErrorFallbackProps } from '../ErrorFallBack.type';
import SimpleButton from 'lib/components/buttons/SimpleButton/SimpleButton';
import { ErrorMsgDetail } from '../ErrorFallBack.style';

describe('ErrorFallBack', () => {
  let wrapper: ReactWrapper;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let resetErrorBoundaryHandler: jest.Mock<any, any>;

  let defaultProps: IErrorFallbackProps;

  const MOCK_ERROR = new Error('mock error');

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function renderErrorFallBack(args: any) {
    resetErrorBoundaryHandler = jest.fn();

    defaultProps = {
      error: MOCK_ERROR,
      resetErrorBoundary: resetErrorBoundaryHandler
    };
    const props = { ...defaultProps, ...args };
    return mount(<ErrorFallback {...props} />);
  }

  beforeEach(() => {
    wrapper = renderErrorFallBack(null);
  });

  it('should render error message', () => {
    expect(wrapper.find(ErrorMsgDetail).text()).toBe(MOCK_ERROR.message);
  });

  // ====================
  // EVENT HANDLER
  // ====================
  it('should invoke reset error handler', () => {
    wrapper.find(SimpleButton).simulate('click');
    expect(resetErrorBoundaryHandler).toBeCalled();
  });
});
