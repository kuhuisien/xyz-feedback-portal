import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Form } from 'antd';
import SimpleButton from 'lib/components/buttons/SimpleButton/SimpleButton';
import SubmitButton from 'lib/components/buttons/SubmitButton/SubmitButton';
import TextField from 'lib/components/formInputs/TextField/TextField';
import {
  ButtonContainer,
  FooterButtonContainer,
  FormContainer
} from './CheckSubmissionForm.styles';
import { formFieldNames } from './formFieldNames';
import { useAppDispatch, useAppSelector } from 'lib/redux/hooks';
import { ICheckSubmissionFormProps } from './CheckSubmissionForm.types';
import { checkSubmissionLoading } from '../store/selector';
import { checkSubmission } from '../store/checkSubmissionSlice';

const CheckSubmissionForm = ({ onFormSubmit }: ICheckSubmissionFormProps) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const isLoadingSearchResult = useAppSelector(checkSubmissionLoading);

  const [checkSubmissionForm] = Form.useForm();

  const onCancelButtonClick = () => {
    navigate(-1);
  };

  const onSubmitButtonClick = (values: any) => {
    dispatch(checkSubmission(values[formFieldNames.contactNumber], values[formFieldNames.email]));
    onFormSubmit();
  };

  return (
    <FormContainer>
      <Form form={checkSubmissionForm} onFinish={onSubmitButtonClick}>
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

        {/* footer */}
        <FooterButtonContainer>
          <ButtonContainer>
            <SimpleButton onClick={onCancelButtonClick}>Cancel</SimpleButton>
          </ButtonContainer>
          <ButtonContainer>
            <SubmitButton disabled={isLoadingSearchResult}>Search</SubmitButton>
          </ButtonContainer>
        </FooterButtonContainer>
      </Form>
    </FormContainer>
  );
};

export default CheckSubmissionForm;
