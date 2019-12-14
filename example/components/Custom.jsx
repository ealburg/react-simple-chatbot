import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CustomBotComponent extends Component {
  sendOn() {
    const { triggerNextStep } = this.props;
    triggerNextStep({ value: ['this is value', 'boo ya'], sendUserMessage: true });
  }

  render() {
    return (
      <a
        href="#111"
        onClick={() => {
          this.sendOn();
        }}
      >
        Send Me
      </a>
    );
  }
}

CustomBotComponent.propTypes = {
  triggerNextStep: PropTypes.func.isRequired
};
