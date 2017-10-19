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

    // TODO: Get the sizes of the real images.
    const sizes = [
      {
        width: 400,
        height: 300
      },
      {
        width: 300,
        height: 300
      },
      {
        width: 250,
        height: 400
      }
    ]
    const geometry = justifiedLayout(sizes, config)
    const {
      images,
      imagesError
    } = this.props

    return (
      <div>
        {!imagesError ?
          images ?
            <div>
              <div>
                {images.map((image, i) => (
                  <div key={i}>
                    <img src={image.mediaUrl}
                         alt={image.title}
                         width={geometry.boxes[i] ? geometry.boxes[i].width : 320}
                         height={geometry.boxes[i] ? geometry.boxes[i].height : 400}/>
                  </div>
                ))}
              </div>
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