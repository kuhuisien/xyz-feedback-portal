import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import AppTitle from '../AppTitle';
import { PageTitleText } from '../AppTitle.styles';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    pathname: 'localhost:3000/example/path'
  })
}));

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
    // useLocation is mocked in this unit test to return unknown path
    // component should still render without error
    expect(wrapper.find(PageTitleText).text()).toBe('');
  });
});
