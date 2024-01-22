import React from 'react'
import styled from 'styled-components'

const ButtonContainer = styled.button`
  border: none;
  background: none;
  padding: 0;
  margin: 0;
  border: 1px solid black;
  border-radius: 8px;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

const Button = ({ children, ...props }) => {
  return <ButtonContainer {...props}>{children}</ButtonContainer>
}

export { Button }
