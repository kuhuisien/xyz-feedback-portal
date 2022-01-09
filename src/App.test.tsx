import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import App from './App';
import RootLayout from 'lib/components/layout/RootLayout/RootLayout';

describe('App', () => {
  let wrapper: ShallowWrapper;

  function renderApp() {
    return shallow(<App />);
  }

  beforeEach(() => {
    wrapper = renderApp();
  });

  // ====================
  // RootLayout
  // ====================
  it('should render RootLayout correctly', () => {
    expect(wrapper.find(RootLayout).length).toBe(1);
  });
});
