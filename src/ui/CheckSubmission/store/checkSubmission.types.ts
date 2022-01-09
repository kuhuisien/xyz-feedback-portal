import { ICheckSubmissionPayload } from 'api/checkSubmission/checkSubmission.fromApi.types';

export interface ICheckSubmissionState {
  isLoading: boolean;
  errorMsg: string;
  data: ICheckSubmissionPayload;
}
