import { shallow } from 'enzyme'
import expect from 'expect'
import React from 'react'
import HomePage from '../src/components/HomePage'

describe('Test for HomePage component', () => {
  it('should render the HomePage component', () => {
    const wrapper = shallow(<HomePage />)
    expect(wrapper.length).toEqual(true)
  })
})