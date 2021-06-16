import React from 'react';

import GlobalStyle from '../src/GlobalStyle';

// import { ThemeProvider } from '../src/hooks/Theme';
import { MediaQueryProvider } from '../src/hooks/MediaQuery';

import 'antd/dist/antd.css';

export const decorators = [
  (Story) => (
    <MediaQueryProvider>
      {/* <ThemeProvider> */}
      <GlobalStyle />
      <Story />
      {/* </ThemeProvider> */}
    </MediaQueryProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
