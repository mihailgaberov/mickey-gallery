import * as types from '../constants/actionTypes'
import { saveImages, savePageNum } from '../selectors/images'
import initialState from './initialState'

export default function (state = initialState.images, action) {
  switch (action.type) {
    case types.FLICKR_IMAGES_SUCCESS:
      return saveImages(state, action.images)
    case types.PAGES_COUNT:
      return savePageNum(state, action.pageNum)
    case types.SEARCH_IMAGES_ERROR:
      return {...state, error: action.error}
    default:
      return state
  }
}