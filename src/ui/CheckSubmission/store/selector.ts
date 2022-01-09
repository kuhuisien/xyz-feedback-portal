import { RootState } from 'lib/redux/store';

export const checkSubmissionLoading = (state: RootState) => state.checkSubmission.isLoading;

export const checkSubmissionErrMsg = (state: RootState) => state.checkSubmission.errorMsg;

export const checkSubmissionData = (state: RootState) => state.checkSubmission.data;
