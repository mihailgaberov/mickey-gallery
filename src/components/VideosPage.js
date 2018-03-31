import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { searchVideosAction } from '../actions/mediaActions'
import ErrorMsg from '../components/ErrorMsg'
import Loader from './common/Loader'
import '../styles/style.css'
import justifiedLayout from 'justified-layout'
import MainContainer from './styled-components/MainContainer'
import LazyLoad from 'react-lazyload'
import SpinnerContainer from './styled-components/SpinnerContainer'

export class VideosPage extends Component {

  componentDidMount() {
    this.props.dispatch(searchVideosAction())
  }

  render() {
    const {videos, videosError} = this.props
    const config = {
      containerWidth: window.innerWidth,
      forceAspectRatio: 1,
      containerPadding: {
        top: 0,
        right: 14,
        bottom: 0,
        left: 14
      }
    }
    const sizes = videos ? Array.from(new Array(videos.length), () => 1) : []
    const geometry = justifiedLayout(sizes, config)

    return (
      <div>
        {!videosError ?
          videos && geometry.boxes.length > 0 ?
            <MainContainer style={{height: geometry.containerHeight + 'px'}}>
              {videos.map((video, i) => (
                <LazyLoad key={i}
                          height={geometry.boxes[i].height}>
                  <video controls style={
                    {
                      width: `${geometry.boxes[i].width}px`,
                      top: `${geometry.boxes[i].top}px`,
                      left: `${geometry.boxes[i].left}px`
                    }}>
                    <source src={video.mediaUrl} type="video/mp4; codecs=avc1.42E01E,mp4a.40.2"/>
                  </video>
                </LazyLoad>
              ))}
            </MainContainer>
            :
            <SpinnerContainer>
              <Loader/>
            </SpinnerContainer>
          : <ErrorMsg>{videosError}</ErrorMsg>
        }
      </div>
    )
  }
}

VideosPage.propTypes = {
  videos: PropTypes.array,
  dispatch: PropTypes.func.isRequired,
  videosError: PropTypes.string
}

const mapStateToProps = ({videos, error}) => ({
  videos: videos[0],
  videosError: error
})

export default connect(mapStateToProps)(VideosPage)