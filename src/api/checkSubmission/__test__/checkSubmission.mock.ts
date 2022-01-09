import { ICheckSubmissionPayload } from '../checkSubmission.fromApi.types';

/**
 * A mock of the response payload returned by checkSubmission API
 */

const MOCK_CHECK_SUBMISSION_RESPONSE: ICheckSubmissionPayload = [
  {
    id: 14,
    name: 'tdd',
    email: 'test@gmail.com',
    contactNumber: '90331111',
    agencyName: 'post',
    feedback: 'testing',
    createdAt: '2022-01-04T14:02:02',
    updatedAt: '2022-01-04T14:02:20',
    processingResult: 'Rejected'
  },
  {
    id: 4,
    name: 'tdd',
    email: 'test@gmail.com',
    contactNumber: '90331111',
    agencyName: 'post',
    feedback: 'a feedback',
    createdAt: '2022-01-04T13:48:37',
    updatedAt: '2022-01-04T13:48:51',
    processingResult: 'Rejected'
  }
];

export { MOCK_CHECK_SUBMISSION_RESPONSE };
