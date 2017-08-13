/**
 * Created by Mihail on 1/7/2017.
 */
import { put, call, all } from 'redux-saga/effects'
import { flickrVideos } from '../API/api'
import * as types from '../constants/actionTypes'

export default function* videosSaga() {
  try {
    const {videos} = yield all({
      videos: call(flickrVideos)
    })
    yield all(
      [
        put({type: types.FLICKR_VIDEOS_SUCCESS, videos}),
        put({type: types.SELECTED_VIDEO, video: videos[0]})
      ]
    )
  } catch (error) {
    yield put({
      type: types.SEARCH_VIDEOS_ERROR,
      error: 'An error occurred during fetching the videos. Please try again later or contact me at mihail.gaberov@gmail.com'
    })
  }
}