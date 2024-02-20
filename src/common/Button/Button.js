import React from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'

const ButtonContainer = styled.button`
  border: none;
  background: none;
  padding: 0;
  margin: 0;
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
  user-select: none;
  border: 1px solid black;
  color: black;
  /* &:hover {
    outline: none;
    border: 1px solid black;
    color: black;
  }
  &:focus {
    outline: none;
    border: 1px solid black;
    color: black;
  } */
`

const pickByRequiredKeys = (props) => {
  const newArray = Object.entries(props)
  console.log(newArray)
  const filterOutFalsyValue = newArray.filter(([_, value]) => {
    return (
      value !== undefined &&
      value !== false &&
      value !== null &&
      value !== '' &&
      value !== 0
    )
  })
  console.log({ filterOutFalsyValue })
}

const Button = ({ children, onClick, className, ...props }) => {
  const kind = pickByRequiredKeys(props)

  return (
    <ButtonContainer onClick={onClick} className={className} {...props}>
      {children}
    </ButtonContainer>
  )
}

Button.propTypes = {
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  save: PropTypes.bool,
  cancel: PropTypes.bool,
}

export { Button }
