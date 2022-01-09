import { IErrorResponse } from '../ErrorResponse.types';
import { parseError } from '../parseError';

describe('Parse Error', () => {
  const MOCK_DEFAULT_ERROR_MSG = 'An error occurred during submission';
  let consoleSpy: jest.SpyInstance;

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    consoleSpy.mockRestore();
  });

  it('should parse error', () => {
    const mockAxiosErrorResponseDataPayload = {
      message: 'Validation failed: email format is invalid'
    };
    const axiosError = {
      response: { data: mockAxiosErrorResponseDataPayload }
    };

    expect(parseError(axiosError, MOCK_DEFAULT_ERROR_MSG)).toEqual(
      mockAxiosErrorResponseDataPayload.message
    );
  });

  it('should parse error and return detail field if detail field is truety', () => {
    const mockAxiosErrorResponseDataPayload: IErrorResponse = {
      message: 'Validation failed',
      detail: 'Validation failed: email format is invalid',
      timestamp: 1641642207641
    };
    const axiosError = {
      response: { data: mockAxiosErrorResponseDataPayload }
    };

    expect(parseError(axiosError, MOCK_DEFAULT_ERROR_MSG)).toEqual(
      mockAxiosErrorResponseDataPayload.detail
    );
  });

  it('should parse error and return message field if detail field is falsy while message field is truety', () => {
    const mockAxiosErrorResponseDataPayload: IErrorResponse = {
      message: 'Validation failed',
      detail: '',
      timestamp: 1641642207641
    };
    const axiosError = {
      response: { data: mockAxiosErrorResponseDataPayload }
    };

    expect(parseError(axiosError, MOCK_DEFAULT_ERROR_MSG)).toEqual(
      mockAxiosErrorResponseDataPayload.message
    );
  });

  it('should parse error and return message field if detail field is falsy while message field is truety', () => {
    const mockAxiosErrorResponseDataPayload: IErrorResponse = {
      message: 'Validation failed',
      detail: null as any,
      timestamp: 1641642207641
    };
    const axiosError = {
      response: { data: mockAxiosErrorResponseDataPayload }
    };

    expect(parseError(axiosError, MOCK_DEFAULT_ERROR_MSG)).toEqual(
      mockAxiosErrorResponseDataPayload.message
    );
  });

  it('should parse error and return message field if detail field is falsy while message field is truety', () => {
    const mockAxiosErrorResponseDataPayload: IErrorResponse = {
      message: 'Validation failed',
      detail: undefined as any,
      timestamp: 1641642207641
    };
    const axiosError = {
      response: { data: mockAxiosErrorResponseDataPayload }
    };

    expect(parseError(axiosError, MOCK_DEFAULT_ERROR_MSG)).toEqual(
      mockAxiosErrorResponseDataPayload.message
    );
  });

  it('should parse error and return default error message if detail and message fields are falsy', () => {
    const mockAxiosErrorResponseDataPayload: IErrorResponse = {
      message: null as any,
      detail: undefined as any,
      timestamp: 1641642207641
    };
    const axiosError = {
      response: { data: mockAxiosErrorResponseDataPayload }
    };

    expect(parseError(axiosError, MOCK_DEFAULT_ERROR_MSG)).toEqual(MOCK_DEFAULT_ERROR_MSG);
  });

  it('should return default error message if detail and message fields are falsy', () => {
    const mockAxiosErrorResponseDataPayload = {};
    const axiosError = {
      response: { data: mockAxiosErrorResponseDataPayload }
    };

    expect(parseError(axiosError, MOCK_DEFAULT_ERROR_MSG)).toEqual(MOCK_DEFAULT_ERROR_MSG);
  });

  it('should return default error message if detail and message fields are falsy', () => {
    const axiosError = {
      response: {}
    };

    expect(parseError(axiosError, MOCK_DEFAULT_ERROR_MSG)).toEqual(MOCK_DEFAULT_ERROR_MSG);
  });

  it('should return default error message if detail and message fields are falsy', () => {
    const axiosError = {};

    expect(parseError(axiosError, MOCK_DEFAULT_ERROR_MSG)).toEqual(MOCK_DEFAULT_ERROR_MSG);
  });
});
