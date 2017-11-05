/**
 * Created by mgab on 29/03/2017.
 */
import imageReducer from '../reducers/imageReducer'
import * as types from '../constants/actionTypes'
import { Map } from 'immutable'

describe('imageRecuder', () => {
  it('should return the initial state', () => {
    expect(imageReducer(undefined, {})).toEqual(Map({photos: [], pageNum: 1}))
  })

  it('should return all images in the store', () => {
    const testAction = {
      type: types.FLICKR_IMAGES_SUCCESS,
      images: [{id: 1, link: 'www.test.com/1.jpg'}]
    }

    expect(imageReducer({photos: []}, testAction)).toEqual(Map({photos: [{id: 1, link: 'www.test.com/1.jpg'}]}))
  })
})