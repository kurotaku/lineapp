import React, { useContext } from 'react'
import liff from '@line/liff'
import { CurrentLineAccount } from '../../App'

const Home = () => {
  const currentLineAccount = useContext(CurrentLineAccount);
  return (
    <div>
      this is from react.
      {currentLineAccount.name && <p>ようこそ {currentLineAccount.name} さん</p>}
      <button onClick={logout}>ログアウト</button>
    </div>
  )
}
export default Home

const logout = () => {
  liff.logout();
  location.reload();
}

