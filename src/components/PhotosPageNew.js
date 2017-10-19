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

    const sizes = []

    const geometry = justifiedLayout(sizes, config)
    /*var boxes = geometry.boxes.map(function (box) {
      return  `<div class="box"
                style="width: ${box.width}px;
                      height: ${box.height}px;
                      top: ${box.top}px;
                      left: ${box.left}px"></div>`;
    }).join('\n')*/
    const {
      images,
      imagesError
    } = this.props


    console.log(images)

    return (
      <div>
        {!imagesError ?
          images ?
            <div>
              <div>
                {images.map((image, i) => (
                  <div key={i}>
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