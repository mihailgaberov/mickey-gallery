/**
 * Created by Mihail on 1/8/2017.
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { searchImagesAction, selectImageAction } from '../actions/mediaActions'
import '../styles/style.css'
import Spinner from '../components/StyledComponents/Spinner'
import ErrorMsg from '../components/ErrorMsg'

export class PhotosPage extends Component {
  constructor() {
    super()
    this.handleSelectImage = this.handleSelectImage.bind(this)
  }

  componentDidMount() {
    this.props.dispatch(searchImagesAction())
  }

  handleSelectImage(selectedImage) {
    this.props.dispatch(selectImageAction(selectedImage))
  }

  render() {
    const {
      images,
      selectedImage,
      imagesError,
    } = this.props

    return (
      <div>
        {!imagesError ?
          images ?
            <div>
              {selectedImage ?
                <div className="selected-image">
                  <div id={selectedImage.id}>
                    <h6 className="title">{selectedImage.title}</h6>
                    <img src={selectedImage.mediaUrl} alt={selectedImage.title}/>
                  </div>
                </div> : ''}
              <div className="image-thumbnail">
                {images.map((image, i) => (
                  <div key={i} onClick={this.handleSelectImage.bind(this, image)}>
                    <img src={image.mediaUrl} alt={image.title}/>
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

PhotosPage.propTypes = {
  images: PropTypes.array,
  selectedImage: PropTypes.object,
  dispatch: PropTypes.func.isRequired,
  imagesError: PropTypes.string,
}

const mapStateToProps = ({ images, error }) => ({
  images: images[0],
  selectedImage: images.selectedImage,
  imagesError: images.error
})

export default connect(mapStateToProps)(PhotosPage)