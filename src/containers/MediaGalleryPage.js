/**
 * Created by Mihail on 1/7/2017.
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { selectImageAction, searchImagesAction, selectVideoAction, searchVideosAction } from '../actions/mediaActions'
import PhotoPage from '../components/PhotosPage'
import VideoPage from '../components/VideosPage'
import '../styles/style.css'
import Spinner from '../components/Spinner'
import ErrorMsg from '../components/ErrorMsg'

export class MediaGalleryPage extends Component {
  constructor() {
    super()
    this.handleSelectImage = this.handleSelectImage.bind(this)
    this.handleSelectVideo = this.handleSelectVideo.bind(this)
  }

  componentDidMount() {
    this.props.dispatch(searchImagesAction())
    this.props.dispatch(searchVideosAction())
  }

  handleSelectImage(selectedImage) {
    this.props.dispatch(selectImageAction(selectedImage))
  }

  handleSelectVideo(selectedVideo) {
    this.props.dispatch(selectVideoAction(selectedVideo))
  }

  render() {
    const {
      images,
      selectedImage,
      videos,
      selectedVideo,
      imagesError,
      videosError
    } = this.props

    return (
      <div className="container-fluid">
        <div className="row">
          {!imagesError ?
            images ?
              <div>
                <PhotoPage
                  images={images}
                  selectedImage={selectedImage}
                  onHandleSelectImage={this.handleSelectImage}
                />
              </div> : <Spinner/>
            : <ErrorMsg>{imagesError}</ErrorMsg>
          }
          {!videosError ?
            videos ?
              <div>
                <VideoPage
                  videos={videos}
                  selectedVideo={selectedVideo}
                  onHandleSelectVideo={this.handleSelectVideo}
                />
              </div> : <Spinner/>
            : <ErrorMsg>{videosError}</ErrorMsg>}
        </div>
      </div>
    )
  }
}

MediaGalleryPage.propTypes = {
  images: PropTypes.array,
  selectedImage: PropTypes.object,
  videos: PropTypes.array,
  selectedVideo: PropTypes.object,
  dispatch: PropTypes.func.isRequired,
  imagesError: PropTypes.string,
  videosError: PropTypes.string
}

const mapStateToProps = ({images, videos, error}) => ({
  images: images[0],
  selectedImage: images.selectedImage,
  videos: videos[0],
  selectedVideo: videos.selectedVideo,
  imagesError: images.error,
  videosError: videos.error
})

export default connect(mapStateToProps)(MediaGalleryPage)