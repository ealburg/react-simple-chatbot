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
  faSearch,
  faUserAlt,
  faPersonBooth,
  faPeopleCarry,
  faDollarSign,
  faFrown
} from '@fortawesome/free-solid-svg-icons';

library.add(fab, faCog, faBolt, faSearch, faUserAlt, faPeopleCarry, faDollarSign, faFrown);
export default class IconTextOptionElement extends Component {
  holderStyle = {
    width: '31%',
    height: 100,
    overflow: 'hidden',
    borderRadius: 15,
    backgroundColor: 'rgb(20,126,251)',
    marginRight: 5,
    marginBottom: 15,
    cursor: 'pointer'
  };

  labelStyle = {
    bottom: 0,
    width: '100%',
    fontSize: 15,
    textAlign: 'center',
    // height: 20,
    backgroundColor: 'rgb(20,126,251)',
    fontFamily: '"Open Sans", sans-serif',
    color: 'black',
    paddingTop: 5,
    paddingBottom: 5,
    letterSpacing: 1,
    lineHeight: '15px'
  };

  constructor(props) {
    super(props);
    const { iconClass, color, label, value } = props;

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
      label,
      value
    };

    this.zoomIn = this.zoomIn.bind(this);
    this.zoomOut = this.zoomOut.bind(this);
  }

  zoomIn() {
    const { currentStyle, iconClass } = this.state;
    let rotate = '';
    if (iconClass[1] === 'bolt') {
      rotate = 'rotate(30deg)';
    }
    const newObj = { ...currentStyle, transform: `scale(1.2) translateY(-5px)` };
    this.setState({ currentStyle: newObj });
  }

  zoomOut() {
    this.setState({ currentStyle: this.childImageStyle });
  }

  render() {
    const { currentStyle, label, color, iconClass, value } = this.state;
    const rotateStyle = {};
    // if (iconClass[1] === 'bolt') {
    //   rotateStyle = { transform: 'rotate(30deg)' };
    // }
    return (
      <div style={this.holderStyle} onClick={() => this.props.clickCallback({ value })}>
        <div
          style={{ ...currentStyle, color, ...rotateStyle }}
          onMouseEnter={this.zoomIn}
          onMouseLeave={this.zoomOut}
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
  iconClass: PropTypes.any.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};
