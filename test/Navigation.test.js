import { shallow } from 'enzyme';
import React from 'react';
import Navigation from '../src/components/StyledComponents/Navigation'

const setup = () => {
  return shallow(<Navigation />)
}

describe('Navigation tests', () => {

  it('should render itself', () => {
    const wrapper = setup()
  })
})