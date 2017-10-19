import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { searchImagesAction } from '../actions/mediaActions'
import ErrorMsg from '../components/ErrorMsg'
import Spinner from '../components/StyledComponents/Spinner'
import '../styles/style.css'
import justifiedLayout from 'justified-layout'

export class PhotosPageNew extends Component {

  componentDidMount() {
    this.props.dispatch(searchImagesAction())
  }

  render() {
    const config = {
      "containerWidth": window.innerWidth,
      containerPadding: {
        top: 0,
        right: 14,
        bottom: 0,
        left: 14
      }
    }

    const sizes = [0.5, 1.5, 1, 1.8, 0.4, 0.7, 0.9, 1.1, 1.7, 2, 2.1]

    const geometry = justifiedLayout(sizes, config)
    const { images, imagesError } = this.props

    console.log('images: ', images)

    return (
      <div>
        {!imagesError ?
          images ?
            <div>
              {images.map((image, i) => (
                <img src={image.mediaUrl}
                     alt={image.title}
                     width={geometry.boxes[i] ? geometry.boxes[i].width : 320}
                     height={geometry.boxes[i] ? geometry.boxes[i].height : 400}/>
              ))}
            </div> : <Spinner/>
          : <ErrorMsg>{imagesError}</ErrorMsg>
        }
      </div>
    )
  }
}

PhotosPageNew.propTypes = {
  images: PropTypes.array,
  dispatch: PropTypes.func.isRequired,
  imagesError: PropTypes.string
}

const mapStateToProps = ({images, error}) => ({
  images: images[0],
  imagesError: images.error
})

export default connect(mapStateToProps)(PhotosPageNew)