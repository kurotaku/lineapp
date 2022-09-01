import React from 'react'
import liff from '@line/liff'
import { useAccountContext } from '../../../context/AccountContext'

const Home = () => {
  const { account } = useAccountContext();

  return (
    <div>
      this is from react.
      {account.name && <p>ようこそ {account.name} さん</p>}
      <button onClick={logout}>ログアウト</button>
    </div>
  )
}
export default Home

const logout = () => {
  liff.logout();
  location.reload();
}

