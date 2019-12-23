import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

import {
  faCoffee,
  faCog,
  faBolt,
  faSpinner,
  faQuoteLeft,
  faSquare,
  faCheckSquare,
  faSearch
} from '@fortawesome/free-solid-svg-icons';

library.add(fab, faCog, faBolt, faSearch);
export default class IconTextOptionElement extends Component {
  holderStyle = {
    width: 150,
    height: 100,
    overflow: 'hidden',
    borderRadius: 15,
    backgroundColor: 'rgb(20,126,251)',
    marginRight: 5,
    marginBottom: 15
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
    color: 'black',
    paddingTop: 5,
    paddingBottom: 5,
    letterSpacing: 3,
    lineHeight: 1
  };

  constructor(props) {
    super(props);
    const { iconClass, color, label } = props;

    this.childImageStyle = {
      width: '100%',
      height: '35%',
      transition: '0.6s',
      textAlign: 'center',
      paddingTop: 20
    };

    this.state = {
      currentStyle: this.childImageStyle,
      color,
      iconClass,
      label
    };

    this.zoomIn = this.zoomIn.bind(this);
    this.zoomOut = this.zoomOut.bind(this);
  }

  zoomIn() {
    const { currentStyle } = this.state;
    const newObj = { ...currentStyle, transform: 'scale(1.2) translateY(-5px)' };
    this.setState({ currentStyle: newObj });
  }

  zoomOut() {
    this.setState({ currentStyle: this.childImageStyle });
  }

  render() {
    const { currentStyle, label, color, iconClass } = this.state;
    let rotateStyle = {};
    if (iconClass[1] === 'bolt') {
      rotateStyle = { transform: 'rotate(30deg)' };
    }
    return (
      <div style={this.holderStyle}>
        <div
          style={{ ...currentStyle, color, ...rotateStyle }}
          onMouseEnter={this.zoomIn}
          onMouseLeave={this.zoomOut}
          onClick={() => this.props.clickCallback({ value: label })}
        >
          <FontAwesomeIcon icon={iconClass} fixedWidth size="2x" />
        </div>
        <div style={this.labelStyle}>{label}</div>
      </div>
    );
  }
}

IconTextOptionElement.propTypes = {
  color: PropTypes.string.isRequired,
  iconClass: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};
