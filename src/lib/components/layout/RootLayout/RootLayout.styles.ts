import { Layout } from 'antd';
import { Content } from 'antd/lib/layout/layout';
import styled from 'styled-components';

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
