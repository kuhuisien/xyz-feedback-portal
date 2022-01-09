import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import CheckSubmissionForm from '../CheckSubmissionForm';
import { initialState } from 'ui/CheckSubmission/store/initialState';
import SubmitButton from 'lib/components/buttons/SubmitButton/SubmitButton';
import SimpleButton from 'lib/components/buttons/SimpleButton/SimpleButton';
import { ICheckSubmissionState } from 'ui/CheckSubmission/store/checkSubmission.types';

describe('CheckSubmissionForm', () => {
  let wrapper: ReactWrapper;
  const mockStore = configureStore();
  let store;
  let onFormSubmitListener: jest.Mock<any, any>;

  function renderCheckSubmissionForm(state: ICheckSubmissionState) {
    store = mockStore({ checkSubmission: { ...state } });

    onFormSubmitListener = jest.fn();
    return mount(
      <Provider store={store}>
        <CheckSubmissionForm onFormSubmit={onFormSubmitListener}></CheckSubmissionForm>
      </Provider>
    );
  }

  it('should not disable "Search" button when search result is not loading', () => {
    wrapper = renderCheckSubmissionForm(initialState);

    expect(wrapper.find(SubmitButton).props().disabled).toBe(false);
  });

  it('should disable "Search" button correctly when search result is loading', () => {
    wrapper = renderCheckSubmissionForm({ ...initialState, isLoading: true });

    expect(wrapper.find(SubmitButton).props().disabled).toBe(true);
  });

  it('should have on click handler for "Cancel" button', () => {
    wrapper = renderCheckSubmissionForm(initialState);

    const clickHandler = wrapper.find(SimpleButton).at(0).props().onClick;
    if (clickHandler) {
      clickHandler({} as any);
    } else {
      fail('On Click handler was found to be undefined');
    }
  });
});
