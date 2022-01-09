// ==========================
// Error message formatters
//
// Formats frontend error messages from all API calls.
// ==========================

// ==================
// COMMON
// ==================
export const formatPayloadUndefinedErrorMessage = (URL: string) => {
  return `Response payload from "${URL}" was found to be undefined`;
};

export const formatPayloadNullErrorMessage = (URL: string) => {
  return `Response payload from "${URL}" was found to be null`;
};

// ==================
// Check Submission
// ==================
export const formatCheckSubmissionErrorMessage = (URL: string) => {
  return `An error occurred while checking feedback submission from "${URL}"`;
};

// ==================
// Submit Feedback
// ==================
export const formatSubmitFeedbackErrorMessage = (URL: string) => {
  return `An error occurred while submitting feedback from "${URL}"`;
};
