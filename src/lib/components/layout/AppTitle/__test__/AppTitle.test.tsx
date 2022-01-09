import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import AppTitle from '../AppTitle';
import { BrowserRouter } from 'react-router-dom';
import { PageTitleText } from '../AppTitle.styles';

describe('AppHeader', () => {
  let wrapper: ReactWrapper;

  function renderAppTitle() {
    return mount(
      <BrowserRouter>
        <AppTitle />
      </BrowserRouter>
    );
  }

  beforeEach(() => {
    wrapper = renderAppTitle();
  });

  // ====================
  // Link
  // ====================
  it('should render title text correctly', () => {
    expect(wrapper.find(PageTitleText).text()).toBe('Home');
  });
});
