/**
 * Created by Mihail on 1/7/2017.
 */
import initialState from './initialState'
import * as types from '../constants/actionTypes'

export default function (state = initialState.images, action) {
  switch (action.type) {
    case types.FLICKR_IMAGES_SUCCESS:
      return { ...state, ...action.images}
    case types.SEARCH_IMAGES_ERROR:
      return {...state, error: action.error}
    default:
      return state
  }
}