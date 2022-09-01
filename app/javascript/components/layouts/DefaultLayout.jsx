import React, {useEffect} from 'react'
import liff from '@line/liff';
import axios from 'axios'
import { Outlet } from 'react-router-dom'
import { useAccountContext } from '../../context/AccountContext'
import Navigation from '../uiParts/navigation/Navigation';

const DefaultLayout = () => {
  const { setAccount } = useAccountContext();

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
          setAccount(resp.data);
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

  return (
    <>
      <Outlet />
      <Navigation />
    </>
  )
}

export default DefaultLayout
