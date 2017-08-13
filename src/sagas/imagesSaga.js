/**
 * Created by Mihail on 1/7/2017.
 */
import { put, call, all } from 'redux-saga/effects'
import { flickrImages } from '../API/api'
import * as types from '../constants/actionTypes'

export default function* imagesSaga() {
  try {
    const {images} = yield all({
      images: call(flickrImages)
    })
    yield all(
      [
        put({type: types.FLICKR_IMAGES_SUCCESS, images}),
        put({type: types.SELECTED_IMAGE, image: images[0]})
      ]
    )
  } catch (error) {
    yield put({
      type: types.SEARCH_IMAGES_ERROR,
      error: 'An error occurred during fetching the images. Please try again later or contact me at mihail.gaberov@gmail.com'
    })
  }
}