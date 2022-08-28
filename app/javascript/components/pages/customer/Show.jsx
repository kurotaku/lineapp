import React, { useContext } from 'react'
import { Container } from '../../uiParts/column/Container';
import { BoxRounded } from '../../uiParts/box/Box';
import { PrimaryLinkBtn } from '../../uiParts/button/Button';
import { CurrentLineAccount } from '../../App'
import { useBarcode } from '@createnextapp/react-barcode'

const Show = () => {
  const currentLineAccount = useContext(CurrentLineAccount);
  console.log(currentLineAccount);

  if(currentLineAccount == []) return(<></>);

  if(currentLineAccount.customer_id){
    return (
      <Container>
        <BoxRounded>
          <p>会員証カード</p>
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
