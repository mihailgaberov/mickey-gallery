import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { searchVideosAction } from '../actions/mediaActions'
import ErrorMsg from '../components/ErrorMsg'
import Spinner from '../components/StyledComponents/Spinner'
import '../styles/style.css'
import justifiedLayout from 'justified-layout'
import MainContainer from './StyledComponents/MainContainer'
import LazyLoad from 'react-lazyload'
import SpinnerContainer from './StyledComponents/SpinnerContainer'

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
                  <video controls
                         src={video.mediaUrl}
                         alt={video.title}
                         style={
                           {
                             width: `${geometry.boxes[i].width}px`,
                             top: `${geometry.boxes[i].top}px`,
                             left: `${geometry.boxes[i].left}px`
                           }}
                  />
                </LazyLoad>
              ))}
            </MainContainer>
            :
            <SpinnerContainer>
              <Spinner/>
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
  videosError: videos.error
})

export default connect(mapStateToProps)(VideosPage)