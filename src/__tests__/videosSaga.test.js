import { put, call, all } from 'redux-saga/effects'
import videoSaga from '../sagas/videosSaga'
import { flickrVideos } from '../API/api'


describe('videoSaga', () => {
  const gen = videoSaga()

  it('should call Flickr API', () => {
    expect(gen.next().value).toEqual(all({
        videos: call(flickrVideos)
      }
    ))
  })

  it('should dispatch failure effect', () => {
    const error = 'An error occurred during fetching the videos. Please try again later or contact me at mihail.gaberov@gmail.com'
    expect(gen.throw(error).value).toEqual(put({type: 'SEARCH_VIDEOS_ERROR', error}))
  })
})