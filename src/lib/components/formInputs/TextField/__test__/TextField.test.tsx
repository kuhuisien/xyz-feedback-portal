import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import TextField from '../TextField';
import { Input, Form, Typography } from 'antd';
import { ITextFieldProps } from '../TextField.types';
import { FormProviderWrapper } from 'lib/util/TestUtil/ProviderWrapper/ProviderWrapper';
import { TextFieldContainer } from '../TextField.styles';

describe('TextField', () => {
  let wrapper: ReactWrapper;

  let defaultProps: ITextFieldProps;

  function renderTextField(args: any) {
    defaultProps = {
      name: 'username'
    };
    const props = { ...defaultProps, ...args };
    return mount(
      <FormProviderWrapper>
        <TextField {...props} />
      </FormProviderWrapper>
    );
  }

  beforeEach(() => {
    wrapper = renderTextField(null);
  });

  it('should render Input component', () => {
    expect(wrapper.find(Input).length).toBe(1);
  });

  // ====================
  // MAPPING PROPS
  // ====================
  it('should map name prop correctly', () => {
    expect(wrapper.find(Form.Item).props().name).toBe(defaultProps.name);
  });

  it('should map required prop correctly', () => {
    const required = false;
    wrapper = renderTextField({ required });
    const rule = wrapper.find(Form.Item).props().rules;
    if (rule) {
      expect(rule.length).toEqual(0);
    } else {
      fail('required rule was found not set correctly');
    }
  });

  it('should map required prop correctly with default validation message when required=true && requiredValMsg is undefined', () => {
    const required = true;
    wrapper = renderTextField({ required });
    const rule = wrapper.find(Form.Item).props().rules;
    if (rule && rule.length > 0) {
      expect(rule[0]).toEqual({
        message: `Required`,
        required,
        whitespace: true
      });
    } else {
      fail('required rule was found not set correctly');
    }
  });

  it('should map required prop correctly with requiredValMsg prop', () => {
    const required = true;
    const requiredValMsg = 'customized validation message';
    wrapper = renderTextField({ required, requiredValMsg });
    const rule = wrapper.find(Form.Item).props().rules;
    if (rule && rule.length > 0) {
      expect(rule[0]).toEqual({
        message: requiredValMsg,
        required,
        whitespace: true
      });
    } else {
      fail('required rule was found not set correctly');
    }
  });

  it('should map pattern prop correctly', () => {
    // set required to false to test only pattern validation
    const required = false;
    const pattern = '^(?=.*[A-Za-z])(?=.*d).{8,}$';
    wrapper = renderTextField({ required, pattern });
    const rule = wrapper.find(Form.Item).props().rules;
    if (rule && rule.length > 0) {
      expect(rule[0]).toEqual({
        pattern: new RegExp(pattern),
        message: 'Invalid'
      });
    } else {
      fail('pattern rule was found not set correctly');
    }
  });

  it('should map pattern prop correctly with patternValMsg', () => {
    // set required to false to test only pattern validation
    const required = false;
    const pattern = '^(?=.*[A-Za-z])(?=.*d).{8,}$';
    const patternValMsg = 'minimum eight characters, at least one letter and one number';
    wrapper = renderTextField({ required, pattern, patternValMsg });
    const rule = wrapper.find(Form.Item).props().rules;
    if (rule && rule.length > 0) {
      expect(rule[0]).toEqual({
        pattern: new RegExp(pattern),
        message: patternValMsg
      });
    } else {
      fail('pattern rule was found not set correctly');
    }
  });

  it('should map email type prop correctly to set email validation rule', () => {
    const type = 'email';
    const required = false;
    wrapper = renderTextField({ type, required });
    expect(wrapper.find(Input).props().type).toBe(type);

    const rule = wrapper.find(Form.Item).props().rules;
    if (rule && rule.length > 0) {
      expect(rule[0]).toEqual({
        type,
        message: 'Invalid'
      });
    } else {
      fail('pattern rule was found not set correctly');
    }
  });

  it('should map label prop correctly', () => {
    const label = 'dummy label';
    wrapper = renderTextField({ label });
    expect(wrapper.find(Form.Item).props().label).toBe(label);
  });

  it('should map placeholder prop correctly', () => {
    const placeholder = 'dummy placeholder';
    wrapper = renderTextField({ placeholder });
    expect(wrapper.find(Input).props().placeholder).toBe(placeholder);
  });

  it('should map maxLength prop correctly', () => {
    const maxLength = 8;
    wrapper = renderTextField({ maxLength });
    expect(wrapper.find(Input).props().maxLength).toBe(maxLength);
  });

  it('should map default type prop correctly', () => {
    expect(wrapper.find(Input).props().type).toBe('text');
  });

  it('should map type prop correctly', () => {
    const type = 'email';
    wrapper = renderTextField({ type });
    expect(wrapper.find(Input).props().type).toBe(type);
  });

  it('should map wdith prop correctly', () => {
    const width = 6;
    wrapper = renderTextField({ width });
    expect(wrapper.find(TextFieldContainer).props().width).toBe(width);
  });
});
