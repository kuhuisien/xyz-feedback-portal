import styled from 'styled-components';

const ErrorFallBackContainer = styled('div')`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 5rem;
`;

const ErrorMsgTitle = styled('p')`
  font-weight: 500;
`;

const ErrorMsgDetail = styled('div')`
  width: 70%;
  text-align: center;
  margin-bottom: 1.5rem;
`;

export { ErrorFallBackContainer, ErrorMsgTitle, ErrorMsgDetail };
