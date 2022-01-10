import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { Form } from 'antd';
import Textarea from '../Textarea';
import { TextareaProps } from '../Textarea.types';
import TextArea from 'antd/lib/input/TextArea';
import { FormProviderWrapper } from 'lib/util/TestUtil/ProviderWrapper/ProviderWrapper';

describe('Textarea', () => {
  let wrapper: ReactWrapper;

  let defaultProps: TextareaProps;

  function renderTextarea(args: any) {
    defaultProps = {
      name: 'username',
      rows: 5
    };
    const props = { ...defaultProps, ...args };
    return mount(
      <FormProviderWrapper>
        <Textarea {...props} />
      </FormProviderWrapper>
    );
  }

  beforeEach(() => {
    wrapper = renderTextarea(null);
  });

  it('should render TextArea component', () => {
    expect(wrapper.find(TextArea).length).toBe(1);
  });

  // ====================
  // MAPPING PROPS
  // ====================
  it('should map name prop correctly', () => {
    expect(wrapper.find(Form.Item).props().name).toBe(defaultProps.name);
  });

  it('should map default required prop correctly', () => {
    const rule = wrapper.find(Form.Item).props().rules;
    if (rule) {
      expect(rule.length).toEqual(0);
    } else {
      fail('required rule was found not set correctly');
    }
  });

  it('should map required prop correctly with default validation message when required=true && requiredValMsg is undefined', () => {
    const required = true;
    wrapper = renderTextarea({ required });
    const rule = wrapper.find(Form.Item).props().rules;
    if (rule) {
      expect(rule.length).toEqual(1);
      expect(rule[0]).toEqual({
        message: 'Required',
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
    wrapper = renderTextarea({ required, requiredValMsg });
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

  it('should map label prop correctly', () => {
    const label = 'dummy label';
    wrapper = renderTextarea({ label });
    expect(wrapper.find(Form.Item).props().label).toBe(label);
  });

  it('should map placeholder prop correctly', () => {
    const placeholder = 'dummy placeholder';
    wrapper = renderTextarea({ placeholder });
    expect(wrapper.find(TextArea).props().placeholder).toBe(placeholder);
  });

  it('should map rows prop correctly', () => {
    expect(wrapper.find(TextArea).props().rows).toBe(defaultProps.rows);
  });

  it('should map width prop correctly', () => {
    const width = '20';
    wrapper = renderTextarea({ width });
    expect(wrapper.find('div').at(0).props().width).toBe(width);
  });

  it('should map default maxLength prop correctly', () => {
    expect(wrapper.find(TextArea).props().maxLength).toBe(255);
  });

  it('should map maxLength prop correctly', () => {
    const maxLength = 8;
    wrapper = renderTextarea({ maxLength });
    expect(wrapper.find(TextArea).props().maxLength).toBe(maxLength);
  });
});
