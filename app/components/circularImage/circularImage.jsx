import React from 'react';

export default class CircularImage extends React.Component {
  static propTypes = {
    imageUrl: React.PropTypes.string,
    description: React.PropTypes.string
  };

  render() {
      const {imageUrl, description} = this.props;
    return (
      <div className="circular-image-wrapper">
        <image className="circular-image" src={imageUrl} />
        <div className="image-description"> {description} </div>
      </div>
    );
  }
}
