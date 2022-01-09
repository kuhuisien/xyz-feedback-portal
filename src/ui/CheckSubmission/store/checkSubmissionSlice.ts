import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { checkFeedback } from 'api/checkSubmission/checkSubmission';
import { ICheckSubmissionPayload } from 'api/checkSubmission/checkSubmission.fromApi.types';
import { AppThunk } from 'lib/redux/store';
import { initialState } from './initialState';

export const checkSubmissionSlice = createSlice({
  name: 'checkSubmission',
  initialState,
  reducers: {
    checkSubmissionTriggered: (state) => {
      state.isLoading = true;
      state.data = initialState.data;
      state.errorMsg = initialState.errorMsg;
    },
    checkSubmissionSuccess: (state, action: PayloadAction<ICheckSubmissionPayload>) => {
      state.isLoading = false;
      state.data = action.payload;
    },
    checkSubmissionErrored: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.data = initialState.data;
      state.errorMsg = action.payload;
    }
  }
});

export const { checkSubmissionTriggered, checkSubmissionSuccess, checkSubmissionErrored } =
  checkSubmissionSlice.actions;

export const checkSubmission =
  (contactNumber: string, email: string): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(checkSubmissionTriggered());
      const feedbacks = await checkFeedback(contactNumber, email);
      dispatch(checkSubmissionSuccess(feedbacks));
    } catch (error) {
      if (error instanceof Error) {
        dispatch(checkSubmissionErrored(error.message));
      }
    }
  };

export default checkSubmissionSlice.reducer;
