import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import AppTitle from '../AppTitle';
import { PageTitleText } from '../AppTitle.styles';

describe('AppTitle', () => {
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
    // useLocation is mocked in this unit test to return root path
    expect(wrapper.find(PageTitleText).text()).toBe('Home');
  });
});
