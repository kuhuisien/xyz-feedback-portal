import axios, { AxiosError } from 'axios';
import { FEEDBACK_URL } from 'api/resources/configs/URL';
import { parseResponse } from 'api/resources/handlers/parseResponse/parseResponse';
import { formatSubmitFeedbackErrorMessage } from 'api/resources/messages/errorMessage';
import { ISubmitFeedBackPayload } from './submitFeedback.toApi.types';
import { parseError } from 'api/resources/handlers/parseError/parseError';

/**
 * Submit Feedback
 *
 * @param submitFeedbackRequest request body for submitting feedback
 */
const submitFeedback = async (submitFeedbackRequest: ISubmitFeedBackPayload) => {
  try {
    const response = await axios.post(FEEDBACK_URL, submitFeedbackRequest);
    parseResponse(response, FEEDBACK_URL);
  } catch (error) {
    const defaultMsg = formatSubmitFeedbackErrorMessage(FEEDBACK_URL);
    const errorMsg = parseError(error, defaultMsg);
    console.error(errorMsg);
    throw new Error(errorMsg);
  }
};

export { submitFeedback };
