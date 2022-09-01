import React from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from './AppRoutes'
import reset from 'styled-reset'
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  ${reset}
  html{
    font-size: 62.5%;
  }

  body{
    font-family: 'Roboto', sans-serif;
    line-height: 1;
  }

  button{
    background-color: transparent;
    border: none;
    cursor: pointer;
    outline: none;
    padding: 0;
    appearance: none;
  }
`

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <AppRoutes />
    </Router>
  )
}
export default App
