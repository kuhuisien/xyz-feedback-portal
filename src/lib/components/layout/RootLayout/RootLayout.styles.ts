import styled from 'styled-components';
import Layout, { Content } from 'antd/lib/layout/layout';

const AppLayout = styled(Layout)`
  height: 100vh;
  overflow: scroll;
  position: relative;
`;

const AppContent = styled(Content)`
  height: 100vh;
  overflow: scroll;
  position: relative;
`;

export { AppLayout, AppContent };
