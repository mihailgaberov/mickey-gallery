import justifiedLayout from 'justified-layout'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import LazyLoad from 'react-lazyload'
import { connect } from 'react-redux'
import { searchImagesAction } from '../actions/mediaActions'
import ErrorMsg from '../components/ErrorMsg'
import Loader from './common/Loader'
import { getPageNum, getPhotos } from '../selectors/images'
import '../styles/style.css'
import MainContainer from './styled-components/MainContainer'
import SpinnerContainer from './styled-components/SpinnerContainer'

export class PhotosPage extends Component {

  componentDidMount() {
    this.props.dispatch(searchImagesAction())
  }

  getScrollPercent = () => (
    (document.documentElement.scrollTop || document.body.scrollTop)
    / ((document.documentElement.scrollHeight || document.body.scrollHeight)
      - document.documentElement.clientHeight) * 100
  )

  fetchNewDataChunk = () => {
    let executed = false
    return (pageNum) => {
      if (!executed) {
        executed = true
        this.props.dispatch(searchImagesAction(--pageNum))
      }
    }
  }


  render() {
    let { pageNum } = this.props
    const { images, imagesError } = this.props
    const config = {
      containerWidth: window.innerWidth,
      containerPadding: {
        top: 0,
        right: 14,
        bottom: 0,
        left: 14
      }
    }
    const sizes = images ? images.map((image) => {
      return {
        width: image.width,
        height: image.height
      }
    }) : []
    const geometry = justifiedLayout(sizes, config)

    window.onscroll = () => {
      if (this.getScrollPercent() > 98 && pageNum > 1) {
        this.fetchNewDataChunk()(pageNum)
      }
    }

    return (
      <div>
        {!imagesError ?
          images && geometry.boxes.length > 0 ?
            <MainContainer style={{ height: geometry.containerHeight + 'px' }}>
              {images.map((image, i) => (
                <LazyLoad key={i}
                          height={geometry.boxes[i].height}>
                  <img src={image.mediaUrl}
                       alt={image.datetaken}
                       style={
                         {
                           width: `${geometry.boxes[i].width}px`,
                           top: `${geometry.boxes[i].top}px`,
                           left: `${geometry.boxes[i].left}px`
                         }
                       }
                  />
                </LazyLoad>
              ))}
            </MainContainer>
            :
            <SpinnerContainer>
              <Loader />
            </SpinnerContainer>
          : <ErrorMsg>{imagesError}</ErrorMsg>
        }
      </div>
    )
  }
}

PhotosPage.propTypes = {
  images: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object
  ]),
  dispatch: PropTypes.func.isRequired,
  imagesError: PropTypes.string
}

const mapStateToProps = ({ images, error }) => ({
  images: getPhotos(images),
  pageNum: getPageNum(images),
  imagesError: error
})

export default connect(mapStateToProps)(PhotosPage)