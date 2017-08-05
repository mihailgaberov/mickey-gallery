/**
 * Created by mgab on 29/03/2017.
 */
import expect from 'expect'
import { takeLatest } from 'redux-saga/effects'
import searchMediaSaga from '../src/sagas/mediaSaga'
import watchSearchMedia from '../src/sagas/watcher'

describe('watcher', () => {

  describe('watchSearchMedia', () => {
    it('should call searchMediaSaga', () => {
      const gen = watchSearchMedia()
      expect(gen.next().value).toEqual(takeLatest('SEARCH_MEDIA_REQUEST', searchMediaSaga))
    })
  })
})