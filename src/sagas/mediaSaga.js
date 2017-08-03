/**
 * Created by Mihail on 1/7/2017.
 */
import { put, call, all } from 'redux-saga/effects'
import { flickrImages, shutterStockVideos } from '../API/api'
import * as types from '../constants/actionTypes'

export default function* searchMediaSaga({payload}) {
  try {
    const {videos, images} = yield all({
      videos: call(shutterStockVideos, payload),
      images: call(flickrImages, payload)
    })
    yield all(
      [
        put({type: types.SHUTTER_VIDEOS_SUCCESS, videos}),
        put({type: types.SELECTED_VIDEO, video: videos[0]}),
        put({type: types.FLICKR_IMAGES_SUCCESS, images}),
        put({type: types.SELECTED_IMAGE, image: images[0]})
      ]
    )
  } catch (error) {
    yield put({type: 'SEARCH_MEDIA_ERROR', error})
  }
}