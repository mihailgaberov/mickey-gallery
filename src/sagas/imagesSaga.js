/**
 * Created by Mihail on 1/7/2017.
 */
import { put, call, all } from 'redux-saga/effects'
import { flickrImages } from '../API/api'
import * as types from '../constants/actionTypes'

export default function* imagesSaga(arg) {
  const reducedByScrollPageNum = arg ? arg.pageNum : undefined
  try {
    const {photos, pageNum} = yield call(flickrImages, reducedByScrollPageNum)

    yield all(
      [
        put({type: types.FLICKR_IMAGES_SUCCESS, images: {photos, pageNum: reducedByScrollPageNum || pageNum}})
      ]
    )
  } catch (error) {
    yield put({
      type: types.SEARCH_IMAGES_ERROR,
      error: 'An error occurred during fetching the images. Please try again later or contact me at mihail.gaberov@gmail.com'
    })
  }
}