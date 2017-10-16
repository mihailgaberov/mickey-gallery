import React from 'react'
import expect from 'expect'
import { shallow } from 'enzyme'
import { PhotosPage } from '../src/components/PhotosPage'


const setup = () => {
  const props = {
    handleSearch: expect.createSpy(),
    handleSelectImage: expect.createSpy(),
    dispatch: expect.createSpy(),
    ref: expect.createSpy(),
    value: 'ref',
    images: [{ id: 1, mediaUrl: 'test image url' }],
    selectedImage: { id: 1, mediaUrl: 'test image url' }
  }

  const Wrapper = shallow(<PhotosPage {...props} />)
  return { Wrapper, props }
}

describe('Test for PhotosPage', () => {
  it('should render self and sub components', () => {
    const { Wrapper } = setup()

    expect(Wrapper.find('div').length).toEqual(6)
    expect(Wrapper.images).toEqual([{ id: 1, mediaUrl: 'test image url' }])
    expect(Wrapper.selectedImage).toEqual({ id: 1, mediaUrl: 'test image url' })
    expect(typeof Wrapper.handleSelectImage).toBe('function')
  })

  it('should call dispatch on handleSelectImage', () => {
    const { Wrapper, props } = setup()

    Wrapper.props().handleSelectImage({ id: 1, mediaUrl: 'test image url' })
    expect(props.dispatch.calls.length).toBe(1)
  })
})