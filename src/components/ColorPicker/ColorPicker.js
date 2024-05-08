import React from 'react'
import styled, { css } from 'styled-components'
import { colors } from '@common/Theme'

const GroupContainer = styled.div`
  background: transparent;
  border-radius: 4px;
  padding: 20px;
  margin-bottom: 16px;
  h4 {
    margin: 0;
    padding: 0;
    color: black;
    font-size: 16px;
    font-weight: normal;
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
    const result = colors.map((x) => (
      <List
        isActive={x === value}
        onClick={() => handleSelect(x)}
        color={x}
      ></List>
    ))
    return result
  }
  return (
    <GroupContainer>
      <h4>Select color</h4>
      <Group>{renderColors()}</Group>
    </GroupContainer>
  )
}

export { ColorPicker }
