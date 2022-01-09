import * as CheckSubmissionApiModule from 'api/checkSubmission/checkSubmission';
import { MOCK_CHECK_SUBMISSION_RESPONSE } from 'api/checkSubmission/__test__/checkSubmission.mock';
import {
  checkSubmission,
  checkSubmissionErrored,
  checkSubmissionSuccess,
  checkSubmissionTriggered
} from '../checkSubmissionSlice';

describe('Thunk for checkSubmission', () => {
  let checkSubmissionSpy: jest.SpyInstance;
  let dispatchListener: jest.Mock<any, any>;
  const MOCK_CONTACT_NUMBER = '90123456';
  const MOCK_EMAIL = 'test@hotmail.com';

  beforeEach(() => {
    checkSubmissionSpy = jest
      .spyOn(CheckSubmissionApiModule, 'checkFeedback')
      .mockResolvedValue(MOCK_CHECK_SUBMISSION_RESPONSE);
    dispatchListener = jest.fn();
  });

  afterEach(() => {
    checkSubmissionSpy.mockRestore();
  });

  it('should invoke dispatch in correct sequence & with correct args, when check submission returning expected response', async () => {
    // invoke the thunk
    await checkSubmission(MOCK_CONTACT_NUMBER, MOCK_EMAIL)(dispatchListener, {} as any, null);

    expect(dispatchListener).toHaveBeenCalledTimes(2);

    // check that the right sequence of calls was executed, with the right arguments
    expect(dispatchListener.mock.calls[0][0]).toEqual(checkSubmissionTriggered());
    expect(dispatchListener.mock.calls[1][0]).toEqual(
      checkSubmissionSuccess(MOCK_CHECK_SUBMISSION_RESPONSE)
    );
  });

  it('should invoke dispatch in correct sequence & with correct args, when checkSubmission throwing error', async () => {
    const MOCK_ERROR = 'check submission thunk error';
    // force API call to fail
    checkSubmissionSpy = jest
      .spyOn(CheckSubmissionApiModule, 'checkFeedback')
      .mockRejectedValue(new Error(MOCK_ERROR));

    // invoke the thunk
    await checkSubmission(MOCK_CONTACT_NUMBER, MOCK_EMAIL)(dispatchListener, {} as any, null);

    expect(dispatchListener).toHaveBeenCalledTimes(2);

    // check that the right sequence of calls was executed, with the right arguments
    expect(dispatchListener.mock.calls[0][0]).toEqual(checkSubmissionTriggered());
    expect(dispatchListener.mock.calls[1][0]).toEqual(checkSubmissionErrored(MOCK_ERROR));
  });
});
