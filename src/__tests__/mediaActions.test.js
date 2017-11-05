/**
 * Created by mgab on 29/03/2017.
 */
import { searchImagesAction } from '../actions/mediaActions'
import * as types from '../constants/actionTypes'


describe('Action creators', () => {
  it('should return searchImagesAction action object', () => {
    const pageNum = 1
    expect(searchImagesAction(pageNum)).toEqual({ type: types.SEARCH_IMAGES_REQUEST, pageNum: 1 })
  })
})