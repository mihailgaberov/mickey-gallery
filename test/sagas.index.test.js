/**
 * Created by mgab on 29/03/2017.
 */
import expect from 'expect';
import { fork } from 'redux-saga/effects';
import startForeman from '../src/sagas';
import watchSearchMedia from '../src/sagas/watcher';


describe('Test startForeman saga', () => {
  it('should yield array watchers saga', () => {
    expect(startForeman().next().value).toEqual(fork(watchSearchMedia));
  });
});