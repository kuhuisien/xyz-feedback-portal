import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Form from 'antd/lib/form';
import { PATHS } from 'lib/routing/paths/paths';
import { useErrorHandler } from 'react-error-boundary';
import SimpleButton from 'lib/components/buttons/SimpleButton/SimpleButton';
import SubmitButton from 'lib/components/buttons/SubmitButton/SubmitButton';
import Textarea from 'lib/components/formInputs/TextArea/Textarea';
import TextField from 'lib/components/formInputs/TextField/TextField';
import { ButtonContainer, FooterButtonContainer, FormContainer } from './SubmitFeedback.styles';
import { formFieldNames } from './formFieldNames';
import { useAsync } from 'lib/hooks/useAsync';
import { submitFeedback } from 'api/submitFeedback/submitFeedback';
import { ISubmitFeedBackPayload } from 'api/submitFeedback/submitFeedback.toApi.types';

const SubmitFeedback = () => {
  const navigate = useNavigate();

  const handleError = useErrorHandler();

  const { execute, status, error } = useAsync(submitFeedback, false);

  const [feedbackSubmissionForm] = Form.useForm();

  // event trigered when 'Cancel' button is clicked
  const onCancelButtonClick = () => {
    navigate(-1);
  };

  // event triggered when 'Submit' button is clicked and inputs are verified
  const onSubmitButtonClick = async (values: any) => {
    await execute({
      name: values[formFieldNames.name],
      email: values[formFieldNames.email],
      contactNumber: values[formFieldNames.contactNumber],
      agencyName: values[formFieldNames.agencyName],
      feedback: values[formFieldNames.feedback]
    } as ISubmitFeedBackPayload);
  };

  useEffect(() => {
    // redirect to homepage if submission is successful
    if (status === 'success') {
      navigate(PATHS.ROOT.path);
    }
    // error handling for failed submission
    else if (status === 'error' && error) {
      handleError(new Error(error));
    }
  }, [status, error]);

  const disableSubmitButton = status === 'pending';

  const submitButtonText = status !== 'pending' ? 'Submit' : 'Submitting';

  return (
    <FormContainer>
      <Form form={feedbackSubmissionForm} onFinish={onSubmitButtonClick}>
        <TextField name={formFieldNames.name} placeholder="Enter name" required></TextField>

        <TextField
          name={formFieldNames.email}
          placeholder="Enter email"
          required
          type="email"></TextField>

        <TextField
          name={formFieldNames.contactNumber}
          placeholder="Enter contact number"
          required
          pattern="(6|8|9)\d{7}"></TextField>

        <TextField
          name={formFieldNames.agencyName}
          placeholder="Enter agency name"
          required></TextField>

        <Textarea
          name={formFieldNames.feedback}
          rows={3}
          placeholder="Enter feedback"
          required></Textarea>

        {/* footer */}
        <FooterButtonContainer>
          <ButtonContainer>
            <SimpleButton onClick={onCancelButtonClick}>Cancel</SimpleButton>
          </ButtonContainer>
          <ButtonContainer>
            <SubmitButton disabled={disableSubmitButton}>{submitButtonText}</SubmitButton>
          </ButtonContainer>
        </FooterButtonContainer>
      </Form>
    </FormContainer>
  );
};

export default SubmitFeedback;
