import { Typography } from 'antd';
import styled from 'styled-components';

const { Text } = Typography;

const FormContainer = styled('div')`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  margin-top: 4rem;
`;

const FooterButtonContainer = styled('div')`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  padding-top: 1rem;
`;

const ButtonContainer = styled('div')`
  margin-left: 1rem;
`;

export { FormContainer, FooterButtonContainer, ButtonContainer };
