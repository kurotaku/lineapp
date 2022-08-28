import React, { useState } from 'react'
import styled from 'styled-components'
import IconLink from './IconLink'
import Color from '../../const/Color'

const List = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: start;
  padding: 24px;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: ${Color.BG_COLOR};
`

const Item = styled.li`
  width: 56px;
`

const CameraButton = styled.button`
  display: flex;
  width: 56px;
  height: 56px;
  align-items: center;
  justify-content: center;
  background-color: ${Color.PRIMARY};
  border-radius: 100%;
  text-decoration: none;
  box-shadow: 0 0 8px rgba(0, 0, 0, .15);
  i:before{
    color: white;
    font-size: 34px;
  }
`

const Navigation = () => {
  const handleScan = () => {
    const regexp = new RegExp(/^http/);
    liff.scanCodeV2().then((result) => {
      if(result.value.match(regexp)){
        window.location.href = result.value;
      }else{
        console.log('notUrl', result.value);
      }
    });
  };

  return (
    <List>
      <Item>
        <IconLink iconClassName="icon-home" text="ホーム" linkTo="/" />
      </Item>
      <Item>
        <IconLink iconClassName="icon-invoice" text="クーポン" linkTo="/" />
      </Item>
      <Item>
        <CameraButton onClick={handleScan}>
          <i className='icon-camera' />
        </CameraButton>
      </Item>
      <Item>
        <IconLink iconClassName="icon-calender" text="予約" linkTo="/" />
      </Item>
      <Item>
        <IconLink iconClassName="icon-id" text="会員証" linkTo="/customer/" />
      </Item>
    </List>
  )
}

export default Navigation
