/**
 * Created by Mihail on 1/7/2017.
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { searchVideosAction, selectVideoAction } from '../actions/mediaActions'
import '../styles/style.css'
import Spinner from '../components/StyledComponents/Spinner'
import ErrorMsg from '../components/ErrorMsg'

export class VideosPage extends Component {
  constructor() {
    super()
    this.handleSelectVideo = this.handleSelectVideo.bind(this)
  }

  componentDidMount() {
    this.props.dispatch(searchVideosAction())
  }

  handleSelectVideo(selectedVideo) {
    this.props.dispatch(selectVideoAction(selectedVideo))
  }

  render() {
    const {
      videos,
      selectedVideo,
      videosError
    } = this.props

    return (
      <div>
        {!videosError ?
          videos ?
            <div>
              {selectedVideo ? <div className="select-video">
                <div id={selectedVideo.id}>
                  <h6 className="title">{selectedVideo.title}</h6>
                  <video controls src={selectedVideo.mediaUrl} alt={selectedVideo.title}/>
                </div>
              </div> : ''
              }
              <div className="video-thumbnail">
                {videos.map((video, i) => (
                  <div key={i} onClick={this.handleSelectVideo.bind(this, video)}>
                    <video controls src={video.mediaUrl} alt={video.title}/>
                  </div>
                ))}
              </div>
            </div> : <Spinner/>
          : <ErrorMsg>{videosError}</ErrorMsg>}
      </div>
    )
  }
}

VideosPage.propTypes = {
  videos: PropTypes.array,
  selectedVideo: PropTypes.object,
  dispatch: PropTypes.func.isRequired,
  videosError: PropTypes.string
}

const mapStateToProps = ({videos, error}) => ({
  videos: videos[0],
  selectedVideo: videos.selectedVideo,
  videosError: videos.error
})

export default connect(mapStateToProps)(VideosPage)