import React from 'react'
import liff from '@line/liff'
import { useAccountContext } from '../../context/AccountContext'
import { GradContainer } from '../../components/uiParts/column/Container'
import { WhiteLinkBtn } from '../../components/uiParts/button/Button';
import styled from 'styled-components';


const NameWrap = styled.div`
  justify-content: space-between;
  color: white;
  font-weight: bold;
  h1{
    font-size: 1.6rem;
    span{
      font-size: 1.0rem;
      display: inline-block;
      margin-left: 4px;
    }
  }
`

const PointWrap = styled.div`
  text-align: center;
  color: white;
  h2{
    font-size: 46px;
    font-weight: bold;
    span{
      font-size: 1.6rem;
      display: inline-block;
      margin-left: 4px;
    }
  }
`

const Home = () => {
  const { account } = useAccountContext();
  return (
    <GradContainer>
      {(() => {
        if(account.customer){
          return(
            <>
              <NameWrap>
                <h1>{account.customer.display_name}<span>さん</span></h1>
              </NameWrap>
              <PointWrap>
                <h2 className='condensed'>{account.customer.point.toLocaleString()}<span>pt</span></h2>
              </PointWrap>
            </>
          )
        }else{
          return(
            <WhiteLinkBtn to="/customer/search">会員証をお持ちの方</WhiteLinkBtn>
          )
        }
      })()}
      {console.log(account)}
      {/* <button onClick={logout}>ログアウト</button> */}
    </GradContainer>
  )
}
export default Home

const logout = () => {
  liff.logout();
  location.reload();
}

