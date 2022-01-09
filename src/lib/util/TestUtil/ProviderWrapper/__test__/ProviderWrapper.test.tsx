import React from 'react';
import { shallow } from 'enzyme';
import { FormProviderWrapper } from '../ProviderWrapper';

describe('Provider Wrapper', () => {
  it('should render', () => {
    const wrapper = shallow(
      <FormProviderWrapper>
        <div>Some Text</div>
      </FormProviderWrapper>
    );
    expect(wrapper.find('div').text()).toEqual('Some Text');
  });
});
