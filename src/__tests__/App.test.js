import { shallow } from 'enzyme'
import React from 'react'
import App from '../components/App'


describe('App component', () => {
  const props = {}
  const wrapper = shallow(<App children={props}/>)

  it('should render itself', () => {
    expect(wrapper.find('Header').length).toEqual(1)
  })

  it('should render children', () => {
    expect(typeof wrapper.props().children).toBe('object')
  })
})