import { shallow } from 'enzyme';
import React from 'react';
import Spinner from '../src/components/StyledComponents/Spinner'

const setup = () => {
  return shallow(<Spinner />)
}

describe('Spinner tests', () => {

  it('should render itself', () => {
    const wrapper = setup()
  })
})