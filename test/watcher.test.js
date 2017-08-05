/**
 * Created by mgab on 29/03/2017.
 */
import expect from 'expect'
import { fork, take } from 'redux-saga/effects'
import searchMediaSaga from '../src/sagas/mediaSaga'
import watchSearchMedia from '../src/sagas/watcher'

xdescribe('watcher', () => {

  describe('watchSearchMedia', () => {
    it('should call searchMediaSaga', () => {
      const gen = watchSearchMedia()
      const action = { type: 'SEARCH_MEDIA_REQUEST' }
      expect(gen.next().value).toEqual(take('SEARCH_MEDIA_REQUEST'))
      expect(gen.next(action).value).toEqual(fork(searchMediaSaga, action))
    })
  })
})