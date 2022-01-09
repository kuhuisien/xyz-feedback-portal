import styled from 'styled-components';

const CardInfoText = styled('p')`
  font-size: 0.875rem;
  text-align: center;
  margin: 0;
  color: #636366;
`;

const CardTitle = styled('p')`
  font-weight: 600;
  font-size: 1rem;
  text-align: center;
  margin: 1rem 0 0.3rem;
`;

const CardContainer = styled('div')`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  padding: 1.5rem;
  background-color: #ffffff;
  border-radius: 1rem;
  margin-bottom: 2rem;
  width: 80%;
  max-width: 20rem;
  &:hover {
    background-color: #82e0aa;
    color: #ffffff;
    ${CardInfoText} {
      color: #ffffff;
    }
  }
`;

export { CardContainer, CardTitle, CardInfoText };
