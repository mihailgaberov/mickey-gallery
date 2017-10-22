import { shallow } from 'enzyme'
import expect from 'expect'
import React from 'react'
import App from '../src/components/App'


describe('Test App', () => {
  const props = ['test1', 'test2']
  const wrapper = shallow(<App children={props} />)
  it('should render itself', () => {
    expect(wrapper.find('Header').length).toEqual(1)
  })

  it('should render children', () => {
    expect(typeof wrapper.props().children).toBe('object')
  })
})