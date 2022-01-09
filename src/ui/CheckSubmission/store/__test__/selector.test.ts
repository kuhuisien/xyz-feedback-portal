import { MOCK_CHECK_SUBMISSION_RESPONSE } from 'api/checkSubmission/__test__/checkSubmission.mock';
import { RootState } from 'lib/redux/store';
import { ICheckSubmissionState } from '../checkSubmission.types';
import { initialState } from '../initialState';
import { checkSubmissionData, checkSubmissionErrMsg, checkSubmissionLoading } from '../selector';

describe('Check Submission Selector', () => {
  it('should return loading status', () => {
    const MOCK_LOADING_STATE = true;

    const admissionState: ICheckSubmissionState = {
      ...initialState,
      isLoading: MOCK_LOADING_STATE
    };

    const selector = checkSubmissionLoading({
      checkSubmission: admissionState
    } as RootState);

    expect(selector).toEqual(MOCK_LOADING_STATE);
  });

  it('should return error message', () => {
    const MOCK_ERR_MSG = 'check submission error';
    const admissionState: ICheckSubmissionState = {
      ...initialState,
      errorMsg: MOCK_ERR_MSG
    };

    const selector = checkSubmissionErrMsg({
      checkSubmission: admissionState
    } as RootState);

    expect(selector).toEqual(MOCK_ERR_MSG);
  });

  it('should return data', () => {
    const admissionState: ICheckSubmissionState = {
      ...initialState,
      data: MOCK_CHECK_SUBMISSION_RESPONSE
    };

    const selector = checkSubmissionData({
      checkSubmission: admissionState
    } as RootState);

    expect(selector).toEqual(MOCK_CHECK_SUBMISSION_RESPONSE);
  });
});
