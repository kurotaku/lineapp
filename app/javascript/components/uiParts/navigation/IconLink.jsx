import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const Link = styled(NavLink)`
  text-decoration: none;
  &.active{
    i:before{
      color: #00C74A;
    }
    span{
      color: #131424;
    }
  }
`

const Icon = styled.i`
  font-size: 34px;
  width: 100%;
  display: inline-block;
  text-align: center;
  margin-bottom: 4px;
  &:before{
    color: #CACACA;
  }
`

const Label = styled.span`
  display: inline-block;
  width: 100%;
  text-align: center;
  font-size: 1.2rem;
  font-weight: bold;
  color: #8A8A8A;
`

const IconLink = ({iconClassName, text, linkTo}) => {
  return (
    <Link
      className={(navData) => navData.isActive ? "active" : "" }
      to={linkTo}>
      <Icon className={iconClassName} />
      <Label>{text}</Label>
    </Link>
  )
}

export default IconLink
