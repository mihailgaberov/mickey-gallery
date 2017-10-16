import { shallow } from 'enzyme';
import React from 'react';
import Spinner from '../src/components/StyledComponents/Spinner'

const setup = () => {
  return shallow(<Spinner />)
}

describe('Test for Spinner component', () => {

  it('should render itself', () => {
    const wrapper = setup()
  })
})