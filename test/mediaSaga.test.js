/**
 * Created by mgab on 29/03/2017.
 */
import expect from 'expect'
import { put, call } from 'redux-saga/effects'
import searchMediaSaga from '../src/sagas/mediaSaga'
import { flickrImages, flickrVideos } from '../src/Api/api'


xdescribe('mediaSaga', () => {
  const payload = 'test'
  const gen = searchMediaSaga({ payload })

  it('should call flickrVideos API', () => {
    expect(gen.next(payload).value).toEqual(call(flickrVideos, payload))
  })

  it('should call flickrImages API ', () => {
    expect(gen.next(payload).value).toEqual(call(flickrImages, payload))
  })

  it('should yield array of objects', () => {
    const videos = []
    expect(gen.next(videos).value.length).toEqual(2)
  })

  it('should dispatch failure effect', () => {
    const error = 'error'
    expect(gen.throw(error).value).toEqual(put({ type: 'SEARCH_MEDIA_ERROR', error }))
  })
})