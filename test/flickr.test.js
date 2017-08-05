/**
 * Created by mgab on 29/03/2017.
 */
import 'isomorphic-fetch'
import expect from 'expect'
import { flickrImages, flickrVideos } from '../src/API/api'

describe('Test for Api', () => {
  it('should call Flickr images Api', () => {
    flickrImages().then((res) => {
      expect(res.length).toEqual(3)
    }).catch((error) => {
      expect(error, 'Promise error')
    })
  })

  it('should call Flickr videos Api', () => {
    flickrVideos().then((res) => {
      expect(res.length).toEqual(2)
    }).catch((error) => {
      expect(error, 'Promise error')
    })
  })
})