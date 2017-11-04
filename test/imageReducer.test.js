/**
 * Created by mgab on 29/03/2017.
 */
import expect from 'expect'
import imageReducer from '../src/reducers/imageReducer'
import * as types from '../src/constants/actionTypes'


describe('Test for Image Reducer', () => {
  it('should return the initial state', () => {
    expect(imageReducer(undefined, {})).toEqual({})
  })

  it('should return the all images in the store', () => {
    const testAction = {
      type: types.FLICKR_IMAGES_SUCCESS,
      images: {photos: [{id: 1, link: 'www.test.com/1.jpg'}], pageNum: 7}
    }
    expect(imageReducer({}, testAction)).toEqual({
      photos: [{id: 1, link: 'www.test.com/1.jpg'}],
      pageNum: 7
    })
  })
})