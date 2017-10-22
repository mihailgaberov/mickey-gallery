import React from 'react'
import expect from 'expect'
import { shallow } from 'enzyme'
import { VideosPage } from '../src/components/VideosPage'


const setup = () => {
  const props = {
    handleSearch: expect.createSpy(),
    // handleSelectVideo: expect.createSpy(),
    dispatch: expect.createSpy(),
    ref: expect.createSpy(),
    // value: 'ref',
    videos: [{ id: 1, mediaUrl: 'test video url', width: 230 }]
  }

  const Wrapper = shallow(<VideosPage {...props} />)
  return { Wrapper, props }
}

describe('Test for VideosPage', () => {
  it('should render self and sub components', () => {
    const { Wrapper } = setup()

    expect(Wrapper.find('div').length).toEqual(1)
    expect(Wrapper.find('video').length).toEqual(1)
    // expect(typeof Wrapper.handleSelectVideo).toBe('function')
  })

  /*it('should call dispatch handleSelectVideo', () => {
    const { Wrapper, props } = setup()

    Wrapper.props().handleSelectVideo({ id: 1, mediaUrl: 'test video url' })
    expect(props.dispatch.calls.length).toBe(1)
  })*/
})
