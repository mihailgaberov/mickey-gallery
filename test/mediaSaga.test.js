/**
 * Created by mgab on 29/03/2017.
 */
import expect from 'expect'
import { put, call, all } from 'redux-saga/effects'
import searchMediaSaga from '../src/sagas/mediaSaga'
import { flickrImages, flickrVideos } from '../src/Api/api'


describe('mediaSaga', () => {
  const gen = searchMediaSaga()

  it('should call Flickr API', () => {
    expect(gen.next().value).toEqual(all({
        videos: call(flickrVideos),
        images: call(flickrImages)
      }
    ))
  })

  it('should dispatch failure effect', () => {
    const error = 'error'
    expect(gen.throw(error).value).toEqual(put({type: 'SEARCH_MEDIA_ERROR', error}))
  })
})