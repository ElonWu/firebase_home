import React from 'react';
import ReactDOM from 'react-dom';

import Routers from '@/routes';

import { MediaQueryProvider } from '@/hooks/MediaQuery';

import GlobalStyle from './GlobalStyle';

const App = () => {
  return (
    <MediaQueryProvider>
      <GlobalStyle />
      <Routers />
    </MediaQueryProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
