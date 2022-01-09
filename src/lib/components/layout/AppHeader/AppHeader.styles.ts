import styled from 'styled-components';
import { Avatar } from 'antd/lib';
import { Header } from 'antd/lib/layout/layout';

const HeaderContainer = styled(Header)`
  display: flex;
  align-items: center;
  height: 50px;
  background: #ffffff;
  border-bottom: 1px solid #bfc9ca;
  padding: 1.7rem 0.5rem;
`;

const AvatarContainer = styled(Avatar)`
  margin: 0 1rem;
`;

export { HeaderContainer, AvatarContainer };
