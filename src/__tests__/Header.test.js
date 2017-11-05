/**
 * Created by mgab on 28/03/2017.
 */
import React from 'react'
import { Link, IndexLink } from 'react-router'
import { shallow } from 'enzyme'
import Header from '../components/common/Header'

describe('Header component', () => {
  it('should render header component', () => {
    const wrapper = shallow(<Header />)

    expect(wrapper.length).toEqual(1)
    expect(wrapper.find(Link).length).toEqual(1)
    expect(wrapper.find(IndexLink).length).toEqual(1)
  })
})