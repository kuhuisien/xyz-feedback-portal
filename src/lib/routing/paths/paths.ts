import { AppPaths } from './paths.type';

const ADD_SUBMISSION_PATH = '/addSubmission';
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

  ADD_SUBMISSION: {
    path: ADD_SUBMISSION_PATH,
    displayTitle: 'Add Submission'
  },

  CHECK_SUBMISSION: {
    path: CHECK_SUBMISSION_PATH,
    displayTitle: 'Check Submission'
  }
};
