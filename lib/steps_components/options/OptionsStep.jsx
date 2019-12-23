import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Option from './Option';
import OptionElement from './OptionElement';
import Options from './Options';
import OptionsStepContainer from './OptionsStepContainer';
import ImageTextOptionElement from './ImageTextOptionElement';
import IconTextOptionElement from './IconTextOptionElement';

class OptionsStep extends Component {
  onOptionClick = ({ value }) => {
    const { triggerNextStep } = this.props;

    triggerNextStep({ value });
  };

  renderOption = option => {
    const { bubbleOptionStyle, step } = this.props;
    const { user, optionType = 'default' } = step;
    const { value, label, image, iconClass, color } = option;

    return optionType === 'default' ? (
      <Option key={value} className="rsc-os-option">
        <OptionElement
          className="rsc-os-option-element"
          style={bubbleOptionStyle}
          user={user}
          onClick={() => this.onOptionClick({ value })}
        >
          {label}
        </OptionElement>
      </Option>
    ) : optionType === 'image-text-option' ? (
      <Option key={value} className="rsc-os-option">
        <ImageTextOptionElement
          className="rsc-os-option-element"
          style={bubbleOptionStyle}
          user={user}
          label={label}
          image={image}
          clickCallback={this.onOptionClick}
        />
      </Option>
    ) : (
      <IconTextOptionElement
        className="rsc-os-option-element"
        style={bubbleOptionStyle}
        user={user}
        label={label}
        iconClass={iconClass}
        color={color}
        clickCallback={this.onOptionClick}
      />
    );
  };

  render() {
    const { step } = this.props;
    const { options } = step;

    return (
      <OptionsStepContainer className="rsc-os">
        <Options className="rsc-os-options" style={{ display: 'flex' }}>
          {Object.keys(options)
            .map(key => options[key])
            .map(this.renderOption)}
        </Options>
      </OptionsStepContainer>
    );
  }
}

OptionsStep.propTypes = {
  bubbleOptionStyle: PropTypes.objectOf(PropTypes.any).isRequired,
  step: PropTypes.objectOf(PropTypes.any).isRequired,
  triggerNextStep: PropTypes.func.isRequired
};

export default OptionsStep;
