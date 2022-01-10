import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import ActionCard from '../ActionCard';
import { IActionCardProps } from '../ActionCard.types';
import { CardInfoText, CardTitle } from '../ActionCard.styles';

describe('ActionCard', () => {
  let wrapper: ReactWrapper;

  let onClickListener: jest.Mock<any, any>;
  let defaultProps: IActionCardProps;

  function renderActionCard(args: any) {
    onClickListener = jest.fn();

    defaultProps = {
      title: 'dummyTitle',
      info: 'dummyInfo',
      onClick: onClickListener
    };
    const props = { ...defaultProps, ...args };

    return mount(<ActionCard {...props} />);
  }

  beforeEach(() => {
    wrapper = renderActionCard(null);
  });

  // =============
  // MAPPING PROPS
  // =============
  it('should render title props correctly', () => {
    expect(wrapper.find(CardTitle).text()).toBe(defaultProps.title);
  });

  it('should render info props correctly', () => {
    expect(wrapper.find(CardInfoText).text()).toBe(defaultProps.info);
  });

  // ====================
  // EVENT HANDLER
  // ====================
  it('should invoke onClick handler', () => {
    wrapper.find(ActionCard).simulate('click');

    expect(onClickListener).toBeCalled();
  });
});
