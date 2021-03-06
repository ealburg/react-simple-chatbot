import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';

export default class ImageTextOptionElement extends Component {
  holderStyle = {
    width: 100,
    height: 100,
    overflow: 'hidden',
    borderRadius: 15
  };

  labelStyle = {
    bottom: 0,
    width: 100,
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    // height: 20,
    backgroundColor: 'rgb(20,126,251)',
    fontFamily: '"Open Sans", sans-serif',
    color: 'white',
    paddingTop: 5,
    paddingBottom: 5,
    position: 'fixed',
    lineHeight: '15px'
  };

  constructor(props) {
    super(props);
    const { image, label, value } = props;

    this.childImageStyle = {
      width: '100%',
      height: '100%',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundImage: `url(${image})`,
      transition: '0.6s'
    };

    this.state = {
      currentStyle: this.childImageStyle,
      label,
      value
    };

    this.zoomIn = this.zoomIn.bind(this);
    this.zoomOut = this.zoomOut.bind(this);
  }

  zoomIn() {
    const { currentStyle } = this.state;
    const newObj = { ...currentStyle, transform: 'scale(1.2)' };
    this.setState({ currentStyle: newObj });
  }

  zoomOut() {
    this.setState({ currentStyle: this.childImageStyle });
  }

  render() {
    const { currentStyle, label, value } = this.state;
    return (
      <div style={this.holderStyle}>
        <div style={currentStyle} onMouseEnter={this.zoomIn} onMouseLeave={this.zoomOut} onClick={() => this.props.clickCallback({value: value})} />
        <div style={this.labelStyle}>{label}</div>
      </div>
    );
  }
}

ImageTextOptionElement.propTypes = {
  image: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};
