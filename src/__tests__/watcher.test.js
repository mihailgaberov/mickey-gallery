import { takeLatest } from 'redux-saga/effects'
import searchMediaSaga from '../sagas/imagesSaga'
import watchSearchMedia from '../sagas/watcher'

describe('Watcher', () => {
  describe('watchSearchMedia', () => {
    it('should call imagesSaga', () => {
      const gen = watchSearchMedia()
      expect(gen.next().value).toEqual(takeLatest('SEARCH_IMAGES_REQUEST', searchMediaSaga))
    })
  })
})