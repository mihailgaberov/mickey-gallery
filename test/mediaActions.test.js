/**
 * Created by mgab on 29/03/2017.
 */
import expect from 'expect'
import { searchImagesAction } from '../src/actions/mediaActions'
import * as types from '../src/constants/actionTypes'


describe('Test for Action creators', () => {
  it('should return searchImagesAction action object', () => {
    const pageNum = 1
    expect(searchImagesAction(pageNum)).toEqual({ type: types.SEARCH_IMAGES_REQUEST, pageNum: 1 })
  })
})