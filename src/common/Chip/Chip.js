import React from 'react'
import { ChipContainer, ChipGroup, ChipItem } from './Chip.styled'

const Chip = ({ items = [], callback = () => {} }) => {
  const handleSelect = (item) => {
    console.log(item)
  }

  const renderChips = () => {
    if (!items || !items.length) return null
    return items.map((item, index) => (
      <ChipItem onClick={() => handleSelect(item)} key={index}>
        {item.label}
      </ChipItem>
    ))
  }

  return (
    <ChipContainer>
      <ChipGroup>{renderChips()}</ChipGroup>
    </ChipContainer>
  )
}

Chip.defaultProps = {
  callback: () => {},
  items: [{ label: 'Category A', value: 'category-a' }],
}

export { Chip }
