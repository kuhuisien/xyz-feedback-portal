import React from 'react';
import { Link } from 'react-router-dom';
import { PATHS } from 'lib/routing/paths/paths';
import { AvatarContainer, HeaderContainer } from './AppHeader.styles';

const AppHeader = () => {
  return (
    <HeaderContainer>
      <AvatarContainer>XYZ</AvatarContainer>
      <Link to={PATHS.ROOT.path}>
        <div>Company XYZ Pte Ltd Feedback Portal</div>
      </Link>
    </HeaderContainer>
  );
};

export default AppHeader;
