import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from './AppRoutes'
import reset from 'styled-reset'
import { createGlobalStyle } from 'styled-components';
import liff from '@line/liff';
import axios from 'axios'
import Navigation from './Navigation';

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
export const CurrentLineAccount = React.createContext();

const App = () => {
  const [lineAccount, setLineAccount] = useState([]);
  useEffect(() => {
    liff.init({
      liffId: process.env.REACT_APP_LIFF_ID,
      withLoginOnExternalBrowser: true,
    }).then(() => {
      if( liff.isLoggedIn()){
        const idToken = liff.getDecodedIDToken();
  
        var params = {
          line_user_id: idToken.sub,
          name: idToken.name
        }
  
        axios.post('/api/private/line_accounts', params)
        .then(resp => {
          setLineAccount(resp.data);
        })
        .catch(e => {
          console.log(e);
        });

      } else {
        console.log('ログインしてください');
      }
    }).catch((error) => {
      console.log(error);
    });
  }, []);

  return(
    <CurrentLineAccount.Provider value={lineAccount}>
      <Router>
        <GlobalStyle />
        <AppRoutes />
        <Navigation />
      </Router>
    </CurrentLineAccount.Provider>
    
  );
  
}
export default App
