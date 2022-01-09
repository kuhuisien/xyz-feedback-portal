import React, { useMemo } from 'react';
import { PATHS } from 'lib/routing/paths/paths';
import { useLocation } from 'react-router-dom';
import { PageTitleContainer, PageTitleText } from './AppTitle.styles';

export interface PathNameToDisplayTitleMapping {
  [key: string]: string;
}

const AppTitle = () => {
  const { pathname } = useLocation();

  //memoized mapped paths with path name string as key and display title as value
  const MappedPaths: PathNameToDisplayTitleMapping = useMemo(
    () =>
      Object.values(PATHS).reduce((obj, item) => {
        return {
          ...obj,
          [item['path']]: item.displayTitle
        };
      }, {}),
    [PATHS]
  );

  const displayTitle = MappedPaths[pathname];

  return (
    <PageTitleContainer>
      <PageTitleText>{displayTitle}</PageTitleText>
    </PageTitleContainer>
  );
};

export default AppTitle;
