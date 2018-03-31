import { shallow } from 'enzyme'
import React from 'react'
import LazyLoad from 'react-lazyload'
import ErrorMsg from '../components/ErrorMsg'
import { PhotosPage } from '../components/PhotosPage'
import SpinnerContainer from '../components/styled-components/SpinnerContainer'
import Loader from "../components/common/Loader"

const setup = (images, error) => {
  const props = {
    handleSearch: jest.fn(),
    dispatch: jest.fn(),
    images: images,
    imagesError: error
  }

  const Wrapper = shallow(<PhotosPage {...props} />)
  return { Wrapper, props }
}

describe('PhotosPage component', () => {
  it('should render self and sub components', () => {
    const { Wrapper } = setup([{ id: 1, mediaUrl: 'test image url', width: 320, height: 220 }])

    expect(Wrapper.find('div').length).toEqual(1)
    expect(Wrapper.find('img').length).toEqual(1)
    expect(Wrapper.find(LazyLoad).length).toEqual(1)
  })

  it('should render the loading animation when there is no data', () => {
    const { Wrapper } = setup([])

    expect(Wrapper.find(SpinnerContainer).length).toEqual(1)
    expect(Wrapper.find(Loader).length).toEqual(1)
  })

  it('should show error message if any errors occurred', () => {
    const { Wrapper } = setup([], 'error')
    expect(Wrapper.find(ErrorMsg).length).toEqual(1)
  })
})