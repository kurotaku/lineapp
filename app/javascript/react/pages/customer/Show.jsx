import React from 'react';
import { Container } from '../../components/uiParts/column/Container';
import { BoxRounded } from '../../components/uiParts/box/Box';
import { PrimaryLinkBtn } from '../../components/uiParts/button/Button';
import Barcode from 'react-barcode';
import { useAccountContext } from '../../context/AccountContext';

const Show = () => {
  const {account} = useAccountContext();

  if(account.customer){
    return (
      <Container>
        <BoxRounded>
          <p>会員証カード</p>
          <div style={{textAlign: "center"}}><Barcode value={account.customer.number} /></div>
        </BoxRounded>

        <BoxRounded>
          <p>保有ポイント</p>
          <div>{account.customer.point.toLocaleString()}pt</div>
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
