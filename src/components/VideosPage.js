import React, { Component } from 'react'
import PropTypes from 'prop-types'
import justifiedLayout from 'justified-layout'
import LazyLoad from 'react-lazyload'
import { connect } from 'react-redux'
import { Player } from 'video-react'
import { searchVideosAction } from '../actions/mediaActions'
import ErrorMsg from '../components/ErrorMsg'
import '../styles/style.css'
import Loader from './common/Loader'
import MainContainer from './styled-components/MainContainer'
import SpinnerContainer from './styled-components/SpinnerContainer'
import '../../node_modules/video-react/dist/video-react.css'


export class VideosPage extends Component {

  componentDidMount() {
    this.props.dispatch(searchVideosAction())
  }

  render() {
    const { videos, videosError } = this.props
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
            <MainContainer style={{ height: geometry.containerHeight + 'px' }}>
              {videos.map((video, i) => (
                <LazyLoad key={i}
                          height={geometry.boxes[i].height}>
                  <Player
                    style={
                      {
                        width: `${geometry.boxes[i].width}px`,
                        top: `${geometry.boxes[i].top}px`,
                        left: `${geometry.boxes[i].left}px`
                      }}
                    playsInline
                  >
                    <source src={video.mediaUrl}/>
                  </Player>
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

const mapStateToProps = ({ videos, error }) => ({
  videos: videos[0],
  videosError: error
})

export default connect(mapStateToProps)(VideosPage)
