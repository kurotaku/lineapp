import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from './AppRoutes'
import reset from 'styled-reset'
import { createGlobalStyle } from 'styled-components';
import Color from '../const/Color';
import { AccountProvider } from '../context/AccountContext';

const GlobalStyle = createGlobalStyle`
  ${reset}
  html{
    font-size: 62.5%;
  }

  body{
    font-family: 'Roboto', sans-serif;
    line-height: 1;
    background-color: ${Color.BG_COLOR};
  }

  button{
    background-color: transparent;
    border: none;
    cursor: pointer;
    outline: none;
    padding: 0;
    appearance: none;
  }

  *{
    box-sizing: border-box;
  }
`

const App = () => {
  return(
    <AccountProvider>
      <Router>
        <GlobalStyle />
        <AppRoutes />
      </Router>
    </AccountProvider>
    
  );
}
export default App
