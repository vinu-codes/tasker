import React from 'react'
import styled from 'styled-components'
import { colors } from '@common/Theme'
import { mrFn, mlFn } from '@common/Theme'

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
  outline: none;
  background: white;
  line-height: 21px;
  font-size: 14px;
  color: black;
  &:hover {
    outline: none;
    border: 1px solid black;
    color: black;
  }
  &:focus {
    outline: none;
    border: 1px solid black;
    color: black;
  }
  &.save-button {
    background: ${colors.rust};
    color: white;
    border: 1px solid ${colors.rust};
    flex: 1;
    &:hover {
      background: #c3392c;
      color: white;
    }
  }
  &.cancel-button {
    background: ${colors.lightGrey};
    color: white;
    border: 1px solid ${colors.lightGrey};
    flex: 1;
    &:hover {
      background: rgb(167 166 166);
    }
  }
  &.toggle-edit {
    background: ${colors.rust};
    color: white;
    border: 1px solid ${colors.rust};
    width: 100px;
  }
  &.toggle-cancel {
    background: ${colors.darkGrey};
    color: white;
    border: 1px solid ${colors.darkGrey};
    width: 100px;
  }
  &.completed-button {
    background: ${colors.lightGrey};
    color: white;
    border: 1px solid ${colors.lightGrey};
    flex: 1;
  }
  &.pomodoro-button {
    background: red;
  }
`

const Button = ({ children, ...props }) => {
  return <ButtonContainer {...props}>{children}</ButtonContainer>
}

export { Button }
