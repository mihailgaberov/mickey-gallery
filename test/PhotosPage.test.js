import React from 'react'
import expect from 'expect'
import { shallow } from 'enzyme'
import { PhotosPage } from '../src/components/PhotosPage'
import LazyLoad from 'react-lazyload'

const setup = () => {
  const props = {
    handleSearch: expect.createSpy(),
    dispatch: expect.createSpy(),
    images: [{ id: 1, mediaUrl: 'test image url', width: 320, height: 220 }]
  }

  const Wrapper = shallow(<PhotosPage {...props} />)
  return { Wrapper, props }
}

describe('Test for PhotosPage', () => {
  it('should render self and sub components', () => {
    const { Wrapper } = setup()

    expect(Wrapper.find('div').length).toEqual(1)
    expect(Wrapper.find('img').length).toEqual(1)
    expect(Wrapper.find(LazyLoad).length).toEqual(1)
  })
})