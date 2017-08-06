/**
 * Created by Mihail on 1/8/2017.
 */
import React from 'react'
import PropTypes from 'prop-types'

const VideosPage = ({videos, onHandleSelectVideo, selectedVideo}) => (
  <div className="col-md-6">
    <h2>Videos</h2>
    {selectedVideo ? <div className="select-video">
      <div id={selectedVideo.id}>
        <h6 className="title">{selectedVideo.title}</h6>
        <video controls src={selectedVideo.mediaUrl} alt={selectedVideo.title}/>
      </div>
    </div> : ''
    }
    <div className="video-thumbnail">
      {videos.map((video, i) => (
        <div key={i} onClick={onHandleSelectVideo.bind(this, video)}>
          <video controls src={video.mediaUrl} alt={video.title}/>
        </div>
      ))}
    </div>
  </div>
)

VideosPage.propTypes = {
  videos: PropTypes.array.isRequired,
  selectedVideo: PropTypes.object,
  onHandleSelectVideo: PropTypes.func.isRequired
}

export default VideosPage