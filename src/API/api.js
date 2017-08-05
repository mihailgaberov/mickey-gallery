/**
 * Created by Mihail on 1/7/2017.
 */

const REACT_APP_FLICKR_API_KEY = process.env.REACT_APP_FLICKR_API_KEY
const REACT_APP_FLICKR_USER_ID = process.env.REACT_APP_FLICKR_USER_ID
const REACT_APP_FLICKR_PHOTOSET_ID = process.env.REACT_APP_FLICKR_PHOTOSET_ID
const REACT_APP_FLICKR_VIDEOSET_ID = process.env.REACT_APP_FLICKR_VIDEOSET_ID

export const flickrImages = () => {
  const FLICKR_API_ENDPOINT = `https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos
	&api_key=${REACT_APP_FLICKR_API_KEY}
	&format=json
	&nojsoncallback=1
	&per_page=10
	&user_id=${REACT_APP_FLICKR_USER_ID}
	&photoset_id=${REACT_APP_FLICKR_PHOTOSET_ID}
	&privacy_filter=5`

  return fetch(FLICKR_API_ENDPOINT)
    .then(response => {
      return response.json()
    })
    .then(json => {
      return json.photoset.photo.map(({farm, server, id, secret, title}) => ({
        id,
        title,
        mediaUrl: `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`
      }))
    })
}

export const flickrVideos = () => {
  const FLICKR_API_ENDPOINT = `https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos
	&api_key=${REACT_APP_FLICKR_API_KEY}
	&format=json
	&nojsoncallback=1
	&per_page=10
	&user_id=${REACT_APP_FLICKR_USER_ID}
	&photoset_id=${REACT_APP_FLICKR_VIDEOSET_ID}`

  return fetch(FLICKR_API_ENDPOINT)
    .then(response => {
      return response.json()
    })
    .then(json => {
      return json.photoset.photo.map(({id, secret, title}) => ({
        id,
        title,
        mediaUrl: `https://www.flickr.com/photos/${REACT_APP_FLICKR_USER_ID}/${id}/play/site/${secret}`
      }))
    })
}