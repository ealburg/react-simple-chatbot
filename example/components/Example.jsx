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
  { id: 'enter', message: 'step 1', trigger: 'icon-option' },
  {
    id: 'icon-option',
    options: [
      {
        value: 'one',
        label: 'one',
        iconClass: 'fas fa-bolt',
        color: 'yellow',
        trigger: 'image-option'
      }
    ],
    optionType: 'icon-text-option'
  },
  {
    id: 'image-option',
    options: [
      {
        value: 'Thick',
        label: 'Thick',
        trigger: '5',
        image:
          'https://lh5.googleusercontent.com/pJJNyzuAXeWBgoA8BrmNxDkypK8L9qi3eRLMgsBrJtb6o6FETBe7OuL0m4sLkwPplvt3TPPnApDBCd4tQqsKsYE8ofoyi4zANCq9Q5GsV7QAtCp8hYNnzlt95P6JXtmzHLB0CwxbCA'
      },
      {
        value: 'Patchy',
        label: 'Patchy',
        trigger: '5',
        image:
          'https://lh4.googleusercontent.com/V2M7ETzD1Jzkc_VntIl6InW6EuUUI5U9m1KGv32WlXylVj3Jy4egOAGX13Kt5XluMoJbCIDpA0hSa_wGdTj1SXCMvYAtpNB3m6romegpvyFNM_hxj14S6-JGM8j40Q5MI_cA5sJJTA'
      },
      {
        value: 'Thin',
        label: 'Thin',
        trigger: '5',
        image:
          'https://lh5.googleusercontent.com/8PL0b7PEzLKB-MGjo9kpvpcro_GpF6fuGigg3OInkvIDQeh1WPzDfn0BjDv8Zn5DS-R4aVC-3uEwc6c5IU2DQn6jEanQftpJUewGuIeJC0_mOJPEH13f-V8owAlCJs6OCb7WTbx7Bw'
      }
    ],
    optionType: 'image-text-option'
  },
  { id: '5', message: 'thank you {previousValue}', end: true }
];

const ThemedExample = () => (
  <ThemeProvider theme={otherFontTheme}>
    <React.StrictMode>
      <ChatBot steps={steps} />
    </React.StrictMode>
  </ThemeProvider>
);

export default ThemedExample;
