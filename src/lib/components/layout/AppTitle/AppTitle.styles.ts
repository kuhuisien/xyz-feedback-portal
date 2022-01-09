import styled from 'styled-components';
import Typography from 'antd/lib/typography';

const { Text } = Typography;

export const PageTitleContainer = styled('div')`
  background: white;
  text-align: left;
  padding: 1rem 1.5rem;
`;

export const PageTitleText = styled(Text)`
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight: 500;
  padding: 1rem 0;
`;
