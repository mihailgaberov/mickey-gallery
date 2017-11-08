import { shallow } from 'enzyme'
import React from 'react'
import Loader from '../components/common/Loader'

function setup() {
  return shallow(<Loader />)
}

describe('Loader component', () => {
  it('should render without crashing', () => {
    const wrapper = setup()
  })
})
