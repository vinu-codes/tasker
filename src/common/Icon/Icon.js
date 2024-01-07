import React from 'react'
import {
  UPCHEVRON,
  DOWNCHEVRON,
  CHECKBOX,
  CHECKBOXFILLED,
  CHECKTICK,
  STAR,
  CART,
  DELETE,
} from './icons'
import styled from 'styled-components'

const IconContainer = styled.div`
  width: 10px;
  height: 10px;
`

const matchingIcons = {
  UPCHEVRON,
  DOWNCHEVRON,
  CHECKBOX,
  CHECKBOXFILLED,
  CHECKTICK,
  STAR,
  CART,
  DELETE,
}

const Icon = ({ name }) => {
  const FoundElement = matchingIcons[name]

  return (
    <>
      <FoundElement />
    </>
  )
}

export default Icon
