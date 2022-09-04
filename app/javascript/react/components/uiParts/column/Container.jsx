import React from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
  padding: 32px 30px;
`

const GradWrap = styled(Wrap)`
  background: linear-gradient(to right, #04C34A, #01CA4D);
`

export const Container = ({children}) => {
  return (
    <Wrap>
      {children}
    </Wrap>
  )
}

export const GradContainer = ({children}) => {
  return (
    <GradWrap>
      {children}
    </GradWrap>
  )
}