import { useState, useEffect, useCallback } from 'react';

/**
 * A generic type for representing any API status
 *  idle: API is not called yet
 *  pending: API has been called and response is pending
 *  success: API response is returned successfully
 *  error: API encounters error to return expected response
 * Use this to indicate the status of API call on the page, e.g. showing loading spinner/ skeleton for "pending"
 */
export type ApiStatus = 'idle' | 'pending' | 'success' | 'error';

// Hook
const useAsync = <T, E = string>(
  asyncFunction: (requestBody?: any) => Promise<T>,
  immediate = true
) => {
  const [status, setStatus] = useState<ApiStatus>('idle');

  const [value, setValue] = useState<T | null>(null);

  const [error, setError] = useState<E | null>(null);

  // The execute function wraps asyncFunction and
  // handles setting state for pending, value, and error.
  // useCallback ensures the below useEffect is not called
  // on every render, but only if asyncFunction changes.
  const execute = useCallback(
    (requestBody?) => {
      setStatus('pending');
      setValue(null);
      setError(null);

      return asyncFunction(requestBody)
        .then((response) => {
          setValue(response);
          setStatus('success');
        })
        .catch((error) => {
          setError(error);
          setStatus('error');
        });
    },
    [asyncFunction]
  );

  // Call execute if we want to fire it right away.
  // Otherwise execute can be called later, such as
  // in an onClick handler.
  useEffect(() => {
    if (immediate) {
      execute();
    }
  }, [execute, immediate]);

  return { execute, status, value, error };
};

export { useAsync };
