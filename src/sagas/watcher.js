/**
 * Created by Mihail on 1/7/2017.
 */
import { takeLatest } from 'redux-saga/effects'
import imagesSaga from './imagesSaga'
import videosSaga from './videosSaga'
import * as types from '../constants/actionTypes'

export default function* watchImagesMedia() {
  yield takeLatest(types.SEARCH_IMAGES_REQUEST, imagesSaga)
}

export function* watchVideosMedia() {
  yield takeLatest(types.SEARCH_VIDEOS_REQUEST, videosSaga)
}