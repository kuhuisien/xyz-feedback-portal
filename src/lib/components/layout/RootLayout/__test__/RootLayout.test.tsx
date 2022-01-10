import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import RootLayout from '../RootLayout';

describe('RootLayout', () => {
  let wrapper: ReactWrapper;
  let MOCK_CLASSNAME = 'testDiv';
  let MOCK_CHILD = <div className={MOCK_CLASSNAME}>test</div>;

  function renderRootLayout() {
    return mount(
      <BrowserRouter>
        <RootLayout>{MOCK_CHILD}</RootLayout>
      </BrowserRouter>
    );
  }

  beforeEach(() => {
    wrapper = renderRootLayout();
  });

  // ====================
  // MAPPING CHILD PROPS
  // ====================
  it('should render child props correctly', () => {
    expect(wrapper.find(`.${MOCK_CLASSNAME}`).length).toBe(1);
  });

  // ====================
  // ErrorBoundary
  // ====================
  it('should render ErrorBoundary correctly', () => {
    expect(wrapper.find(ErrorBoundary).length).toBe(1);
  });
});
