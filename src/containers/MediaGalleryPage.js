/**
 * Created by Mihail on 1/7/2017.
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchMediaAction } from '../actions/mediaActions';

// MediaGalleryPage Component
class MediaGalleryPage extends Component {

	// Dispatches *searchMediaAction*  immediately after initial rendering.
	// Note that we are using the dispatch method from the store to execute this task, courtesy of react-redux
	componentDidMount() {
		this.props.dispatch(searchMediaAction('rain'));
	}

	render() {
		console.log(this.props.images, 'Images');
		console.log(this.props.videos, 'Videos');
		console.log(this.props.selectedImage, 'SelectedImage');
		console.log(this.props.selectedVideo, 'SelectedVideo');
		return (<div> </div>)
	}
}

// Define PropTypes
MediaGalleryPage.propTypes = {
// Define your PropTypes here
};

// Subscribe component to redux store and merge the state into
// component's props
const mapStateToProps = ({ images, videos }) => ({
	images: images[0],
	selectedImage: images.selectedImage,
	videos: videos[0],
	selectedVideo: videos.selectedVideo
});

// connect method from react-router connects the component with redux store
export default connect(mapStateToProps)(MediaGalleryPage);