import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';
import MasterPage from './MasterPage';

describe('<MasterPage/>', function () {
  it('should have a div with text', function () {
    const wrapper = shallow(<MasterPage/>);
    expect(wrapper.find('div')).to.have.length(1);
  });
});
