export interface IErrorFallbackProps {
  // error thrown during runtime
  error: Error;

  // reset error action
  resetErrorBoundary: () => void;
}
