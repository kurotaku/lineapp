import React from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
  padding: 32px 30px;
`

export const Container = ({children}) => {
  return (
    <Wrap>
      {children}
    </Wrap>
  )
}
