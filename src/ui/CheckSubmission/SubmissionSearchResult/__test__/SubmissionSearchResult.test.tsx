import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Table from 'antd/lib/table';
import { MOCK_CHECK_SUBMISSION_RESPONSE } from 'api/checkSubmission/__test__/checkSubmission.mock';
import { initialState } from 'ui/CheckSubmission/store/initialState';
import { ICheckSubmissionState } from 'ui/CheckSubmission/store/checkSubmission.types';
import SubmissionSearchResult from '../SubmissionSearchResult';
import { SearchError } from '../SubmissionSearchResult.styles';

describe('SubmissionSearchResult', () => {
  let wrapper: ReactWrapper;
  const mockStore = configureStore();
  let store;

  function renderSubmissionSearchResult(state: ICheckSubmissionState) {
    store = mockStore({ checkSubmission: { ...state } });

    return mount(
      <Provider store={store}>
        <SubmissionSearchResult />
      </Provider>
    );
  }

  it('should display table with loading state when search result is loading', () => {
    wrapper = renderSubmissionSearchResult({ ...initialState, isLoading: true });

    expect(wrapper.find(Table).props().loading).toBe(true);

    expect(wrapper.find(Table).props().dataSource?.length).toBe(0);
  });

  it('should display table with data when search result has been loading', () => {
    wrapper = renderSubmissionSearchResult({
      ...initialState,
      isLoading: false,
      data: MOCK_CHECK_SUBMISSION_RESPONSE
    });

    expect(wrapper.find(Table).props().loading).toBe(false);

    expect(wrapper.find(Table).props().dataSource).toBe(MOCK_CHECK_SUBMISSION_RESPONSE);
  });

  it('should not display error message when it is falsy', () => {
    expect(wrapper.find(SearchError).length).toBe(0);
  });

  it('should display error message when it is existing', () => {
    const MOCK_ERR_MSG = 'search error occured';
    wrapper = renderSubmissionSearchResult({ ...initialState, errorMsg: MOCK_ERR_MSG });

    expect(wrapper.find(SearchError).text()).toBe(MOCK_ERR_MSG);
  });
});
