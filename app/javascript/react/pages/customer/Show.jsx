import React from 'react';
import { Container } from '../../components/uiParts/column/Container';
import { BoxRounded, BoxLabel } from '../../components/uiParts/box/Box';
import { PrimaryLinkBtn } from '../../components/uiParts/button/Button';
import Barcode from 'react-barcode';
import { useAccountContext } from '../../context/AccountContext';
import styled from 'styled-components';



const PointWrap = styled.div`
  text-align: right;
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

const Show = () => {
  const {account} = useAccountContext();

  if(account.customer){
    return (
      <Container>
        <BoxRounded>
          <BoxLabel>会員証カード</BoxLabel>
          <div style={{textAlign: "center"}}><Barcode value={account.customer.number} /></div>
        </BoxRounded>

        <BoxRounded>
          <BoxLabel>保有ポイント</BoxLabel>
          <PointWrap><h2 className='condensed'>{account.customer.point.toLocaleString()}<span>pt</span></h2></PointWrap>
        </BoxRounded>
      </Container>
    )
  }else{
    return (
      <Container>
        <PrimaryLinkBtn to="search">会員証と連携する</PrimaryLinkBtn>
      </Container>
    )
  }
  
}

export default Show
