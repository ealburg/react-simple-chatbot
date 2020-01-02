import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Option from './Option';
import OptionElement from './OptionElement';
import Options from './Options';
import OptionsStepContainer from './OptionsStepContainer';
import ImageTextOptionElement from './ImageTextOptionElement';
import IconTextOptionElement from './IconTextOptionElement';
import TextOptionElement from './textOptionElement';

class OptionsStep extends Component {
  onOptionClick = ({ value }) => {
    const { triggerNextStep } = this.props;

    triggerNextStep({ value });
  };

  renderOption = option => {
    const { bubbleOptionStyle, step } = this.props;
    const { user, optionType = 'default' } = step;
    const { value, label, image, iconClass, color, text, textStyle } = option;
    const key = `option_${Math.floor(Math.random() * 1000)}`;

    return optionType === 'default' ? (
      <Option key={value} className="rsc-os-option" key={key}>
        <TextOptionElement
          className="rsc-os-option-element"
          style={bubbleOptionStyle}
          user={user}
          text={text}
          label={label}
          textStyle={textStyle}
          value={value}
          clickCallback={() => this.onOptionClick({ value })}
        >
          {label}
        </TextOptionElement>
      </Option>
    ) : optionType === 'image-text-option' ? (
      <Option key={value} className="rsc-os-option">
        <ImageTextOptionElement
          className="rsc-os-option-element"
          style={bubbleOptionStyle}
          user={user}
          label={label}
          image={image}
          value={value}
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
        value={value}
        clickCallback={this.onOptionClick}
      />
    );
  };

  render() {
    const { step } = this.props;
    const { options } = step;

    const key = `optionstep_${Math.floor(Math.random() * 1000)}`;
    const key2 = `optionstep_${Math.floor(Math.random() * 1000)}`;
    
    return (
      <OptionsStepContainer className="rsc-os" key={key}>
        <Options key={key2} className="rsc-os-options" style={{ display: 'flex' }}>
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
