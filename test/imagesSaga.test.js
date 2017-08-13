/**
 * Created by mgab on 29/03/2017.
 */
import expect from 'expect'
import { put, call, all } from 'redux-saga/effects'
import imagesSaga from '../src/sagas/imagesSaga'
import { flickrImages } from '../src/Api/api'


describe('imagesSaga', () => {
  const gen = imagesSaga()

  it('should call Flickr API', () => {
    expect(gen.next().value).toEqual(all({
        images: call(flickrImages)
      }
    ))
  })

  it('should dispatch failure effect', () => {
    const error = 'An error occurred during fetching the images. Please try again later or contact me at mihail.gaberov@gmail.com'
    expect(gen.throw(error).value).toEqual(put({type: 'SEARCH_IMAGES_ERROR', error}))
  })
})