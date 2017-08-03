/**
 * Created by Mihail on 1/7/2017.
 */

const REACT_APP_FLICKR_API_KEY = process.env.REACT_APP_FLICKR_API_KEY
const REACT_APP_FLICKR_USER_ID = process.env.REACT_APP_FLICKR_USER_ID
const REACT_APP_FLICKR_PHOTOSET_ID = process.env.REACT_APP_FLICKR_PHOTOSET_ID
const SHUTTER_CLIENT_ID = process.env.REACT_APP_SHUTTER_CLIENT_ID
const SHUTTER_CLIENT_SECRET = process.env.REACT_APP_SHUTTER_CLIENT_SECRET

const basicAuth = () => 'Basic '.concat(window.btoa(`${SHUTTER_CLIENT_ID}:${SHUTTER_CLIENT_SECRET}`))
const authParameters = {
  headers: {
    Authorization: basicAuth()
  }
}

export const shutterStockVideos = (searchQuery) => {
  const SHUTTERSTOCK_API_ENDPOINT = `https://api.shutterstock.com/v2/videos/search?
  query=${searchQuery}&page=1&per_page=10`

  return fetch(SHUTTERSTOCK_API_ENDPOINT, authParameters)
    .then(response => {
      return response.json()
    })
    .then(json => {
      return json.data.map(({id, assets, description}) => ({
        id,
        mediaUrl: assets.preview_mp4.url,
        description
      }))
    })
}

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