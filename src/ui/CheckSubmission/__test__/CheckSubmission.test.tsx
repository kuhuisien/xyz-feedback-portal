import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import CheckSubmission from '../CheckSubmission';
import CheckSubmissionForm from '../CheckSubmissionForm/CheckSubmissionForm';
import SubmissionSearchResult from '../SubmissionSearchResult/SubmissionSearchResult';

describe('CheckSubmission', () => {
  let wrapper: ShallowWrapper;

  function renderAppHeader() {
    return shallow(<CheckSubmission />);
  }

  beforeEach(() => {
    wrapper = renderAppHeader();
  });

  // ====================
  // CheckSubmissionForm
  // ====================
  it('should render CheckSubmissionForm correctly', () => {
    expect(wrapper.find(CheckSubmissionForm).length).toBe(1);
  });

  // ====================
  // SubmissionSearchResult
  // ====================
  it('should not render SubmissionSearchResult on load', () => {
    expect(wrapper.find(SubmissionSearchResult).length).toBe(0);
  });

  it('should render SubmissionSearchResult after check submission form is submitted', () => {
    wrapper.find(CheckSubmissionForm).props().onFormSubmit();

    expect(wrapper.find(SubmissionSearchResult).length).toBe(1);
  });
});
