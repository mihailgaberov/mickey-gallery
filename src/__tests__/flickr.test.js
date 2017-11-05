import 'isomorphic-fetch'
import { flickrImages, flickrVideos } from '../API/api'

describe('API', () => {
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