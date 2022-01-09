import { ICheckSubmissionState } from './checkSubmission.types';

export const initialState: ICheckSubmissionState = {
  isLoading: false,
  errorMsg: '',
  data: []
};
