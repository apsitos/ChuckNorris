import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import Jokes from './Jokes';

describe('<Jokes />', function() {
  it('should renders a `.cards` component', function() {
    const wrapper = mount(<Jokes />);
    expect(wrapper.find('.cards').to.have.length(1));
  });

});
