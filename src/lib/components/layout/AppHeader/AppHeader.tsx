import React from 'react';
import { PATHS } from 'lib/routing/paths/paths';
import { Link } from 'react-router-dom';
import { AvatarContainer, HeaderContainer } from './AppHeader.styles';

const AppHeader = () => {
  return (
    <HeaderContainer>
      <AvatarContainer>XYZ</AvatarContainer>
      <Link to={PATHS.ROOT.path}>
        <div>Feedback Portal for XYZ</div>
      </Link>
    </HeaderContainer>
  );
};

export default AppHeader;
