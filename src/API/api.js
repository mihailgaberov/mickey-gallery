/**
 * Created by Mihail on 1/7/2017.
 */

const REACT_APP_FLICKR_API_KEY = process.env.REACT_APP_FLICKR_API_KEY
const SHUTTER_CLIENT_ID = '3434a56d8702085b9226'
const SHUTTER_CLIENT_SECRET = '7698001661a2b347c2017dfd50aebb2519eda578'

// Basic Authentication for accessing Shutterstock API
const basicAuth = () => 'Basic '.concat(window.btoa(`${SHUTTER_CLIENT_ID}:${SHUTTER_CLIENT_SECRET}`));
const authParameters = {
  headers: {
    Authorization: basicAuth()
  }
};

/**
 * Description [Access Shutterstock search endpoint for short videos]
 * @params { String } searchQuery
 * @return { Array }
 */
export const shutterStockVideos = (searchQuery) => {
  const SHUTTERSTOCK_API_ENDPOINT = `https://api.shutterstock.com/v2/videos/search?
  query=${searchQuery}&page=1&per_page=10`;

  return fetch(SHUTTERSTOCK_API_ENDPOINT, authParameters)
    .then(response => {
      return response.json();
    })
    .then(json => {
      return json.data.map(({id, assets, description}) => ({
        id,
        mediaUrl: assets.preview_mp4.url,
        description
      }));
    });
};

/**
 * Description [Access Flickr search endpoint for photos]
 * @params { String } searchQuery
 * @return { Array }
 */
export const flickrImages = () => {
  const FLICKR_API_ENDPOINT = `https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos
	&api_key=${REACT_APP_FLICKR_API_KEY}
	&format=json
	&nojsoncallback=1
	&per_page=10
	&user_id=151365639@N02
	&photoset_id=72157687093937245
	&privacy_filter=5`;

  return fetch(FLICKR_API_ENDPOINT)
    .then(response => {
      return response.json()
    })
    .then(json => {
      return json.photoset.photo.map(({farm, server, id, secret, title}) => ({
        id,
        title,
        mediaUrl: `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`
      }));
    });
};