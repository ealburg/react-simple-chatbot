import React from 'react';
import { ThemeProvider } from 'styled-components';
import ChatBot from '../../lib/index';
import { CustomBotComponent } from './Custom';

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

const steps = [
  { id: 'enter', message: 'step 1', trigger: '2' },
  {
    id: '2',
    component: <CustomBotComponent />,
    waitAction: true,
    trigger: '3'
  },
  { id: '3', message: 'this is the value {previousValue}', trigger: '4' },
  {id: '4',
  options: [{value: 1, label: '1', trigger: '5'}]},
  {id: '5', 
message: "thank you {previousValue}",
end: true}
];

const ThemedExample = () => (
  <ThemeProvider theme={otherFontTheme}>
    <React.StrictMode>
      <ChatBot steps={steps} />
    </React.StrictMode>
  </ThemeProvider>
);

export default ThemedExample;
