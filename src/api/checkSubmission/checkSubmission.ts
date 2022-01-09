import axios from 'axios';
import { FEEDBACK_URL } from 'api/resources/configs/URL';
import { ICheckSubmissionPayload } from './checkSubmission.fromApi.types';
import { parseResponse } from 'api/resources/handlers/parseResponse/parseResponse';
import { formatCheckSubmissionErrorMessage } from 'api/resources/messages/errorMessage';
import { parseError } from 'api/resources/handlers/parseError/parseError';

/**
 * Check feedback based on contact number and email
 *
 * @param contactNumber
 * @param email
 */
const checkFeedback = async (
  contactNumber: string,
  email: string
): Promise<ICheckSubmissionPayload> => {
  const CHECK_FEEDBACK_URL = `${FEEDBACK_URL}?contactNumber=${contactNumber}&email=${email}`;
  try {
    const response = await axios.get<ICheckSubmissionPayload>(CHECK_FEEDBACK_URL);
    return parseResponse(response, CHECK_FEEDBACK_URL);
  } catch (error) {
    const defaultMsg = formatCheckSubmissionErrorMessage(CHECK_FEEDBACK_URL);
    const errorMsg = parseError(error, defaultMsg);
    console.error(errorMsg);
    throw new Error(errorMsg);
  }
};

export { checkFeedback };
