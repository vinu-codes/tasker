import React, { useState } from 'react'
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

const Search = ({ onSearch, items }) => {
  const [value, setValue] = useState('')

  const handleChange = (e) => {
    const { value } = e.target
    setValue(value)

    const filteredItems = items.filter((item) => {
      if (!items || !items.length) return
      item.label.toLowerCase().includes(value.toLowerCase())
    })
    onSearch(filteredItems)
    setValue('')
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
