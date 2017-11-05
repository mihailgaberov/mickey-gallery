/**
 * Created by Mihail on 1/7/2017.
 */

const REACT_APP_FLICKR_API_KEY = process.env.REACT_APP_FLICKR_API_KEY
const REACT_APP_FLICKR_USER_ID = process.env.REACT_APP_FLICKR_USER_ID
const REACT_APP_FLICKR_PHOTOSET_ID = process.env.REACT_APP_FLICKR_PHOTOSET_ID
const REACT_APP_FLICKR_VIDEOSET_ID = process.env.REACT_APP_FLICKR_VIDEOSET_ID

export async function flickrImages(pageNum) {
  const PHOTOSET_INFO_ENDPOINT = `https://api.flickr.com/services/rest/?method=flickr.photosets.getInfo&api_key=${REACT_APP_FLICKR_API_KEY}&photoset_id=${REACT_APP_FLICKR_PHOTOSET_ID}&user_id=${REACT_APP_FLICKR_USER_ID}&format=json&nojsoncallback=1`

  let fetchedInfo = await fetch(PHOTOSET_INFO_ENDPOINT)
  fetchedInfo = await fetchedInfo.json()
  const lastPageNum = Math.ceil(fetchedInfo.photoset.count_photos / 3) || 1

  const page = pageNum !== undefined ? pageNum : lastPageNum

  let GET_PHOTOS_ENDPOINT = `https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos
	&api_key=${REACT_APP_FLICKR_API_KEY}
	&format=json
	&nojsoncallback=1
	&per_page=3
	&page=${page}
	&user_id=${REACT_APP_FLICKR_USER_ID}
	&photoset_id=${REACT_APP_FLICKR_PHOTOSET_ID}
	&extras=date_taken,o_dims,url_o`

  let fetchedData = await fetch(GET_PHOTOS_ENDPOINT)
  fetchedData = await fetchedData.json()
  return {
    photos: fetchedData.photoset.photo.reverse().map(({farm, server, id, secret, title, url_o, height_o, width_o, datetaken}) => ({
      id,
      title,
      mediaUrl: `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`,
      width: width_o,
      height: height_o,
      oUrl: url_o,
      datetaken
    })),
    pageNum: lastPageNum
  }
}

export async function flickrVideos() {
  const FLICKR_API_ENDPOINT = `https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos
	&api_key=${REACT_APP_FLICKR_API_KEY}
	&format=json
	&nojsoncallback=1
	&per_page=100
	&user_id=${REACT_APP_FLICKR_USER_ID}
	&photoset_id=${REACT_APP_FLICKR_VIDEOSET_ID}
	&extras=date_upload`

  let fetchedData = await fetch(FLICKR_API_ENDPOINT)
  fetchedData = await fetchedData.json()
  return fetchedData.photoset.photo.reverse().map(({id, secret, title}) => ({
    id,
    title,
    mediaUrl: `https://www.flickr.com/photos/${REACT_APP_FLICKR_USER_ID}/${id}/play/site/${secret}`
  }))
}