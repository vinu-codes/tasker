import React from 'react'
import styled, { css } from 'styled-components'

const GroupContainer = styled.div`
  h4 {
    margin: 0;
  }
`
const Group = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  padding: 16px 0 16px 0;
`

const List = styled.li`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 38px;
  height: 38px;
  margin-right: 8px;
  border-radius: 8px;
  border: 1px solid black;
  box-shadow: inset 0 0 0 4px white;

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
    const result = colors.map((x, index) => (
      <List
        key={index}
        isActive={x === value}
        onClick={() => handleSelect(x)}
        color={x}
      ></List>
    ))
    return result
  }
  return (
    <GroupContainer>
      <h4>Select category color:</h4>
      <Group>{renderColors()}</Group>
    </GroupContainer>
  )
}

export { ColorPicker }
