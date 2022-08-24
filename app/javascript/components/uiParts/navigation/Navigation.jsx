import React from 'react'
import styled from 'styled-components'
import IconLink from './IconLink'
import { Link } from 'react-router-dom'

const List = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: start;
  padding: 0 24px;
`

const Item = styled.li`
  width: 56px;
`

const CameraLink = styled(Link)`
  display: flex;
  width: 56px;
  height: 56px;
  align-items: center;
  justify-content: center;
  background-color: #00C44A;
  border-radius: 100%;
  text-decoration: none;
  box-shadow: 0 0 8px rgba(0, 0, 0, .15);
  i:before{
    color: white;
    font-size: 34px;
  }
`

const Navigation = () => {
  return (
    <List>
      <Item>
        <IconLink iconClassName="icon-home" text="ホーム" linkTo="/" />
      </Item>
      <Item>
        <IconLink iconClassName="icon-invoice" text="クーポン" linkTo="/" />
      </Item>
      <Item>
        <CameraLink to="/">
          <i className='icon-camera' />
        </CameraLink>
      </Item>
      <Item>
        <IconLink iconClassName="icon-calender" text="予約" linkTo="/" />
      </Item>
      <Item>
        <IconLink iconClassName="icon-id" text="会員証" linkTo="/customer/connection/new" />
      </Item>
    </List>
  )
}

export default Navigation
