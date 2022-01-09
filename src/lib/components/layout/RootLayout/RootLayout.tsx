import React from 'react';
import { Layout } from 'antd';
import { IRootLayoutProps } from './RootLayout.types';
import AppHeader from '../AppHeader/AppHeader';
import AppTitle from '../AppTitle/AppTitle';
import { Content } from 'antd/lib/layout/layout';
import { AppLayout } from './RootLayout.styles';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from '../ErrorFallBack/ErrorFallBack';

const RootLayout = ({ children }: IRootLayoutProps) => {
  return (
    <AppLayout>
      <AppHeader />

      <Content>
        <AppTitle />

        <ErrorBoundary FallbackComponent={ErrorFallback}>{children}</ErrorBoundary>
      </Content>
    </AppLayout>
  );
};

export default RootLayout;
