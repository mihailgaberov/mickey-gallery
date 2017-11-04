/**
 * Created by mgab on 29/03/2017.
 */
import expect from 'expect'
import { call, put } from 'redux-saga/effects'
import { flickrImages } from '../src/Api/api'
import imagesSaga from '../src/sagas/imagesSaga'

describe('Test for Images Saga', () => {
  const gen = imagesSaga({pageNum: 1})

  it('should call Flickr API', () => {
    expect(gen.next().value).toEqual(call(flickrImages, 1))
  })

  it('should dispatch failure effect', () => {
    const error = 'An error occurred during fetching the images. Please try again later or contact me at mihail.gaberov@gmail.com'
    expect(gen.throw(error).value).toEqual(put({type: 'SEARCH_IMAGES_ERROR', error}))
  })
})