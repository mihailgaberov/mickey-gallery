/**
 * Created by Mihail on 1/7/2017.
 */
import React, { Component } from 'react';
import { flickrImages, shutterStockVideos } from '../API/api';

// MediaGalleryPage Component
class MediaGalleryPage extends Component {

	// We want to get images and videos from the API right after our component renders.
	componentDidMount() {
		flickrImages('rain').then(images => console.log(images, 'Images'));
		shutterStockVideos('rain').then(videos => console.log(videos, 'Videos'));
	}

	render() {
		// TODO: Render videos and images here
		return (<div></div>)
	}
}

export default MediaGalleryPage;