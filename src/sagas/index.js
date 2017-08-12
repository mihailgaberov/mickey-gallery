/**
 * Created by Mihail on 1/8/2017.
 */
import { fork } from 'redux-saga/effects'
import watchImagesMedia from './watcher'
import { watchVideosMedia } from './watcher'

export default function* startForeman() {
  yield fork(watchImagesMedia)
  yield fork(watchVideosMedia)
}