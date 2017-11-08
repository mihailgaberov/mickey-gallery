import { shallow } from 'enzyme';
import React from 'react';
import Navigation from '../components/styled-components/Navigation'

const setup = () => {
  return shallow(<Navigation />)
}

describe('Navigation component', () => {

  it('should render itself', () => {
    const wrapper = setup()
  })
})