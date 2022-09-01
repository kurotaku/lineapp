import React from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
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
