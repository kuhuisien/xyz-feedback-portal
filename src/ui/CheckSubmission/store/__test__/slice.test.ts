import { MOCK_CHECK_SUBMISSION_RESPONSE } from 'api/checkSubmission/__test__/checkSubmission.mock';
import counterReducer, {
  checkSubmissionTriggered,
  checkSubmissionSuccess,
  checkSubmissionErrored
} from '../checkSubmissionSlice';
import { initialState } from '../initialState';

describe('check submission reducer', () => {
  it('should handle initial state', () => {
    expect(counterReducer(undefined, { type: 'unknown' })).toEqual({
      isLoading: false,
      data: [],
      errorMsg: ''
    });
  });

  it('should handle checkSubmissionTriggered', () => {
    const actual = counterReducer(initialState, checkSubmissionTriggered());

    expect(actual.isLoading).toEqual(true);
    expect(actual.data).toEqual([]);
  });

  it('should handle checkSubmissionSuccess', () => {
    const actual = counterReducer(
      initialState,
      checkSubmissionSuccess(MOCK_CHECK_SUBMISSION_RESPONSE)
    );

    expect(actual.isLoading).toEqual(false);
    expect(actual.data).toEqual(MOCK_CHECK_SUBMISSION_RESPONSE);
  });

  it('should handle checkSubmissionErrored', () => {
    const MOCK_ERR_MSG = 'check submission errored';
    const actual = counterReducer(initialState, checkSubmissionErrored(MOCK_ERR_MSG));

    expect(actual.isLoading).toEqual(false);
    expect(actual.data).toEqual([]);
    expect(actual.errorMsg).toEqual(MOCK_ERR_MSG);
  });
});
