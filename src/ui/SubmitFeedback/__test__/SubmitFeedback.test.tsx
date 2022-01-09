import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import SubmitFeedback from '../SubmitFeedback';
import SubmitButton from 'lib/components/buttons/SubmitButton/SubmitButton';
import SimpleButton from 'lib/components/buttons/SimpleButton/SimpleButton';
import * as useAsyncModule from 'lib/hooks/useAsync';

describe('SubmitFeedback', () => {
  let wrapper: ReactWrapper;

  let consoleSpy: jest.SpyInstance;

  let mockLocationsSpy: jest.SpyInstance<any>;

  function renderSubmitFeedback() {
    return mount(<SubmitFeedback />);
  }

  beforeEach(() => {
    mockLocationsSpy = jest
      .spyOn(useAsyncModule, 'useAsync')
      .mockReturnValue({ execute: jest.fn(), status: 'idle', error: '', value: null });

    consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

    wrapper = renderSubmitFeedback();
  });

  afterEach(() => {
    mockLocationsSpy.mockRestore();

    consoleSpy.mockRestore();
  });

  // ==============
  // CANCEL BUTTON
  // ==============
  it('should have on click handler for "Cancel" button', () => {
    wrapper.find(SimpleButton).at(0).simulate('click'); // should not result in error
  });

  // ==============
  // SUBMIT BUTTON
  // ==============
  it('should have correct default text rendered on "Submit" button', () => {
    expect(wrapper.find(SimpleButton).at(1).props().children).toBe('Submit');
  });

  it('should have correct text rendered on "Submit" button before form submission', () => {
    expect(wrapper.find(SubmitButton).props().children).toBe('Submit');
  });

  it('should have correct text rendered on "Submit" button during form submisison', () => {
    mockLocationsSpy = jest
      .spyOn(useAsyncModule, 'useAsync')
      .mockReturnValue({ execute: jest.fn(), status: 'pending', error: '', value: null });

    wrapper = renderSubmitFeedback();

    expect(wrapper.find(SubmitButton).props().children).toBe('Submitting');
  });

  it('should have correct text rendered on "Submit" button after successful form submission', () => {
    mockLocationsSpy = jest
      .spyOn(useAsyncModule, 'useAsync')
      .mockReturnValue({ execute: jest.fn(), status: 'success', error: '', value: null });

    wrapper = renderSubmitFeedback();

    expect(wrapper.find(SubmitButton).props().children).toBe('Submit');
  });

  it('should have correct default text rendered on "Submit" button', () => {
    expect(wrapper.find(SimpleButton).at(1).props().children).toBe('Submit');
  });

  it('should not disable "Submit" button before form submission', () => {
    expect(wrapper.find(SubmitButton).props().disabled).toBe(false);
  });

  it('should disable "Submit" button during form submisison', () => {
    mockLocationsSpy = jest
      .spyOn(useAsyncModule, 'useAsync')
      .mockReturnValue({ execute: jest.fn(), status: 'pending', error: '', value: null });

    wrapper = renderSubmitFeedback();

    expect(wrapper.find(SubmitButton).props().disabled).toBe(true);
  });

  it('should not disable "Submit" button after successful form submission', () => {
    mockLocationsSpy = jest
      .spyOn(useAsyncModule, 'useAsync')
      .mockReturnValue({ execute: jest.fn(), status: 'success', error: '', value: null });

    wrapper = renderSubmitFeedback();

    expect(wrapper.find(SubmitButton).props().disabled).toBe(false);
  });

  // ==============
  // ERROR HANDLING
  // ==============
  it('should have correct text rendered on "Submit" button after failed form submisison', () => {
    const MOCK_ERROR_MSG = 'error returned from useAsync';
    mockLocationsSpy = jest.spyOn(useAsyncModule, 'useAsync').mockReturnValue({
      execute: jest.fn(),
      status: 'error',
      error: MOCK_ERROR_MSG,
      value: null
    });

    expect(() => renderSubmitFeedback()).toThrow(new Error(MOCK_ERROR_MSG));
  });
});
