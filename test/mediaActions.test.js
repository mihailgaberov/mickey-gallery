/**
 * Created by mgab on 29/03/2017.
 */
import expect from 'expect';
import {
  selectImageAction,
  searchImagesAction,
  selectVideoAction
} from '../src/actions/mediaActions';
import * as types from '../src/constants/actionTypes';


describe('Test for Action creators', () => {

  it('should return selected images action object', () => {
    const image = { id: 1, link: 'great.com/1.jpg' };
    expect(selectImageAction(image)).toEqual({ type: types.SELECTED_IMAGE, image });
  });

  it('should return selected video action object', () => {
    const video = { id: 1, link: 'great.com/1.mp4' };
    expect(selectVideoAction(video)).toEqual({ type: types.SELECTED_VIDEO, video });
  });

  it('should return searchImagesAction action object', () => {
    const test = { id: 1,  };
    expect(searchImagesAction(test)).toEqual({ type: types.SEARCH_IMAGES_REQUEST });
  });
});