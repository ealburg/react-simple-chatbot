import React, {Component} from 'react';

export class CustomBotComponent extends Component {

    sendOn() {
        const {triggerNextStep} = this.props;
        triggerNextStep({value: ['this is value', 'boo ya'], sendUserMessage: true});
    }
    render() {
        return (<a href={'#111'} onClick={() => {this.sendOn();}}>Send Me</a>)
    }
}
