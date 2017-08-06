/**
 * Created by Mihail on 1/8/2017.
 */
import { fork } from 'redux-saga/effects'
import watchSearchMedia from './watcher'

export default function* startForeman() {
  yield fork(watchSearchMedia)
}