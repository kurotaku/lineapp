import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Container } from '../../components/uiParts/column/Container'
import { BoxRounded } from '../../components/uiParts/box/Box';
import styled from 'styled-components';

const ContentWrap = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
  line-height: 1.4;
  margin-bottom: 16px;
`

const EndDateWrap = styled.p`
  text-align: right;
  font-size: 1.2rem;
  font-weight: bold;
`

const index = () => {
  const [coupons, setCoupons] = useState([]);

  useEffect(() => {
    axios.get('/api/private/coupons')
    .then((resp) => {
      setCoupons(resp.data);
    })
  }, []);

  return (
    <Container>
      {coupons.map(coupon => {
        return(
          <BoxRounded key={coupon.id}>
            <ContentWrap>{coupon.content}</ContentWrap>
            <EndDateWrap>有効期限：{coupon.display_end_date}まで</EndDateWrap>
          </BoxRounded>
        )
      })}
    </Container>
  )
}

export default index
