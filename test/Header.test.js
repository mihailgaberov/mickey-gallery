/**
 * Created by mgab on 28/03/2017.
 */
import React from 'react'
import expect from 'expect'
import { Link, IndexLink } from 'react-router'
import { shallow } from 'enzyme'
import Header from '../src/components/common/Header'

describe('Test for Header component', () => {
  it('should render header component', () => {
    const wrapper = shallow(<Header />)
    expect(wrapper.length).toEqual(true)
    expect(wrapper.find(Link).length).toEqual(1)
    expect(wrapper.find(IndexLink).length).toEqual(1)
  })
})