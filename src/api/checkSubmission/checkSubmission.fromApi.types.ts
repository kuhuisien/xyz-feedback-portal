export type ICheckSubmissionPayload = IFeedback[];

export interface IFeedback {
  id: number;

  name: string | null;

  email: string | null;

  contactNumber: string | null;

  agencyName: string | null;

  feedback: string | null;

  createdAt: string | null;

  updatedAt: string | null;

  processingResult: string | null;
}
