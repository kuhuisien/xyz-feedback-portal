import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ROUTES } from './lib/routing/GlobalRoutes/GlobalRoutes';
import RootLayout from 'lib/components/layout/RootLayout/RootLayout';

const App = () => {
  return (
    <RootLayout>
      <Routes>
        {ROUTES.map(({ path, component }) => (
          <Route key={path} path={path} element={component} />
        ))}
      </Routes>
    </RootLayout>
  );
};

export default App;
