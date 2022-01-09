import { AxiosError } from 'axios';
import { IErrorResponse } from './ErrorResponse.types';

/**
 * Parse the error response object and returns its error string
 *
 * @param {unknown} error
 *   The Error being thrown when triggering API call
 * @param {string} defaultErrorMsg
 *   default frontend well-formatted error message for the calling API
 *
 * @returns {string}
 *   error message to be displayed or handled
 */
const parseError = (error: unknown, defaultErrorMsg: string): string => {
  try {
    const errorResponse = (error as AxiosError)?.response;
    const errorData = errorResponse?.data as IErrorResponse;
    // if parsing failed, return default frontend well-formatted error message
    if (!errorData) {
      return defaultErrorMsg;
    }
    // return detail of error of it is provided by backend
    else if (errorData.detail) {
      return errorData.detail;
    }
    // return message if it is provided by backend
    else if (errorData.message) {
      return errorData.message;
    }
    // return frontend well-formatted error message if backend error detail and message are both not existing
    else {
      return defaultErrorMsg;
    }
  } catch (error) {
    return defaultErrorMsg;
  }
};

export { parseError };
