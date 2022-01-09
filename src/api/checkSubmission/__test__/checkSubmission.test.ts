import axios from 'axios';
import * as ERR_MSG from 'api/resources/messages/errorMessage';
import { checkFeedback } from '../checkSubmission';
import { MOCK_CHECK_SUBMISSION_RESPONSE } from './checkSubmission.mock';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('external API call checkSubmission', () => {
  let consoleSpy: jest.SpyInstance;
  const MOCK_CONTACT_NUMBER = '90123456';
  const MOCK_EMAIL = 'test@gmail.com';
  const MOCK_URL = 'https://xyz-feedback-app-1.herokuapp.com/xyz/api/feedbacks';

  beforeEach(() => {
    mockedAxios.get.mockReset();
    consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  it('should invoke API when called', async () => {
    mockedAxios.get.mockResolvedValue({
      data: MOCK_CHECK_SUBMISSION_RESPONSE
    });

    const resolvedValue = await checkFeedback(MOCK_CONTACT_NUMBER, MOCK_EMAIL);
    expect(mockedAxios.get).toHaveBeenCalledTimes(1);
    expect(resolvedValue).toEqual(MOCK_CHECK_SUBMISSION_RESPONSE);
  });

  // ==========================
  // ERRORS
  // ==========================

  it('should log error with message if request operation throws error', async () => {
    const CHECK_FEEDBACK_URL = `${MOCK_URL}?contactNumber=${MOCK_CONTACT_NUMBER}&email=${MOCK_EMAIL}`;
    const errorMessage = ERR_MSG.formatCheckSubmissionErrorMessage(CHECK_FEEDBACK_URL);

    mockedAxios.get.mockRejectedValue(new Error(errorMessage));

    await expect(checkFeedback(MOCK_CONTACT_NUMBER, MOCK_EMAIL)).rejects.toThrow(
      new Error(errorMessage)
    );

    expect(consoleSpy).toHaveBeenCalledWith(errorMessage);
    expect(mockedAxios.get).toHaveBeenCalledTimes(1);
    mockedAxios.get.mockReset();
  });
});
