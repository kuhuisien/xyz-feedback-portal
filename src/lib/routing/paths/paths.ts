import { AppPaths } from './paths.type';

const SUBMIT_FEEDBACK_PATH = '/submitFeedback';
const CHECK_SUBMISSION_PATH = '/checkSubmission';

/**
 * === APP PATHS ===
 *
 * Top level application routes leading to specific modules.
 * e.g. Home page, Task module ...
 */
export const PATHS: AppPaths = {
  ROOT: {
    path: '/',
    displayTitle: 'Home'
  },

  SUBMIT_FEEDBACK: {
    path: SUBMIT_FEEDBACK_PATH,
    displayTitle: 'Submit Feedback'
  },

  CHECK_SUBMISSION: {
    path: CHECK_SUBMISSION_PATH,
    displayTitle: 'Check Submission'
  }
};
