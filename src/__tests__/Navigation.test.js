import { shallow } from 'enzyme';
import React from 'react';
import Navigation from '../components/StyledComponents/Navigation'

const setup = () => {
  return shallow(<Navigation />)
}

describe('Navigation component', () => {

  it('should render itself', () => {
    const wrapper = setup()
  })
})