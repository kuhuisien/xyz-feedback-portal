import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { Button } from 'antd';
import { SubmitButtonProps } from '../SubmitButton.types';
import SubmitButton from '../SubmitButton';
import { FormProviderWrapper } from 'lib/util/TestUtil/ProviderWrapper/ProviderWrapper';

describe('SubmitButton', () => {
  let wrapper: ReactWrapper;

  let onClickListener: jest.Mock<any, any>;
  let defaultProps: SubmitButtonProps;

  function renderSubmitButton(args: any) {
    defaultProps = {
      children: 'dummy child'
    };
    const props = { ...defaultProps, ...args };
    return mount(
      <FormProviderWrapper>
        <SubmitButton disabled={props.disabled} {...props} />
      </FormProviderWrapper>
    );
  }

  beforeEach(() => {
    wrapper = renderSubmitButton(null);
  });

  // ====================
  // MAPPING PROPS
  // ====================
  it('should map children prop correctly', () => {
    expect(wrapper.find(Button).text()).toBe(defaultProps.children);
  });

  it('should map htmlType prop correctly', () => {
    expect(wrapper.find(Button).props().htmlType).toBe('submit');
  });

  it('should map default loading prop correctly', () => {
    expect(wrapper.find(Button).props().loading).toBe(false);
  });

  it('should map loading prop correctly', () => {
    const loading = true;
    wrapper = renderSubmitButton({ loading });
    expect(wrapper.find(Button).props().loading).toBe(loading);
  });

  it('should disable button correctly when form fields are untouched', () => {
    expect(wrapper.find(Button).props().disabled).toBe(false);
  });

  // ====================
  // EVENT HANDLER
  // ====================
  it('checks if handleSearchChange method works correctly', () => {
    onClickListener = jest.fn();
    wrapper = renderSubmitButton({ onClick: onClickListener });
    wrapper.find(Button).simulate('click');
    expect(onClickListener).toBeCalled();
  });
});
