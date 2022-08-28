import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Color from '../../../const/Color'

const Btn = styled.button`
  display: inline-block;
  color: white;
  text-align: center;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.4rem;
  border-radius: 10px;
  width: 100%;
  padding: 12px 24px;
  white-space: nowrap;
  border-width: 1px;
  border-style: solid;
  cursor: pointer;
  &:disabled{
    cursor: not-allowed;
  }
`

export const PrimaryBtn = styled(Btn)`
  border-color: ${Color.PRIMARY};
  background-color: ${Color.PRIMARY};
`

export const PrimaryLinkBtn = styled(Btn.withComponent(Link))`
  border-color: ${Color.PRIMARY};
  background-color: ${Color.PRIMARY};
`
export const PrimarySubmit = styled(Btn.withComponent('input'))`
  border-color: ${Color.PRIMARY};
  background-color: ${Color.PRIMARY};
`
