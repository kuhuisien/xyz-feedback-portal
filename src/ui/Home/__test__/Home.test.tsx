import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import Home from '../Home';
import ActionCard from '../ActionCard/ActionCard';

describe('Home', () => {
  let wrapper: ReactWrapper;

  function renderHome() {
    return mount(<Home />);
  }

  beforeEach(() => {
    wrapper = renderHome();
  });

  // =============
  // ACTION CARD
  // =============
  it('should render ActionCard component correctly', () => {
    expect(wrapper.find(ActionCard).length).toBe(2);
  });

  it('should not trigger error for Action Card clicking', () => {
    const actionCardNum = wrapper.find(ActionCard).length;

    for (let i = 0; i < actionCardNum; i++) {
      const onClick = wrapper.find(ActionCard).at(i).props().onClick;

      onClick();
    }
  });
});
