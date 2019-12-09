import React from 'react';
import { ThemeProvider } from 'styled-components';
import ChatBot from '../../lib/index';

const otherFontTheme = {
  background: '#f5f8fb',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#6e48aa',
  headerFontColor: '#fff',
  headerFontSize: '16px',
  botBubbleColor: '#6E48AA',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a'
};
let counter = 0;
let stepCount = 1;

const optionloop = () => {
  console.log("counter-options", counter);
  if (counter === 0) {
    return [{ value: '1', label: 'finally worked', trigger: triggerloop}];
  } else {
    return [{ value: '1', label: '2nd worked too finally worked', trigger: 'end' }];
  }
};

const messageloop = () => {
  console.log("counter-message", counter);
  if (counter === 0) {
    return 'first question';
  } else {
    return 'second question';
  }
};

const triggerloop = () => {
  console.log("counter-trigger", counter);
  counter++;
  stepCount++;
  return stepCount + '';
}

const steps = [
  { id: 'welcome', message: messageloop, trigger: '1' },
  {
    id: '1',
    options: optionloop
  },
  {id : '2',
  message: messageloop,
trigger: triggerloop},
{id: '3',
options: optionloop,
end: true},
{ id: 'end', message: 'the end', end: true}
];

const ThemedExample = () => (
  <ThemeProvider theme={otherFontTheme}>
    <React.StrictMode>
      <ChatBot steps={steps} />
    </React.StrictMode>
  </ThemeProvider>
);

export default ThemedExample;
