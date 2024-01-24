import React from 'react'
import styled, { css } from 'styled-components'

const Group = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
`
const List = styled.li`
  list-style: none;
  padding: 0;
  margin: 0;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  ${(props) =>
    props.color &&
    css`
      background: ${props.color};
    `}
  ${(props) =>
    props.isActive &&
    css`
      border: 2px solid black;
    `}
`

const ColorPicker = ({ colors, callback, value }) => {
  const handleSelect = (x) => {
    callback({ value: x })
  }

  const renderColors = () => {
    const result = colors.map((x) => (
      <List
        isActive={x === value}
        onClick={() => handleSelect(x)}
        color={x}
      ></List>
    ))
    return result
  }
  return <Group>{renderColors()}</Group>
}

export { ColorPicker }
