/**
 * Created by Mihail on 1/7/2017.
 */
import * as types from '../constants/actionTypes'

export const selectImageAction = (image) => ({
  type: types.SELECTED_IMAGE,
  image
})

export const selectVideoAction = (video) => ({
  type: types.SELECTED_VIDEO,
  video
})

export const searchImagesAction = (pageNum) => ({
  type: types.SEARCH_IMAGES_REQUEST,
  pageNum
})

export const searchVideosAction = () => ({
  type: types.SEARCH_VIDEOS_REQUEST
})