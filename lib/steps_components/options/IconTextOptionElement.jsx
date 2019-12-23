import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';

export default class IconTextOptionElement extends Component {
  holderStyle = {
    width: 100,
    height: 100,
    overflow: 'hidden',
    borderRadius: 15
  };

  labelStyle = {
    bottom: 0,
    width: '100%',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    height: 20,
    backgroundColor: 'rgb(20,126,251)',
    fontFamily: '"Open Sans", sans-serif',
    color: 'white',
    paddingTop: 5,
    paddingBottom: 5,
    position: 'fixed'
  };

  constructor(props) {
    super(props);
    const { iconClass, color } = props;

    this.childImageStyle = {
      width: '100%',
      height: '100%',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      transition: '0.6s',
      backgroundColor: 'rgb(20,126,251)',
    };

    this.state = {
      currentStyle: this.childImageStyle,
      color,
      iconClass
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
    const { currentStyle, label, color, iconClass } = this.state;
    return (
      <div style={this.holderStyle}>
        <div style={{...currentStyle, color}} onMouseEnter={this.zoomIn} onMouseLeave={this.zoomOut} onClick={() => this.props.clickCallback({value: label})} >
        <i class={iconClass}></i>
        </div>
        <div style={this.labelStyle}>{label}</div>
      </div>
    );
  }
}

IconTextOptionElement.propTypes = {
  color: PropTypes.string.isRequired,
  iconClass: PropTypes.string.isRequired
};
