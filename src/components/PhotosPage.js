import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { searchImagesAction } from '../actions/mediaActions'
import ErrorMsg from '../components/ErrorMsg'
import Spinner from '../components/StyledComponents/Spinner'
import '../styles/style.css'
import justifiedLayout from 'justified-layout'
import MainContainer from './StyledComponents/MainContainer'
import LazyLoad from 'react-lazyload'
import SpinnerContainer from './StyledComponents/SpinnerContainer'

export class PhotosPage extends Component {

  componentDidMount() {
    this.props.dispatch(searchImagesAction())
  }

  render() {
    const {images, imagesError} = this.props

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
    return (
      <div>
        {!imagesError ?
          images && geometry.boxes.length > 0 ?
            <MainContainer style={{height: geometry.containerHeight + 'px'}}>
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
              <Spinner/>
            </SpinnerContainer>
          : <ErrorMsg>{imagesError}</ErrorMsg>
        }
      </div>
    )
  }
}

PhotosPage.propTypes = {
  images: PropTypes.array,
  dispatch: PropTypes.func.isRequired,
  imagesError: PropTypes.string
}

const mapStateToProps = ({images, error}) => ({
  images: images[0],
  imagesError: images.error
})

export default connect(mapStateToProps)(PhotosPage)