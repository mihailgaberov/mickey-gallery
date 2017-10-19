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
    const { images, imagesError } = this.props

    const config = {
      "containerWidth": window.innerWidth,
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

    console.log('geometry: ', geometry)
    return (
      <div>
        {!imagesError ?
          images && geometry.boxes.length > 0 ?
            <div>
              {images.map((image, i) => (
                <div>
                  <img src={image.mediaUrl}
                       alt={image.title}
                       width={geometry.boxes[i] ? geometry.boxes[i].width : 320}
                       height={geometry.boxes[i] ? geometry.boxes[i].height : 400}/>
                  <span>{image.datetaken}</span>
                </div>
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