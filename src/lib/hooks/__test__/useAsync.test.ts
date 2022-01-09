import { renderHook } from '@testing-library/react-hooks';
import { useAsync } from '../useAsync';

describe('useAsync hook', () => {
  let MOCK_EXECUTE: jest.Mock<any, any>;

  let MOCK_RESULT = 'some result';

  beforeEach(async () => {
    MOCK_EXECUTE = jest.fn().mockResolvedValue(MOCK_RESULT); // mock 'execute' function to return MOCK_RESULT
  });

  it('should return appropriate error, value and status for immediate fetch', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useAsync(MOCK_EXECUTE, true));

    const { error, value, status } = result.current;

    expect(error).toBe(null);
    expect(value).toBe(null);
    expect(status).toBe('pending');

    await waitForNextUpdate();
  });

  it('should return appropriate error, value and status after successful immediate fetch', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useAsync(MOCK_EXECUTE, true));

    await waitForNextUpdate();

    const { error, value, status } = result.current;

    expect(error).toBe(null);
    expect(value).toBe(MOCK_RESULT); // value should be set according to function returning value
    expect(status).toEqual('success');
  });

  it('should return appropriate error, value and status after errored immediate fetch', async () => {
    MOCK_EXECUTE = jest.fn().mockRejectedValue(MOCK_RESULT); // mock 'execute' function to throw MOCK_RESULT error

    const { result, waitForNextUpdate } = renderHook(() => useAsync(MOCK_EXECUTE, true));

    await waitForNextUpdate();

    const { error, value, status } = result.current;

    expect(error).toBe(MOCK_RESULT); // error should be set to MOCK_RESULT
    expect(value).toBe(null);
    expect(status).toEqual('error');
  });

  it('should return appropriate error, value and status before fetch', async () => {
    const { result } = renderHook(() => useAsync(MOCK_EXECUTE, false));

    const { error, value, status } = result.current;

    expect(error).toBe(null);
    expect(value).toBe(null);
    expect(status).toBe('idle');
  });
});
