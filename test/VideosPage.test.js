import React from 'react'
import expect from 'expect'
import { shallow } from 'enzyme'
import { VideosPage } from '../src/components/VideosPage'
import LazyLoad from 'react-lazyload'
import SpinnerContainer from '../src/components/StyledComponents/SpinnerContainer'
import Spinner from '../src/components/StyledComponents/Spinner'
import ErrorMsg from '../src/components/ErrorMsg'


const setup = (videos, error) => {
  const props = {
    handleSearch: expect.createSpy(),
    dispatch: expect.createSpy(),
    ref: expect.createSpy(),
    videos: videos,
    videosError: error
  }

  const Wrapper = shallow(<VideosPage {...props} />)
  return {Wrapper, props}
}

describe('Test for VideosPage', () => {
  it('should render self and sub components', () => {
    const {Wrapper} = setup([{id: 1, mediaUrl: 'test image url', width: 320, height: 220}])

    expect(Wrapper.find('div').length).toEqual(1)
    expect(Wrapper.find('video').length).toEqual(1)
    expect(Wrapper.find(LazyLoad).length).toEqual(1)
  })

  it('should render the loading animation when there is no data', () => {
    const {Wrapper} = setup([])

    expect(Wrapper.find(SpinnerContainer).length).toEqual(1)
    expect(Wrapper.find(Spinner).length).toEqual(1)
  })

  it('should show error message if any errors occurred', () => {
    const { Wrapper } = setup([], 'error')
    expect(Wrapper.find(ErrorMsg).length).toEqual(1)
  })
})
