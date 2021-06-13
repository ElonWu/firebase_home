import React from 'react';
import { createGlobalStyle } from 'styled-components';

const primaryColor = '#334455';

const GlobalStyle = createGlobalStyle`
      /* ***********
        css reset
      ************ */
      html {
        scroll-behavior: smooth;
      }
      
      body,
      #root {
        height: 100%;
        background: #fff;
      }
      
      *,
      *::before,
      *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      
      body {
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        // font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
        //   Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', Helvetica, Arial,
        //   sans-serif;

        font-family:  "SF Pro SC","SF Pro Text","SF Pro Icons","PingFang SC","Helvetica Neue","Helvetica","Arial",sans-serif;
      }
      
      ul,
      ol, 
      li {
        list-style: none;
      }
      
      canvas {
        display: block;
      }
      
      ul,
      ol,
      li,
      p,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        user-select: none;
        margin: 0;
      }
      
      
      ::-moz-selection {
        color: #fff;
        -webkit-text-fill-color: #fff;
        background: ${primaryColor};
      }
      
      ::selection {
        color: #fff;
        -webkit-text-fill-color: #fff;
        background: ${primaryColor};
      }
      
      /* ***********
          滚动条
      ************ */
      
      *::-webkit-scrollbar {
        width: 2px;
        height: 2px;
      }
      
      /* Track */
      *::-webkit-scrollbar-track {
        background: transparent;
        background: ${primaryColor}11;
        border-radius: 1px;
      }
      
      /* Handle */
      *::-webkit-scrollbar-thumb {
        cursor: pointer;
      
        background: transparent;
        background: ${primaryColor}22;
      }
      
      /* Handle on hover */
      *::-webkit-scrollbar-thumb:hover {
        background: transparent;
        background: ${primaryColor}44;
      }
  `;

export default GlobalStyle;
