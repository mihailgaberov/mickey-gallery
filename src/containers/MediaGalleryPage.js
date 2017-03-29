/**
 * Created by Mihail on 1/7/2017.
 */
import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { selectImageAction, searchMediaAction, selectVideoAction } from '../actions/mediaActions';
import PhotoPage from '../components/PhotosPage';
import VideoPage from '../components/VideoPage';
import '../styles/style.css';

export class MediaGalleryPage extends Component {
	constructor() {
		super();
		this.handleSearch = this.handleSearch.bind(this);
		this.handleSelectImage = this.handleSelectImage.bind(this);
		this.handleSelectVideo = this.handleSelectVideo.bind(this);
	}

	componentDidMount() {
		this.props.dispatch(searchMediaAction('rain'));
	}

	handleSelectImage(selectedImage) {
			this.props.dispatch(selectImageAction(selectedImage));
	}

	handleSelectVideo(selectedVideo) {
		this.props.dispatch(selectVideoAction(selectedVideo));
	}

	handleSearch(event) {
		event.preventDefault();
		if (this.query !== null) {
			this.props.dispatch(searchMediaAction(this.query.value));
			this.query.value = '';
		}
	}

	render() {
		const { images, selectedImage, videos, selectedVideo } = this.props;
		return (
			<div className="container-fluid">
				{images ? <div>
						<input
							type="text"
							ref={ref => (this.query = ref)}
						/>
						<input
							type="submit"
							className="btn btn-primary"
							value="Search Library"
							onClick={this.handleSearch}
						/>
						<div className="row">
							<PhotoPage
								images={images}
								selectedImage={selectedImage}
								onHandleSelectImage={this.handleSelectImage}
							/>
							<VideoPage
								videos={videos}
								selectedVideo={selectedVideo}
								onHandleSelectVideo={this.handleSelectVideo}
							/>
						</div>
					</div> : 'loading ....'}
			</div>
		);
	}
}

MediaGalleryPage.propTypes = {
	images: PropTypes.array,
	selectedImage: PropTypes.object,
	videos: PropTypes.array,
	selectedVideo: PropTypes.object,
	dispatch: PropTypes.func.isRequired
};

const mapStateToProps = ({ images, videos }) => ({
	images: images[0],
	selectedImage: images.selectedImage,
	videos: videos[0],
	selectedVideo: videos.selectedVideo
});

export default connect(mapStateToProps)(MediaGalleryPage);