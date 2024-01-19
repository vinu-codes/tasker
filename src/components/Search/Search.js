import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const SearchContainer = styled.div``
const SearchInput = styled.input`
  width: 100%;
  outline: none;
  padding: 0;
  margin: 0;
  border: none;
  padding: 12px 0 12px 0;
  border-radius: 8px;
  border: 1px solid black;
`
const filteredItems = (value, items) => {
  if (!items || !items.length) return
  const result = items.filter((item) => {
    return item.label.toLowerCase().includes(value.toLowerCase())
  })
  return result
}

const Search = ({ items, callback }) => {
  const [value, setValue] = useState('')

  useEffect(() => {
    callback({ value: filteredItems(value, items) })
  }, [items])

  const handleChange = (e) => {
    const { value } = e.target
    setValue(value)

    callback({ value: filteredItems(value, items) })
  }

  return (
    <SearchContainer>
      <SearchInput
        name="search"
        placeholder="Seach for tasks..."
        type="text"
        value={value}
        onChange={handleChange}
      />
    </SearchContainer>
  )
}

export { Search }
