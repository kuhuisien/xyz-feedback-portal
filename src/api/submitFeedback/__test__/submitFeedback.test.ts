import axios from 'axios';
import * as ERR_MSG from 'api/resources/messages/errorMessage';
import { submitFeedback } from '../submitFeedback';
import { ISubmitFeedBackPayload } from '../submitFeedback.toApi.types';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('external API call submitFeedback', () => {
  let consoleSpy: jest.SpyInstance;

  const MOCK_REQUEST_PAYLOAD: ISubmitFeedBackPayload = {
    name: 'dummyName',
    contactNumber: 'dummyContactNumber',
    email: 'dummyEmail',
    agencyName: 'dummyAgencyName',
    feedback: 'dummyFeedback'
  };

  const MOCK_URL = 'https://xyz-feedback-app-1.herokuapp.com/xyz/api/feedbacks';

  beforeEach(() => {
    mockedAxios.get.mockReset();
    consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  it('should invoke API when called', async () => {
    mockedAxios.post.mockResolvedValue({
      data: {}
    });

    await submitFeedback(MOCK_REQUEST_PAYLOAD);
    expect(mockedAxios.post).toHaveBeenCalledTimes(1);
  });

  // ==========================
  // ERRORS
  // ==========================

  it('should log error with message if request operation throws error', async () => {
    const errorMessage = ERR_MSG.formatSubmitFeedbackErrorMessage(MOCK_URL);

    mockedAxios.post.mockRejectedValue('test');

    await expect(submitFeedback(MOCK_REQUEST_PAYLOAD)).rejects.toThrow(new Error(errorMessage));
    expect(consoleSpy).toHaveBeenCalledWith(errorMessage);
    expect(mockedAxios.post).toHaveBeenCalledTimes(1);
    mockedAxios.get.mockReset();
  });
});
