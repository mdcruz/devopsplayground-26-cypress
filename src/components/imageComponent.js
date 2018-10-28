import React from 'react';
import Gallery from 'react-grid-gallery';
import data from '../data.json';

class ImageComponent extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      images: this.props.images,
      currentImage: 1,
    };

    this.onCurrentImageChange = this.onCurrentImageChange.bind(this);
  }

  onCurrentImageChange(index) {
    this.setState({ currentImage: index });
  }

  render() {
    return (
      <div className="gallery">
        <Gallery 
          backdropClosesModal={true}
          images={this.state.images}
          enableImageSelection={false}
          currentImageWillChange={this.onCurrentImageChange}
          margin={5}
        />
      </div>
    );
  }
}

ImageComponent.defaultProps = {
  images: (data)
};

export default ImageComponent;