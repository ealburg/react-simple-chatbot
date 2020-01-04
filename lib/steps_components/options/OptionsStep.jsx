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
    const { value, label, image, iconClass, color, text, hideText } = option;
    const key = `option_${Math.floor(Math.random() * 1000)}`;

    return optionType === 'default' ? (
      <Option key={value} className="rsc-os-option" key={key}>
        <TextOptionElement
          className="rsc-os-option-element"
          style={bubbleOptionStyle}
          user={user}
          text={text}
          label={label}
          value={value}
          hideText={hideText}
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

  renderPlaceHolders = options => {
    const num = Object.keys(options).length;
    const splitNum = 3;

    if (num === splitNum || num % splitNum === 0) return null;

    const diff = num < splitNum ? splitNum - num : splitNum - (num % splitNum);
    if (diff === 0) return null;

    const els = [];
    for (let i = 0; i < diff; i += 1) {
      els.push(
        <Option>
          <div
            style={{
              flex: 1,
              height: 100,
              minWidth: 100,
              width: '100%',
              backgroundColor: 'transparent'
            }}
          />
        </Option>
      );
    }

    return els;
  };

  render() {
    const { step } = this.props;
    const { options } = step;

    const key = `optionstep_${Math.floor(Math.random() * 1000)}`;
    const key2 = `optionstep_${Math.floor(Math.random() * 1000)}`;

    const skipFill = step.fillOptions || false;

    return (
      <OptionsStepContainer className="rsc-os" key={key}>
        <Options
          key={key2}
          className="rsc-os-options"
          style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}
        >
          {Object.keys(options)
            .map(key => options[key])
            .map(this.renderOption)}
          {skipFill && this.renderPlaceHolders(options)}
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
