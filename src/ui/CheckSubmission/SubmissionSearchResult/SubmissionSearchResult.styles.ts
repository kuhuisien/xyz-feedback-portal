import styled from 'styled-components';
import Typography from 'antd/lib/typography';

const { Text } = Typography;

const SubmissionResultDisplayWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;
`;

const SubmissionResultDisplay = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
  width: 85%;
`;

const SearchResultTitle = styled(Text)`
  font-weight: 600;
`;

export { SubmissionResultDisplayWrapper, SubmissionResultDisplay, SearchResultTitle };
