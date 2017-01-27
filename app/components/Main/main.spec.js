import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';

import Main from './Main';
import Header from '../Header/Header';
import Random from '../Random/Random';
import Button from '../Button/Button';
import Jokes from './components/Jokes/Jokes';

describe('<Main />', function() {


  beforeEach(() => {
    wrapper = shallow(<Main children={<Jokes />}/>);
  })

  it('should render `<Jokes />` component', () => {
    expect(wrapper.find('<Jokes />')).to.have.length(1);
  });

  it('should render a `<Header />` child', () => {
    const wrapper = shallow(<Main />);
    expect(wrapper.find('<Header />')).to.be.present;
  });

});
