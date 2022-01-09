import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import AppHeader from '../AppHeader';
import { Link } from 'react-router-dom';

describe('AppHeader', () => {
  let wrapper: ShallowWrapper;

  function renderAppHeader() {
    return shallow(<AppHeader />);
  }

  beforeEach(() => {
    wrapper = renderAppHeader();
  });

  // ====================
  // Link
  // ====================
  it('should render correctly', () => {
    expect(wrapper.find(Link).length).toBe(1);
  });
});
