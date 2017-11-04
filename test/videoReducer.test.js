/**
 * Created by mgab on 29/03/2017.
 */
import expect from 'expect'
import videoReducer from '../src/reducers/videoReducer'
import * as types from '../src/constants/actionTypes'

describe('Test for Video Reducer', () => {
  const initialState = {
    videos: [{
      id: 1,
      link: 'www.test.com/1.mp4'
    }]
  }

  it('should return the initial state', () => {
    expect(videoReducer(undefined, [])).toEqual([])
  })

  it('should return the all videos in the stores tree', () => {
    const testAction = { type: types.FLICKR_VIDEOS_SUCCESS, videos: 'www.test.com/1.mp4' }
    expect(videoReducer(initialState, testAction)).toEqual([ 'www.test.com/1.mp4' ])
  })
})