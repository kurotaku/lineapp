import React from 'react'
import styled, { createGlobalStyle } from 'styled-components';
import Color from '../../../const/Color';

export const DefaultFormStyle = createGlobalStyle`
  input[type="text"], select{
    border: 1px solid ${Color.BORDER_COLOR};
    border-radius: 12px;
    outline: 0;
    font-size: 1.6rem;
    color: ${Color.TEXT_DARK};
    padding: 20px 16px;
    width: 100%;
    &:focus{
      border: 1px solid ${Color.PRIMARY};
    }
  }
`

const FormGroupWrap = styled.div`
  margin-bottom: 16px;
`

const Label = styled.label`
  font-size: 1.2rem;
  color: ${Color.TEXT_LIGHT};
  display: inline-block;
  line-height: 1;
  margin-bottom: 8px;
  width: 100%;
`

export const FormGroup = ({label, children}) => {
  return (
    <FormGroupWrap>
      {label && <><Label>{label}</Label><br /></>}
      {children}
    </FormGroupWrap>
  )
}

const FieldErrorMessageWrap = styled.p`
  color: ${Color.DANGER};
  font-size: 1.2rem;
  margin-top: 8px;
`

export const FieldErrorMessage = ({children}) => {
  return(
    <FieldErrorMessageWrap>{children}</FieldErrorMessageWrap>
  )
}
