import React from 'react'
import styled from 'styled-components'

const Wrap = styled.section`
  background-color: white;
  border-radius: 16px;
  padding: 20px;
  margin-bottom: 24px;
`
export const BoxRounded = ({children}) => {
  return (
    <Wrap>
      {children}
    </Wrap>
  )
}

const Label = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 16px;
`

export const BoxLabel = ({children}) => {
  return (
    <Label>
      {children}
    </Label>
  )
}
