/**
 * Created by mgab on 29/03/2017.
 */
import expect from 'expect';
import imageReducer from '../src/reducers/imageReducer';
import * as types from '../src/constants/actionTypes';


describe('Test for Image Reducer', () => {
  const initialState = {
    images: [{
      id: 1,
      link: 'www.test.com/1.jpg'
    }]
  };

  it('should return the initial state', () => {
    expect(imageReducer(undefined, [])).toEqual([]);
  });

  it('should return the all images in the store', () => {
    const testAction = { type: types.FLICKR_IMAGES_SUCCESS, images: 'www.test.com/1.jpg' };
    expect(imageReducer(initialState, testAction)).toEqual(['www.test.com/1.jpg']);
  });

  it('should return the selected image', () => {
    const testAction = { type: types.SELECTED_IMAGE, image: 'www.test.com/1.jpg' };
    const expectValue = { images: [{ id: 1, link: 'www.test.com/1.jpg' }], selectedImage: 'www.test.com/1.jpg' };
    expect(imageReducer(initialState, testAction)).toEqual(expectValue);
  });
});