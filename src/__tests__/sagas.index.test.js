import { fork } from 'redux-saga/effects'
import startForeman from '../sagas/index'
import watchSearchMedia from '../sagas/watcher'


describe('startForeman saga', () => {
  it('should yield array watchers saga', () => {
    expect(startForeman().next().value).toEqual(fork(watchSearchMedia))
  })
})