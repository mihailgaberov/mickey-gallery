import { shallow } from 'enzyme'
import React from 'react'
import Spinner from '../components/StyledComponents/Spinner'

const setup = () => {
  return shallow(<Spinner />)
}

describe('Spinner component', () => {

  it('should render itself', () => {
    const wrapper = setup()
  })
})