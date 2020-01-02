import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TextOptionElement extends Component {
  holderStyle = {
    width: '100%',
    height: 110,
    overflow: 'hidden',
    borderRadius: 15,
    backgroundColor: 'rgb(20,126,251)',
    marginRight: 5,
    marginBottom: 15,
    cursor: 'pointer',
    margin: 'auto'
  };

  labelStyle = {
    bottom: 0,
    width: '50%',
    fontSize: 15,
    textAlign: 'center',
    height: 20,
    backgroundColor: 'rgb(20,126,251)',
    fontFamily: '"Open Sans", sans-serif',
    color: 'black',
    paddingTop: 5,
    paddingBottom: 5,
    letterSpacing: 3,
    lineHeight: 1,
    margin: 'auto'
  };

  constructor(props) {
    super(props);
    const { color, label, value, text, textStyle } = props;

    this.childImageStyle = {
      width: '100%',
      height: '35%',
      transition: '0.6s',
      textAlign: 'center',
      paddingTop: 15,
      paddingBottom: 5
    };

    this.state = {
      currentStyle: this.childImageStyle,
      color,
      text,
      label,
      value
    };

    this.zoomIn = this.zoomIn.bind(this);
    this.zoomOut = this.zoomOut.bind(this);
  }

  zoomIn() {
    const { currentStyle } = this.state;
    const newObj = { ...currentStyle, transform: `scale(1.2) translateY(-5px)` };
    this.setState({ currentStyle: newObj });
  }

  zoomOut() {
    this.setState({ currentStyle: this.childImageStyle });
  }

  render() {
    const { currentStyle, label, color, text, value, textStyle } = this.state;
    const rotateStyle = {};
    return (
      <div style={this.holderStyle} onClick={() => this.props.clickCallback({ value })}>
        <div
          style={{ ...currentStyle, color, ...rotateStyle }}
          onMouseEnter={this.zoomIn}
          onMouseLeave={this.zoomOut}
        >
          <div style={{color: 'yellow', fontSize: 34,}}>{text}</div>
        </div>
        <div style={{width: '100%', margin: 'auto'}}>
        <div style={this.labelStyle}>{label}</div>
        </div>
        
      </div>
    );
  }
}

TextOptionElement.propTypes = {
  color: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};
