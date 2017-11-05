/**
 * Created by mgab on 29/03/2017.
 */
import videoReducer from '../reducers/videoReducer'
import * as types from '../constants/actionTypes'

describe('videoReducer', () => {
  it('should return the initial state', () => {
    expect(videoReducer(undefined, [])).toEqual([])
  })

  it('should return the all videos in the stores tree', () => {
    const testAction = {type: types.FLICKR_VIDEOS_SUCCESS, videos: [{id: 2, link: 'www.test.com/2.mp4'}]}
    const nextState = videoReducer(undefined, testAction)

    expect(nextState).toEqual([[{"id": 2, "link": "www.test.com/2.mp4"}]])
  })
})