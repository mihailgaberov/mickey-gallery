/**
 * Created by mgab on 28/03/2017.
 */
import React from 'react';
import expect from 'expect';
import { Link } from  'react-router';
import { shallow } from 'enzyme';
import HomePage from '../src/components/HomePage';

describe('Test for HomePage component', () => {
  it('should render the HomePage component', () => {
    const wrapper = shallow(<HomePage />);
    expect(wrapper.length).toEqual(true);
    expect(wrapper.is('.jumbotron')).toEqual(true);
    expect(wrapper.find('.lead').length).toEqual(1);
    expect(wrapper.find('.btn').length).toEqual(1);
    expect(wrapper.find(Link).length).toEqual(1);
    expect(wrapper.find(Link).props().to).toEqual('library');
  });
});